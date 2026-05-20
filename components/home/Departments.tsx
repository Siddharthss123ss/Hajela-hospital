"use client";

import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  Stethoscope,
  BadgeCheck,
  ScanLine,
} from "lucide-react";

import { departments } from "@/data/departments";

export default function Departments() {

  return (

    <section
      className="
      relative

      py-24
      lg:py-28

      overflow-hidden

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/30
      "
    >

      {/* SOFT GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        rounded-full

        bg-cyan-400/10

        blur-[140px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* RUNNING HIGHLIGHT BAR */}

        <div
          className="
          mb-14

          overflow-hidden

          rounded-[28px]

          border
          border-cyan-200/60

          bg-gradient-to-r
          from-cyan-500
          via-blue-700
          to-cyan-500

          shadow-[0_10px_40px_rgba(6,182,212,0.25)]
          "
        >

          <div
            className="
            relative

            overflow-hidden

            rounded-[28px]

            bg-slate-950/90

            py-5
            "
          >

            <div
              className="
              flex

              items-center

              gap-16

              whitespace-nowrap

              animate-marquee
              "
            >

              {/* ITEM */}

              <div
                className="
                flex

                items-center

                gap-4

                pl-10
                "
              >

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-gradient-to-br
                  from-cyan-500
                  to-blue-700

                  flex
                  items-center
                  justify-center

                  shadow-lg
                  "
                >

                  <BadgeCheck
                    className="text-white"
                    size={28}
                  />

                </div>

                <div>

                  <p
                    className="
                    text-xs

                    uppercase

                    tracking-[3px]

                    text-cyan-300

                    font-bold
                    "
                  >
                    Government Scheme
                  </p>

                  <h3
                    className="
                    text-white

                    font-black

                    text-lg
                    lg:text-2xl
                    "
                  >
                    Ayushman Bharat Available in Orthopedics
                  </h3>

                </div>

              </div>

              {/* ITEM */}

              <div
                className="
                flex

                items-center

                gap-4
                "
              >

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/10

                  flex
                  items-center
                  justify-center
                  "
                >

                  <ScanLine
                    className="text-cyan-300"
                    size={28}
                  />

                </div>

                <div>

                  <p
                    className="
                    text-xs

                    uppercase

                    tracking-[3px]

                    text-cyan-300

                    font-bold
                    "
                  >
                    Advanced IVF
                  </p>

                  <h3
                    className="
                    text-white

                    font-black

                    text-lg
                    lg:text-2xl
                    "
                  >
                   IVF & Infertility Centre 
                  </h3>

                </div>

              </div>

              {/* ITEM */}

              <div
                className="
                flex

                items-center

                gap-4
                "
              >

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/10

                  flex
                  items-center
                  justify-center
                  "
                >

                  <Stethoscope
                    className="text-cyan-300"
                    size={28}
                  />

                </div>

                <div>

                  <p
                    className="
                    text-xs

                    uppercase

                    tracking-[3px]

                    text-cyan-300

                    font-bold
                    "
                  >
                    Advanced Surgery
                  </p>

                  <h3
                    className="
                    text-white

                    font-black

                    text-lg
                    lg:text-2xl
                    "
                  >
                    Advanced Robotic Hip and Knee Replacement Surgery 
                  </h3>

                </div>

              </div>

              {/* ITEM */}

              <div
                className="
                flex

                items-center

                gap-4
                "
              >

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/10

                  flex
                  items-center
                  justify-center
                  "
                >

                  <BadgeCheck
                    className="text-cyan-300"
                    size={28}
                  />

                </div>

                <div>

                  <p
                    className="
                    text-xs

                    uppercase

                    tracking-[3px]

                    text-cyan-300

                    font-bold
                    "
                  >
                    Fertility Centre
                  </p>

                  <h3
                    className="
                    text-white

                    font-black

                    text-lg
                    lg:text-2xl
                    "
                  >
                    IVF & Infertility Centre
                  </h3>

                </div>

              </div>

              {/* ITEM */}

              <div
                className="
                flex

                items-center

                gap-4

                pr-10
                "
              >

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/10

                  flex
                  items-center
                  justify-center
                  "
                >

                  <Stethoscope
                    className="text-cyan-300"
                    size={28}
                  />

                </div>

                <div>

                  <p
                    className="
                    text-xs

                    uppercase

                    tracking-[3px]

                    text-cyan-300

                    font-bold
                    "
                  >
                    Critical Care
                  </p>

                  <h3
                    className="
                    text-white

                    font-black

                    text-lg
                    lg:text-2xl
                    "
                  >
                    Advanced ICCU & NICU Care Facilities
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* HEADING */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-600

            font-bold

            uppercase

            tracking-[4px]

            text-sm

            mb-4
            "
          >
            Our Medical Services
          </p>

          <h2
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-slate-900

            leading-tight
            "
          >

            Specialized
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Medical Departments
            </span>

          </h2>

        </div>

        {/* SLIDER */}

        <Swiper

          modules={[Autoplay]}

          autoplay={{

            delay: 3500,

            disableOnInteraction: false,

          }}

          loop={true}

          spaceBetween={26}

          breakpoints={{

            0: {
              slidesPerView: 1.1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },

          }}

        >

          {departments.map((dept, index) => (

            <SwiperSlide key={index}>

              <Link
                href={`/departments/${dept.slug}`}

                className="
                block

                group
                relative

                h-full

                overflow-hidden

                rounded-[34px]

                border
                border-slate-200/70

                bg-white

                p-8

                min-h-[340px]

                shadow-[0_10px_50px_rgba(15,23,42,0.06)]

                hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

                hover:-translate-y-1

                transition-all
                duration-500
                "
              >

                {/* ICON */}

                <div
                  className="
                  relative
                  z-10

                  w-20
                  h-20

                  rounded-[24px]

                  bg-gradient-to-br
                  from-cyan-500
                  to-blue-700

                  flex
                  items-center
                  justify-center

                  mb-7

                  shadow-lg

                  group-hover:scale-105

                  transition-all
                  duration-300
                  "
                >

                  <dept.icon
                    size={36}
                    className="text-white"
                  />

                </div>

                {/* TITLE */}

                <h3
                  className="
                  relative
                  z-10

                  text-[26px]

                  font-black

                  text-slate-900

                  leading-tight
                  "
                >
                  {dept.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  relative
                  z-10

                  mt-4

                  text-slate-600

                  leading-relaxed

                  text-[15px]
                  "
                >
                  {dept.short}
                </p>

                {/* LINE */}

                <div
                  className="
                  relative
                  z-10

                  mt-8

                  w-16
                  h-[4px]

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-700

                  group-hover:w-24

                  transition-all
                  duration-300
                  "
                ></div>

              </Link>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* BUTTON */}

        <div className="flex justify-center mt-16">

          <Link
            href="/departments"

            className="
            inline-flex

            items-center
            justify-center

            gap-2

            rounded-2xl

            bg-gradient-to-r
            from-blue-700
            to-cyan-500

            px-9
            py-4

            text-white

            font-semibold

            shadow-lg

            hover:scale-105

            transition-all
            duration-300
            "
          >

            <Stethoscope
              className="
              w-5
              h-5
              "
            />

            View All Departments

          </Link>

        </div>

      </div>

    </section>

  );

}