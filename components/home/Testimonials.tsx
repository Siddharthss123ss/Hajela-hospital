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

    review:
      "Excellent healthcare experience with experienced doctors, supportive staff and advanced medical facilities. The treatment process was smooth and professional.",
  },

  {
    name: "Priya Verma",
    role: "Maternity Patient",

    review:
      "The doctors and nursing staff provided exceptional care throughout the treatment journey. The hospital environment felt modern and safe.",
  },

  {
    name: "Amit Singh",
    role: "Orthopaedic Patient",

    review:
      "Highly satisfied with the orthopedic treatment and recovery support. The doctors explained every procedure clearly and professionally.",
  },

  {
    name: "Sneha Kapoor",
    role: "ENT Patient",

    review:
      "The ENT specialists were extremely experienced and supportive. My treatment and consultation experience was excellent throughout.",
  },

  {
    name: "Vikas Tiwari",
    role: "Emergency Care Patient",

    review:
      "Emergency services were very fast and efficient. Doctors handled the situation professionally and provided immediate treatment.",
  },

  {
    name: "Anjali Mehra",
    role: "IVF Patient",

    review:
      "The IVF and infertility team was highly professional and compassionate. The entire process was handled with care and confidence.",
  },

  {
    name: "Rohit Jain",
    role: "General Surgery Patient",

    review:
      "Excellent surgical care with advanced facilities and professional staff. The hospital management and doctors were very cooperative.",
  },

];

export default function Testimonials() {

  return (

    <section
      className="
      relative

      py-24
      lg:py-28

      overflow-hidden

      bg-white
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

        bg-cyan-100/40

        blur-[140px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-16 lg:mb-20">

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
            Patient Testimonials
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

            Trusted By
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Thousands of Patients
            </span>

          </h2>

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
            Hajela Hospital is trusted for compassionate care,
            experienced doctors, advanced treatments and
            world-class healthcare services in Bhopal.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper

          modules={[Autoplay]}

          autoplay={{

            delay: 2500,

            disableOnInteraction: false,

          }}

          speed={900}

          loop={true}

          spaceBetween={28}

          breakpoints={{

            0: {
              slidesPerView: 1.1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

          }}

        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                group

                h-full

                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-8

                min-h-[320px]

                shadow-[0_10px_40px_rgba(15,23,42,0.06)]

                hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

                hover:-translate-y-1

                transition-all
                duration-500
                "
              >

                {/* QUOTE */}

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-cyan-50

                  flex
                  items-center
                  justify-center

                  mb-6
                  "
                >

                  <Quote
                    size={28}

                    className="
                    text-cyan-600
                    "
                  />

                </div>

                {/* STARS */}

                <div
                  className="
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
                  text-slate-600

                  leading-relaxed

                  text-[15px]
                  "
                >
                  "{item.review}"
                </p>

                {/* LINE */}

                <div
                  className="
                  mt-8

                  w-16
                  h-[4px]

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-700
                  "
                ></div>

                {/* USER */}

                <div className="mt-7">

                  <h3
                    className="
                    text-2xl

                    font-black

                    text-slate-900
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                    mt-2

                    text-cyan-700

                    font-medium

                    text-sm
                    "
                  >
                    {item.role}
                  </p>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

}