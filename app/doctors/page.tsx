// app/doctors/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Award,
  ChevronRight,
  Loader2,
} from "lucide-react";

interface Doctor {
  _id: string;
  slug: string;
  name: string;
  role: string;
  degree: string;
  experience: string;
  image_url: string;
  about: string;
  expertise: string[];
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("/api/doctors");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setDoctors(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  // 🔴 Handle image load
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // 🔴 Optimize Cloudinary URL
  const getOptimizedImageUrl = (url: string) => {
    if (url?.includes('cloudinary')) {
      return url.replace('/upload/', '/upload/q_auto,f_auto,w_600,c_limit/');
    }
    return url;
  };

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
      {/* GLOW */}
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
      />

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
            text-sm
            "
          >
            <Stethoscope className="w-4 h-4" />
            Hajela Hospital Specialists
          </div>
          <h1
            className="
            mt-7
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-black
            text-slate-900
            leading-tight
            "
          >
            Meet Our Expert
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-700
              bg-clip-text
              text-transparent
              "
            >
              {" "}Doctors
            </span>
          </h1>
          <p
            className="
            mt-7
            max-w-3xl
            mx-auto
            text-slate-500
            text-base
            md:text-lg
            leading-relaxed
            "
          >
            Our highly experienced doctors provide advanced,
            compassionate and world-class medical care.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div
            className="
            flex
            flex-col
            items-center
            justify-center
            min-h-[400px]
            gap-4
            "
          >
            <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" />
            <p className="text-slate-500 font-medium">
              Loading specialists...
            </p>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div
            className="
            text-center
            py-12
            bg-red-50
            rounded-[32px]
            border
            border-red-100
            max-w-2xl
            mx-auto
            p-8
            "
          >
            <p className="text-red-600 font-semibold text-lg">
              Error loading data
            </p>
            <p className="text-red-500 text-sm mt-1">
              {error}
            </p>
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
            {doctors.map((doctor, index) => (
              <div
                key={doctor._id}
                className="
                group
                bg-white
                rounded-[32px]
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
                {/* IMAGE - Optimized */}
                <div className="relative h-[340px] bg-slate-200 overflow-hidden">
                  {/* 🔴 Skeleton loader */}
                  {!loadedImages[doctor._id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse" />
                  )}
                  
                  <Image
                    src={getOptimizedImageUrl(doctor.image_url)}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className={`
                      object-cover
                      object-top
                      transition-all duration-700
                      ${loadedImages[doctor._id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                      group-hover:scale-105
                    `}
                    onLoad={() => handleImageLoad(doctor._id)}
                    priority={index < 4} // 🔴 First 4 images priority
                    quality={85}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
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
                    {doctor.experience}
                  </div>

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

                  <p className="mt-2 text-cyan-700 font-semibold text-base">
                    {doctor.role}
                  </p>

                  <p
                    className="
                    mt-4
                    text-slate-500
                    text-sm
                    leading-relaxed
                    min-h-[70px]
                    "
                  >
                    {doctor.degree}
                  </p>

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
                  />

                  <Link
                    href={`/doctors/${doctor.slug}`}
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