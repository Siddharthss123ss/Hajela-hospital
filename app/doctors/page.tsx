"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Search,
  ChevronRight,
} from "lucide-react";

import { doctors } from "@/data/doctors";

export default function DoctorsPage() {

  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <main
      className="
      min-h-screen

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/40

      pt-32
      pb-24
      "
    >

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-16">

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
            Hajela Hospital Specialists
          </p>

          <h1
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl

            font-black

            text-slate-900
            "
          >

            Meet Our
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Expert Doctors
            </span>

          </h1>

          <p
            className="
            mt-6

            max-w-3xl

            mx-auto

            text-slate-600

            leading-relaxed
            "
          >
            Experienced healthcare specialists providing
            advanced medical care and patient-focused treatment.
          </p>

        </div>

        {/* SEARCH */}

        <div
          className="
          relative

          max-w-2xl

          mx-auto

          mb-16
          "
        >

          <Search
            className="
            absolute

            left-5
            top-1/2

            -translate-y-1/2

            text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search doctor..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

            className="
            w-full

            rounded-2xl

            border
            border-slate-200

            bg-white

            py-5
            pl-14
            pr-5

            text-slate-700

            outline-none

            shadow-sm

            focus:border-cyan-500
            "
          />

        </div>

        {/* GRID */}

        <div
          className="
          grid

          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4

          gap-8
          "
        >

          {filteredDoctors.map((doctor, index) => (

            <div
              key={index}

              className="
              group

              overflow-hidden

              rounded-[32px]

              bg-white

              border
              border-slate-200

              shadow-[0_10px_40px_rgba(15,23,42,0.06)]

              hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]

              hover:-translate-y-2

              transition-all
              duration-500
              "
            >

              {/* IMAGE */}

              <div
                className="
                relative

                overflow-hidden
                "
              >

                <img
                  src={doctor.image}
                  alt={doctor.name}

                  className="
                  w-full

                  h-[340px]

                  object-cover
                  object-top

                  group-hover:scale-105

                  transition-all
                  duration-700
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                  "
                ></div>

                {/* EXPERIENCE */}

                <div
                  className="
                  absolute
                  top-4
                  left-4

                  bg-white/90

                  backdrop-blur-xl

                  px-4
                  py-2

                  rounded-full

                  text-cyan-700

                  text-sm

                  font-bold
                  "
                >
                  {doctor.experience}
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                {/* NAME */}

                <h2
                  className="
                  text-2xl

                  font-black

                  text-slate-900

                  leading-snug
                  "
                >
                  {doctor.name}
                </h2>

                {/* ROLE */}

                <p
                  className="
                  mt-2

                  text-cyan-700

                  font-semibold

                  leading-relaxed
                  "
                >
                  {doctor.role}
                </p>

                {/* DEGREE */}

                <p
                  className="
                  mt-3

                  text-sm

                  text-slate-500

                  leading-relaxed
                  "
                >
                  {doctor.degree}
                </p>

                {/* BUTTON */}

                <Link
                  href={`/doctors/${doctor.slug}`}

                  className="
                  mt-6

                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  w-full

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-700

                  px-5
                  py-4

                  text-white

                  font-semibold

                  shadow-lg

                  hover:scale-[1.02]

                  transition-all
                  duration-300
                  "
                >

                  View Profile

                  <ChevronRight
                    className="
                    w-4
                    h-4
                    "
                  />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}