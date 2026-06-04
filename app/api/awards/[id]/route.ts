import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { Award } from "@/app/api/models/award";
import { delete_image } from "@/lib/cloudinary";

export const dynamic = 'force-dynamic';

// 🔴 GET by ID (already hoga)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await db_connect();
    const { id } = await params;
    const award = await Award.findById(id).lean();
    
    if (!award) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    
    return NextResponse.json(award);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// 🔴 DELETE — YEH ADD KARO
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await db_connect();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const award = await Award.findById(id);
    if (!award) {
      return NextResponse.json({ error: "Award not found" }, { status: 404 });
    }

    // Cloudinary delete (fail ho toh bhi continue)
    if (award.image_id) {
      try {
        await delete_image(award.image_id);
      } catch (cloudError) {
        console.error("Cloudinary delete failed:", cloudError);
      }
    }

    // Database delete
    await Award.findByIdAndDelete(id);

    return NextResponse.json({ 
      success: true, 
      message: "Award deleted successfully" 
    });
    
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}