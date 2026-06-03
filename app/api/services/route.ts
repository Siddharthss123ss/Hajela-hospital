import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { service } from "@/app/api/models/service";

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 hour cache

export async function GET() {
  try {
    await db_connect();

    // 🔴 .lean() for faster response (2-3x faster)
    // 🔴 sort by order for consistent display
    const services = await service
      .find({})
      .sort({ order: 1, createdAt: -1 })
      .lean();

    // 🔴 Cache headers for Vercel CDN
    return NextResponse.json(services, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });

  } catch (error) {
    console.error("GET Services Error:", error); // 🔴 Log for debugging
    return NextResponse.json(
      { error: "Unable to fetch services" },
      { status: 500 }
    );
  }
}