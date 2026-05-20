import { departments } from "@/data/departments";

import Image from "next/image";

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
      <div className="pt-40 text-center">
        Department Not Found
      </div>
    );

  }

  return (

    <main className="bg-slate-50 min-h-screen pt-28">

      {/* HERO */}

      <section className="relative h-[55vh] overflow-hidden">

        <Image
          src={dept.image}
          alt={dept.title}
          fill
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
              "
            >

              <Image
                src={dept.image}
                alt={dept.title}
                fill
                className="object-cover"
              />

            </div>

            {/* TEXT */}

            <div>

              <h2
                className="
                text-4xl

                font-black

                text-slate-900
                "
              >
                {dept.title}
              </h2>

              <p
                className="
                mt-6

                text-slate-600

                leading-relaxed
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

                {dept.services.map((service, index) => (

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
                    "
                  >

                    {service}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}