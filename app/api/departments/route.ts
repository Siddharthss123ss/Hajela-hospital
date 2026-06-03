import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { department } from '@/app/api/models/department';
import { upload_image, delete_image } from '@/lib/cloudinary';

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET() {
  try {
    await db_connect();
    
    const depts = await department
      .find({})
      .select('-__v') // Exclude version field
      .sort({ order: 1 })
      .lean();

    return NextResponse.json(depts, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('GET Departments Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch departments' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await db_connect();
    
    const body = await req.json();
    const { image, ...rest } = body;

    // Validation
    if (!rest.name || !rest.slug) {
      return NextResponse.json(
        { error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await department.findOne({ slug: rest.slug });
    if (existing) {
      return NextResponse.json(
        { error: 'Department with this slug already exists' },
        { status: 400 }
      );
    }

    let image_data = { url: "", public_id: "" };
    if (image) {
      image_data = await upload_image(image, "departments");
    }

    const new_dept = await department.create({
      ...rest,
      image_url: image_data.url,
      image_id: image_data.public_id
    });

    return NextResponse.json(new_dept, { status: 201 });
    
  } catch (error) {
    console.error('POST Department Error:', error);
    return NextResponse.json(
      { error: 'Department creation failed' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await db_connect();
    
    const body = await req.json();
    const { id, image, ...rest } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'ID required' },
        { status: 400 }
      );
    }

    const current = await department.findById(id);
    if (!current) {
      return NextResponse.json(
        { error: 'Department not found' },
        { status: 404 }
      );
    }

    // Check slug uniqueness (excluding current)
    if (rest.slug && rest.slug !== current.slug) {
      const existing = await department.findOne({ 
        slug: rest.slug, 
        _id: { $ne: id } 
      });
      if (existing) {
        return NextResponse.json(
          { error: 'Department with this slug already exists' },
          { status: 400 }
        );
      }
    }

    let image_data = { 
      url: current.image_url, 
      public_id: current.image_id 
    };
    
    if (image) {
      // Delete old image
      if (current.image_id) {
        await delete_image(current.image_id);
      }
      // Upload new image
      image_data = await upload_image(image, "departments");
    }

    const updated = await department.findByIdAndUpdate(
      id,
      {
        ...rest,
        image_url: image_data.url,
        image_id: image_data.public_id
      },
      { new: true, runValidators: true }
    );

    return NextResponse.json(updated);
    
  } catch (error) {
    console.error('PUT Department Error:', error);
    return NextResponse.json(
      { error: 'Update failed' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await db_connect();
    
    const { id } = await req.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID required' },
        { status: 400 }
      );
    }

    const current = await department.findById(id);
    if (!current) {
      return NextResponse.json(
        { error: 'Department not found' },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary
    if (current.image_id) {
      await delete_image(current.image_id);
    }

    await department.findByIdAndDelete(id);
    
    return NextResponse.json({ 
      success: true,
      message: 'Department deleted successfully'
    });
    
  } catch (error) {
    console.error('DELETE Department Error:', error);
    return NextResponse.json(
      { error: 'Delete failed' },
      { status: 500 }
    );
  }
}