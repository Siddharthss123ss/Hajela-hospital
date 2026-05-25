"use client";

import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Stethoscope,
  Shield,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";

export default function ContactPage() {

  const departments = [

    {
      department: "ENT & Voice Disorders",

      slug: "ent-voice-disorders",

      doctor: "Dr. Anupriya Hajela Shah",

      number: "7777802365",

      icon: "🩺",

      emergency: false,

      description:
        "Advanced diagnosis and treatment for sinus problems, ear infections, hearing disorders, allergies, throat diseases and professional voice complications.",
    },

    {
      department: "IVF & Infertility Centre",

      slug: "ivf-infertility-centre",

      doctor: "Dr. Supriya Hajela",

      number: "7777802361",

      icon: "🧬",

      emergency: false,

      description:
        "Modern fertility treatments including IVF, ICSI, infertility diagnosis and reproductive healthcare consultation.",
    },

    {
      department: "Maternity & Women Care",

      slug: "maternity-women-care",

      doctor: "Dr. Rajni Hajela",

      number: "7777802361",

      icon: "🌸",

      emergency: false,

      description:
        "Complete women healthcare solutions including pregnancy care, gynecology consultation and maternity support.",
    },

    {
      department: "General Medicine",

      slug: "general-medicine",

      doctor: "Dr. Sanjeev Johri,",

      number: "9977744455",

      icon: "💊",

      emergency: false,

      description:
        "Preventive healthcare, chronic disease management, infections, fever treatment and routine medical consultations.",
    },

    {
      department: "Orthopaedics & Joint Replacement",

      slug: "orthopaedics-joint-replacement",

      doctor: "Dr. Tanmay Shah",

      number: "7777802366",

      icon: "🦴",

      emergency: true,

      description:
        "Advanced bone, joint and spine treatments including fracture management and robotic joint replacement surgeries.",
    },

    {
      department: "Pediatrics & NICU",

      slug: "pediatrics-nicu",

      doctor: "Dr. Juned Hasan",

      number: "9131365005",

      icon: "👶",

      emergency: false,

      description:
        "Healthcare services for newborns, infants and children with advanced NICU support and pediatric specialists.",
    },

    {
      department: "Radiology & Imaging",

      slug: "radiology-imaging",

      doctor: "Radiology Specialist Team",

      number: "7777802362",

      icon: "🩻",

      emergency: false,

      description:
        "Advanced diagnostic imaging facilities including digital X-rays, ultrasound scanning and precision radiology evaluations.",
    },

    {
      department: "Sonology & Imaging Services",

      slug: "sonology-imaging-services",

      doctor: "Imaging & Sonography Team",

      number: "7777802362",

      icon: "📡",

      emergency: false,

      description:
        "Advanced ultrasound scanning, pregnancy sonography, abdominal imaging and diagnostic radiology support.",
    },

    {
      department: "Pathology",

      slug: "pathology",

      doctor: "Laboratory Diagnostic Team",

      number: "7777802363",

      icon: "🧪",

      emergency: false,

      description:
        "Fast and accurate pathology testing, laboratory services and modern diagnostic evaluations with advanced technology.",
    },

    {
      department: "ICCU & Critical Care",

      slug: "iccu-critical-care",

      doctor: "Critical Care Unit",

      number: "7777802365",

      icon: "❤️",

      emergency: true,

      description:
        "Round-the-clock ICU monitoring, ventilator support and emergency intensive care management for critical patients.",
    },

    {
      department: "Cochlear Implant Centre",

      slug: "cochlear-implant-centre",

      doctor: "ENT Surgical Team",

      number: "7777802365",

      icon: "🦻",

      emergency: false,

      description:
        "Advanced cochlear implant procedures, speech rehabilitation and hearing recovery programs with expert ENT surgeons.",
    },

    {
      department: "Emergency & Trauma Care",

      slug: "emergency-trauma-care",

      doctor: "Emergency Response Team",

      number: "7777802365",

      icon: "🚨",

      emergency: true,

      description:
        "Rapid response emergency care unit with trauma management, ICU backup and critical healthcare specialists.",
    },

  ];

  const features = [

    {
      icon: Shield,
      text: "Advanced Multispeciality Healthcare",
      color: "text-cyan-300",
    },

    {
      icon: Heart,
      text: "Experienced Doctors & Specialists",
      color: "text-pink-300",
    },

    {
      icon: Star,
      text: "Trusted Patient Support System",
      color: "text-yellow-300",
    },

  ];

  return (

    <main
      className="
      pt-32
      pb-24

      bg-gradient-to-br
      from-slate-50
      via-white
      to-cyan-50/30

      min-h-screen
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

        bg-cyan-200/20

        rounded-full

        blur-[140px]
        "
      ></div>

      <div
        className="
        relative
        z-10

        container-custom
        px-4

        max-w-7xl
        mx-auto
        "
      >

        {/* HEADING */}

        <div className="text-center mb-20">

          <div
            className="
            inline-flex
            items-center
            gap-2

            bg-white

            border
            border-slate-200

            px-5
            py-2

            rounded-full

            shadow-sm

            mb-5
            "
          >

            <Stethoscope
              className="
              w-4
              h-4
              text-cyan-600
              "
            />

            <span
              className="
              text-cyan-700
              font-semibold
              text-sm
              uppercase
              tracking-wide
              "
            >

              Hajela Hospital Bhopal

            </span>

          </div>

          <h1
            className="
            text-5xl
            lg:text-7xl

            font-black

            text-slate-900

            leading-tight
            "
          >

            Department{" "}

            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >

              Contact Directory

            </span>

          </h1>

          <p
            className="
            mt-6

            max-w-3xl
            mx-auto

            text-slate-500

            text-lg

            leading-relaxed
            "
          >

            Connect directly with our hospital departments,
            specialist doctors and healthcare support teams.

          </p>

        </div>

        {/* DEPARTMENTS */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3

          gap-7
          "
        >

          {departments.map((dept, index) => (

            <div
              key={index}

              className="
              group

              relative

              bg-white

              border
              border-slate-100

              rounded-[35px]

              p-7

              shadow-lg

              hover:shadow-2xl
              hover:-translate-y-1

              transition-all
              duration-300
              "
            >

              {dept.emergency && (

                <div
                  className="
                  absolute
                  top-5
                  right-5

                  bg-red-500

                  text-white

                  text-xs
                  font-semibold

                  px-3
                  py-1

                  rounded-full
                  "
                >

                  Emergency

                </div>

              )}

              <div
                className="
                text-5xl
                "
              >

                {dept.icon}

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

                {dept.department}

              </h3>

              <p
                className="
                mt-4

                text-slate-500

                text-sm

                leading-relaxed

                min-h-[90px]
                "
              >

                {dept.description}

              </p>

              <div
                className="
                mt-5

                bg-slate-50

                border
                border-slate-100

                rounded-2xl

                p-4
                "
              >

                <p
                  className="
                  text-xs

                  uppercase

                  tracking-wider

                  text-slate-400

                  font-semibold
                  "
                >

                  Specialist Doctor

                </p>

                <p
                  className="
                  mt-2

                  text-cyan-700

                  font-bold

                  text-lg
                  "
                >

                  {dept.doctor}

                </p>

              </div>

              <div
                className="
                mt-4

                bg-slate-50

                border
                border-slate-100

                rounded-2xl

                p-4
                "
              >

                <p
                  className="
                  text-xs

                  uppercase

                  tracking-wider

                  text-slate-400

                  font-semibold
                  "
                >

                  Department Contact

                </p>

                <p
                  className="
                  mt-2

                  text-xl

                  font-black

                  text-slate-900
                  "
                >

                  +91 {dept.number}

                </p>

              </div>

              <div
                className="
                mt-7

                grid
                grid-cols-2

                gap-3
                "
              >

                <a
                  href={`tel:+91${dept.number}`}

                  className="
                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  hover:from-cyan-400
                  hover:to-blue-500

                  text-white

                  py-4

                  rounded-2xl

                  font-semibold

                  shadow-lg

                  transition-all
                  duration-300
                  "
                >

                  <Phone
                    className="
                    w-4
                    h-4
                    "
                  />

                  Call

                </a>

                <Link
                  href={`/departments/${dept.slug}`}

                  className="
                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  border
                  border-slate-200

                  hover:bg-slate-50

                  text-slate-700

                  py-4

                  rounded-2xl

                  font-semibold

                  transition-all
                  duration-300
                  "
                >

                  View

                  <ChevronRight
                    className="
                    w-4
                    h-4
                    "
                  />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}