// components/home/Doctors.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import {
  ChevronRight,
} from "lucide-react";

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
  },

  {
    slug: "dr-anupriya-hajela",
    name: "Dr. Anupriya Hajela",
    role: "ENT Specialist",
    degree: "MBBS, MS ENT, DNB ENT",
    experience: "10+ Years",
    image: "/doctors/Anupriya.jpg",
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

  {
    slug: "dr-aneesa-zutshi",
    name: "Dr. Aneesa Zutshi",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "45+ Years",
    image: "/doctors/aneesha.jpg",
  },

  {
    slug: "dr-deepak-zutshi",
    name: "Dr. Deepak Zutshi",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "45+ Years",
    image: "/doctors/deepak.jpg",
  },

  {
    slug: "dr-ss-velury",
    name: "Dr. S S Velury",
    role: "Paediatrician",
    degree: "MBBS, MD Paediatrics",
    experience: "32+ Years",
    image: "/doctors/velury.webp",
  },

  {
    slug: "dr-amit-ganguly",
    name: "Dr. Amit Ganguly",
    role: "ENT Specialist",
    degree: "MBBS, MS ENT",
    experience: "25+ Years",
    image: "/doctors/amit.png",
  },

  {
    slug: "dr-jyoti-valecha",
    name: "Dr. Jyoti Valecha",
    role: "Radiologist",
    degree: "MBBS, MD Radiodiagnosis",
    experience: "23+ Years",
    image: "/doctors/jyoti.webp",
  },

  {
    slug: "dr-dhananjay-mishra",
    name: "Dr. Dhananjay Mishra",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "21+ Years",
    image: "/doctors/dhananjay.png",
  },

  {
    slug: "dr-sameer-zutshi",
    name: "Dr. Sameer Zutshi",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "20+ Years",
    image: "/doctors/sameer.webp",
  },

  {
    slug: "dr-pravin-dandekar",
    name: "Dr. Pravin Gulab Dandekar",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "17+ Years",
    image: "/doctors/praveen.png",
  },

  {
    slug: "dr-amit-jain",
    name: "Dr. Amit Jain",
    role: "Urologist",
    degree: "MBBS, MS General Surgery, MCh Urology",
    experience: "14+ Years",
    image: "/doctors/amit-jain.png",
  },

  {
    slug: "dr-juned-hasan",
    name: "Dr. Juned Hasan",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "8+ Years",
    image: "/doctors/juneed.png",
  },

  {
    slug: "dr-surjeet-singh-rajput",
    name: "Dr. Surjeet Singh Rajput",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "10+ Years",
    image: "/doctors/surjeet.png",
  },

  {
    slug: "dr-sandeep-jain",
    name: "Dr. Sandeep Jain",
    role: "Laparoscopic & Gastrointestinal Surgeon",
    degree: "MBBS, MS General Surgery, MCh Surgical Gastroenterology",
    experience: "10+ Years",
    image: "/doctors/sandeep.png",
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

      {/* BG */}

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

          slidesPerView={1}

          loop={true}

          speed={900}

          autoplay={{

            delay: 2200,

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
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="
                    object-cover
                    object-top

                    group-hover:scale-[1.02]

                    transition-all
                    duration-700
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/15
                    via-transparent
                    to-transparent
                    "
                  ></div>

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
                    {doctor.experience} Experience
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

        </Swiper>

      </div>

    </section>

  );

}