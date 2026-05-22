import { NextResponse } from 'next/server';

import db_connect from '@/lib/db';

import { appointment } from '@/app/api/models/appointment';

export async function GET() {

  await db_connect();

  const list =
    await appointment
      .find({})
      .populate('doctor_id dept_id')
      .sort({ createdAt: -1 });

  return NextResponse.json(list);

}

export async function POST(req: Request) {

  await db_connect();

  try {

    const body =
      await req.json();

    const new_booking =
      await appointment.create(body);

    return NextResponse.json(
      new_booking,
      { status: 201 }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "booking failed" },
      { status: 500 }
    );

  }

}