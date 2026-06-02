import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { Award } from "@/app/api/models/award";
import { upload_image } from "@/lib/cloudinary"; // Aapka helper function

// 1. GET: Fetch all awards
export async function GET() {
  await db_connect();

  try {
    const awards = await Award.find({}).sort({ year: -1 });
    return NextResponse.json(awards, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch awards catalog" },
      { status: 500 }
    );
  }
}

// 2. POST: Upload Image to Cloudinary & Save to MongoDB
export async function POST(request: Request) {
  await db_connect();

  try {
    const body = await request.json();
    const { title, description, image, year, category } = body; 
    // frontend se raw 'image' string (base64) aayegi

    // Basic fields validation
    if (!title || !description || !image || !year || !category) {
      return NextResponse.json(
        { error: "All fields including image are strictly required" },
        { status: 400 }
      );
    }

    if (!["trophy award", "certifications"].includes(category)) {
      return NextResponse.json(
        { error: "Invalid category code matched" },
        { status: 400 }
      );
    }

    // --- Cloudinary Integration Here ---
    let uploadedImage;
    try {
      // file string aur folder name pass kiya
      uploadedImage = await upload_image(image, "awards"); 
    } catch (uploadError) {
      return NextResponse.json(
        { error: "Cloudinary media upload failed" },
        { status: 500 }
      );
    }

    // Create entry in MongoDB using Cloudinary response
    const newAward = await Award.create({
      title,
      description,
      image_url: uploadedImage.url,       // secure_url save hua
      image_id: uploadedImage.public_id,  // public_id save hua delete karne ke liye
      year,
      category,
    });

    return NextResponse.json(newAward, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error during transaction" },
      { status: 500 }
    );
  }
}