import { NextResponse } from "next/server";

import db_connect from "@/lib/db";
import { gallery } from "@/app/api/models/gallery";

import { upload_image } from "@/lib/cloudinary";

export async function GET(req: Request) {
  try {
    await db_connect();

    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");

    const query =
      category && category !== "all"
        ? { category }
        : {};

    const photos = await gallery
      .find(query)
      .sort({ createdAt: -1 });

    return NextResponse.json(photos, {
      status: 200,
    });

  } catch (error) {
    console.error("GET GALLERY ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch gallery",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    await db_connect();

    const { image, title, category } =
      await req.json();

    if (!image) {
      return NextResponse.json(
        {
          error: "Image is required",
        },
        {
          status: 400,
        }
      );
    }

    const uploaded = await upload_image(
      image,
      "gallery"
    );

    const newPhoto = await gallery.create({
      title,
      category,
      image_url: uploaded.url,
      image_id: uploaded.public_id,
    });

    return NextResponse.json(newPhoto, {
      status: 201,
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        error: "Gallery upload failed",
      },
      {
        status: 500,
      }
    );
  }
}