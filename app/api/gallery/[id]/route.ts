import { NextResponse } from "next/server";

import db_connect from "@/lib/db";
import { Gallery } from "@/app/api/models/gallery";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await db_connect();

    const { id } = await params;

    const deleted = await Gallery.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Deleted successfully",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}