import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { appointment } from '@/app/api/models/appointment';
import { doctor } from '@/app/api/models/doctor';
import { enquiry } from '@/app/api/models/enquiry';
import { review } from '@/app/api/models/review';

export async function GET() {
  await db_connect();
  try {
    const [total_doctors, pending_appointments, new_enquiries, pending_reviews] = await Promise.all([
      doctor.countDocuments({ is_active: true }),
      appointment.countDocuments({ status: 'pending' }),
      enquiry.countDocuments({ status: 'new' }),
      review.countDocuments({ is_approved: false })
    ]);

    return NextResponse.json({
      doctors: total_doctors,
      appointments: pending_appointments,
      enquiries: new_enquiries,
      reviews: pending_reviews
    });
  } catch (error) {
    return NextResponse.json({ error: "Stats fetch fail ho gaya" }, { status: 500 });
  }
}