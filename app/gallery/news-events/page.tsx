"use client";

import Image from "next/image";

import {
  CalendarDays,
  ArrowRight,
  Award,
  Trophy,
  Newspaper,
} from "lucide-react";

const news = [

  {
    title:
      "Hajela Hospital Ranked Among India’s Best Hospitals",

    image: "/news/news.jpg",

    date: "January 2004",

    icon: Trophy,

    description:
      "Hajela Hospital was recognized in The Week magazine’s prestigious survey of India’s Best Hospitals, reflecting excellence in healthcare services, advanced medical infrastructure, and patient trust across Madhya Pradesh.",
  },

  {
    title:
      "Recognized Among Top Hospitals In Bhopal",

    image: "/news/rank.jpg",

    date: "November 2017",

    icon: Award,

    description:
      "Hajela Hospital secured a leading position among Bhopal’s top hospitals in The Week-Nielsen Survey, highlighting its contribution to advanced healthcare, emergency care, and patient satisfaction.",
  },

  {
    title:
      "Healthcare Excellence & National Recognition",

    image: "/news/news1.jpg",

    date: "Healthcare Survey",

    icon: Newspaper,

    description:
      "The hospital gained national recognition for its quality healthcare services, modern surgical excellence, and commitment to innovation in patient care and advanced treatment facilities.",
  },

  {
    title:
      "Advanced Orthopedic & Surgical Success",

    image: "/news/news2.jpg",

    date: "Medical Achievement",

    icon: Trophy,

    description:
      "Hajela Hospital achieved remarkable success in advanced orthopedic and surgical procedures, strengthening its reputation as one of Bhopal’s trusted healthcare institutions.",
  },

];

export default function NewsPage() {

  return (

    <main
      className="
      relative

      overflow-hidden

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/40

      min-h-screen

      pt-32
      pb-24
      "
    >

      {/* PREMIUM BACKGROUND */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[900px]

        rounded-full

        bg-cyan-400/10

        blur-[160px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-20">

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
            Hajela Hospital Updates
          </p>

          <h1
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-slate-900

            leading-tight
            "
          >
            News
          </h1>

          <p
            className="
            mt-6

            text-slate-600

            text-sm
            sm:text-lg

            leading-relaxed

            max-w-3xl

            mx-auto
            "
          >
            Explore Hajela Hospital’s latest recognitions,
            healthcare achievements, awards, medical
            excellence stories, and national healthcare
            rankings.
          </p>

        </div>

        {/* NEWS GRID */}

        <div
          className="
          grid

          md:grid-cols-2

          gap-10
          "
        >

          {news.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}

                className="
                group
                relative

                overflow-hidden

                rounded-[38px]

                border
                border-white/20

                bg-white/70

                backdrop-blur-2xl

                shadow-[0_15px_60px_rgba(15,23,42,0.08)]

                hover:-translate-y-4

                hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]

                transition-all
                duration-700
                "
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}

                    width={900}
                    height={700}

                    className="
                    w-full

                    h-[260px]
                    sm:h-[320px]
                    lg:h-[360px]

                    object-cover

                    group-hover:scale-105

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
                    from-black/70
                    via-black/10
                    to-transparent
                    "
                  ></div>

                  {/* DATE */}

                  <div
                    className="
                    absolute
                    top-6
                    left-6

                    flex
                    items-center

                    gap-2

                    rounded-full

                    bg-white/10

                    backdrop-blur-xl

                    border
                    border-white/10

                    px-4
                    py-2

                    text-white
                    "
                  >

                    <CalendarDays size={16} />

                    <span className="text-sm font-medium">

                      {item.date}

                    </span>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  {/* ICON */}

                  <div
                    className="
                    w-16
                    h-16

                    rounded-[20px]

                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-700

                    flex
                    items-center
                    justify-center

                    shadow-[0_10px_30px_rgba(6,182,212,0.35)]

                    -mt-16

                    relative
                    z-20

                    border-4
                    border-white
                    "
                  >

                    <Icon
                      size={28}
                      className="text-white"
                    />

                  </div>

                  {/* TITLE */}

                  <h2
                    className="
                    mt-6

                    text-2xl
                    lg:text-3xl

                    font-black

                    text-slate-900

                    leading-snug
                    "
                  >
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}

                  <p
                    className="
                    mt-5

                    text-slate-600

                    leading-relaxed

                    text-sm
                    sm:text-base
                    "
                  >
                    {item.description}
                  </p>

                  {/* BUTTON */}

                  <button
                    className="
                    group/btn

                    mt-8

                    inline-flex
                    items-center

                    gap-3

                    rounded-full

                    bg-gradient-to-r
                    from-blue-900
                    via-blue-700
                    to-cyan-500

                    px-7
                    py-3

                    text-white

                    font-semibold

                    shadow-[0_10px_40px_rgba(6,182,212,0.25)]

                    hover:scale-105

                    transition-all
                    duration-300
                    "
                  >

                    Read More

                    <ArrowRight
                      size={18}

                      className="
                      transition-all
                      duration-300

                      group-hover/btn:translate-x-1
                      "
                    />

                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </main>

  );

}