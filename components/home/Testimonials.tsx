"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Excellent medical facilities and highly professional doctors. The staff was very supportive throughout the treatment.",
  },
  {
    name: "Priya Verma",
    review:
      "Hajela Hospital provided outstanding patient care with modern infrastructure and quick emergency support.",
  },
  {
    name: "Amit Singh",
    review:
      "The doctors explained everything clearly and treatment quality was exceptional. Highly recommended hospital.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-950 to-cyan-700 overflow-hidden">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-300 font-semibold mb-4 text-lg">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white">
            What Our Patients Say
          </h2>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            Thousands of patients trust Hajela Hospital for advanced
            healthcare and compassionate treatment services.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
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
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-[35px]
                p-10
                shadow-2xl
                hover:-translate-y-4
                transition-all
                duration-500
                h-full
                "
              >

                {/* STARS */}

                <div className="flex gap-2 mb-6">

                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-400 text-2xl"
                    >
                      ★
                    </span>
                  ))}

                </div>

                {/* REVIEW */}

                <p className="text-slate-200 leading-relaxed text-lg">
                  "{item.review}"
                </p>

                {/* USER */}

                <div className="mt-10">

                  <h3 className="text-2xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-cyan-300 mt-2">
                    Patient
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