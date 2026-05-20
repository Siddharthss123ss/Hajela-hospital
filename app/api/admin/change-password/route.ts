import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db_connect from "@/lib/db";

import { user } from "@/app/api/models/user";

export async function POST(req: NextRequest) {
  try {
    await db_connect();

    const token =
      req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as {
      id: string;
    };

    const {
      old_password,
      new_password,
    } = await req.json();

    if (!old_password || !new_password) {
      return NextResponse.json(
        {
          error:
            "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    if (new_password.length < 6) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 6 characters",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser =
      await user.findById(decoded.id);

    if (!existingUser) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isOldPasswordCorrect =
      await bcrypt.compare(
        old_password,
        existingUser.password_hash
      );

    if (!isOldPasswordCorrect) {
      return NextResponse.json(
        {
          error:
            "Old password is incorrect",
        },
        {
          status: 401,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        new_password,
        10
      );

    await user.findByIdAndUpdate(
      decoded.id,
      {
        password_hash:
          hashedPassword,

        must_change_password:
          false,
      }
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Password update failed",
      },
      {
        status: 500,
      }
    );
  }
}