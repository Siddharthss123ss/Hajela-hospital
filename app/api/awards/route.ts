import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { Award } from "@/app/api/models/award";
import { upload_image } from "@/lib/cloudinary";

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// 1. GET: Fetch all awards (sorted by order then year)
export async function GET() {
  try {
    await db_connect();

    // 🔴 Sort by order first, then by year
    const awards = await Award.find({})
      .sort({ order: 1, year: -1 })  // order ascending, phir year descending
      .lean();

    return NextResponse.json(awards, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error("GET Awards Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch awards catalog" },
      { status: 500 }
    );
  }
}

// 2. POST: Upload Image to Cloudinary & Save to MongoDB
export async function POST(request: Request) {
  try {
    await db_connect();

    const body = await request.json();
    const { title, description, image, year, category, order } = body;  // 🔴 order add kiya

    // 🔴 Better validation with error messages
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!description) missingFields.push('description');
    if (!image) missingFields.push('image');
    if (!year) missingFields.push('year');
    if (!category) missingFields.push('category');

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // 🔴 Category validation (case insensitive)
    const validCategories = ["trophy award", "certifications"];
    if (!validCategories.includes(category.toLowerCase())) {
      return NextResponse.json(
        { error: "Invalid category. Allowed: 'trophy award', 'certifications'" },
        { status: 400 }
      );
    }

    // 🔴 Year validation
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear + 5) {
      return NextResponse.json(
        { error: `Year must be between 1900 and ${currentYear + 5}` },
        { status: 400 }
      );
    }

    // --- Cloudinary Integration ---
    let uploadedImage;
    try {
      uploadedImage = await upload_image(image, "awards");
      
      if (!uploadedImage?.url || !uploadedImage?.public_id) {
        throw new Error("Invalid upload response");
      }
    } catch (uploadError) {
      console.error("Cloudinary Upload Error:", uploadError);
      return NextResponse.json(
        { error: "Cloudinary media upload failed. Please try again." },
        { status: 500 }
      );
    }

    // 🔴 Create entry in MongoDB with order field
    const newAward = await Award.create({
      title: title.trim(),
      description: description.trim(),
      image_url: uploadedImage.url,
      image_id: uploadedImage.public_id,
      year: Number(year),
      category: category.toLowerCase(),
      order: order !== undefined ? Number(order) : 999,  // 🔴 order add kiya
    });

    return NextResponse.json(newAward, { status: 201 });
    
  } catch (error) {
    console.error("POST Award Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error during transaction" },
      { status: 500 }
    );
  }
}