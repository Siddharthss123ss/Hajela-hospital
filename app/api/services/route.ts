import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { service } from '@/app/api/models/service';
import { upload_image } from '@/lib/cloudinary';

export async function GET() {
  await db_connect();
  const services = await service.find({}).sort({ is_featured: -1 });
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  await db_connect();
  try {
    const body = await req.json();
    const { image, ...rest } = body;

    let image_data = { url: "", public_id: "" };
    if (image) {
      image_data = await upload_image(image, "services");
    }

    const new_service = await service.create({
      ...rest,
      image_url: image_data.url,
      image_id: image_data.public_id
    });

    return NextResponse.json(new_service, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Service error" }, { status: 500 });
  }
}