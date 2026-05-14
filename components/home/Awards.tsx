"use client";

import Image from "next/image";
import Link from "next/link";

const featuredAwards = [
  {
    title: "Oscar Award For Best Hospital",
    subtitle: "Six Sigma Healthcare Excellence",
    image: "/awards/oscar.jpg",
  },

  {
    title: "Kayastha Leadership Award",
    subtitle: "Presented with Vishwas Sarang",
    image: "/awards/KAYASTHA.jpg",
  },

  {
    title: "NABH Certification Ceremony",
    subtitle: "Quality & Patient Safety Recognition",
    image: "/awards/nabh.jpg",
  },

  {
    title: "FMPCCI Healthcare Award",
    subtitle: "Outstanding Healthcare Achievement",
    image: "/awards/fmpcci.jpg",
  },

  // {
  //   title: "Healthcare Excellence Trophy",
  //   subtitle: "Award for Clinical Operations 2026",
  //   image: "/awards/award5.jpg",
  // },

  // {
  //   title: "Patient Friendly Hospital",
  //   subtitle: "AHPI Excellence Award 2022",
  //   image: "/awards/award6.jpg",
  // },
];

export default function Awards() {

  return (

    <section
      className="
      relative
      py-24
      overflow-hidden

      bg-gradient-to-b
      from-[#020617]
      via-black
      to-[#020617]
      "
    >

      {/* PREMIUM GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[850px]
        h-[850px]

        bg-cyan-500/10
        blur-[160px]
        rounded-full
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[400px]
        h-[400px]

        bg-blue-600/10
        blur-[120px]
        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-400
            uppercase
            tracking-[5px]
            font-semibold
            text-sm
            mb-4
            "
          >
            Recognition & Legacy
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl

            font-black
            text-white

            leading-tight
            "
          >

            Awards & Certifications

          </h2>

          <p
            className="
            mt-6

            max-w-3xl
            mx-auto

            text-slate-300
            text-sm
            sm:text-base

            leading-relaxed
            "
          >
            Hajela Hospital has been nationally recognized for
            excellence in healthcare, patient care, hospital
            operations, cleanliness, leadership, and advanced
            medical services.
          </p>

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

          {featuredAwards.map((item, index) => (

            <div
              key={index}

              className="
              group
              relative

              overflow-hidden
              rounded-[32px]

              border
              border-white/10

              bg-white/[0.06]
              backdrop-blur-2xl

              hover:-translate-y-3
              hover:border-cyan-400/30

              transition-all
              duration-500

              shadow-[0_20px_70px_rgba(0,0,0,0.45)]
              "
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={600}
                  className="
                  w-full

                  h-[260px]
                  sm:h-[320px]

                  object-cover

                  group-hover:scale-110

                  transition-all
                  duration-700
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  "
                ></div>

                {/* TOP BADGE */}

                <div
                  className="
                  absolute
                  top-4
                  left-4

                  px-4
                  py-1.5

                  rounded-full

                  bg-cyan-400/15
                  backdrop-blur-xl

                  border
                  border-cyan-300/20

                  text-cyan-200
                  text-xs
                  font-semibold
                  tracking-wide
                  "
                >
                  HAJELA HOSPITAL
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold

                  leading-snug
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-3

                  text-slate-400
                  text-sm

                  leading-relaxed
                  "
                >
                  {item.subtitle}
                </p>

                {/* LINE */}

                <div
                  className="
                  mt-5

                  w-20
                  h-[3px]

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-cyan-300
                  "
                ></div>

              </div>

            </div>

          ))}

        </div>

        {/* BUTTON */}

        <div className="flex justify-center mt-16">

          <Link
            href="/awards"
            className="
            group
            relative
            overflow-hidden

            bg-gradient-to-r
            from-blue-700
            via-blue-600
            to-cyan-500

            text-white

            px-9
            py-4

            rounded-full

            font-semibold
            text-base

            shadow-[0_15px_50px_rgba(34,211,238,0.35)]

            hover:scale-105

            transition-all
            duration-300
            "
          >

            <span className="relative z-10">

              View All Awards

            </span>

            <div
              className="
              absolute
              inset-0

              bg-white/20

              translate-y-full
              group-hover:translate-y-0

              transition-all
              duration-300
              "
            ></div>

          </Link>

        </div>

      </div>

    </section>
  );
}