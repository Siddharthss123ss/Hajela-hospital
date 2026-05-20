import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db_connect from "@/lib/db";

import { user } from "@/app/api/models/user";

export async function POST(req: NextRequest) {
  try {
    await db_connect();

    const { email, password } = await req.json();

    // default admin init
    let existingAdmin = await user.findOne({
      email: "admin@hajelahospital.com",
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(
        "admin123",
        10
      );

      existingAdmin = await user.create({
        email: "admin@hajelahospital.com",
        password_hash: hashedPassword,
        role: "admin",
        must_change_password: true,
      });
    }

    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      foundUser.password_hash
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        id: foundUser._id,
        role: foundUser.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json({
      success: true,
      must_change_password:
        foundUser.must_change_password,
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Login failed",
      },
      {
        status: 500,
      }
    );
  }
}