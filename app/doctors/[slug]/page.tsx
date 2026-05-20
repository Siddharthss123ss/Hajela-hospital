// app/doctors/[slug]/page.tsx (Ya isko [id]/page.tsx folder me rakhein)

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Award,
  BriefcaseMedical,
  GraduationCap,
} from "lucide-react";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  degree: string[];
  experience: number;
  image_url: string;
  website?: string;
}

// Next.js Server Component data fetcher
async function getDoctorData(id: string) {
  try {
    // Apne domain URL ke hisab se absolute path setup karein ya relative deployment me use karein
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/doctors/${id}`, {
      cache: "no-store", // Taaki har baar fresh data mile
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    return null;
  }
}

export default async function DoctorDetails({
  params,
}: {
  params: Promise<{ slug: string }>; // Agar folder ka naam [id] rakha hai toh yahan 'id: string' karein
}) {
  // URL se ID/Slug nikalne ke liye
  const resolvedParams = await params;
  const doctorId = resolvedParams.slug; // Agar folder name [id] hai toh resolvedParams.id hoga

  const doctor: Doctor | null = await getDoctorData(doctorId);

  // Agar data nahi milta toh Next.js ka default 404 page trigger hoga
  if (!doctor) {
    notFound();
  }

  return (
    <main
      className="
      relative
      min-h-screen
      bg-gradient-to-b
      from-white
      via-slate-50
      to-white
      pt-32
      pb-24
      overflow-hidden
      "
    >
      {/* PREMIUM BG GLOW */}
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
        {/* BACK BUTTON */}
        <Link
          href="/doctors"
          className="
          inline-flex
          items-center
          gap-2
          text-slate-600
          font-semibold
          hover:text-cyan-600
          transition-all
          duration-300
          "
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Doctors
        </Link>

        {/* MAIN */}
        <div
          className="
          mt-12
          grid
          lg:grid-cols-2
          gap-14
          lg:gap-20
          items-center
          "
        >
          {/* IMAGE */}
          <div
            className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-slate-100
            border
            border-slate-200
            shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            "
          >
            <Image
              src={doctor.image_url || "/doctors/placeholder.jpg"}
              alt={doctor.name}
              width={900}
              height={1100}
              className="
              w-full
              h-[500px]
              lg:h-[720px]
              object-cover
              object-top
              "
              priority // Hero/Main image ke liye optimize karega
            />
          </div>

          {/* CONTENT */}
          <div>
            {/* EXPERIENCE */}
            <div
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-cyan-50
              border
              border-cyan-100
              text-cyan-700
              font-bold
              "
            >
              <Award className="w-5 h-5" />
              {doctor.experience}+ Years Experience
            </div>

            {/* NAME */}
            <h1
              className="
              mt-7
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              text-slate-900
              leading-tight
              "
            >
              {doctor.name}
            </h1>

            {/* ROLE / SPECIALIZATION */}
            <p
              className="
              mt-5
              text-2xl
              text-cyan-700
              font-semibold
              "
            >
              {doctor.specialization}
            </p>

            {/* LINE */}
            <div
              className="
              mt-7
              w-20
              h-[4px]
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-700
              "
            ></div>

            {/* QUALIFICATION */}
            <div
              className="
              mt-10
              flex
              items-start
              gap-5
              "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-50
                flex
                items-center
                justify-center
                "
              >
                <GraduationCap className="w-7 h-7 text-cyan-700" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Qualification
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {doctor.degree ? doctor.degree.join(", ") : "N/A"}
                </p>
              </div>
            </div>

            {/* SPECIALITY */}
            <div
              className="
              mt-10
              flex
              items-start
              gap-5
              "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-blue-50
                flex
                items-center
                justify-center
                "
              >
                <BriefcaseMedical className="w-7 h-7 text-blue-700" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Specialization
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {doctor.specialization}
                </p>
              </div>
            </div>

            {/* ABOUT */}
            <p
              className="
              mt-10
              text-slate-600
              leading-relaxed
              text-base
              lg:text-lg
              "
            >
              {doctor.name} is one of the experienced and trusted
              specialists at Hajela Hospital, committed to delivering
              compassionate patient care with modern medical expertise,
              precision and excellence.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">
              {/* APPOINTMENT */}
              <Link
                href="/appointment"
                className="
                bg-gradient-to-r
                from-cyan-600
                to-blue-700
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                shadow-[0_10px_40px_rgba(6,182,212,0.25)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Book Appointment
              </Link>

              {/* CONTACT */}
              <Link
                href="/contact"
                className="
                border
                border-slate-300
                text-slate-700
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-slate-100
                transition-all
                duration-300
                "
              >
                Contact Hospital
              </Link>

              {/* WEBSITE */}
              {doctor.website && (
                <a
                  href={doctor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  border
                  border-cyan-200
                  bg-cyan-50
                  text-cyan-700
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:bg-cyan-600
                  hover:text-white
                  hover:border-cyan-600
                  transition-all
                  duration-300
                  "
                >
                  Visit Official Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}