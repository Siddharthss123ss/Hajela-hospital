import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import { user } from '@/app/api/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await db_connect();
  try {
    const { email, password, secret_key } = await req.json();

    if (secret_key !== process.env.ADMIN_SETUP_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const hashed_password = await bcrypt.hash(password, 12);
    const new_admin = await user.create({
      email,
      password_hash: hashed_password,
      role: 'admin'
    });

    return NextResponse.json({ message: "Admin created successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Setup failed" }, { status: 500 });
  }
}