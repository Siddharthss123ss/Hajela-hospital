import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { department } from '@/app/api/models/department';
import { upload_image } from '@/lib/cloudinary';

export async function GET() {
  await db_connect();
  const depts = await department.find({});
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