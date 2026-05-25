import { NextResponse }
from "next/server";

import db_connect
from "@/lib/db";

import { department }
from "@/app/api/models/department";

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

    const dept =
      await department.findOne({
        slug,
      });

    if (!dept) {

      return NextResponse.json(

        {
          error:
            "Department not found",
        },

        {
          status: 404,
        }

      );

    }

    return NextResponse.json(
      dept
    );

  } catch (error) {

    return NextResponse.json(

      {
        error:
          "Unable to fetch department",
      },

      {
        status: 500,
      }

    );

  }

}