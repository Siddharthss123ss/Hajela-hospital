import { NextResponse } from 'next/server';
import db_connect from '@/lib/db';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const AdminUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, default: 'root' }
}, { timestamps: true });

const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', AdminUserSchema);

export async function POST(req: Request) {
  await db_connect();
  try {
    const { email, password, secret_key } = await req.json();

    if (!email || !password || !secret_key) {
      return NextResponse.json({ error: "Required input properties are missing" }, { status: 400 });
    }

    // 1. Environment deployment setup key verify karein
    if (secret_key !== process.env.ADMIN_SETUP_KEY) {
      return NextResponse.json({ error: "Invalid environment setup secret key" }, { status: 401 });
    }

    // 2. Check karein ki koi admin pehle se toh registered nahi hai
    const existingAdmin = await AdminUser.findOne({ role: 'root' });
    if (existingAdmin) {
      return NextResponse.json({ error: "Root root cluster admin already deployed" }, { status: 403 });
    }

    // 3. Password safely hash karein
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. DB mein Admin insert karein
    const newAdmin = await AdminUser.create({
      email,
      password: hashedPassword,
      role: 'root'
    });

    return NextResponse.json({ 
      message: "Root administration initialized successfully", 
      id: newAdmin._id 
    }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: "Deployment sequence failed to commit" }, { status: 500 });
  }
}