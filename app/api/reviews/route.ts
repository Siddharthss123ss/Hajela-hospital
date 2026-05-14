import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { review } from '@/app/api/models/review';
import { review_schema, validate_data } from '@/lib/validations';

export async function POST(req: Request) {
  await db_connect();
  try {
    const body = await req.json();
    if (!validate_data(review_schema, body)) return NextResponse.json({ error: "Invalid data" }, { status: 400 });

    const new_review = await review.create(body);
    return NextResponse.json({ message: "Review sent for approval" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error submitting review" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  await db_connect();
  const { id, is_approved } = await req.json();
  const updated = await review.findByIdAndUpdate(id, { is_approved }, { new: true });
  return NextResponse.json(updated);
}