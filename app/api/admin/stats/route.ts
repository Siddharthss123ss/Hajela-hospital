import { NextResponse } from "next/server";

import db_connect from "@/lib/db";

import { appointment } from "@/app/api/models/appointment";
import { doctor } from "@/app/api/models/doctor";
import { enquiry } from "@/app/api/models/enquiry";
import { review } from "@/app/api/models/review";

export async function GET() {
  try {
    await db_connect();

    const [
      totalDoctors,
      totalAppointments,
      totalEnquiries,
      totalReviews,
    ] = await Promise.all([
      doctor.countDocuments(),
      appointment.countDocuments(),
      enquiry.countDocuments(),
      review.countDocuments(),
    ]);

    return NextResponse.json(
      {
        doctors: totalDoctors,
        appointments: totalAppointments,
        enquiries: totalEnquiries,
        reviews: totalReviews,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Dashboard Stats Error:", error);

    return NextResponse.json(
      {
        error: "Failed to load dashboard statistics",
      },
      { status: 500 }
    );
  }
}