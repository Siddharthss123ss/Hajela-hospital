import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { doctor } from "../models/doctor";

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 hour cache

export async function GET() {
  try {
    await db_connect();

    // 🔴 .lean() for faster response (2-3x faster)
    // 🔴 sort by order for consistent display
    // 🔴 select only needed fields (exclude __v, image_id if not needed)
    const doctors = await doctor
      .find({})
      .select('-__v') // 🔴 Exclude version field
      .sort({ order: 1, name: 1 })
      .lean();

    // 🔴 Cache headers for Vercel CDN
    return NextResponse.json(doctors, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });

  } catch (error) {
    console.error("Doctors API Error:", error);
    return NextResponse.json(
      { error: "Unable to fetch doctors" },
      { status: 500 }
    );
  }
}