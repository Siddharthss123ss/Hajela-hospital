"use client";

import Image from "next/image";
import { useState } from "react";

const technologies = [
  {
    title: "MRI System",
    image: "/hospital/mri.jpg",
  },

  {
    title: "Cath Lab",
    image: "/hospital/cathlab.jpg",
  },

  {
    title: "PET-CT Scanner",
    image: "/hospital/petct.jpg",
  },

  {
    title: "Gamma Camera",
    image: "/hospital/gamma.jpg",
  },

  {
    title: "Robotic Surgery",
    image: "/hospital/robotic.jpg",
  },

  {
    title: "Advanced ECMO",
    image: "/hospital/ecmo.jpg",
  },
];

export default function Technology() {

  const [active, setActive] = useState(technologies[0]);

  return (
    <section className="py-20 bg-white">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-14">

          <p className="text-cyan-600 font-semibold mb-3">
            Facilities
          </p>

          <h2
            className="
            text-3xl
            lg:text-5xl
            font-bold
            text-slate-900
            "
          >
            Our Technological Advancements
          </h2>

        </div>

        {/* MAIN */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          border
          border-slate-200
          overflow-hidden
          rounded-xl
          "
        >

          {/* LEFT MENU */}

          <div
            className="
            w-full
            lg:w-[340px]
            bg-slate-50
            border-r
            border-slate-200
            "
          >

            {technologies.map((item, index) => (

              <button
                key={index}
                onClick={() => setActive(item)}
                className={`
                w-full
                text-left
                px-8
                py-6
                text-lg
                font-semibold
                transition-all
                duration-300
                border-b
                border-slate-200
                ${
                  active.title === item.title
                    ? "bg-slate-200 text-blue-900"
                    : "hover:bg-slate-100 text-slate-700"
                }
                `}
              >

                {item.title}

              </button>

            ))}

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex-1 bg-white p-6 lg:p-8">

            <p
              className="
              text-slate-600
              leading-relaxed
              mb-6
              text-sm
              lg:text-base
              "
            >
              Hajela Hospital provides advanced medical
              technology and modern healthcare systems for
              accurate diagnosis and world-class patient treatment.
            </p>

            <div className="overflow-hidden rounded-xl">

              <Image
                src={active.image}
                alt={active.title}
                width={1200}
                height={700}
                className="
                w-full
                h-[250px]
                sm:h-[350px]
                lg:h-[520px]
                object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}