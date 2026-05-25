import Link from "next/link";

async function getServices() {

  const res =
    await fetch(

      "http://localhost:3000/api/services",

      {
        cache: "no-store",
      }

    );

  return res.json();

}

export default async function ServicesPage() {

  const services =
    await getServices();

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

        {/* HEADER */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-600

            uppercase

            tracking-[4px]

            font-bold

            text-sm

            mb-4
            "
          >

            Hospital Services

          </p>

          <h1
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-slate-900
            "
          >

            Patient Care

            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >

              {" "}Facilities

            </span>

          </h1>

        </div>

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3

          gap-8
          "
        >

          {services.map((service: any) => (

            <Link
              key={service._id}

              href={`/services/${service.slug}`}

              className="
              group

              overflow-hidden

              rounded-[34px]

              bg-white

              border
              border-slate-200

              shadow-lg

              hover:-translate-y-2

              hover:shadow-2xl

              transition-all
              duration-500
              "
            >

              {/* IMAGE */}

              <div
                className="
                h-64

                overflow-hidden
                "
              >

                <img
                  src={service.image_url}

                  alt={service.name}

                  className="
                  w-full
                  h-full

                  object-cover

                  group-hover:scale-105

                  transition-all
                  duration-700
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <h2
                  className="
                  text-2xl

                  font-black

                  text-slate-900

                  group-hover:text-cyan-600

                  transition-colors
                  duration-300
                  "
                >

                  {service.name}

                </h2>

                <p
                  className="
                  mt-4

                  text-slate-600

                  leading-relaxed

                  line-clamp-4
                  "
                >

                  {service.description}

                </p>

                <div
                  className="
                  mt-6

                  inline-flex

                  items-center

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-700

                  px-5
                  py-3

                  text-white

                  font-semibold
                  "
                >

                  View Details

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );

}