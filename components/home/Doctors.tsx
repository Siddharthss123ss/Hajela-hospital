// components/home/Doctors.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { ChevronRight } from "lucide-react";

import "swiper/css";

const doctors = [

  {
    slug: "dr-anoop-hajela",
    name: "Dr. Anoop Hajela",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "45+ Years",
    image: "/doctors/anoop.jpg",
  },

  {
    slug: "dr-rajni-hajela",
    name: "Dr. Rajni Hajela",
    role: "Gynaecologist",
    degree: "MBBS, MD Obstetrics and Gynecology",
    experience: "38+ Years",
    image: "/doctors/rajni.jpeg",
  },

  {
    slug: "dr-sanjeev-johri",
    name: "Dr. Sanjeev Johri",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "14+ Years",
    image: "/doctors/sanjeev.png",
  },

  {
    slug: "dr-supriya-hajela",
    name: "Dr. Supriya Hajela",
    role: "Obstetrician & Gynecologist",
    degree: "MBBS, MD Obstetrics & Gynecology",
    experience: "14+ Years",
    image: "/doctors/supriya.png",
    website: "https://www.supriyahajela.in/",
    
  },

  {
    slug: "dr-anupriya-hajela",
    name: "Dr. Anupriya Hajela",
    role: "ENT Specialist",
    degree: "MBBS, MS ENT, DNB ENT",
    experience: "10+ Years",
    image: "/doctors/anupriya.png",
  },

  {
    slug: "dr-saurabh-kumar",
    name: "Dr. Saurabh Kumar",
    role: "Paediatrician",
    degree: "MBBS, MD Paediatrics, Fellowship in Neonatology",
    experience: "10+ Years",
    image: "/doctors/sourabh.jpg",
  },

  {
    slug: "dr-tanmay-shah",
    name: "Dr. Tanmay Shah",
    role: "Orthopedic Doctor",
    degree: "MBBS, MS Orthopaedics, Fellowship in Joint Replacement",
    experience: "10+ Years",
    image: "/doctors/tanmay.png",
  },

];

export default function Doctors() {

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

      {/* PREMIUM BG GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        bg-cyan-500/5
        blur-[140px]

        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* TOP */}

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

            Meet Our
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Expert Doctors
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
            Our experienced medical specialists provide advanced,
            compassionate and patient-focused healthcare with
            world-class treatment standards.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{

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

          {doctors.slice(0, 7).map((doctor, index) => (

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

                hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                hover:-translate-y-2

                transition-all
                duration-500
                "
              >

                {/* IMAGE */}

                <div
                  className="
                  relative

                  h-[320px]
                  sm:h-[340px]

                  overflow-hidden

                  bg-slate-100
                  "
                >

                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="
                    object-cover
                    object-top

                    group-hover:scale-105

                    transition-all
                    duration-700
                    "
                  />

                  {/* SOFT OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    "
                  ></div>

                </div>

                {/* CONTENT */}

                <div className="p-6 lg:p-7">

                  {/* EXPERIENCE */}

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
                    {doctor.experience} Experience
                  </div>

                  {/* NAME */}

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

                  {/* ROLE */}

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

                  {/* DEGREE */}

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

                  {/* LINE */}

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

                  {/* BUTTON */}

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

            bg-gradient-to-r
            from-cyan-600
            to-blue-700

            text-white

            px-8
            py-4

            rounded-full

            font-bold

            shadow-[0_10px_40px_rgba(6,182,212,0.25)]

            hover:scale-105

            transition-all
            duration-300
            "
          >
            Browse All Specialists
          </Link>

        </div>

      </div>

    </section>

  );
}