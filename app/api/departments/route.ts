import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { department } from '@/app/api/models/department';
import { upload_image, delete_image } from '@/lib/cloudinary';

export async function GET() {
  await db_connect();

  const depts = await department
    .find({})
    .sort({ order: 1 });

  return NextResponse.json(depts);
}

export async function POST(req: Request) {
  await db_connect();
  try {
    const body = await req.json();
    const { image, ...rest } = body;

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
    return NextResponse.json({ error: "Department creation failed" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  await db_connect();
  try {
    const body = await req.json();
    const { id, image, ...rest } = body;

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const current = await department.findById(id);
    if (!current) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    let image_data = { url: current.image_url, public_id: current.image_id };
    if (image) {
      if (current.image_id) {
        await delete_image(current.image_id);
      }
      image_data = await upload_image(image, "departments");
    }

    const updated = await department.findByIdAndUpdate(
      id,
      {
        ...rest,
        image_url: image_data.url,
        image_id: image_data.public_id
      },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  await db_connect();
  try {
    const { id } = await req.json();
    
    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const current = await department.findById(id);
    if (!current) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (current.image_id) {
      await delete_image(current.image_id);
    }

    await department.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}