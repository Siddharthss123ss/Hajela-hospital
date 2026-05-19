// app/doctors/[slug]/page.tsx

import { doctors } from "@/data/doctors";

import Image from "next/image";

export default async function DoctorPage({

  params,

}: {

  params: Promise<{ slug: string }>;

}) {

  const { slug } = await params;

  const doctor = doctors.find(
    (item) => item.slug === slug
  );

  if (!doctor) {

    return (

      <div
        className="
        pt-40

        text-center

        text-3xl

        font-bold
        "
      >
        Doctor Not Found
      </div>

    );

  }

  return (

    <main
      className="
      bg-slate-50

      min-h-screen

      pt-28
      pb-24
      "
    >

      {/* HERO */}

      <section className="container-custom">

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
  overflow-hidden

  rounded-[40px]

  bg-slate-100
  "
>

  <img
    src={doctor.image}
    alt={doctor.name}

    className="
    w-full

    h-[650px]

    object-cover
    object-top
    "
  />

</div>

          {/* CONTENT */}

          <div>

            <p
              className="
              text-cyan-600

              font-bold

              uppercase

              tracking-[3px]
              "
            >
              Hajela Hospital Specialist
            </p>

            <h1
              className="
              mt-4

              text-4xl
              lg:text-6xl

              font-black

              text-slate-900
              "
            >
              {doctor.name}
            </h1>

            <p
              className="
              mt-4

              text-cyan-700

              font-semibold

              text-xl
              "
            >
              {doctor.role}
            </p>

            {/* ABOUT */}

            <p
              className="
              mt-6

              text-slate-600

              leading-relaxed

              text-base
              lg:text-lg
              "
            >
              {doctor.about}
            </p>

            {/* DETAILS */}

            <div className="mt-8 space-y-4">

              <div
                className="
                bg-white

                rounded-2xl

                p-5

                shadow-sm
                "
              >

                <span className="font-bold">
                  Qualification:
                </span>{" "}

                {doctor.degree}

              </div>

              <div
                className="
                bg-white

                rounded-2xl

                p-5

                shadow-sm
                "
              >

                <span className="font-bold">
                  Experience:
                </span>{" "}

                {doctor.experience}

              </div>

            </div>

            {/* EXPERTISE */}

            <div className="mt-10">

              <h3
                className="
                text-2xl

                font-black

                text-slate-900
                "
              >
                Areas of Expertise
              </h3>

              <div
                className="
                mt-6

                grid
                sm:grid-cols-2

                gap-4
                "
              >

                {doctor.expertise.map((item, index) => (

                  <div
                    key={index}

                    className="
                    bg-white

                    rounded-2xl

                    px-5
                    py-4

                    shadow-sm

                    border
                    border-slate-100
                    "
                  >

                    {item}

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