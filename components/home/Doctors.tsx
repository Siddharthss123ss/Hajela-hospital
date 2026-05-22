"use client";

import Image from "next/image";

import Link from "next/link";

import {
  useEffect,
  useState
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import {
  ChevronRight,
} from "lucide-react";

import "swiper/css";

interface Doctor {

  _id: string;

  slug: string;

  name: string;

  role: string;

  degree: string;

  experience: string;

  image_url: string;

}

export default function Doctors() {

  const [doctors, setDoctors] =
    useState<Doctor[]>([]);

  useEffect(() => {

    const fetchDoctors =
      async () => {

        try {

          const res =
            await fetch(
              "/api/doctors"
            );

          const data =
            await res.json();

          setDoctors(data);

        } catch (error) {

          console.log(error);

        }

      };

    fetchDoctors();

  }, []);

  return (

    <section
      className="
      relative

      py-24
      lg:py-28

      bg-gradient-to-b
      from-white
      via-slate-50
      to-white

      overflow-hidden
      "
    >

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        bg-blue-100/30

        blur-[140px]

        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-16 lg:mb-20">

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
            Medical Specialists
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl

            font-black

            text-slate-900
            leading-tight
            "
          >

            Trusted
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Medical Specialists
            </span>

          </h2>

          <p
            className="
            mt-6

            max-w-3xl
            mx-auto

            text-slate-500

            leading-relaxed

            text-sm
            md:text-base
            "
          >
            Our experienced doctors provide advanced,
            compassionate and patient-focused healthcare
            with world-class treatment standards.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper

          modules={[Autoplay]}

          spaceBetween={28}

          loop={true}

          speed={900}

          autoplay={{

            delay: 2200,

            disableOnInteraction: false,

          }}

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

          {doctors.map((doctor, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                group

                h-full

                bg-white

                rounded-[30px]

                border
                border-slate-200/80

                overflow-hidden

                shadow-[0_10px_40px_rgba(15,23,42,0.06)]

                hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

                hover:-translate-y-1

                transition-all
                duration-500
                "
              >

                {/* IMAGE */}

                <div
                  className="
                  relative

                  h-[380px]
                  sm:h-[420px]

                  overflow-hidden

                  bg-slate-100
                  "
                >

                  <Image
                    src={doctor.image_url}
                    alt={doctor.name}
                    fill
                    unoptimized

                    className="
                    object-cover
                    object-top

                    group-hover:scale-[1.02]

                    transition-all
                    duration-700
                    "
                  />

                </div>

                {/* CONTENT */}

                <div className="p-6 lg:p-7">

                  <div
                    className="
                    inline-flex

                    items-center
                    justify-center

                    px-4
                    py-2

                    rounded-full

                    bg-cyan-50

                    text-cyan-700

                    text-sm
                    font-bold

                    border
                    border-cyan-100
                    "
                  >
                    {doctor.experience}
                  </div>

                  <h3
                    className="
                    mt-5

                    text-2xl

                    font-black

                    text-slate-900

                    leading-snug
                    "
                  >
                    {doctor.name}
                  </h3>

                  <p
                    className="
                    mt-2

                    text-cyan-700

                    font-semibold
                    text-base
                    "
                  >
                    {doctor.role}
                  </p>

                  <p
                    className="
                    mt-3

                    text-slate-500

                    text-sm

                    leading-relaxed

                    min-h-[52px]
                    "
                  >
                    {doctor.degree}
                  </p>

                  <div
                    className="
                    mt-5

                    w-16
                    h-[3px]

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-700
                    "
                  ></div>

                  <Link
                    href={`/doctors/${doctor.slug}`}

                    className="
                    mt-7

                    inline-flex

                    items-center
                    justify-center
                    gap-2

                    w-full

                    py-3.5

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    text-slate-700
                    font-semibold

                    hover:bg-cyan-600
                    hover:text-white
                    hover:border-cyan-600

                    transition-all
                    duration-300
                    "
                  >

                    View Profile

                    <ChevronRight
                      className="
                      w-4
                      h-4
                      "
                    />

                  </Link>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* BUTTON */}

        <div className="flex justify-center mt-16">

          <Link
            href="/doctors"

            className="
            inline-flex

            items-center
            justify-center

            gap-2

            bg-gradient-to-r
            from-cyan-600
            to-blue-700

            text-white

            px-9
            py-4

            rounded-2xl

            font-bold

            shadow-lg

            hover:scale-105

            transition-all
            duration-300
            "
          >

            View All Doctors

            <ChevronRight
              className="
              w-5
              h-5
              "
            />

          </Link>

        </div>

      </div>

    </section>

  );

}