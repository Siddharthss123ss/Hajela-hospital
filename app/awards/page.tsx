"use client";

import Image from "next/image";

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

  {
    title: "Advanced Medical Technology Award",
    image: "/awards/award5.jpg",
  },

  {
    title: "Patient Care Excellence",
    image: "/awards/award6.jpg",
  },

  {
    title: "Healthcare Innovation Award",
    image: "/awards/award7.jpg",
  },

  {
    title: "Best Multi Speciality Hospital",
    image: "/awards/award8.jpg",
  },

];

export default function AwardsPage() {

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-b
      from-slate-950
      via-black
      to-slate-950
      pt-36
      pb-24
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
        blur-[150px]
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
        bg-blue-500/10
        blur-[120px]
        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-20">

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

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
            "
          >
            Awards &
            <span className="gradient-text">
              {" "}Achievements
            </span>
          </h1>

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
            Hajela Hospital is recognized for excellence in
            healthcare, patient care, advanced medical technology,
            and trusted healthcare services across the region.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
          grid
          sm:grid-cols-2
          xl:grid-cols-4
          gap-8
          "
        >

          {awards.map((item, index) => (

            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-[30px]
              bg-white/5
              backdrop-blur-2xl
              border
              border-white/10
              hover:border-cyan-400/30
              hover:-translate-y-3
              transition-all
              duration-500
              shadow-[0_10px_40px_rgba(0,0,0,0.3)]
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
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

                <h2
                  className="
                  text-white
                  text-xl
                  font-bold
                  leading-snug
                  "
                >
                  {item.title}
                </h2>

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

      </div>

    </main>
  );
}