"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CheckCircle,
  Heart,
  Stethoscope,
  Ambulance,
  ArrowRight,
} from "lucide-react";

const features = [

  {
    text: "24/7 Emergency & Trauma Care",
    icon: Ambulance,
    color: "text-red-500",
  },

  {
    text: "Experienced Specialist Doctors",
    icon: Stethoscope,
    color: "text-blue-500",
  },

  {
    text: "Modern ICU & Robotic Surgeries",
    icon: Heart,
    color: "text-pink-500",
  },

  {
    text: "Advanced IVF & Diagnostic Facilities",
    icon: CheckCircle,
    color: "text-emerald-500",
  },

];

export default function About() {

  return (

    <section
      className="
      relative

      py-32

      overflow-hidden

      bg-gradient-to-br
      from-white
      via-blue-50/30
      to-cyan-50/20
      "
    >

      {/* PREMIUM BACKGROUND */}

      <div
        className="
        absolute
        inset-0

        overflow-hidden

        pointer-events-none
        "
      >

        <div
          className="
          absolute
          -top-40
          -right-40

          w-80
          h-80

          rounded-full

          bg-cyan-300

          mix-blend-multiply

          blur-3xl

          opacity-20

          animate-pulse
          "
        ></div>

        <div
          className="
          absolute
          -bottom-40
          -left-40

          w-80
          h-80

          rounded-full

          bg-blue-400

          mix-blend-multiply

          blur-3xl

          opacity-20

          animate-pulse
          delay-1000
          "
        ></div>

      </div>

      <div
        className="
        container-custom

        max-w-7xl

        mx-auto

        px-4
        sm:px-6
        lg:px-8

        relative
        z-10
        "
      >

        <div
          className="
          grid
          lg:grid-cols-2

          gap-16
          lg:gap-24

          items-center
          "
        >

          {/* LEFT IMAGE SECTION */}

          <div className="relative group">

            {/* MAIN IMAGE */}

            <div
              className="
              relative

              overflow-hidden

              rounded-[48px]

              ring-4
              ring-white/50

              shadow-[0_20px_80px_rgba(0,0,0,0.12)]

              transition-all
              duration-700

              group-hover:scale-[1.02]
              "
            >

              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-slate-900/40
                via-transparent
                to-transparent

                z-10
                "
              ></div>

              <Image
                src="/hospital/about.webp"
                alt="Hajela Hospital"

                width={700}
                height={800}

                priority

                className="
                w-full

                h-[520px]

                object-cover

                transition-all
                duration-700

                group-hover:scale-105
                "
              />

            </div>

            {/* FLOATING IMAGE */}

            <div
              className="
              absolute
              -bottom-12
              -right-8
              lg:-right-12

              overflow-hidden

              rounded-[32px]

              border-[6px]
              border-white

              shadow-[0_20px_60px_rgba(0,0,0,0.18)]

              transition-all
              duration-500

              hover:scale-105
              hover:rotate-2

              z-20
              "
            >

              <Image
                src="/hospital/about2.jpg"
                alt="Doctors Team"

                width={320}
                height={250}

                className="
                w-[220px]
                h-[200px]

                lg:w-[270px]
                lg:h-[240px]

                object-cover
                "
              />

            </div>

            {/* EXPERIENCE CARD */}

            <div
              className="
              absolute
              top-8
              -left-6

              lg:top-12
              lg:-left-10

              rounded-[32px]

              bg-gradient-to-br
              from-blue-900
              via-cyan-700
              to-cyan-500

              text-white

              p-6
              lg:p-8

              shadow-[0_20px_60px_rgba(6,182,212,0.30)]

              backdrop-blur-xl

              transition-all
              duration-500

              hover:scale-105

              z-20
              "
            >

              <h3
                className="
                text-5xl
                lg:text-6xl

                font-extrabold

                tracking-tight
                "
              >
                30
                <span className="text-cyan-200">
                  +
                </span>
              </h3>

              <p
                className="
                mt-2

                text-sm
                lg:text-base

                font-medium

                uppercase

                tracking-wide
                "
              >
                Years Of Healthcare Excellence
              </p>

              <div
                className="
                mt-3

                h-1
                w-12

                rounded-full

                bg-white/40
                "
              ></div>

            </div>

            {/* DECORATIVE CIRCLE */}

            <div
              className="
              absolute
              -bottom-4
              -left-4

              w-24
              h-24

              rounded-full

              border-2
              border-cyan-200

              opacity-50
              "
            ></div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="space-y-8">

            {/* SUBTITLE */}

            <div
              className="
              flex
              items-center

              gap-3
              "
            >

              <div
                className="
                h-8
                w-1

                rounded-full

                bg-gradient-to-b
                from-blue-900
                to-cyan-500
                "
              ></div>

              <p
                className="
                text-cyan-600

                font-bold

                uppercase

                tracking-wider

                text-lg
                "
              >
                About Hajela Hospital
              </p>

            </div>

            {/* MAIN HEADING */}

            <h2
              className="
              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-extrabold

              leading-[1.15]

              tracking-tight

              text-slate-900
              "
            >

              Leading Bhopal’s
              <span
                className="
                bg-gradient-to-r
                from-blue-900
                via-cyan-600
                to-cyan-500

                bg-clip-text
                text-transparent
                "
              >
                {" "}
                Future Of
              </span>

              <br />

              Premium Healthcare

            </h2>

            {/* DESCRIPTION */}

            <p
              className="
              border-l-4
              border-cyan-500

              pl-6

              text-lg

              leading-relaxed

              text-slate-600
              "
            >

              Established in 1995, Hajela Hospital has become one
              of Bhopal’s most trusted and advanced healthcare
              institutions. With world-class infrastructure,
              robotic surgeries, IVF & infertility treatments,
              modern ICU facilities, trauma care, and experienced
              specialists, the hospital is dedicated to delivering
              exceptional medical excellence with compassion and
              innovation.

            </p>

            {/* FEATURES */}

            <div
              className="
              grid

              gap-5

              pt-4
              "
            >

              {features.map((item, index) => (

                <div
                  key={index}

                  className="
                  group/item

                  flex
                  items-center

                  gap-4

                  rounded-2xl

                  border
                  border-slate-100

                  bg-white/70

                  backdrop-blur-sm

                  p-4

                  shadow-sm

                  hover:-translate-y-1

                  hover:shadow-xl

                  transition-all
                  duration-300
                  "
                >

                  <div
                    className="
                    rounded-full

                    bg-gradient-to-br
                    from-blue-50
                    to-cyan-50

                    p-3

                    group-hover/item:scale-110

                    transition-transform
                    "
                  >

                    <item.icon
                      className={`
                      w-6
                      h-6

                      ${item.color}
                      `}
                    />

                  </div>

                  <p
                    className="
                    text-lg

                    font-medium

                    text-slate-700

                    group-hover/item:text-slate-900
                    "
                  >
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

            {/* BUTTON */}

            <div className="pt-4">

              <Link
                href="/about"

                className="
                group/btn
                relative

                inline-flex
                items-center
                gap-3

                overflow-hidden

                rounded-full

                bg-gradient-to-r
                from-blue-900
                via-blue-700
                to-cyan-500

                px-9
                py-4

                text-lg
                font-semibold

                text-white

                shadow-[0_10px_40px_rgba(6,182,212,0.35)]

                hover:scale-105

                transition-all
                duration-500
                "
              >

                <span className="relative z-10">

                  Discover More

                </span>

                <ArrowRight
                  className="
                  relative
                  z-10

                  w-5
                  h-5

                  transition-all
                  duration-300

                  group-hover/btn:translate-x-1
                  "
                />

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-900

                  opacity-0

                  group-hover/btn:opacity-100

                  transition-all
                  duration-500
                  "
                ></div>

              </Link>

            </div>

            {/* TRUST BADGES */}

            <div
              className="
              flex
              flex-wrap

              gap-4

              pt-6
              "
            >

              <div
                className="
                flex
                items-center

                gap-2

                text-sm

                text-slate-500
                "
              >

                <div
                  className="
                  w-2
                  h-2

                  rounded-full

                  bg-green-500

                  animate-pulse
                  "
                ></div>

                <span>

                  24/7 Emergency Available

                </span>

              </div>

              <div
                className="
                flex
                items-center

                gap-2

                text-sm

                text-slate-500
                "
              >

                <div
                  className="
                  w-2
                  h-2

                  rounded-full

                  bg-blue-500
                  "
                ></div>

                <span>

                  NABH Accredited Hospital

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}