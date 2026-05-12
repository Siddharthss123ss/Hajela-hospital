"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
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
    desc: "Advanced heart care and treatment.",
  },

  {
    title: "Neurology",
    icon: Brain,
    desc: "Specialized neurological healthcare.",
  },

  {
    title: "Orthopaedics",
    icon: Bone,
    desc: "Joint replacement surgery & care.",
  },

  {
    title: "Pediatrics",
    icon: Baby,
    desc: "Comprehensive child healthcare.",
  },

  {
    title: "Emergency Care",
    icon: Activity,
    desc: "24/7 emergency medical support.",
  },

  {
    title: "Diagnostics",
    icon: Microscope,
    desc: "Advanced pathology & radiology.",
  },
];

export default function Departments() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-14">

          <p className="text-cyan-600 font-semibold mb-3 text-sm uppercase tracking-[3px]">
            Our Medical Services
          </p>

          <h2
            className="
            text-3xl
            lg:text-5xl
            font-bold
            text-slate-900
            "
          >
            Medical Departments
          </h2>

          <p
            className="
            text-slate-600
            mt-4
            max-w-2xl
            mx-auto
            leading-relaxed
            "
          >
            Advanced healthcare services with experienced doctors
            and modern medical technology.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >

          {departments.map((dept, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                group
                bg-white
                rounded-[22px]
                p-6
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                border
                border-slate-100
                hover:bg-gradient-to-r
                hover:from-blue-900
                hover:to-cyan-600
                h-full
                "
              >

                {/* ICON */}

                <div
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  mb-5
                  group-hover:bg-white/20
                  transition-all
                  duration-500
                  "
                >

                  <dept.icon
                    size={28}
                    className="
                    text-cyan-600
                    group-hover:text-white
                    transition-all
                    duration-500
                    "
                  />

                </div>

                {/* TITLE */}

                <h3
                  className="
                  text-xl
                  font-bold
                  text-slate-900
                  group-hover:text-white
                  transition-all
                  duration-500
                  "
                >
                  {dept.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  mt-3
                  text-sm
                  text-slate-600
                  leading-relaxed
                  group-hover:text-white/80
                  transition-all
                  duration-500
                  "
                >
                  {dept.desc}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* BUTTON */}

        <div className="flex justify-center mt-12">

          <Link
            href="/departments"
            className="
            bg-gradient-to-r
            from-blue-700
            to-cyan-500
            text-white
            px-7
            py-3
            rounded-xl
            text-sm
            font-medium
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            "
          >
            View All Departments
          </Link>

        </div>

      </div>

    </section>
  );
}