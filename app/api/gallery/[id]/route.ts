import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { gallery } from '@/app/api/models/gallery';
import { delete_image } from '@/lib/cloudinary';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await db_connect();
  try {
    const item = await gallery.findById(params.id);
    if (item?.image_id) await delete_image(item.image_id);
    await gallery.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Photo deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}