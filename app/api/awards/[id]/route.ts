import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { Award } from "@/app/api/models/award";
import { upload_image, delete_image } from "@/lib/cloudinary"; // Dono functions load kiye

interface IParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: Request, { params }: IParams) {
  await db_connect();

  const { id } = await params;

  try {
    const body = await request.json();
    const { title, description, image, year, category } = body;

    // Pehle existing award fetch karo taaki purani image_id mil sake
    const existingAward = await Award.findById(id);
    if (!existingAward) {
      return NextResponse.json({ error: "Award entry not found" }, { status: 404 });
    }

    let updatedImageData = {
      image_url: existingAward.image_url,
      image_id: existingAward.image_id
    };

    // Agar frontend se nayi image stream aayi h
    if (image && image.startsWith("data:image")) {
      try {
        // 1. Purani image Cloudinary se udao
        if (existingAward.image_id) {
          await delete_image(existingAward.image_id);
        }
        // 2. Nayi image upload karo
        const uploadResult = await upload_image(image, "awards");
        updatedImageData.image_url = uploadResult.url;
        updatedImageData.image_id = uploadResult.public_id;
      } catch (err) {
        return NextResponse.json({ error: "Failed to cycle image asset on cloud" }, { status: 500 });
      }
    }

    // DB Update parameters execution
    const updatedAward = await Award.findByIdAndUpdate(
      id,
      {
        title,
        description,
        year,
        category,
        image_url: updatedImageData.image_url,
        image_id: updatedImageData.image_id
      },
      { new: true, runValidators: true }
    );

    return NextResponse.json(updatedAward, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to modify record" }, { status: 500 });
  }
}

// 2. DELETE: Removes completely from MongoDB AND Cloudinary Cloud storage
export async function DELETE(request: Request, { params }: IParams) {
  await db_connect();

  const { id } = await params;

  try {
    const targetAward = await Award.findById(id);
    if (!targetAward) {
      return NextResponse.json({ error: "Record already absent" }, { status: 404 });
    }

    // 1. Pehle Cloudinary se file completely destroy karo safely
    if (targetAward.image_id) {
      await delete_image(targetAward.image_id);
    }

    // 2. Fir MongoDB se data row saaf karo
    await Award.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Award and Cloudinary Asset sync-deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to execute destruction pipeline" }, { status: 500 });
  }
}