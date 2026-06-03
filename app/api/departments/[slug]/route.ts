import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { department } from "@/app/api/models/department";

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

    // 🔴 Slug validate
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: "Invalid department slug" },
        { status: 400 }
      );
    }

    // 🔴 .lean() + select only needed fields (faster response)
    const dept = await department
      .findOne({ slug })
      .select('-__v') // 🔴 Exclude version field
      .lean();

    if (!dept) {
      return NextResponse.json(
        { error: "Department not found" },
        { status: 404 }
      );
    }

    // 🔴 Cache headers for faster loading
    return NextResponse.json(dept, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });

  } catch (error) {
    console.error("Department API Error:", error);
    
    return NextResponse.json(
      { error: "Unable to fetch department" },
      { status: 500 }
    );
  }
}