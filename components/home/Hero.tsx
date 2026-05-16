"use client";

import {
  Zap,
  Stethoscope,
  Ambulance,
  ShieldCheck,
  Ear,
  Bone,
  HeartPulse,
} from "lucide-react";

export default function Hero() {

  return (

    <section
      className="
      relative

      overflow-hidden

      bg-white

      pt-[92px]
      "
    >

      {/* TOP TECHNOLOGY BAR */}

      <div
        className="
        w-full

        overflow-hidden

        bg-gradient-to-r
        from-cyan-700
        via-blue-700
        to-cyan-700

        py-3
        "
      >

        <div
          className="
          animate-marquee

          inline-flex

          whitespace-nowrap

          gap-12

          px-6
          "
        >

          {/* ITEMS */}

          <div className="flex items-center gap-3 text-white">

            <Ear
              size={18}
              className="text-cyan-200"
            />

            <span
              className="
              font-bold

              tracking-wide

              text-sm
              sm:text-base
              "
            >
              Hi-Tech ENT
            </span>

          </div>

          <div className="flex items-center gap-3 text-white">

            <Bone
              size={18}
              className="text-cyan-200"
            />

            <span
              className="
              font-bold

              tracking-wide

              text-sm
              sm:text-base
              "
            >
              Orthopaedic & Trauma
            </span>

          </div>

          <div className="flex items-center gap-3 text-white">

            <HeartPulse
              size={18}
              className="text-cyan-200"
            />

            <span
              className="
              font-bold

              tracking-wide

              text-sm
              sm:text-base
              "
            >
              IVF & Fertility Centre
            </span>

          </div>

          {/* DUPLICATE */}

          <div className="flex items-center gap-3 text-white">

            <Ear
              size={18}
              className="text-cyan-200"
            />

            <span
              className="
              font-bold

              tracking-wide

              text-sm
              sm:text-base
              "
            >
              Hi-Tech ENT
            </span>

          </div>

          <div className="flex items-center gap-3 text-white">

            <Bone
              size={18}
              className="text-cyan-200"
            />

            <span
              className="
              font-bold

              tracking-wide

              text-sm
              sm:text-base
              "
            >
              Orthopaedic & Trauma
            </span>

          </div>

          <div className="flex items-center gap-3 text-white">

            <HeartPulse
              size={18}
              className="text-cyan-200"
            />

            <span
              className="
              font-bold

              tracking-wide

              text-sm
              sm:text-base
              "
            >
              IVF & Fertility Centre
            </span>

          </div>

        </div>

      </div>

      {/* PATIENT PORTAL */}

      <div
        className="
        flex
        justify-center

        pt-8
        "
      >

        <button
          className="
          group

          flex
          items-center

          gap-3

          rounded-2xl

          bg-[#00658a]

          px-8
          py-4

          text-white

          font-bold

          text-lg
          sm:text-2xl

          shadow-lg

          hover:bg-[#004f6d]

          hover:scale-[1.02]

          transition-all
          duration-300
          "
        >

          <Zap
            size={24}
            className="
            group-hover:rotate-12

            transition-all
            duration-300
            "
          />

          Patient Portal

        </button>

      </div>

      {/* HERO VIDEO */}

      <div
        className="
        relative

        mt-8

        w-full

        h-[40svh]
        sm:h-[55svh]
        md:h-[85svh]

        overflow-hidden
        "
      >

        <video
          autoPlay
          muted
          loop
          playsInline

          className="
          w-full
          h-full

          object-cover
          object-center
          "
        >

          <source
            src="/videos/hero1.mp4"
            type="video/mp4"
          />

        </video>

        {/* OVERLAY */}

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/30
          via-black/10
          to-black/20
          "
        ></div>

      </div>

      {/* FEATURES */}

      <div
        className="
        bg-[#f6f8fb]

        py-10
        lg:py-14
        "
      >

        <div
          className="
          w-full

          px-4
          sm:px-6
          lg:px-10
          "
        >

          <div
            className="
            grid

            grid-cols-1
            md:grid-cols-3

            gap-5
            lg:gap-7
            "
          >

            {/* CARD 1 */}

            <div
              className="
              group

              flex
              items-center

              gap-5

              rounded-[30px]

              bg-white

              px-7
              py-8

              shadow-[0_10px_40px_rgba(15,23,42,0.05)]

              hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]

              hover:-translate-y-1

              transition-all
              duration-300
              "
            >

              <div
                className="
                flex
                items-center
                justify-center

                min-w-[70px]
                h-[70px]

                rounded-2xl

                bg-cyan-50

                text-[#3f67ff]

                group-hover:bg-cyan-600
                group-hover:text-white

                transition-all
                duration-300
                "
              >

                <Stethoscope size={34} />

              </div>

              <div>

                <h3
                  className="
                  text-xl
                  lg:text-2xl

                  font-black

                  text-slate-900
                  "
                >
                  Professional Staff
                </h3>

                <p
                  className="
                  mt-2

                  text-sm

                  text-slate-500
                  "
                >
                  Experienced doctors with advanced healthcare expertise.
                </p>

              </div>

            </div>

            {/* CARD 2 */}

            <div
              className="
              group

              flex
              items-center

              gap-5

              rounded-[30px]

              bg-white

              px-7
              py-8

              shadow-[0_10px_40px_rgba(15,23,42,0.05)]

              hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]

              hover:-translate-y-1

              transition-all
              duration-300
              "
            >

              <div
                className="
                flex
                items-center
                justify-center

                min-w-[70px]
                h-[70px]

                rounded-2xl

                bg-cyan-50

                text-[#3f67ff]

                group-hover:bg-cyan-600
                group-hover:text-white

                transition-all
                duration-300
                "
              >

                <Ambulance size={34} />

              </div>

              <div>

                <h3
                  className="
                  text-xl
                  lg:text-2xl

                  font-black

                  text-slate-900
                  "
                >
                  Emergency Treatment
                </h3>

                <p
                  className="
                  mt-2

                  text-sm

                  text-slate-500
                  "
                >
                  24/7 emergency response with trauma and ICU support.
                </p>

              </div>

            </div>

            {/* CARD 3 */}

            <div
              className="
              group

              flex
              items-center

              gap-5

              rounded-[30px]

              bg-white

              px-7
              py-8

              shadow-[0_10px_40px_rgba(15,23,42,0.05)]

              hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]

              hover:-translate-y-1

              transition-all
              duration-300
              "
            >

              <div
                className="
                flex
                items-center
                justify-center

                min-w-[70px]
                h-[70px]

                rounded-2xl

                bg-cyan-50

                text-[#3f67ff]

                group-hover:bg-cyan-600
                group-hover:text-white

                transition-all
                duration-300
                "
              >

                <ShieldCheck size={34} />

              </div>

              <div>

                <h3
                  className="
                  text-xl
                  lg:text-2xl

                  font-black

                  text-slate-900
                  "
                >
                  Trusted Doctors
                </h3>

                <p
                  className="
                  mt-2

                  text-sm

                  text-slate-500
                  "
                >
                  Trusted healthcare specialists with modern treatment care.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}