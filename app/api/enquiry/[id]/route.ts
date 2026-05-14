import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { enquiry } from '@/app/api/models/enquiry';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  await db_connect();
  try {
    const { status } = await req.json();
    const updated = await enquiry.findByIdAndUpdate(params.id, { status }, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await db_connect();
  try {
    await enquiry.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Enquiry deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}