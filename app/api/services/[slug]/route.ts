import { NextResponse }
from "next/server";

import db_connect
from "@/lib/db";

import { service }
from "@/app/api/models/service";

export async function GET(

  req: Request,

  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  }

) {

  await db_connect();

  try {

    const { slug } =
      await params;

    const item =
      await service.findOne({
        slug,
      });

    if (!item) {

      return NextResponse.json(

        {
          error:
            "Service not found",
        },

        {
          status: 404,
        }

      );

    }

    return NextResponse.json(
      item
    );

  } catch (error) {

    return NextResponse.json(

      {
        error:
          "Unable to fetch service",
      },

      {
        status: 500,
      }

    );

  }

}