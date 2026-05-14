import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { doctor } from '../models/doctor';
import { upload_image } from '@/lib/cloudinary';
import { doctor_schema, validate_data } from '@/lib/validations';

export async function GET() {
  await db_connect();
  try {
    const doctors = await doctor.find({ is_active: true }).populate('dept_id');
    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Doctors fetch nahi ho paye" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await db_connect();
  try {
    const body = await req.json();
    const { image, ...rest } = body;

    if (!validate_data(doctor_schema, rest)) {
      return NextResponse.json({ error: "Data validation failed" }, { status: 400 });
    }

    let image_data = { url: "", public_id: "" };
    if (image) {
      image_data = await upload_image(image, "doctors_profiles");
    }

    const new_doctor = await doctor.create({
      ...rest,
      image_url: image_data.url,
      image_id: image_data.public_id
    });

    return NextResponse.json(new_doctor, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}