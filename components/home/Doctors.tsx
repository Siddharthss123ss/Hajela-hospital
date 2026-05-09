"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Cardiologist",
    image: "/doctors/doc1.jpg",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Neurologist",
    image: "/doctors/doc2.jpg",
  },
  {
    name: "Dr. Amit Verma",
    role: "Orthopaedic",
    image: "/doctors/doc3.jpg",
  },
  {
    name: "Dr. Sneha Kapoor",
    role: "Pediatrician",
    image: "/doctors/doc4.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold mb-4 text-lg">
            Our Doctors
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Meet Our Specialists
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Our highly experienced doctors provide world-class treatment
            with compassionate patient care.
          </p>

        </div>

        {/* SLIDER */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >

          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>

              <div
                className="
                bg-white
                rounded-[35px]
                overflow-hidden
                shadow-xl
                hover:-translate-y-4
                transition-all
                duration-500
                group
                "
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={500}
                    className="
                    w-full
                    h-[350px]
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                    "
                  />

                </div>

                {/* CONTENT */}

                <div className="p-8 text-center">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {doctor.name}
                  </h3>

                  <p className="text-cyan-600 mt-3 text-lg">
                    {doctor.role}
                  </p>

                  <button className="mt-6 border border-cyan-600 text-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300">
                    View Profile
                  </button>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}