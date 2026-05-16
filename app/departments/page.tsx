"use client";

import {

  Ear,
  Baby,
  Activity,
  Microscope,
  ShieldPlus,
  Stethoscope,
  Hospital,
  ScanHeart,
  HeartHandshake,
  Bone,
  HeartPulse,
  Ambulance,

} from "lucide-react";

const services = [

  {
    title: "ENT & Voice Disorders",
    icon: Ear,

    desc:
      "Advanced ENT treatments for ear, nose, throat, sinus, allergy, hearing and professional voice disorders with modern technology.",
  },

  {
    title: "Cochlear Implant Centre",
    icon: HeartHandshake,

    desc:
      "Specialized cochlear implant surgeries and hearing restoration services with expert ENT surgeons and rehabilitation support.",
  },

  {
    title: "Orthopaedics & Joint Replacement",
    icon: Bone,

    desc:
      "Comprehensive orthopedic care including trauma management, fracture treatment and advanced joint replacement surgeries.",
  },

  {
    title: "IVF & Infertility Centre",
    icon: HeartPulse,

    desc:
      "Advanced fertility solutions including IVF, ICSI, infertility consultation and reproductive healthcare support.",
  },

  {
    title: "Pediatrics & NICU",
    icon: Baby,

    desc:
      "Complete child healthcare services with advanced NICU support, vaccinations, newborn care and pediatric specialists.",
  },

  {
    title: "Emergency & Trauma Care",
    icon: Activity,

    desc:
      "24/7 emergency medical support with ICU backup, trauma specialists, ambulance services and rapid critical care response.",
  },

  {
    title: "Radiology & Imaging",
    icon: ScanHeart,

    desc:
      "Advanced imaging services including ultrasound, digital X-ray, radiology and precise diagnostic scanning facilities.",
  },

  {
    title: "Advanced Diagnostics",
    icon: Microscope,

    desc:
      "Modern pathology and laboratory services ensuring fast, accurate and reliable medical diagnosis for patients.",
  },

  {
    title: "General Medicine",
    icon: Stethoscope,

    desc:
      "Comprehensive healthcare consultations and treatment plans for fever, infections, chronic diseases and preventive care.",
  },

  {
    title: "ICU & Critical Care",
    icon: ShieldPlus,

    desc:
      "Advanced ICU and CCU facilities with expert intensivists, ventilator support and round-the-clock monitoring systems.",
  },

  {
    title: "Maternity & Women Care",
    icon: HeartHandshake,

    desc:
      "Specialized gynecology and maternity care including normal delivery, cesarean procedures and women wellness programs.",
  },

  {
    title: "Hospital & Ambulance Services",
    icon: Ambulance,

    desc:
      "Complete hospital care with ambulance support, patient assistance, emergency transport and modern healthcare infrastructure.",
  },

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
      to-cyan-50/30

      min-h-screen
      "
    >

      {/* SOFT GLOW */}

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
              {" "}Medical Services
            </span>

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
            Hajela Hospital provides advanced healthcare,
            modern medical infrastructure, emergency care,
            IVF services, trauma support and specialized
            treatments with experienced doctors and surgeons.
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

          {services.map((service, index) => (

            <div
              key={index}

              className="
              group
              relative

              overflow-hidden

              rounded-[34px]

              border
              border-slate-200/70

              bg-white

              p-8

              min-h-[320px]

              shadow-[0_10px_50px_rgba(15,23,42,0.06)]

              hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

              hover:-translate-y-1

              transition-all
              duration-500

              cursor-pointer
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

                <service.icon
                  size={34}
                  className="text-white"
                />

              </div>

              {/* TITLE */}

              <h2
                className="
                relative
                z-10

                text-[24px]

                font-black

                text-slate-900

                leading-snug
                "
              >
                {service.title}
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
                {service.desc}
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

          ))}

        </div>

      </div>

    </main>

  );

}