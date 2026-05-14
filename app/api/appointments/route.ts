import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { appointment } from '@/app/api/models/appointment';
import { appointment_schema, validate_data } from '@/lib/validations';

export async function GET() {
  await db_connect();
  const list = await appointment.find({}).populate('doctor_id dept_id').sort({ createdAt: -1 });
  return NextResponse.json(list);
}

export async function POST(req: Request) {
  await db_connect();
  try {
    const body = await req.json();

    if (!validate_data(appointment_schema, body)) {
      return NextResponse.json({ error: "Form sahi se bharein" }, { status: 400 });
    }

    const new_booking = await appointment.create(body);
    return NextResponse.json(new_booking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Booking failed" }, { status: 500 });
  }
}