import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { service } from "@/app/api/models/service";

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 hour cache

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  }
) {
  try {
    await db_connect();

    const { slug } = await params;

    // 🔴 Validate slug
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: "Invalid service slug" },
        { status: 400 }
      );
    }

    // 🔴 .lean() for faster response (2-3x faster)
    const item = await service.findOne({ slug }).lean();

    if (!item) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    // 🔴 Cache headers for Vercel CDN
    return NextResponse.json(item, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });

  } catch (error) {
    console.error("GET Service Error:", error); // 🔴 Log for debugging
    return NextResponse.json(
      { error: "Unable to fetch service" },
      { status: 500 }
    );
  }
}