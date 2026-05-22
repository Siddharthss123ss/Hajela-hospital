import { NextResponse } from "next/server";

import db_connect from "@/lib/db";

import { doctor } from "@/app/api/models/doctor";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {

  await db_connect();

  try {

    const { slug } =
      await params;

    console.log(slug);

    const doc =
      await doctor.findOne({
        slug: slug
      });

    if (!doc) {

      return NextResponse.json(
        { error: "Doctor not found" },
        { status: 404 }
      );

    }

    return NextResponse.json(
      doc,
      { status: 200 }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "unable to fetch" },
      { status: 500 }
    );

  }

}