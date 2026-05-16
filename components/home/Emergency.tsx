"use client";

import {

  PhoneCall,
  Ambulance,
  Clock,
  Shield,
  AlertCircle,
  Heart,
  Navigation,

} from "lucide-react";

import {

  useState,
  useEffect,

} from "react";

export default function Emergency() {

  const [isHovered, setIsHovered] = useState(false);

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {

    const updateTime = () => {

      const now = new Date();

      setCurrentTime(

        now.toLocaleTimeString("en-US", {

          hour: "2-digit",
          minute: "2-digit",

        })

      );

    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      className="
      relative

      overflow-hidden

      py-20
      lg:py-24

      bg-gradient-to-br
      from-[#071521]
      via-[#0b1f30]
      to-[#071521]
      "
    >

      {/* SOFT BG */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        rounded-full

        bg-red-500/10

        blur-[150px]
        "
      ></div>

      <div className="container-custom relative z-10">

        <div
          className="
          relative

          overflow-hidden

          rounded-[38px]

          border
          border-white/10

          bg-gradient-to-r
          from-red-700
          via-red-600
          to-red-500

          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          "
        >

          {/* TOP LIGHT */}

          <div
            className="
            absolute
            top-0
            left-0

            h-[3px]
            w-full

            bg-gradient-to-r
            from-transparent
            via-white/80
            to-transparent
            "
          ></div>

          {/* CIRCLES */}

          <div
            className="
            absolute
            -top-24
            -right-24

            w-72
            h-72

            rounded-full

            border
            border-white/10
            "
          ></div>

          <div
            className="
            absolute
            -bottom-24
            -left-24

            w-80
            h-80

            rounded-full

            border
            border-white/10
            "
          ></div>

          <div
            className="
            relative
            z-10

            p-8
            md:p-12
            lg:p-14
            "
          >

            {/* TOP */}

            <div
              className="
              flex
              flex-wrap

              items-center
              justify-between

              gap-4

              mb-10
              "
            >

              <div
                className="
                inline-flex

                items-center

                gap-2

                rounded-full

                bg-white/10

                px-4
                py-2

                backdrop-blur-md
                "
              >

                <div
                  className="
                  w-2
                  h-2

                  rounded-full

                  bg-red-200

                  animate-pulse
                  "
                ></div>

                <span
                  className="
                  text-xs

                  font-semibold

                  uppercase

                  tracking-[3px]

                  text-white
                  "
                >
                  24/7 Emergency Support
                </span>

              </div>

              <div
                className="
                flex
                items-center

                gap-2

                rounded-full

                bg-black/20

                px-4
                py-2
                "
              >

                <Clock
                  className="
                  w-4
                  h-4

                  text-white/80
                  "
                />

                <span
                  className="
                  text-sm

                  text-white/80

                  font-medium
                  "
                >
                  {currentTime}
                </span>

              </div>

            </div>

            {/* MAIN */}

            <div
              className="
              flex
              flex-col
              xl:flex-row

              items-center
              justify-between

              gap-10
              "
            >

              {/* LEFT */}

              <div className="text-center xl:text-left">

                <h2
                  className="
                  text-4xl
                  md:text-5xl
                  lg:text-6xl

                  font-black

                  text-white

                  leading-tight
                  "
                >

                  Emergency
                  <span className="block text-red-100">
                    Medical Assistance
                  </span>

                </h2>

                <p
                  className="
                  mt-5

                  max-w-2xl

                  text-white/80

                  leading-relaxed
                  "
                >
                  Hajela Hospital provides rapid emergency
                  response, trauma support, ICU facilities,
                  ambulance services and critical care treatment
                  with experienced emergency specialists.
                </p>

                {/* BADGES */}

                <div
                  className="
                  mt-6

                  flex
                  flex-wrap

                  gap-3

                  justify-center
                  xl:justify-start
                  "
                >

                  <div
                    className="
                    flex
                    items-center

                    gap-2

                    rounded-full

                    bg-white/10

                    px-4
                    py-2
                    "
                  >

                    <AlertCircle
                      className="
                      w-4
                      h-4

                      text-red-100
                      "
                    />

                    <span
                      className="
                      text-sm

                      text-white
                      "
                    >
                      Critical Care
                    </span>

                  </div>

                  <div
                    className="
                    flex
                    items-center

                    gap-2

                    rounded-full

                    bg-white/10

                    px-4
                    py-2
                    "
                  >

                    <Ambulance
                      className="
                      w-4
                      h-4

                      text-red-100
                      "
                    />

                    <span
                      className="
                      text-sm

                      text-white
                      "
                    >
                      Ambulance Support
                    </span>

                  </div>

                </div>

              </div>

              {/* CENTER */}

              <div className="text-center">

                <div className="relative">

                  <div
                    className="
                    absolute
                    inset-0

                    rounded-full

                    bg-white/20

                    blur-3xl

                    animate-pulse
                    "
                  ></div>

                  <div
                    className="
                    relative

                    mx-auto

                    flex
                    items-center
                    justify-center

                    w-24
                    h-24

                    rounded-full

                    bg-white/15

                    backdrop-blur-md

                    border
                    border-white/20
                    "
                  >

                    <PhoneCall
                      className="
                      w-10
                      h-10

                      text-white

                      animate-pulse
                      "
                    />

                  </div>

                </div>

                <p
                  className="
                  mt-6

                  text-xs

                  uppercase

                  tracking-[3px]

                  text-red-100
                  "
                >
                  Emergency Helpline
                </p>

                {/* NUMBERS */}

                <div className="mt-4 space-y-2">

                  <h3
                    className="
                    text-2xl
                    md:text-3xl

                    font-black

                    text-white
                    "
                  >
                    07552773393
                  </h3>

                  <h3
                    className="
                    text-2xl
                    md:text-3xl

                    font-black

                    text-white
                    "
                  >
                    07553773392
                  </h3>

                  <h3
                    className="
                    text-2xl
                    md:text-3xl

                    font-black

                    text-white
                    "
                  >
                    07552772233
                  </h3>

                </div>

                <p
                  className="
                  mt-3

                  text-sm

                  text-white/70
                  "
                >
                  Available 24/7 • Immediate Assistance
                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                flex
                flex-col

                gap-4

                w-full
                sm:w-auto
                "
              >

                {/* CALL */}

                <a
                  href="tel:07552773393"

                  onMouseEnter={() =>
                    setIsHovered(true)
                  }

                  onMouseLeave={() =>
                    setIsHovered(false)
                  }

                  className="
                  group
                  relative

                  overflow-hidden

                  rounded-full

                  bg-white

                  px-8
                  py-4

                  text-red-600

                  font-bold

                  shadow-xl

                  hover:scale-105

                  transition-all
                  duration-300
                  "
                >

                  <span
                    className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-center

                    gap-2
                    "
                  >

                    <PhoneCall
                      className={`
                      w-5
                      h-5

                      ${isHovered ? "animate-bounce" : ""}
                      `}
                    />

                    Call Now

                  </span>

                </a>

                {/* DIRECTION */}

                <button
                  className="
                  flex
                  items-center
                  justify-center

                  gap-2

                  rounded-full

                  border
                  border-white/20

                  bg-white/10

                  px-8
                  py-4

                  text-white

                  hover:bg-white/20

                  transition-all
                  duration-300
                  "
                >

                  <Navigation
                    className="
                    w-5
                    h-5
                    "
                  />

                  Get Directions

                </button>

              </div>

            </div>

            {/* QUICK ACTIONS */}

            <div
              className="
              mt-10
              pt-6

              border-t
              border-white/10

              flex
              flex-wrap

              gap-3

              justify-center
              xl:justify-start
              "
            >

              {[
                {
                  icon: Ambulance,
                  label: "Book Ambulance",
                },

                {
                  icon: Shield,
                  label: "Insurance Support",
                },

                {
                  icon: Heart,
                  label: "Critical Care",
                },

              ].map((item, idx) => (

                <button
                  key={idx}

                  className="
                  group

                  flex
                  items-center

                  gap-2

                  rounded-full

                  bg-white/10

                  px-4
                  py-2

                  hover:bg-white/20

                  transition-all
                  duration-300
                  "
                >

                  <item.icon
                    className="
                    w-4
                    h-4

                    text-white

                    group-hover:scale-110

                    transition-all
                    "
                  />

                  <span
                    className="
                    text-sm

                    text-white
                    "
                  >
                    {item.label}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}