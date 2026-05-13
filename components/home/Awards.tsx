"use client";

import Image from "next/image";
import Link from "next/link";

const awards = [
  {
    title: "Best Healthcare Excellence Award",
    image: "/awards/award1.jpg",
  },

  {
    title: "NABH Accredited Hospital",
    image: "/awards/award2.jpg",
  },

  {
    title: "Green Hospital Certification",
    image: "/awards/award3.jpg",
  },

  {
    title: "Trusted Healthcare Award",
    image: "/awards/award4.jpg",
  },
];

export default function Awards() {

  return (

    <section
      className="
      relative
      py-24
      bg-gradient-to-b
      from-slate-950
      to-black
      overflow-hidden
      "
    >

      {/* PREMIUM GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500/10
        blur-[140px]
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
            tracking-[4px]
            font-semibold
            text-sm
            mb-4
            "
          >
            Recognition & Excellence
          </p>

          <h2
            className="
            text-4xl
            lg:text-6xl
            font-black
            text-white
            leading-tight
            "
          >
            Awards & Achievements
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-slate-300
            leading-relaxed
            text-sm
            sm:text-base
            "
          >
            Hajela Hospital is recognized for excellence in patient care,
            advanced healthcare services, and modern medical technology.
          </p>

        </div>

        {/* CARDS */}

        <div
          className="
          grid
          sm:grid-cols-2
          xl:grid-cols-4
          gap-7
          "
        >

          {awards.map((item, index) => (

            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-[28px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-2xl
              hover:-translate-y-3
              hover:border-cyan-400/30
              transition-all
              duration-500
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={500}
                  className="
                  w-full
                  h-[260px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3
                  className="
                  text-white
                  text-xl
                  font-bold
                  leading-snug
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                  mt-5
                  w-16
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-600
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
            bg-gradient-to-r
            from-blue-700
            to-cyan-500
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            shadow-[0_10px_40px_rgba(34,211,238,0.35)]
            hover:scale-105
            transition-all
            duration-300
            "
          >
            View All Awards
          </Link>

        </div>

      </div>

    </section>
  );
}