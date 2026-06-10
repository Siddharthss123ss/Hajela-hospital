import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { doctor } from "@/app/api/models/doctor";

export const dynamic = 'force-dynamic';

// GET single doctor
export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await db_connect();
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
    }

    const doc = await doctor.findOne({ slug }).select('-__v').lean();

    if (!doc) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }

    return NextResponse.json(doc);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Unable to fetch doctor" }, { status: 500 });
  }
}

// 🔴 DELETE API — YEH CHAHIYE
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await db_connect();
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug required" }, { status: 400 });
    }

    const existingDoctor = await doctor.findOne({ slug });

    if (!existingDoctor) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }

    await doctor.deleteOne({ slug });

    return NextResponse.json({ 
      success: true, 
      message: "Doctor deleted successfully" 
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: "Failed to delete doctor" }, { status: 500 });
  }
}

// PUT API — Update ke liye
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await db_connect();
    const { slug } = await params;
    const body = await req.json();

    if (!slug) {
      return NextResponse.json({ error: "Slug required" }, { status: 400 });
    }

    const updatedDoctor = await doctor.findOneAndUpdate(
      { slug },
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedDoctor) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }

    return NextResponse.json(updatedDoctor);
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: "Failed to update doctor" }, { status: 500 });
  }
}