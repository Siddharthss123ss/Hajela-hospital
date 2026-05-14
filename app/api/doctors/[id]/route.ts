import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { doctor } from '@/app/api/models/doctor';
import { upload_image, delete_image } from '@/lib/cloudinary';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await db_connect();
  try {
    const body = await req.json();
    const existing = await doctor.findById(params.id);
    if (!existing) return NextResponse.json({ error: "Doctor nahi mila" }, { status: 404 });

    let updated_data = { ...body };

    if (body.image && body.image.startsWith('data:image')) {
      if (existing.image_id) await delete_image(existing.image_id); // Purani delete karo
      const uploaded = await upload_image(body.image, "doctors_profiles");
      updated_data.image_url = uploaded.url;
      updated_data.image_id = uploaded.public_id;
    }

    const updated_doctor = await doctor.findByIdAndUpdate(params.id, updated_data, { new: true });
    return NextResponse.json(updated_doctor);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await db_connect();
  try {
    const target = await doctor.findById(params.id);
    if (target?.image_id) await delete_image(target.image_id);
    await doctor.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Doctor record removed" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}