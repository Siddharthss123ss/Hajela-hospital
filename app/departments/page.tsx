"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

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
  Phone,
  ChevronRight,
  LucideIcon,
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

  doctor_name: string;

  contact_number: string;

}

const iconMap: Record<string, LucideIcon> = {

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

  "sonology-imaging-services": ScanHeart,

  "pathology": Microscope,

  "iccu-critical-care": ShieldPlus,

};

export default function DepartmentsPage() {

  const [departments, setDepartments] =
    useState<Department[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    async function fetchDepartments() {

      try {

        const res =
          await fetch("/api/departments");

        if (!res.ok)
          throw new Error(
            "Failed to fetch data from API"
          );

        const data =
          await res.json();

        setDepartments(data);

      } catch (err: any) {

        setError(
          err.message ||
          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    }

    fetchDepartments();

  }, []);

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

      {/* GLOW */}

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

      <div
        className="
        container-custom

        relative
        z-10

        mx-auto
        px-4
        "
      >

        {/* HEADER */}

        <div className="text-center mb-20">

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

              {" "}Medical Departments

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

            Hajela Hospital provides advanced healthcare,
            emergency care, IVF services, diagnostics,
            trauma support and specialized treatments
            with experienced doctors and surgeons.

          </p>

        </div>

        {/* LOADING */}

        {loading && (

          <div
            className="
            flex
            justify-center
            items-center

            py-20
            "
          >

            <div
              className="
              animate-spin

              rounded-full

              h-12
              w-12

              border-b-2
              border-cyan-600
              "
            ></div>

            <span
              className="
              ml-3

              text-slate-600

              font-medium
              "
            >

              Fetching medical departments...

            </span>

          </div>

        )}

        {/* ERROR */}

        {error && (

          <div
            className="
            text-center

            p-6

            bg-red-50

            text-red-600

            rounded-2xl

            max-w-xl

            mx-auto

            font-medium

            shadow-sm
            "
          >

            Error:
            {" "}
            {error}

          </div>

        )}

        {/* DEPARTMENTS */}

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

              const DepartmentIcon =
                iconMap[dept.slug] ||
                Hospital;

              return (

                <Link
                  href={`/departments/${dept.slug}`}

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
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                    relative

                    h-52
                    w-full

                    overflow-hidden

                    bg-slate-100
                    "
                  >

                    <img
                      src={dept.image_url}

                      alt={dept.name}

                      className="
                      h-full
                      w-full

                      object-cover

                      group-hover:scale-105

                      transition-transform
                      duration-700
                      ease-out
                      "
                    />

                    <div
                      className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-black/10
                      "
                    ></div>

                    {/* EMERGENCY */}

                    {dept.is_emergency_dept && (

                      <span
                        className="
                        absolute
                        top-4
                        right-4

                        z-20

                        bg-red-500

                        text-white

                        text-[10px]

                        font-black

                        px-3
                        py-1.5

                        rounded-full

                        uppercase

                        tracking-wider

                        shadow-md
                        "
                      >

                        24/7 Emergency

                      </span>

                    )}

                    {/* ICON */}

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

                      <DepartmentIcon
                        size={24}
                        className="text-white"
                      />

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                    flex
                    flex-col
                    flex-1

                    p-6
                    pt-9
                    "
                  >

                    {/* TITLE */}

                    <h2
                      className="
                      text-[22px]

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

                      text-sm

                      leading-relaxed

                      line-clamp-4

                      min-h-[100px]
                      "
                    >

                      {dept.description}

                    </p>

                    {/* DOCTOR */}

                    <div
                      className="
                      mt-5

                      bg-cyan-50

                      border
                      border-cyan-100

                      rounded-2xl

                      p-4
                      "
                    >

                      <p
                        className="
                        text-xs

                        uppercase

                        tracking-wider

                        text-cyan-600

                        font-bold
                        "
                      >

                        Specialist Doctor

                      </p>

                      <p
                        className="
                        mt-2

                        text-slate-900

                        font-black

                        text-lg
                        "
                      >

                        {dept.doctor_name}

                      </p>

                      <div
                        className="
                        mt-3

                        flex
                        items-center

                        gap-2

                        text-slate-700

                        font-semibold
                        "
                      >

                        <Phone
                          size={16}
                          className="
                          text-cyan-600
                          "
                        />

                        +91 {dept.contact_number}

                      </div>

                    </div>

                    {/* FACILITIES */}

                    {
                      dept.facilities &&
                      dept.facilities.length > 0 && (

                        <div
                          className="
                          mt-5

                          pt-4

                          border-t
                          border-slate-100
                          "
                        >

                          <p
                            className="
                            text-[11px]

                            uppercase

                            tracking-wider

                            font-bold

                            text-slate-400

                            mb-3
                            "
                          >

                            Key Facilities

                          </p>

                          <ul className="space-y-2">

                            {
                              dept.facilities
                              .slice(0, 3)
                              .map(
                                (
                                  facility,
                                  idx
                                ) => (

                                  <li
                                    key={idx}

                                    className="
                                    flex
                                    items-start

                                    text-xs

                                    text-slate-600
                                    "
                                  >

                                    <CheckCircle2
                                      size={14}

                                      className="
                                      text-cyan-500

                                      mr-2
                                      mt-0.5

                                      flex-shrink-0
                                      "
                                    />

                                    <span>
                                      {facility}
                                    </span>

                                  </li>

                                )
                              )
                            }

                          </ul>

                        </div>

                      )
                    }

                    {/* BUTTONS */}

                    <div
                      className="
                      mt-6

                      grid
                      grid-cols-2

                      gap-3
                      "
                    >

                   <button

  onClick={(e) => {

    e.preventDefault();

    window.location.href =
      `tel:+91${dept.contact_number}`;

  }}

  className="
  inline-flex

  items-center
  justify-center

  gap-2

  rounded-2xl

  bg-gradient-to-r
  from-cyan-500
  to-blue-700

  px-4
  py-3

  text-white

  font-semibold

  hover:scale-[1.02]

  transition-all
  duration-300
  "
>

  <Phone size={16} />

  Call

</button>

                      <div
                        className="
                        inline-flex

                        items-center
                        justify-center

                        gap-1

                        rounded-2xl

                        border
                        border-slate-200

                        px-4
                        py-3

                        text-slate-700

                        font-semibold

                        bg-white
                        "
                      >

                        View

                        <ChevronRight
                          size={16}
                        />

                      </div>

                    </div>

                  </div>

                </Link>

              );

            })}

          </div>

        )}

      </div>

    </main>

  );

}