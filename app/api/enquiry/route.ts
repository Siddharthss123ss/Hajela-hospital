import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { enquiry } from '@/app/api/models/enquiry';

export async function GET() {
  await db_connect();
  try {
    const enquiries = await enquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json(enquiries);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await db_connect();
  try {
    const body = await req.json();
    
    if (!body.full_name || !body.phone || !body.message) {
      return NextResponse.json({ error: "Zaroori fields missing hain" }, { status: 400 });
    }

    const new_enquiry = await enquiry.create(body);
    return NextResponse.json({ message: "Inquiry submitted successfully", id: new_enquiry._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Inquiry send nahi ho payi" }, { status: 500 });
  }
}