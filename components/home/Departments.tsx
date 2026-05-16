"use client";

import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  Ear,
  Bone,
  Baby,
  Activity,
  Microscope,
  HeartHandshake,
  Scan,
  Stethoscope,
} from "lucide-react";

const departments = [

  {
    title: "ENT & Voice Disorders",
    icon: Ear,

    desc:
      "Advanced diagnosis and treatment for ear, nose, throat, sinus, allergy, and professional voice disorders with modern ENT care.",
  },

  {
    title: "Cochlear Implant Centre",
    icon: HeartHandshake,

    desc:
      "Specialized cochlear implant treatments helping patients restore hearing abilities with expert surgical excellence and rehabilitation support.",
  },

  {
    title: "Orthopaedics & Joint Replacement",
    icon: Bone,

    desc:
      "Comprehensive orthopedic care including trauma management, fracture treatment, spine care, and advanced joint replacement surgeries.",
  },

  {
    title: "Pediatrics & NICU",
    icon: Baby,

    desc:
      "Dedicated child healthcare services with advanced NICU support, newborn care, vaccinations, and pediatric specialists.",
  },

  {
    title: "24/7 Emergency & Trauma Care",
    icon: Activity,

    desc:
      "Round-the-clock emergency services with rapid response trauma care, ICU support, ambulance facilities, and critical care specialists.",
  },

  {
    title: "Advanced Diagnostics",
    icon: Microscope,

    desc:
      "Modern pathology, laboratory testing, radiology, ultrasound, CT Scan, and imaging services for accurate medical diagnosis.",
  },

  {
    title: "IVF & Infertility Centre",
    icon: HeartHandshake,

    desc:
      "Advanced fertility treatments including IVF, ICSI, infertility consultation, reproductive healthcare, and personalized fertility solutions.",
  },

  {
    title: "Radiology & Imaging Centre",
    icon: Scan,

    desc:
      "High-quality digital imaging services with modern radiology equipment for fast, precise, and reliable diagnostic results.",
  },

];

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
            Hajela Hospital provides advanced healthcare,
            modern medical technology, experienced specialists,
            and compassionate treatment services for every patient.
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

              </div>

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