"use client";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  Quote,
  Star,
} from "lucide-react";


const testimonials = [

  {
    name: "Rahul Sharma",
    role: "Cardiology Patient",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",

    review:
      "Exceptional healthcare experience with advanced medical facilities and highly professional doctors. The staff was extremely supportive and treatment quality exceeded expectations.",
  },

  {
    name: "Priya Verma",
    role: "Neurology Patient",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",

    review:
      "Hajela Hospital provided world-class patient care with modern infrastructure and compassionate support. Emergency services were quick and very efficient.",
  },

  {
    name: "Amit Singh",
    role: "Orthopedic Patient",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",

    review:
      "Doctors explained every procedure clearly and the treatment process was smooth from consultation to recovery. One of the best hospitals in Bhopal.",
  },

  {
    name: "Sneha Kapoor",
    role: "Maternity Patient",

    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",

    review:
      "The maternity care team was incredibly caring and professional. The hospital environment felt premium, safe, and comfortable throughout the treatment journey.",
  },

];


export default function Testimonials() {

  return (

    <section
      className="
      relative

      py-28

      overflow-hidden

      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-cyan-900
      "
    >

      {/* PREMIUM GLOW */}

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

        blur-[180px]
        "
      ></div>

      {/* LIGHT EFFECT */}

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-[140px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p
            className="
            text-cyan-300

            uppercase

            tracking-[4px]

            font-bold

            text-sm

            mb-4
            "
          >
            Patient Testimonials
          </p>

          <h2
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-white

            leading-tight
            "
          >
            What Our Patients Say
          </h2>

          <p
            className="
            mt-6

            text-slate-300

            max-w-3xl

            mx-auto

            leading-relaxed

            text-sm
            sm:text-base
            "
          >
            Thousands of patients trust Hajela Hospital
            for advanced healthcare, compassionate doctors,
            and world-class medical services.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper

          modules={[Autoplay]}

          autoplay={{

            delay: 3500,

            disableOnInteraction: false,

          }}

          loop={true}

          spaceBetween={30}

          breakpoints={{

            0: {
              slidesPerView: 1.1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },

          }}

        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                group
                relative

                overflow-hidden

                rounded-[38px]

                border
                border-white/10

                bg-white/[0.08]

                backdrop-blur-2xl

                p-8

                min-h-[420px]

                shadow-[0_10px_60px_rgba(0,0,0,0.25)]

                hover:-translate-y-4

                hover:shadow-[0_30px_90px_rgba(6,182,212,0.20)]

                transition-all
                duration-700
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

                {/* QUOTE ICON */}

                <div
                  className="
                  absolute
                  top-8
                  right-8

                  text-cyan-300/20
                  "
                >

                  <Quote size={60} />

                </div>

                {/* PROFILE */}

                <div
                  className="
                  relative
                  z-10

                  flex
                  items-center

                  gap-4

                  mb-7
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}

                    className="
                    w-20
                    h-20

                    rounded-full

                    object-cover

                    border-4
                    border-cyan-400/30

                    shadow-[0_10px_30px_rgba(6,182,212,0.25)]
                    "
                  />

                  <div>

                    <h3
                      className="
                      text-2xl

                      font-bold

                      text-white
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                      text-cyan-300

                      mt-1

                      text-sm
                      "
                    >
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* STARS */}

                <div
                  className="
                  relative
                  z-10

                  flex

                  gap-1

                  mb-6
                  "
                >

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}

                      className="
                      fill-yellow-400
                      text-yellow-400
                      "
                    />

                  ))}

                </div>

                {/* REVIEW */}

                <p
                  className="
                  relative
                  z-10

                  text-slate-200

                  leading-relaxed

                  text-[16px]
                  "
                >
                  "{item.review}"
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
                  from-cyan-400
                  to-blue-500

                  group-hover:w-28

                  transition-all
                  duration-500
                  "
                ></div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

}