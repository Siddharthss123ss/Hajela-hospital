"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface Service {

  _id: string;

  name: string;

  slug: string;

  image_url: string;

  description: string;

}

export default function Services() {

  const [services, setServices] =
    useState<Service[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function fetchServices() {

      try {

        const res =
          await fetch("/api/services");

        const data =
          await res.json();

        setServices(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    fetchServices();

  }, []);

  return (

    <section
      className="
      relative

      py-28
      lg:py-32

      overflow-hidden

      bg-gradient-to-b
      from-white
      via-cyan-50/20
      to-slate-50
      "
    >

      {/* PREMIUM BG */}

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

        blur-[170px]
        "
      ></div>

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-4
        "
      >

        {/* HEADER */}

        <div className="text-center mb-20">

          <p
            className="
            inline-flex

            items-center
            justify-center

            rounded-full

            bg-cyan-50

            border
            border-cyan-100

            px-5
            py-2

            text-sm

            font-bold

            tracking-[3px]

            uppercase

            text-cyan-700
            "
          >

            Hajela Hospital Services

          </p>

          <h2
            className="
            mt-7

            text-4xl
            sm:text-5xl
            lg:text-7xl

            font-black

            leading-tight

            text-slate-900
            "
          >

            Advanced Patient

            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              via-sky-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >

              {" "}Care Facilities

            </span>

          </h2>

          <p
            className="
            mt-8

            max-w-3xl
            mx-auto

            text-slate-600

            text-base
            lg:text-lg

            leading-relaxed
            "
          >

            Hajela Hospital provides modern healthcare
            infrastructure including ICU support,
            modular operation theatres, pathology,
            radiology, pharmacy, ward facilities and
            premium patient care services.

          </p>

        </div>

        {/* LOADER */}

        {loading && (

          <div
            className="
            flex
            justify-center
            items-center

            py-24
            "
          >

            <div
              className="
              h-14
              w-14

              rounded-full

              border-[3px]
              border-cyan-200

              border-t-cyan-600

              animate-spin
              "
            ></div>

          </div>

        )}

        {/* SLIDER */}

        {!loading && (

          <Swiper

            modules={[Autoplay]}

            autoplay={{

              delay: 3000,

              disableOnInteraction: false,

            }}

            loop={true}

            spaceBetween={30}

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

              1400: {

                slidesPerView: 4,

              },

            }}

          >

            {services.map((service) => (

              <SwiperSlide
                key={service._id}
              >

                <Link
                  href={`/services/${service.slug}`}

                  className="
                  group

                  block

                  overflow-hidden

                  rounded-[36px]

                  bg-white

                  border
                  border-slate-200/70

                  shadow-[0_15px_45px_rgba(15,23,42,0.06)]

                  hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]

                  hover:-translate-y-2

                  transition-all
                  duration-500
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                    relative

                    h-72

                    overflow-hidden
                    "
                  >

                    <img
                      src={service.image_url}

                      alt={service.name}

                      className="
                      h-full
                      w-full

                      object-cover

                      group-hover:scale-110

                      transition-all
                      duration-700
                      "
                    />

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

                  </div>

                  {/* CONTENT */}

                  <div className="p-7">

                    {/* ICON */}

                    <div
                      className="
                      relative
                      z-20

                      -mt-16

                      flex
                      items-center
                      justify-center

                      w-16
                      h-16

                      rounded-2xl

                      bg-gradient-to-br
                      from-cyan-500
                      to-blue-700

                      text-white

                      shadow-xl
                      "
                    >

                      <ShieldCheck size={28} />

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      mt-6

                      text-[26px]

                      font-black

                      leading-tight

                      text-slate-900

                      group-hover:text-cyan-600

                      transition-colors
                      duration-300
                      "
                    >

                      {service.name}

                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                      mt-5

                      min-h-[120px]

                      text-sm
                      lg:text-[15px]

                      leading-relaxed

                      text-slate-600
                      "
                    >

                      {service.description}

                    </p>

                    {/* FOOTER */}

                    <div
                      className="
                      mt-8

                      flex
                      items-center
                      justify-between
                      "
                    >

                      <div
                        className="
                        inline-flex

                        items-center
                        justify-center

                        rounded-2xl

                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-700

                        px-5
                        py-3

                        text-sm

                        font-semibold

                        text-white

                        shadow-lg
                        "
                      >

                        Explore Service

                      </div>

                      <div
                        className="
                        flex
                        items-center
                        justify-center

                        w-11
                        h-11

                        rounded-full

                        bg-slate-100

                        text-slate-700

                        group-hover:bg-cyan-500
                        group-hover:text-white

                        transition-all
                        duration-300
                        "
                      >

                        <ChevronRight size={22} />

                      </div>

                    </div>

                  </div>

                </Link>

              </SwiperSlide>

            ))}

          </Swiper>

        )}

        {/* BUTTON */}

        <div className="flex justify-center mt-20">

          <Link
            href="/services"

            className="
            inline-flex

            items-center
            justify-center

            gap-2

            rounded-2xl

            bg-gradient-to-r
            from-blue-700
            via-cyan-600
            to-cyan-500

            px-9
            py-4

            text-white

            font-semibold

            shadow-[0_15px_40px_rgba(6,182,212,0.28)]

            hover:scale-105

            transition-all
            duration-300
            "
          >

            View All Services

            <ChevronRight size={20} />

          </Link>

        </div>

      </div>

    </section>

  );

}