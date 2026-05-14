import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { gallery } from '@/app/api/models/gallery';
import { upload_image } from '@/lib/cloudinary';

export async function GET(req: Request) {
  await db_connect();
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  
  const query = category ? { category } : {};
  const photos = await gallery.find(query).sort({ createdAt: -1 });
  return NextResponse.json(photos);
}

export async function POST(req: Request) {
  await db_connect();
  try {
    const { image, title, category } = await req.json();

    if (!image) return NextResponse.json({ error: "Image is required" }, { status: 400 });

    const uploaded = await upload_image(image, "gallery");
    
    const new_photo = await gallery.create({
      title,
      category,
      image_url: uploaded.url,
      image_id: uploaded.public_id
    });

    return NextResponse.json(new_photo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Gallery upload failed" }, { status: 500 });
  }
}