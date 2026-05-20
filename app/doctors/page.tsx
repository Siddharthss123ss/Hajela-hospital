"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
import Image from "next/image";
=======
import { useState } from "react";

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
import Link from "next/link";
import { Stethoscope, Award, ChevronRight, Loader2 } from "lucide-react";

<<<<<<< HEAD
// MongoDB document structure ke hisab se interface define kiya hai
interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  degree: string[];
  experience: number;
  image_url: string;
  dept_id?: {
    name: string;
    slug: string;
  };
}
=======
import {
  Search,
  ChevronRight,
} from "lucide-react";

import { doctors } from "@/data/doctors";
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await fetch("/api/doctors");
        if (!res.ok) {
          throw new Error("Failed to fetch doctors data");
        }
        const data = await res.json();
        setDoctors(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main
      className="
<<<<<<< HEAD
      relative
=======
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
      min-h-screen
      bg-gradient-to-b
<<<<<<< HEAD
      from-white
      via-slate-50
      to-white
      pt-32
      pb-24
      overflow-hidden
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
        bg-cyan-500/5
        blur-[160px]
        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">
        {/* HERO */}
        <div className="text-center mb-20">
          <div
            className="
            inline-flex
            items-center
            gap-2
            bg-cyan-50
            border
            border-cyan-100
            px-5
            py-2.5
            rounded-full
            text-cyan-700
            font-semibold
=======
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

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
            text-sm

            mb-4
            "
          >
<<<<<<< HEAD
            <Stethoscope className="w-4 h-4" />
            Hajela Hospital Specialists
          </div>

          <h1
            className="
            mt-7
            text-4xl
            md:text-6xl
            lg:text-7xl
=======
            Hajela Hospital Specialists
          </p>

          <h1
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
            font-black
            text-slate-900
<<<<<<< HEAD
            leading-tight
            "
          >
            Meet Our Expert
=======
            "
          >

            Meet Our
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
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
<<<<<<< HEAD
            mt-7
=======
            mt-6

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
            max-w-3xl

            mx-auto
<<<<<<< HEAD
            text-slate-500
            text-base
            md:text-lg
            leading-relaxed
            "
          >
            Our highly experienced doctors provide advanced, compassionate and
            world-class medical care with expertise across multiple specialties.
=======

            text-slate-600

            leading-relaxed
            "
          >
            Experienced healthcare specialists providing
            advanced medical care and patient-focused treatment.
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
          </p>
        </div>

<<<<<<< HEAD
        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" />
            <p className="text-slate-500 font-medium">Loading specialists...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="text-center py-12 bg-red-50 rounded-[32px] border border-red-100 max-w-2xl mx-auto p-8">
            <p className="text-red-600 font-semibold text-lg">Error loading data</p>
            <p className="text-red-500 text-sm mt-1">{error}</p>
          </div>
        )}

        {/* GRID */}
        {!loading && !error && (
          <div
            className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
            "
          >
            {doctors.map((doctor) => (
=======
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

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
              <div
                key={doctor._id}
                className="
<<<<<<< HEAD
                group
                bg-white
                rounded-[32px]
=======
                relative

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
                overflow-hidden
                border
                border-slate-200/80
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
                "
              >
<<<<<<< HEAD
                {/* IMAGE */}
                <div
                  className="
                  relative
                  h-[340px]
                  bg-slate-100
                  overflow-hidden
                  "
                >
                  <Image
                    src={doctor.image_url || "/doctors/placeholder.jpg"}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="
                    object-cover
                    object-top
                    group-hover:scale-105
                    transition-all
                    duration-700
                    "
                  />
                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    "
                  ></div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  {/* EXPERIENCE */}
                  <div
                    className="
                    inline-flex
                    items-center
                    gap-2
                    bg-cyan-50
                    border
                    border-cyan-100
                    px-4
                    py-2
                    rounded-full
                    text-cyan-700
                    text-sm
                    font-bold
                    "
                  >
                    <Award className="w-4 h-4" />
                    {doctor.experience}+ Years
                  </div>

                  {/* NAME */}
                  <h2
                    className="
                    mt-5
                    text-2xl
                    font-black
                    text-slate-900
                    leading-snug
                    "
                  >
                    {doctor.name}
                  </h2>

                  {/* ROLE / SPECIALIZATION */}
                  <p
                    className="
                    mt-2
                    text-cyan-700
                    font-semibold
                    text-base
                    "
                  >
                    {doctor.specialization}
                  </p>
=======

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
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

                  {/* DEGREE */}
                  <p
                    className="
                    mt-4
                    text-slate-500
                    text-sm
                    leading-relaxed
                    min-h-[70px]
                    "
                  >
                    {doctor.degree ? doctor.degree.join(", ") : ""}
                  </p>

<<<<<<< HEAD
                  {/* LINE */}
                  <div
                    className="
                    mt-5
                    w-16
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-700
                    "
                  ></div>
=======
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
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

                  {/* BUTTON */}
                  <Link
                    href={`/doctors/${doctor._id}`}
                    className="
                    mt-7
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    py-3.5
                    rounded-2xl
                    border
                    border-slate-200
                    text-slate-700
                    font-semibold
                    hover:bg-cyan-600
                    hover:text-white
                    hover:border-cyan-600
                    transition-all
                    duration-300
                    "
                  >
                    View Profile
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>

  );

}