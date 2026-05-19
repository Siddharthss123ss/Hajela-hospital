"use client";

import Link from "next/link";

import { departments } from "@/data/departments";

import Image from "next/image";

import { Search } from "lucide-react";

import { useState } from "react";

export default function DepartmentsPage() {

  const [search, setSearch] = useState("");

  const filteredDepartments = departments.filter((dept) =>

    dept.title
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <main
      className="
      relative

      pt-32
      pb-24

      overflow-hidden

      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/30

      min-h-screen
      "
    >

      {/* SOFT GLOW */}

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

        blur-[160px]
        "
      ></div>

      <div className="container-custom relative z-10">

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
            Hajela Hospital
          </p>

          <h1
            className="
            text-4xl
            lg:text-6xl

            font-black

            text-slate-900

            leading-tight
            "
          >

            Specialized
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700

              bg-clip-text
              text-transparent
              "
            >
              {" "}Medical Services
            </span>

          </h1>

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
            Explore advanced healthcare departments,
            specialized treatments, modern technologies
            and expert medical services at Hajela Hospital.
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

            placeholder="Search medical department..."

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

          gap-7
          "
        >

          {filteredDepartments.map((service, index) => (

            <Link
              key={index}

              href={`/departments/${service.slug}`}

              className="
              group
              relative

              overflow-hidden

              rounded-[34px]

              border
              border-slate-200/70

              bg-white

              shadow-[0_10px_50px_rgba(15,23,42,0.06)]

              hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

              hover:-translate-y-1

              transition-all
              duration-500
              "
            >

              {/* IMAGE */}

              <div
                className="
                relative

                h-[240px]

                overflow-hidden
                "
              >

                <Image
                  src={service.image}
                  alt={service.title}
                  fill

                  className="
                  object-cover

                  group-hover:scale-110

                  transition-all
                  duration-700
                  "
                />

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/50
                  to-transparent
                  "
                ></div>

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <h2
                  className="
                  text-[24px]

                  font-black

                  text-slate-900

                  leading-snug
                  "
                >
                  {service.title}
                </h2>

                <p
                  className="
                  mt-4

                  text-slate-600

                  text-sm

                  leading-relaxed
                  "
                >
                  {service.short}
                </p>

                {/* BUTTON */}

                <div
                  className="
                  mt-7

                  inline-flex

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-700

                  px-5
                  py-2.5

                  text-sm

                  font-semibold

                  text-white

                  shadow-md

                  group-hover:scale-105

                  transition-all
                  duration-300
                  "
                >
                  View Details
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );

}