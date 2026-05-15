"use client";

import {
  HeartPulse,
  Ambulance,
  Brain,
  Baby,
  Activity,
  Microscope,
  ShieldPlus,
  Stethoscope,
  Hospital,
  ScanHeart,
} from "lucide-react";

const services = [

  "Hospital",
  "Ambulance Service",
  "Anesthesiology",
  "Cardiology",
  "Diagnostic Imaging",
  "Emergency Care",
  "Gastroenterology",
  "General Checkups",
  "General Surgery",
  "Hospice Care",
  "Laboratory Services",
  "Maternity Care",
  "Mental Health Care",
  "Neurology",
  "Nursing Services",
  "Orthopedics",
  "Outpatient Services",
  "Pediatrics",
  "Pharmacy Services",
  "Physical Therapy",
  "Psychiatry",
  "Psychology",
  "X-ray & Radiology Services",
  "Orthopedic & Joint Replacement Surgery",
  "ENT Specialist",
  "Infertility Specialist",
  "NICU for New Born & Paediatrics",
  "Paediatrician",
  "General Medicine",
  "ICU & CCU",
  "Trauma Centre",
  "Imaging Centre",
  "NABH Hospital in Bhopal",
  "Gynecologist",
  "Child Birth through Normal & Caesarean Procedure",
  "IVF & Infertility Clinic",
  "Ultrasound",
  "Otolaryngology Clinic",
  "ENT Specialist for Ear, Nose & Throat Diseases",

];

const icons = [

  HeartPulse,
  Ambulance,
  Brain,
  Baby,
  Activity,
  Microscope,
  ShieldPlus,
  Stethoscope,
  Hospital,
  ScanHeart,

];

export default function DepartmentsPage() {

  return (

    <main
      className="
      relative
      pt-32
      pb-24

      overflow-hidden

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/40

      min-h-screen
      "
    >

      {/* PREMIUM BACKGROUND GLOW */}

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

        blur-[160px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-20">

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
            Hajela Hospital
          </p>

          <h1
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-slate-900

            leading-tight
            "
          >
            All Medical Services
          </h1>

          <p
            className="
            mt-6

            text-slate-600

            max-w-3xl

            mx-auto

            leading-relaxed

            text-sm
            sm:text-base
            "
          >
            Advanced healthcare services with experienced
            specialists, world-class infrastructure,
            emergency support and modern medical technology.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
          grid

          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4

          gap-7
          "
        >

          {services.map((service, index) => {

            const Icon =
              icons[index % icons.length];

            return (

              <div
                key={index}

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

                min-h-[260px]

                shadow-[0_10px_50px_rgba(15,23,42,0.08)]

                hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]

                hover:-translate-y-4

                transition-all
                duration-700

                cursor-pointer
                "
              >

                {/* PREMIUM GLOW */}

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

                {/* BORDER LIGHT */}

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

                  <Icon
                    size={34}
                    className="text-white"
                  />

                </div>

                {/* TITLE */}

                <h2
                  className="
                  relative
                  z-10

                  text-[22px]

                  font-black

                  text-slate-900

                  leading-snug
                  "
                >
                  {service}
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                  relative
                  z-10

                  mt-4

                  text-slate-600

                  text-sm

                  leading-relaxed
                  "
                >
                  Premium healthcare service with
                  experienced specialists and
                  advanced medical technology.
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

            );

          })}

        </div>

      </div>

    </main>

  );

}