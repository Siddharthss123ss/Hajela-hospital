"use server"
import { NextRequest, NextResponse } from "next/server";
import  dbConnect  from "@/lib/db";
import { user as User } from "@/app/api/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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


    const foundUser = await User.findOne({ email: email.toLowerCase().trim() });

    if (!foundUser) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }


    const isPasswordMatch = await bcrypt.compare(password, foundUser.password_hash);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }


    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      console.error("JWT_SECRET is missing in environment variables!");
      return NextResponse.json(
        { error: "Internal server configuration error" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      {
        userId: foundUser._id,
        email: foundUser.email,
        role: foundUser.role,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );


    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      must_change_password: foundUser.must_change_password,
    });


    response.cookies.set("admin_token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;

  } catch (error: any) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}