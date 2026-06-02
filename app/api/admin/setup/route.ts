import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { user as User } from "@/app/api/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ==========================================
// 1. POST: Initial Admin Setup (First Time Only)
// ==========================================
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check karein ki kya koi admin pehle se exists karta hai
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      return NextResponse.json(
        { error: "Admin account already exists. Setup cannot be run again." },
        { status: 403 }
      );
    }

    // Password ko secure tareeqe se hash karein
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Pehla admin create karein
    const newAdmin = await User.create({
      email: email.toLowerCase().trim(),
      password_hash: hashedPassword,
      role: "admin",
      must_change_password: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "First admin account created successfully!",
        admin: { email: newAdmin.email, role: newAdmin.role },
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Admin Setup POST Error:", error);
    return NextResponse.json(
      { error: "Internal server error during setup" },
      { status: 500 }
    );
  }
}

// ==========================================
// 2. PUT: Change Password (Authenticated Admin)
// ==========================================
export async function PUT(req: NextRequest) {
  try {
    await dbConnect();

    // Security check: Cookie se JWT token nikaalein taaki pta chale user logged in hai
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in first." },
        { status: 401 }
      );
    }

    // Token ko verify karein
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return NextResponse.json(
        { error: "JWT secret configuration missing" },
        { status: 500 }
      );
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid or expired session token" },
        { status: 401 }
      );
    }

    // Request body se naya password lein
    const { newPassword } = await req.json();

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Naye password ko hash karein
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // Database me user ka password update karein aur flag false kar dein
    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      {
        password_hash: hashedNewPassword,
        must_change_password: false, // Ab password change ho chuka hai
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: "Admin user not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Password updated successfully. You can now access the dashboard.",
    });

  } catch (error: any) {
    console.error("Admin Setup PUT Error:", error);
    return NextResponse.json(
      { error: "Internal server error while changing password" },
      { status: 500 }
    );
  }
}