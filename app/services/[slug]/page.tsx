import Image from "next/image";

import { notFound }
from "next/navigation";

import {
  CheckCircle2,
} from "lucide-react";

interface Service {

  _id: string;

  name: string;

  slug: string;

  image_url: string;

  description: string;

  facilities: string[];

}

async function getService(
  slug: string
): Promise<Service | null> {

  try {

    const res =
      await fetch(

        `http://localhost:3000/api/services/${slug}`,

        {
          cache: "no-store",
        }

      );

    if (!res.ok)
      return null;

    const data =
      await res.json();

    return data;

  } catch (error) {

    return null;

  }

}

export default async function ServicePage({

  params,

}: {

  params: Promise<{
    slug: string;
  }>;

}) {

  const { slug } =
    await params;

  const service =
    await getService(slug);

  if (!service)
    notFound();

  return (

    <main
      className="
      min-h-screen

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/30

      pt-32
      pb-24
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        "
      >

        {/* HERO */}

        <div
          className="
          relative

          h-[420px]

          overflow-hidden

          rounded-[40px]

          shadow-2xl
          "
        >

          <Image
            src={service.image_url}
            alt={service.name}
            fill
            className="
            object-cover
            "
          />

          <div
            className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/70
            to-transparent
            "
          ></div>

          <div
            className="
            absolute
            bottom-8
            left-8
            "
          >

            <h1
              className="
              text-4xl
              lg:text-6xl

              font-black

              text-white
              "
            >

              {service.name}

            </h1>

          </div>

        </div>

        {/* CONTENT */}

        <div
          className="
          mt-12

          bg-white

          rounded-[35px]

          p-8

          shadow-lg
          "
        >

          <p
            className="
            text-slate-600

            text-lg

            leading-relaxed
            "
          >

            {service.description}

          </p>

          {/* FACILITIES */}

          <div className="mt-10">

            <h2
              className="
              text-3xl

              font-black

              text-slate-900

              mb-8
              "
            >

              Service Facilities

            </h2>

            <div
              className="
              grid
              md:grid-cols-2

              gap-5
              "
            >

              {service.facilities.map(

                (
                  facility,
                  index
                ) => (

                  <div
                    key={index}

                    className="
                    flex
                    items-start

                    gap-3

                    bg-slate-50

                    p-5

                    rounded-2xl

                    border
                    border-slate-100
                    "
                  >

                    <CheckCircle2
                      className="
                      text-cyan-600

                      mt-0.5

                      flex-shrink-0
                      "
                      size={20}
                    />

                    <p
                      className="
                      text-slate-700

                      font-medium
                      "
                    >

                      {facility}

                    </p>

                  </div>

                )

              )}

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}