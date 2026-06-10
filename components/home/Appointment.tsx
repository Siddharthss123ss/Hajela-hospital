"use client";
import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  Shield,
  Heart,
  Star,
  Stethoscope,
} from "lucide-react";

export default function Appointment() {

  const departments = [

    {
      title: "IVF & Infertility Centre",
      number: "7777802361",
      icon: "🧬",
    },

    {
      title: "General Medicine",
      number: "9977744455",
      icon: "💊",
    },

    {
      title: "Maternity & Women Care",
      number: "7777802361",
      icon: "🌸",
    },

    {
      title: "Pathology",
      number: "7777802363",
      icon: "🧪",
    },

    {
  title: "ICCU & Critical Care",
  number: "9827014395",
  icon: "/icons/iccu.png",
},

    {
      title: "Cochlear Implant Centre",
      number: "7777802365",
      icon: "🦻",
    },

   {
  title: "Sonology & Imaging",
  number: "7777802362",
  icon: "/icons/sonologys.png",
},

    {
  title: "ENT & Voice Disorders",
  number: "7777802365",
  icon: "/icons/ents.png",
},

    {
      title: "Orthopaedics & Joint Replacement",
      number: "7777802366",
      icon: "🦴",
    },

    {
      title: "Radiology & Imaging",
      number: "7777802362",
      icon: "🩻",
    },

    {
      title: "Pediatrics & NICU",
      number: "9131365005",
      icon: "👶",
    },

    {
      title: "Emergency & Trauma Care",
      number: "07552773393",
      icon: "🚨",
    },

  ];

  const features = [

    {
      icon: Shield,
      text: "Trusted Multispeciality Healthcare",
      color: "text-cyan-300",
    },

    {
      icon: Heart,
      text: "Advanced Patient Care Facilities",
      color: "text-pink-300",
    },

    {
      icon: Star,
      text: "Experienced Specialists & Surgeons",
      color: "text-yellow-300",
    },

  ];

  return (

    <section
      id="appointment"

      className="
      relative
      py-20
      md:py-24
      lg:py-28

      bg-gradient-to-br
      from-slate-50
      via-white
      to-cyan-50/40

      overflow-hidden
      "
    >

      {/* BACKGROUND */}

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

        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8
        "
      >

        {/* HEADING */}

        <div className="text-center mb-16">

          <div
            className="
            inline-flex
            items-center
            gap-2

            bg-white/[0.08]
backdrop-blur-2xl

            border
            border-slate-200

            shadow-sm

            px-5
            py-2

            rounded-full

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

              Contact Departments

            </span>

          </div>

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

            Connect With{" "}

            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >

              Our Departments

            </span>

          </h2>

          <p
            className="
            mt-6

            max-w-3xl
            mx-auto

            text-slate-500

            text-base
            md:text-lg

            leading-relaxed
            "
          >

            Easily connect with our specialized departments
            for consultations, healthcare support, diagnostics
            and patient assistance directly through call support.

          </p>

          

        </div>
        

        {/* MAIN CONTAINER */}

        <div
          className="
          relative

          bg-gradient-to-br
          from-blue-950
          via-indigo-950
          to-cyan-900

          rounded-[2.5rem]

          overflow-hidden

          shadow-[0_30px_100px_rgba(15,23,42,0.25)]
          "
        >

          {/* GLOW */}

          <div
            className="
            absolute
            -top-24
            -right-24

            w-72
            h-72

            bg-cyan-400/20

            rounded-full

            blur-[90px]
            "
          ></div>

          <div
            className="
            relative
            z-10

            grid
            lg:grid-cols-2
            "
          >

            {/* LEFT */}

            <div
              className="
              p-8
              md:p-12
              lg:p-14
              "
            >

              <div
                className="
                inline-flex
                items-center
                gap-2

                bg-white/10

                border
                border-white/10

                px-4
                py-2

                rounded-full

                mb-8
                "
              >

                <Star
                  className="
                  w-4
                  h-4

                  text-yellow-400
                  fill-yellow-400
                  "
                />

                <span
                  className="
                  text-white/90
                  text-sm
                  font-medium
                  "
                >

                  Hajela Hospital Bhopal

                </span>

              </div>

              <h3
                className="
                text-4xl
                md:text-5xl

                font-black

                text-white

                leading-tight
                "
              >

                Direct Department

                <span
                  className="
                  block
                  mt-2

                  text-cyan-300
                  "
                >

                  Contact Support

                </span>

              </h3>

              <p
                className="
                mt-6

                text-slate-300

                leading-relaxed

                text-base
                md:text-lg
                "
              >

                Contact our healthcare departments directly
                for treatment information, appointments,
                diagnostics and medical support assistance.

              </p>

              {/* FEATURES */}

              <div
                className="
                mt-10
                space-y-5
                "
              >

                {features.map((item, index) => (

                  <div
                    key={index}

                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      w-10
                      h-10

                      rounded-full

                      bg-white/10

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <item.icon
                        className={`
                        w-5
                        h-5
                        ${item.color}
                        `}
                      />

                    </div>

                    <p
                      className="
                      text-white
                      text-base
                      "
                    >

                      {item.text}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
              bg-white/10
              backdrop-blur-xl

              border-l
              border-white/10

              p-6
              md:p-8
              lg:p-10
              "
            >

              <div
                className="
                grid
                md:grid-cols-2
                gap-5
                "
              >

                {departments.map((dept, index) => (

                  <div
  key={index}

  className="
  group

  bg-white/[0.08]

  border
  border-white/10

  rounded-3xl

  p-6

  backdrop-blur-2xl

  hover:bg-white/[0.12]
  hover:border-cyan-400/40
  hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
  hover:-translate-y-2

  transition-all
  duration-300
  "
>
<div className="mb-3">
  {typeof dept.icon === "string" &&
  dept.icon.startsWith("/icons") ? (
    <Image
      src={dept.icon}
      alt={dept.title}
      width={52}
      height={52}
      className="object-contain"
    />
  ) : (
    <div className="text-4xl">{dept.icon}</div>
  )}
</div>

                   <h4
  className="
  mt-4

  text-xl
  font-bold

  bg-gradient-to-r
  from-white
  to-cyan-200

  bg-clip-text
  text-transparent
  "
>

                      {dept.title}

                    </h4>

                    <p
                      className="
                      mt-3

                      text-cyan-200

                      text-lg

                      font-medium
                      "
                    >

                      +91 {dept.number}

                    </p>

                    <a
                      href={`tel:+91${dept.number}`}
className="
mt-6

inline-flex
items-center
justify-center
gap-2

w-full

bg-gradient-to-r
from-cyan-500
to-blue-600

hover:from-cyan-400
hover:to-blue-500

text-white

py-3.5

rounded-2xl

font-semibold

shadow-[0_10px_30px_rgba(6,182,212,0.35)]

hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)]

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

                      Call Department

                    </a>

                    

                  </div>

                  

                ))}

              </div>

            </div>

          </div>

        </div>
        <div className="flex justify-center mt-8">

  <Link
    href="/contact"
    className="
    inline-flex
    items-center
    justify-center
    gap-2

    px-8
    py-4

    rounded-2xl

    bg-gradient-to-r
    from-cyan-500
    to-blue-600

    hover:from-cyan-400
    hover:to-blue-500

    text-white
    font-semibold

    shadow-lg

    transition-all
    duration-300
    "
  >
    📞 View All Contacts
  </Link>

</div>

      </div>
      

    </section>
    

  );

}