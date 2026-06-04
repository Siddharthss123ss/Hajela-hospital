"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface IAward {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  image_id: string;
  year: string;
  category: "trophy award" | "certifications";
  order: number;
}

export default function Awards() {
  const [awards, setAwards] = useState<IAward[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchAwards() {
      try {
        const res = await fetch("/api/awards");
        if (res.ok) {
          const data = await res.json();
          // 🔴 SIRF TROPHY AWARDS FILTER KARO
          const trophyAwards = data.filter((item: IAward) => item.category === "trophy award");
          // Order ke hisaab se sort
          const sorted = trophyAwards.sort((a: IAward, b: IAward) => (a.order || 999) - (b.order || 999));
          setAwards(sorted);
        }
      } catch (error) {
        console.error("Failed to fetch awards:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAwards();
  }, []);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  if (loading) {
    return (
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#020617] via-black to-[#020617]">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 backdrop-blur-sm px-5 py-2 rounded-full border border-cyan-400/20 mb-4">
            <span className="text-cyan-400 uppercase tracking-[5px] font-semibold text-xs">Loading Awards...</span>
          </div>
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (awards.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#020617] via-black to-[#020617]">
      
      {/* Premium Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-cyan-500/10 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 backdrop-blur-sm px-5 py-2 rounded-full border border-cyan-400/20 mb-4">
            <span className="text-cyan-400 uppercase tracking-[5px] font-semibold text-xs">
              Recognition & Legacy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Awards & Certifications
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Hajela Hospital has been nationally recognized for excellence in healthcare, 
            patient care, hospital operations, cleanliness, leadership, and advanced medical services.
          </p>
        </div>

        {/* SLIDER - Saare Trophy Awards */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-8"
        >
          {awards.map((item, index) => (
            <SwiperSlide key={item._id}>
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:-translate-y-3 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 h-full">
                
                {/* IMAGE CONTAINER */}
                <div className="relative overflow-hidden bg-slate-800/50">
                  {!loadedImages[item._id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse z-10" />
                  )}
                  
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={700}
                    height={600}
                    priority={index < 3}
                    className={`
                      w-full h-[260px] sm:h-[300px] object-cover
                      transition-all duration-700
                      ${loadedImages[item._id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                      group-hover:scale-110
                    `}
                    onLoad={() => handleImageLoad(item._id)}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-yellow-400/15 backdrop-blur-xl border border-yellow-300/20 text-yellow-200 text-xs font-semibold tracking-wide z-20">
                    🏆 TROPHY AWARD • {item.year}
                  </div>
                  
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-[10px] font-mono z-20">
                    #{item.order || 999}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-5 w-20 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-32 transition-all duration-500" />
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-12">
          <Link
            href="/awards"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-[0_15px_50px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Awards
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}