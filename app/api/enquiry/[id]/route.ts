import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { enquiry } from "@/app/api/models/enquiry";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await db_connect();

  try {
    const { id } = await params;

    const body = await req.json();

    const updateData: any = {
      ...body,
    };

    if (body.admin_response) {
      updateData.status = "replied";
      updateData.replied_at = new Date();
    }

    const updated = await enquiry.findByIdAndUpdate(
      id,
      updateData,
      {
        returnDocument: "after",
      }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);

  } catch (error) {
    console.error("PATCH ERROR:", error);

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await db_connect();

  try {
    const { id } = await params;

    const deleted = await enquiry.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Enquiry deleted",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}