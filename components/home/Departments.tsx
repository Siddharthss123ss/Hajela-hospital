"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Stethoscope } from "lucide-react";

interface Department {
  _id: string;
  name: string;
  slug: string;
  description: string;
}

export default function DepartmentsSlider() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
        <p className="mt-4 text-slate-500">Loading departments...</p>
      </div>
    );
  }

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-cyan-50/30">
      <div className="container-custom relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-bold uppercase tracking-[4px] text-sm mb-4">
            Our Medical Services
          </p>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Specialized
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {" "}Medical Departments
            </span>
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={26}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {departments.map((dept) => (
            <SwiperSlide key={dept._id}>
              <Link
                href={`/departments/${dept.slug}`}
                className="block group relative h-full overflow-hidden rounded-[34px] border border-slate-200/70 bg-white p-8 min-h-[340px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative z-10 w-20 h-20 rounded-[24px] bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-7 shadow-lg group-hover:scale-105 transition-all duration-300">
                  <Stethoscope size={36} className="text-white" />
                </div>
                <h3 className="relative z-10 text-[26px] font-black text-slate-900 leading-tight">
                  {dept.name}
                </h3>
                <p className="relative z-10 mt-4 text-slate-600 leading-relaxed text-[15px] line-clamp-3">
                  {dept.description}
                </p>
                <div className="relative z-10 mt-8 w-16 h-[4px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 group-hover:w-24 transition-all duration-300" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/departments"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 px-9 py-4 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Stethoscope className="w-5 h-5" />
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
}