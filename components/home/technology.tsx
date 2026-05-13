"use client";

import Image from "next/image";
import { useState } from "react";

const technologies = [

  {
    title: "MRI System",
    image: "/hospital/mri.jpg",
    desc:
      "Advanced MRI technology for highly accurate diagnostics and detailed body imaging.",
  },

  {
    title: "Cath Lab",
    image: "/hospital/cathlab.jpg",
    desc:
      "Modern Cath Lab facility for advanced cardiac procedures and minimally invasive treatments.",
  },

  {
    title: "PET-CT Scanner",
    image: "/hospital/petct.jpg",
    desc:
      "State-of-the-art PET-CT scanner for cancer detection and precision diagnosis.",
  },

  {
    title: "Gamma Camera",
    image: "/hospital/gamma.jpg",
    desc:
      "High-resolution gamma camera system for nuclear medicine imaging and disease evaluation.",
  },

  {
    title: "Robotic Surgery",
    image: "/hospital/robotic.jpg",
    desc:
      "Advanced robotic-assisted surgeries with greater precision, safety, and faster recovery.",
  },

  {
    title: "IVF & Fertility Centre",
    image: "/hospital/ivf.jpg",
    desc:
      "Comprehensive fertility and IVF treatments with modern reproductive technology.",
  },

  {
    title: "Advanced ECMO",
    image: "/hospital/ecmo.jpg",
    desc:
      "Critical life support system for severe heart and lung conditions with expert monitoring.",
  },

];

export default function Technology() {

  const [active, setActive] = useState(technologies[0]);

  return (

    <section
      className="
      relative
      py-20
      bg-gradient-to-b
      from-slate-50
      to-white
      overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[400px]
        h-[400px]
        bg-cyan-500/10
        blur-[120px]
        rounded-full
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        left-0
        w-[350px]
        h-[350px]
        bg-blue-500/10
        blur-[120px]
        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-14">

          <p
            className="
            text-cyan-600
            font-semibold
            mb-3
            tracking-[3px]
            uppercase
            "
          >
            Advanced Facilities
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-black
            text-slate-900
            leading-tight
            "
          >
            Our Technological
            <span className="gradient-text"> Advancements</span>
          </h2>

          <p
            className="
            mt-5
            text-slate-600
            max-w-3xl
            mx-auto
            leading-relaxed
            text-sm
            sm:text-base
            "
          >
            Hajela Hospital provides advanced healthcare technology,
            precision diagnostics, robotic systems, and modern
            treatment facilities for world-class patient care.
          </p>

        </div>

        {/* MAIN CONTAINER */}

        <div
          className="
          grid
          lg:grid-cols-[320px_1fr]
          gap-6
          items-start
          "
        >

          {/* LEFT MENU */}

          <div
            className="
            bg-white/70
            backdrop-blur-2xl
            border
            border-white/30
            rounded-[28px]
            shadow-[0_10px_40px_rgba(15,23,42,0.08)]
            overflow-hidden
            "
          >

            {technologies.map((item, index) => (

              <button
                key={index}
                onClick={() => setActive(item)}
                className={`
                group
                w-full
                flex
                items-center
                justify-between
                px-6
                py-5
                text-left
                transition-all
                duration-300
                border-b
                border-slate-100
                ${
                  active.title === item.title
                    ? "bg-gradient-to-r from-blue-700 to-cyan-500 text-white"
                    : "hover:bg-slate-50 text-slate-700"
                }
                `}
              >

                <span
                  className="
                  font-semibold
                  text-[15px]
                  sm:text-[16px]
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

              </button>

            ))}

          </div>

          {/* RIGHT CONTENT */}

          <div
            className="
            bg-white/70
            backdrop-blur-2xl
            border
            border-white/30
            rounded-[30px]
            overflow-hidden
            shadow-[0_15px_60px_rgba(15,23,42,0.08)]
            "
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden">

              <Image
                src={active.image}
                alt={active.title}
                width={1400}
                height={900}
                className="
                w-full
                h-[260px]
                sm:h-[400px]
                lg:h-[620px]
                object-cover
                transition-all
                duration-700
                hover:scale-105
                "
              />

              {/* IMAGE OVERLAY */}

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

              {/* TITLE */}

              <div
                className="
                absolute
                bottom-0
                left-0
                w-full
                p-6
                sm:p-8
                "
              >

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-full
                  px-4
                  py-2
                  text-white
                  text-sm
                  font-semibold
                  mb-4
                  "
                >
                  Advanced Technology
                </div>

                <h3
                  className="
                  text-white
                  text-2xl
                  sm:text-4xl
                  font-black
                  "
                >
                  {active.title}
                </h3>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-6 sm:p-8 lg:p-10">

              <p
                className="
                text-slate-600
                leading-relaxed
                text-sm
                sm:text-base
                "
              >
                {active.desc}
              </p>

              {/* FEATURES */}

              <div
                className="
                grid
                sm:grid-cols-3
                gap-4
                mt-8
                "
              >

                {[
                  "Modern Technology",
                  "Expert Specialists",
                  "24/7 Patient Care",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                    bg-slate-50
                    rounded-2xl
                    px-5
                    py-4
                    border
                    border-slate-100
                    text-center
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                  >

                    <p
                      className="
                      text-slate-800
                      font-semibold
                      text-sm
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