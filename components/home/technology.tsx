"use client";

import Image from "next/image";
import { useState } from "react";

const technologies = [

  {
    title: "ICCU & NICU Care",

    image: "/hospital/ICCU.jpeg",

    desc:
      "Advanced ICU and NICU facilities with ventilator support, critical care specialists, neonatal monitoring systems and 24/7 emergency medical supervision for adults and newborns.",
  },

  {
    title: "Robotic Surgery",

    image: "/hospital/orthopedic.jpeg",

    desc:
      "Modern robotic-assisted surgical procedures offering greater precision, smaller incisions, faster recovery and advanced minimally invasive treatment solutions.",
  },

  {
    title: "IVF & Fertility Centre",

    image: "/hospital/ivf.jpg",

    desc:
      "Comprehensive fertility and reproductive healthcare services including IVF, ICSI, infertility consultation and personalized fertility treatments with modern reproductive technology.",
  },

  {
    title: "ENT & Voice Disorders",

    image: "/hospital/ent.jpeg",

    desc:
      "Specialized ENT treatments for ear, nose, throat, sinus, allergy and voice disorders using advanced diagnostic and minimally invasive surgical techniques.",
  },

  {
    title: "Cochlear Implantation Centre",

    image: "/hospital/ot.jpeg",

    desc:
      "Advanced cochlear implant procedures helping patients restore hearing abilities with expert ENT surgeons, hearing rehabilitation and modern implant technologies.",
  },

];

export default function Technology() {

  const [active, setActive] = useState(technologies[0]);

  return (

    <section
      className="
      relative

      overflow-hidden

      py-24
      lg:py-28

      bg-white
      "
    >

      {/* SOFT BG */}

      <div
        className="
        absolute
        top-0
        right-0

        w-[600px]
        h-[600px]

        rounded-full

        bg-cyan-100/40

        blur-[140px]
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        left-0

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-100/30

        blur-[140px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* TOP */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-600

            uppercase

            tracking-[4px]

            text-sm

            font-bold

            mb-4
            "
          >
            Advanced Facilities
          </p>

          <h2
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-slate-900

            leading-tight
            "
          >

            Advanced Medical
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Technology
            </span>

          </h2>

          <p
            className="
            mt-6

            max-w-3xl

            mx-auto

            text-slate-600

            leading-relaxed
            "
          >
            Hajela Hospital provides advanced healthcare
            technology with modern surgical systems,
            fertility treatments, critical care support
            and specialized ENT healthcare services.
          </p>

        </div>

        {/* MAIN */}

        <div
          className="
          grid
          lg:grid-cols-[340px_1fr]

          gap-8

          items-start
          "
        >

          {/* LEFT SIDE */}

          <div
            className="
            overflow-hidden

            rounded-[32px]

            border
            border-slate-200

            bg-white

            shadow-[0_10px_40px_rgba(15,23,42,0.06)]
            "
          >

            {technologies.map((item, index) => (

              <button
                key={index}

                onClick={() => setActive(item)}

                className={`
                group

                relative

                w-full

                overflow-hidden

                border-b
                border-slate-100

                px-7
                py-6

                text-left

                transition-all
                duration-500

                ${
                  active.title === item.title

                    ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white"

                    : "bg-white text-slate-700 hover:bg-slate-50"
                }
                `}
              >

                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >

                  <span
                    className="
                    font-bold

                    text-[15px]
                    sm:text-[17px]
                    "
                  >
                    {item.title}
                  </span>

                  <span
                    className={`
                    text-xl

                    transition-all
                    duration-300

                    ${
                      active.title === item.title

                        ? "translate-x-1"

                        : "group-hover:translate-x-1"
                    }
                    `}
                  >
                    →
                  </span>

                </div>

              </button>

            ))}

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
            overflow-hidden

            rounded-[36px]

            border
            border-slate-200

            bg-white

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden">

              <Image
                key={active.image}

                src={active.image}

                alt={active.title}

                width={1600}

                height={1000}

                className="
                h-[300px]
                sm:h-[450px]
                lg:h-[650px]

                w-full

                object-cover

                transition-all
                duration-700

                hover:scale-[1.02]
                "
              />

              {/* OVERLAY */}

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

              {/* CONTENT */}

              <div
                className="
                absolute
                bottom-0
                left-0

                w-full

                p-6
                sm:p-10
                "
              >

                <div
                  className="
                  inline-flex

                  items-center

                  gap-2

                  rounded-full

                  bg-white/15

                  border
                  border-white/20

                  px-5
                  py-2

                  text-sm
                  font-semibold

                  text-white

                  backdrop-blur-xl

                  mb-5
                  "
                >
                  Advanced Healthcare Facility
                </div>

                <h3
                  className="
                  text-3xl
                  sm:text-5xl

                  font-black

                  text-white
                  "
                >
                  {active.title}
                </h3>

              </div>

            </div>

            {/* DESCRIPTION */}

            <div className="p-7 sm:p-10">

              <p
                className="
                text-base
                sm:text-lg

                leading-relaxed

                text-slate-600
                "
              >
                {active.desc}
              </p>

              {/* FEATURES */}

              <div
                className="
                mt-10

                grid
                sm:grid-cols-3

                gap-4
                "
              >

                {[
                  "Modern Technology",
                  "Expert Specialists",
                  "Advanced Patient Care",
                ].map((item, index) => (

                  <div
                    key={index}

                    className="
                    rounded-2xl

                    border
                    border-slate-200

                    bg-slate-50

                    px-5
                    py-5

                    text-center

                    hover:bg-cyan-50

                    transition-all
                    duration-300
                    "
                  >

                    <p
                      className="
                      text-sm

                      font-semibold

                      text-slate-700
                      "
                    >
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}