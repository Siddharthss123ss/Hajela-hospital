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
      "Modern Cath Lab facility for advanced cardiac procedures.",
  },

  {
    title: "PET-CT Scanner",
    image: "/hospital/petct.jpg",
    desc:
      "State-of-the-art PET-CT scanner for cancer detection.",
  },

  {
    title: "Gamma Camera",
    image: "/hospital/gamma.jpg",
    desc:
      "High-resolution gamma camera system for nuclear medicine imaging.",
  },

  {
    title: "Robotic Surgery",
    image: "/hospital/robotic.jpg",
    desc:
      "Advanced robotic-assisted surgeries with greater precision.",
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
      "Critical life support system for severe heart and lung conditions.",
  },

];

export default function Technology() {

  const [active, setActive] = useState(technologies[0]);

  return (

    <section
      className="
      relative
      py-24
      bg-[#020617]
      overflow-hidden
      "
    >

      {/* PREMIUM GLOW */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        blur-[140px]
        rounded-full
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        left-0
        w-[400px]
        h-[400px]
        bg-blue-500/10
        blur-[140px]
        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* TOP */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-400
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
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
            text-white
            "
          >
            Our Technological
            <span className="gradient-text">
              {" "}Advancements
            </span>
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-slate-300
            leading-relaxed
            "
          >
            World-class medical technologies and modern healthcare systems
            ensuring precision diagnostics and advanced treatment.
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
            bg-white/5
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[32px]
            overflow-hidden
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
                text-left
                px-7
                py-6
                border-b
                border-white/5
                transition-all
                duration-500
                overflow-hidden
                ${
                  active.title === item.title
                    ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white"
                    : "text-slate-300 hover:bg-white/5"
                }
                `}
              >

                {/* ACTIVE GLOW */}

                {
                  active.title === item.title && (

                    <div
                      className="
                      absolute
                      inset-0
                      bg-white/10
                      blur-2xl
                      "
                    ></div>

                  )
                }

                <div
                  className="
                  relative
                  flex
                  items-center
                  justify-between
                  "
                >

                  <span
                    className="
                    font-semibold
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
            bg-white/5
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[36px]
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
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
                w-full
                h-[300px]
                sm:h-[450px]
                lg:h-[720px]
                object-cover
                transition-all
                duration-700
                hover:scale-105
                "
              />

              {/* OVERLAY */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
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
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-full
                  px-5
                  py-2
                  text-white
                  text-sm
                  font-semibold
                  mb-5
                  "
                >
                  Advanced Technology
                </div>

                <h3
                  className="
                  text-white
                  text-3xl
                  sm:text-5xl
                  font-black
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
                text-slate-300
                leading-relaxed
                text-base
                sm:text-lg
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
                mt-10
                "
              >

                {[
                  "Modern Equipment",
                  "Expert Specialists",
                  "Advanced Patient Care",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-5
                    text-center
                    backdrop-blur-xl
                    hover:bg-white/10
                    transition-all
                    duration-300
                    "
                  >

                    <p
                      className="
                      text-white
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