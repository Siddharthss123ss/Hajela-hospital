"use client";

import {
  Users,
  Stethoscope,
  Ambulance,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: "100+",
    text: "Expert Doctors",
    icon: Stethoscope,
  },

  {
    number: "50K+",
    text: "Happy Patients",
    icon: Users,
  },

  {
    number: "24/7",
    text: "Emergency Service",
    icon: Ambulance,
  },

  {
    number: "25+",
    text: "Years Experience",
    icon: ShieldCheck,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        bg-[url('/hospital/stats-bg.jpg')]
        bg-cover
        bg-center
        "
      ></div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        container-custom
        py-10
        "
      >

        <div
          className="
          flex
          flex-wrap
          lg:flex-nowrap
          justify-between
          items-center
          gap-y-10
          text-center
          "
        >

          {stats.map((item, i) => (

            <div
              key={i}
              className="
              w-1/2
              lg:w-auto
              flex
              flex-col
              items-center
              group
              transition-all
              duration-500
              hover:-translate-y-3
              "
            >

              {/* ICON */}

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/10
                flex
                items-center
                justify-center
                mb-5
                animate-pulse
                group-hover:bg-cyan-500/30
                group-hover:scale-110
                transition-all
                duration-500
                shadow-[0_0_30px_rgba(34,211,238,0.3)]
                "
              >

                <item.icon
                  size={42}
                  className="
                  text-white
                  group-hover:rotate-6
                  transition-all
                  duration-500
                  "
                  strokeWidth={1.8}
                />

              </div>

              {/* NUMBER */}

              <h2
                className="
                text-3xl
                lg:text-5xl
                font-bold
                text-white
                leading-none
                group-hover:text-cyan-300
                transition-all
                duration-500
                "
              >
                {item.number}
              </h2>

              {/* TEXT */}

              <p
                className="
                mt-3
                text-sm
                lg:text-base
                text-slate-300
                group-hover:text-white
                transition-all
                duration-500
                "
              >
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}