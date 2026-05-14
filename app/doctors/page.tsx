// app/doctors/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Stethoscope,
  Award,
  ChevronRight,
} from "lucide-react";

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

export default function DoctorsPage() {

  return (

    <main
      className="
      relative

      min-h-screen

      bg-gradient-to-b
      from-white
      via-slate-50
      to-white

      pt-32
      pb-24

      overflow-hidden
      "
    >

      {/* PREMIUM GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[900px]

        bg-cyan-500/5
        blur-[160px]

        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HERO */}

        <div className="text-center mb-20">

          <div
            className="
            inline-flex

            items-center
            gap-2

            bg-cyan-50

            border
            border-cyan-100

            px-5
            py-2.5

            rounded-full

            text-cyan-700
            font-semibold
            text-sm
            "
          >

            <Stethoscope className="w-4 h-4" />

            Hajela Hospital Specialists

          </div>

          <h1
            className="
            mt-7

            text-4xl
            md:text-6xl
            lg:text-7xl

            font-black

            text-slate-900

            leading-tight
            "
          >

            Meet Our Expert
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Doctors
            </span>

          </h1>

          <p
            className="
            mt-7

            max-w-3xl
            mx-auto

            text-slate-500

            text-base
            md:text-lg

            leading-relaxed
            "
          >
            Our highly experienced doctors provide advanced,
            compassionate and world-class medical care with
            expertise across multiple specialties.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4

          gap-8
          "
        >

          {doctors.map((doctor, index) => (

            <div
              key={index}

              className="
              group

              bg-white

              rounded-[32px]

              overflow-hidden

              border
              border-slate-200/80

              shadow-[0_10px_40px_rgba(15,23,42,0.06)]

              hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]
              hover:-translate-y-2

              transition-all
              duration-500
              "
            >

              {/* IMAGE */}

              <div
                className="
                relative

                h-[340px]

                bg-slate-100
                overflow-hidden
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

                {/* OVERLAY */}

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

              <div className="p-7">

                {/* EXPERIENCE */}

                <div
                  className="
                  inline-flex

                  items-center
                  gap-2

                  bg-cyan-50

                  border
                  border-cyan-100

                  px-4
                  py-2

                  rounded-full

                  text-cyan-700
                  text-sm
                  font-bold
                  "
                >

                  <Award className="w-4 h-4" />

                  {doctor.experience}

                </div>

                {/* NAME */}

                <h2
                  className="
                  mt-5

                  text-2xl

                  font-black

                  text-slate-900

                  leading-snug
                  "
                >
                  {doctor.name}
                </h2>

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
                  mt-4

                  text-slate-500

                  text-sm

                  leading-relaxed

                  min-h-[70px]
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

                  <ChevronRight className="w-4 h-4" />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}