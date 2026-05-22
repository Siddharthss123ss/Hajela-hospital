import { NextResponse }
from "next/server";

import db_connect
from "@/lib/db";

import { doctor }
from "../models/doctor";

export async function GET() {

  await db_connect();

  try {

    const doctors =
      await doctor.find({});

    return NextResponse.json(
      doctors,
      { status: 200 }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        error:
          "unable to fetch"
      },

      {
        status: 500
      }

    );

  }

}