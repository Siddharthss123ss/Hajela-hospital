"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiAward } from "react-icons/fi";

interface IAward {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  image_id: string;
  year: string;
  category: "trophy award" | "certifications";
}

export default function AwardsPage() {
  const [awards, setAwards] = useState<IAward[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAwards() {
      try {
        const res = await fetch("/api/awards", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setAwards(data);
        }
      } catch (error) {
        console.error("Failed to load awards from API cluster", error);
      } finally {
        setLoading(false);
      }
    }
    getAwards();
  }, []);

  // Filtering runtime records matching schema identifiers strictly
  const trophies = awards.filter((item) => item.category === "trophy award");
  const certifications = awards.filter((item) => item.category === "certifications");

  if (loading) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center text-slate-400">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"></div>
          <p className="text-sm font-medium tracking-wide">Syncing Recognition Registry...</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-b
      from-[#020617]
      via-black
      to-[#020617]
      pt-32
      pb-24
      overflow-hidden
      "
    >
      {/* PREMIUM GLOW */}
      <div
        className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
        pointer-events-none
        "
      ></div>

      <div className="container-custom relative z-10 mx-auto px-4 max-w-7xl">
        {/* TOP */}
        <div className="text-center mb-24">
          <p
            className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
            font-semibold
            mb-5
            "
          >
            Recognition & Excellence
          </p>
          <h1
            className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
            "
          >
            Awards & Certifications
          </h1>
          <p
            className="
            mt-7
            max-w-3xl
            mx-auto
            text-slate-300
            text-base
            sm:text-lg
            leading-relaxed
            "
          >
            Hajela Hospital has been nationally recognized for excellence in healthcare, patient safety, leadership,
            hospital operations, nursing services, and medical innovation.
          </p>
        </div>

        {/* TROPHIES SECTION */}
        {trophies.length > 0 && (
          <div className="mb-28">
            <div className="mb-14">
              <h2
                className="
                text-3xl
                md:text-5xl
                font-black
                text-white
                "
              >
                Trophy Awards
              </h2>
              <p
                className="
                mt-4
                text-slate-400
                max-w-2xl
                leading-relaxed
                "
              >
                Prestigious awards and honors recognizing excellence in hospital operations, patient care, and healthcare leadership.
              </p>
            </div>

            {/* GRID */}
            <div
              className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              "
            >
              {trophies.map((item) => (
                <div
                  key={item._id}
                  className="
                  group
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  hover:-translate-y-3
                  hover:border-cyan-400/30
                  transition-all
                  duration-500
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[320px] w-full">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      from-black/90
                      via-black/20
                      to-transparent
                      "
                    ></div>
                    {/* BADGE */}
                    <div
                      className="
                      absolute
                      top-4
                      left-4
                      px-4
                      py-1.5
                      rounded-full
                      bg-yellow-400/15
                      border
                      border-yellow-300/20
                      backdrop-blur-xl
                      text-yellow-200
                      text-xs
                      font-semibold
                      "
                    >
                      TROPHY AWARD • {item.year}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3
                      className="
                      text-white
                      text-2xl
                      font-bold
                      leading-snug
                      "
                    >
                      {item.title}
                    </h3>
                    <p
                      className="
                      mt-3
                      text-slate-400
                      text-sm
                      leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                    <div
                      className="
                      mt-5
                      w-20
                      h-[3px]
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-400
                      to-orange-500
                      "
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATIONS SECTION */}
        {certifications.length > 0 && (
          <div>
            <div className="mb-14">
              <h2
                className="
                text-3xl
                md:text-5xl
                font-black
                text-white
                "
              >
                Certifications & Recognition
              </h2>
              <p
                className="
                mt-4
                text-slate-400
                max-w-2xl
                leading-relaxed
                "
              >
                Nationally recognized certifications and healthcare quality acknowledgements awarded for medical excellence.
              </p>
            </div>

            {/* GRID */}
            <div
              className="
              grid
              md:grid-cols-2
              xl:grid-cols-4
              gap-8
              "
            >
              {certifications.map((item) => (
                <div
                  key={item._id}
                  className="
                  group
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  transition-all
                  duration-500
                  shadow-[0_15px_60px_rgba(0,0,0,0.4)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[250px] w-full">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="
                      object-cover
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
                      from-black/80
                      via-black/10
                      to-transparent
                      "
                    ></div>
                    {/* BADGE */}
                    <div
                      className="
                      absolute
                      top-4
                      left-4
                      px-4
                      py-1.5
                      rounded-full
                      bg-cyan-500/15
                      border
                      border-cyan-300/20
                      backdrop-blur-xl
                      text-cyan-200
                      text-xs
                      font-semibold
                      "
                    >
                      CERTIFICATION • {item.year}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3
                      className="
                      text-white
                      text-xl
                      font-bold
                      leading-snug
                      "
                    >
                      {item.title}
                    </h3>
                    <p
                      className="
                      mt-3
                      text-slate-400
                      text-sm
                      leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                    <div
                      className="
                      mt-5
                      w-16
                      h-[3px]
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-600
                      "
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {awards.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
            <FiAward className="text-slate-600 h-16 w-16 mb-4 animate-pulse" />
            <p className="text-slate-400 text-lg">No records uploaded in current segment yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}