import { NextResponse } from "next/server";

import db_connect from "@/lib/db";

import { gallery } from "@/app/api/models/gallery";

import { delete_image } from "@/lib/cloudinary";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await db_connect();

    const { id } = await params;

    const existingPhoto =
      await gallery.findById(id);

    if (!existingPhoto) {
      return NextResponse.json(
        {
          error: "Image not found",
        },
        {
          status: 404,
        }
      );
    }

    // delete from cloudinary
    if (existingPhoto.image_id) {
      await delete_image(
        existingPhoto.image_id
      );
    }

    // delete from mongodb
    await gallery.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Deleted successfully",
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      {
        error: "Delete failed",
      },
      {
        status: 500,
      }
    );
  }
}