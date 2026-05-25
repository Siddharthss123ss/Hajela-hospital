import { NextResponse }
from "next/server";

import db_connect
from "@/lib/db";

import { service }
from "@/app/api/models/service";

export async function GET() {

  await db_connect();

  try {

    const services =
      await service.find({});

    return NextResponse.json(
      services
    );

  } catch (error) {

    return NextResponse.json(

      {
        error:
          "Unable to fetch services",
      },

      {
        status: 500,
      }

    );

  }

}