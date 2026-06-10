import { NextResponse } from "next/server";
import db_connect from "@/lib/db";
import { doctor } from "../models/doctor";

// 🔴 Vercel caching ke liye
export const dynamic = 'force-dynamic';
export const revalidate = 3600;

// 🔴 GET — Sabhi doctors list ke liye
export async function GET() {
  try {
    await db_connect();

    const doctors = await doctor
      .find({})
      .select('-__v')
      .sort({ order: 1, name: 1 })
      .lean();

    return NextResponse.json(doctors, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error("Doctors API Error:", error);
    return NextResponse.json(
      { error: "Unable to fetch doctors" },
      { status: 500 }
    );
  }
}

// 🔴 POST — Naya doctor add karne ke liye (YEH ADD KARO)
export async function POST(request: Request) {
  try {
    await db_connect();
    const body = await request.json();
    
    const { name, slug, role, degree, experience, about, image_url, expertise, department, opd_timing, appointment_number } = body;

    // Validation
    if (!name || !slug || !role) {
      return NextResponse.json(
        { error: "Name, slug and role are required" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingDoctor = await doctor.findOne({ slug });
    if (existingDoctor) {
      return NextResponse.json(
        { error: "Doctor with this slug already exists" },
        { status: 400 }
      );
    }

    // Create new doctor
    const newDoctor = await doctor.create({
      name,
      slug,
      role,
      degree: degree || "",
      experience: experience || "",
      about: about || "",
      image_url: image_url || "",
      expertise: expertise || [],
      department: department || "",
      opd_timing: opd_timing || "",
      appointment_number: appointment_number || "",
      order: 999, // Default order (last mein aayega)
    });

    return NextResponse.json(newDoctor, { status: 201 });
  } catch (error) {
    console.error("POST Doctor Error:", error);
    return NextResponse.json(
      { error: "Failed to create doctor" },
      { status: 500 }
    );
  }
}