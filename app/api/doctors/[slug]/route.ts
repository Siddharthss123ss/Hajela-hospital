import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { doctor } from "@/app/api/models/doctor";

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 hour cache

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await db_connect();

    const { slug } = await params;

    // 🔴 Remove console.log in production (ya sirf development mein rakho)
    if (process.env.NODE_ENV === 'development') {
      console.log("Fetching doctor with slug:", slug);
    }

    // 🔴 Validate slug
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: "Invalid doctor slug" },
        { status: 400 }
      );
    }

    // 🔴 .lean() for faster response + select only needed fields
    const doc = await doctor
      .findOne({ slug })
      .select('-__v') // 🔴 Exclude version field
      .lean();

    if (!doc) {
      return NextResponse.json(
        { error: "Doctor not found" },
        { status: 404 }
      );
    }

    // 🔴 Cache headers for Vercel CDN
    return NextResponse.json(doc, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });

  } catch (error) {
    console.error("Doctor API Error:", error);
    return NextResponse.json(
      { error: "Unable to fetch doctor" },
      { status: 500 }
    );
  }
}