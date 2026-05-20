"use client";

<<<<<<< HEAD
import { useState, useEffect } from "react";
import {
  Ear,
  Baby,
  Activity,
  Microscope,
  ShieldPlus,
  Stethoscope,
  Hospital,
  ScanHeart,
  HeartHandshake,
  Bone,
  HeartPulse,
  Ambulance,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

interface Department {
  _id: string;
  name: string;
  slug: string;
  description: string;
  facilities: string[];
  image_url: string;
  image_id: string;
  is_emergency_dept: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  "anaesthesiology-critical-care": ShieldPlus,
  "ent-voice-disorders": Ear,
  "cochlear-implant-centre": HeartHandshake,
  "orthopaedics-joint-replacement": Bone,
  "ivf-infertility-centre": HeartPulse,
  "pediatrics-nicu": Baby,
  "emergency-trauma-care": Activity,
  "radiology-imaging": ScanHeart,
  "advanced-diagnostics": Microscope,
  "general-medicine": Stethoscope,
  "maternity-women-care": HeartHandshake,
  "hospital-ambulance-services": Ambulance,
};
=======
import Link from "next/link";

import { departments } from "@/data/departments";

import Image from "next/image";

import { Search } from "lucide-react";

import { useState } from "react";
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const res = await fetch("/api/departments");
        if (!res.ok) throw new Error("Failed to fetch data from API");
        const data = await res.json();
        setDepartments(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchDepartments();
  }, []);

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
      {/* SOFT GLOW BACKGROUND */}
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

<<<<<<< HEAD
      <div className="container-custom relative z-10 mx-auto px-4">
        {/* HEADING SECTION */}
        <div className="text-center mb-20">
=======
      <div className="container-custom relative z-10">

        {/* HEADING */}

        <div className="text-center mb-16">

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
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
<<<<<<< HEAD
            Hajela Hospital provides advanced healthcare, modern medical infrastructure, emergency care,
            IVF services, trauma support and specialized treatments with experienced doctors and surgeons.
=======
            Explore advanced healthcare departments,
            specialized treatments, modern technologies
            and expert medical services at Hajela Hospital.
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
          </p>
        </div>

<<<<<<< HEAD
        {/* LOADING & ERROR HANDLERS */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
            <span className="ml-3 text-slate-600 font-medium">Fetching medical departments...</span>
          </div>
        )}
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
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

        {error && (
          <div className="text-center p-6 bg-red-50 text-red-600 rounded-2xl max-w-xl mx-auto font-medium shadow-sm">
            Error: {error}
          </div>
        )}

        {/* DYNAMIC CARDS GRID */}
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
            {departments.map((dept) => {
              const DepartmentIcon = iconMap[dept.slug] || Hospital;

              return (
                <div
                  key={dept._id}
                  className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-slate-200/80
                  bg-white
                  shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                  hover:-translate-y-1.5
                  transition-all
                  duration-500
                  cursor-pointer
                  "
                >
                  {/* TOP IMAGE WITH OVERLAY */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={dept.image_url}
                      alt={dept.name}
                      id={dept.image_id}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                    
                    {/* EMERGENCY BADGE */}
                    {dept.is_emergency_dept && (
                      <span className="absolute top-4 right-4 z-20 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md animate-pulse">
                        24/7 Emergency
                      </span>
                    )}

<<<<<<< HEAD
                    {/* FLOATING ICON */}
                    <div
                      className="
                      absolute
                      -bottom-6
                      left-6
                      z-20
                      w-14
                      h-14
                      rounded-[18px]
                      bg-gradient-to-br
                      from-cyan-500
                      to-blue-700
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      group-hover:rotate-6
                      transition-all
                      duration-300
                      "
                    >
                      <DepartmentIcon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* CONTENT AREA */}
                  <div className="flex flex-col flex-1 p-6 pt-8">
                    {/* TITLE */}
                    <h2
                      className="
                      text-[20px]
                      font-black
                      text-slate-900
                      leading-snug
                      group-hover:text-cyan-600
                      transition-colors
                      duration-300
                      "
                    >
                      {dept.name}
                    </h2>

                    {/* DESCRIPTION */}
                    <p
                      className="
                      mt-3
                      text-slate-500
                      text-xs
                      leading-relaxed
                      line-clamp-3
                      flex-1
                      "
                    >
                      {dept.description}
                    </p>

                    {/* FACILITIES DYNAMIC LIST */}
                    {dept.facilities && dept.facilities.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">
                          Key Facilities:
                        </p>
                        <ul className="space-y-1.5">
                          {dept.facilities.slice(0, 3).map((facility, idx) => (
                            <li key={idx} className="flex items-start text-xs text-slate-600">
                              <CheckCircle2 size={14} className="text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-1">{facility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
=======
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
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

                    {/* BOTTOM PROGRESSIVE LINE */}
                    <div
                      className="
                      mt-5
                      w-12
                      h-[4px]
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-700
                      group-hover:w-20
                      transition-all
                      duration-300
                      "
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}