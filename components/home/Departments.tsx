"use client";

import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Microscope,
} from "lucide-react";

const departments = [

  {
    title: "Cardiology",
    icon: HeartPulse,
    desc:
      "Advanced heart care and modern cardiac treatment solutions.",
  },

  {
    title: "Neurology",
    icon: Brain,
    desc:
      "Specialized neurological healthcare with expert consultation.",
  },

  {
    title: "Orthopaedics",
    icon: Bone,
    desc:
      "Advanced joint replacement surgery and orthopedic care.",
  },

  {
    title: "Pediatrics",
    icon: Baby,
    desc:
      "Comprehensive healthcare services for children and newborns.",
  },

  {
    title: "Emergency Care",
    icon: Activity,
    desc:
      "24/7 emergency medical support with rapid response team.",
  },

  {
    title: "Diagnostics",
    icon: Microscope,
    desc:
      "Advanced pathology, MRI, CT Scan and radiology services.",
  },

];

export default function Departments() {

  return (

    <section
      className="
      relative
      py-24

      overflow-hidden

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/30
      "
    >

      {/* PREMIUM BACKGROUND GLOW */}

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
            Medical Departments
          </h2>

          <p
            className="
            mt-5

            text-slate-600

            max-w-3xl

            mx-auto

            leading-relaxed

            text-sm
            sm:text-base
            "
          >
            Delivering world-class healthcare services with
            expert doctors, advanced medical technology,
            and patient-focused treatment.
          </p>

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

              <div
                className="
                group
                relative

                overflow-hidden

                rounded-[34px]

                border
                border-white/20

                bg-white/70

                backdrop-blur-2xl

                p-8

                min-h-[300px]

                shadow-[0_10px_50px_rgba(15,23,42,0.08)]

                hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]

                hover:-translate-y-4

                transition-all
                duration-700
                "
              >

                {/* GLOW */}

                <div
                  className="
                  absolute
                  -top-20
                  -right-20

                  w-56
                  h-56

                  rounded-full

                  bg-cyan-400/10

                  blur-3xl

                  opacity-0

                  group-hover:opacity-100

                  transition-all
                  duration-700
                  "
                ></div>

                {/* LIGHT BORDER */}

                <div
                  className="
                  absolute
                  inset-0

                  rounded-[34px]

                  border

                  border-transparent

                  group-hover:border-cyan-300/30

                  transition-all
                  duration-700
                  "
                ></div>

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
                  via-blue-600
                  to-slate-900

                  flex
                  items-center
                  justify-center

                  shadow-[0_15px_40px_rgba(6,182,212,0.35)]

                  mb-7

                  group-hover:scale-110
                  group-hover:rotate-6

                  transition-all
                  duration-500
                  "
                >

                  <dept.icon
                    size={36}
                    className="
                    text-white
                    "
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
                  {dept.desc}
                </p>

                {/* PREMIUM LINE */}

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

                  group-hover:w-28

                  transition-all
                  duration-500
                  "
                ></div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* BUTTON */}

        <div className="flex justify-center mt-16">

          <Link
            href="/departments"

            className="
            group
            relative

            overflow-hidden

            rounded-full

            bg-gradient-to-r
            from-blue-700
            via-blue-600
            to-cyan-500

            px-9
            py-4

            text-white

            font-semibold

            shadow-[0_10px_40px_rgba(6,182,212,0.35)]

            hover:scale-105

            transition-all
            duration-300
            "
          >

            <span className="relative z-10">

              View All Departments

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