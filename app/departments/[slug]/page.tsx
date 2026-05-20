import type { Metadata } from "next";

import { departments } from "@/data/departments";

import Image from "next/image";

type Props = {

  params: Promise<{ slug: string }>;

};

/* DYNAMIC SEO */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const dept = departments.find(
    (item) => item.slug === slug
  );

  if (!dept) {

    return {

      title: "Department Not Found | Hajela Hospital",

    };

  }

  return {

    title: `${dept.title} | Hajela Hospital Bhopal`,

    description: dept.description,

    keywords: [

      dept.title,
      `${dept.title} Bhopal`,
      `Best ${dept.title} in Bhopal`,
      `${dept.title} Hospital Bhopal`,
      `Advanced ${dept.title}`,
      "Hajela Hospital",
      "Best Hospital in Bhopal",
      "Multispeciality Hospital",

    ],

    openGraph: {

      title:
        `${dept.title} | Hajela Hospital Bhopal`,

      description: dept.description,

      images: [

        {
          url: dept.image,
          width: 1200,
          height: 630,
          alt: dept.title,
        },

      ],

    },

  };

}

export default async function DepartmentPage({

  params,

}: {

  params: Promise<{ slug: string }>;

}) {

  const { slug } = await params;

  const dept = departments.find(
    (item) => item.slug === slug
  );

  if (!dept) {

    return (

      <div
        className="
        pt-40

        text-center

        text-3xl

        font-bold
        "
      >
        Department Not Found
      </div>

    );

  }

  return (

    <>

      {/* SCHEMA */}

      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({

            "@context":
              "https://schema.org",

            "@type":
              "MedicalSpecialty",

            name: dept.title,

            description:
              dept.description,

            image: dept.image,

            medicalSpecialty:
              dept.title,

            hospitalAffiliation: {

              "@type":
                "Hospital",

              name:
                "Hajela Hospital",

            },

            areaServed: {

              "@type":
                "City",

              name: "Bhopal",

            },

          }),
        }}
      />

      <main className="bg-slate-50 min-h-screen pt-28">

        {/* HERO */}

        <section className="relative h-[55vh] overflow-hidden">

          <Image
            src={dept.image}

            alt={`${dept.title} at Hajela Hospital Bhopal`}

            fill

            priority

            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div
            className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            text-center

            px-4
            "
          >

            <div>

              <p
                className="
                text-cyan-300

                uppercase

                tracking-[4px]

                font-semibold

                mb-4
                "
              >
                Hajela Hospital Bhopal
              </p>

              <h1
                className="
                text-4xl
                lg:text-6xl

                font-black

                text-white
                "
              >
                {dept.title}
              </h1>

              <p
                className="
                mt-5

                text-slate-200

                max-w-2xl

                mx-auto

                leading-relaxed
                "
              >
                {dept.short}
              </p>

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="py-20">

          <div className="container-custom">

            <div
              className="
              grid
              lg:grid-cols-2

              gap-14

              items-center
              "
            >

              {/* IMAGE */}

              <div
                className="
                relative

                h-[500px]

                overflow-hidden

                rounded-[35px]

                shadow-xl
                "
              >

                <Image
                  src={dept.image}

                  alt={`${dept.title} Department Hajela Hospital`}

                  fill

                  className="object-cover"
                />

              </div>

              {/* TEXT */}

              <div>

                <p
                  className="
                  text-cyan-600

                  uppercase

                  tracking-[3px]

                  font-bold

                  text-sm

                  mb-4
                  "
                >
                  Specialized Department
                </p>

                <h2
                  className="
                  text-4xl

                  font-black

                  text-slate-900

                  leading-tight
                  "
                >
                  {dept.title}
                </h2>

                <p
                  className="
                  mt-6

                  text-slate-600

                  leading-relaxed

                  text-base
                  lg:text-lg
                  "
                >
                  {dept.description}
                </p>

                {/* SERVICES */}

                <div
                  className="
                  mt-10

                  grid
                  sm:grid-cols-2

                  gap-4
                  "
                >

                  {dept.services.map(
                    (service, index) => (

                      <div
                        key={index}

                        className="
                        bg-white

                        rounded-2xl

                        px-5
                        py-4

                        shadow-md

                        border
                        border-slate-100

                        hover:shadow-lg

                        transition-all
                        duration-300
                        "
                      >

                        {service}

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>

  );

}