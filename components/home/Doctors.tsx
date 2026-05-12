"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight, Star, Shield, Stethoscope, Calendar, Users } from "lucide-react";

import "swiper/css";

const doctors = [
  {
    name: "Dr. Pravir Kumar Jha",
    role: "Cardio Thoracic & Vascular Surgery",
    fullRole: "Consultant -- Cardio Thoracic and Vascular Surgery",
    specialization: "Heart Surgery | Vascular Procedures | Bypass Surgery",
    rating: 4.9,
    experience: "15+ years",
    patients: "5000+",
    image: "/doctors/doc1.jpg",
  },
  {
    name: "Dr. Onkar Patel",
    role: "Gastroenterology & Hepatology",
    fullRole: "Consultant -- Gastroenterology, Hepatologist & Liver Transplant Physician",
    specialization: "Liver Transplant | Endoscopy | GI Surgery",
    rating: 4.8,
    experience: "12+ years",
    patients: "4500+",
    image: "/doctors/doc2.jpg",
  },
  {
    name: "Dr. Madhuri Nagori",
    role: "Cardiology",
    fullRole: "Consultant -- Cardiology",
    specialization: "Heart Failure | Interventional Cardiology | ECG",
    rating: 4.9,
    experience: "10+ years",
    patients: "3800+",
    image: "/doctors/doc3.jpg",
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Neurology",
    fullRole: "Consultant -- Neurology",
    specialization: "Stroke | Epilepsy | Neuromuscular Disorders",
    rating: 4.7,
    experience: "18+ years",
    patients: "6200+",
    image: "/doctors/doc4.jpg",
  },
  {
    name: "Dr. Sneha Mehta",
    role: "Pediatrics",
    fullRole: "Consultant -- Pediatrics",
    specialization: "Child Care | Vaccination | Development",
    rating: 4.9,
    experience: "8+ years",
    patients: "3500+",
    image: "/doctors/doc5.jpg",
  },
  {
    name: "Dr. Anil Verma",
    role: "Orthopedics",
    fullRole: "Consultant -- Orthopedics",
    specialization: "Joint Replacement | Spine Surgery | Sports Injury",
    rating: 4.8,
    experience: "14+ years",
    patients: "4800+",
    image: "/doctors/doc6.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-cyan-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm mb-4">
            <Shield className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-wider">
              Expert Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Medical Specialists
            </span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full"></div>
          </div>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            World-class experts providing compassionate care
          </p>
        </div>

        {/* Doctor Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="doctors-slider pb-8"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-slate-100 hover:border-cyan-200">
                  
                  {/* Image Section */}
                  <div className="relative bg-gradient-to-br from-slate-100 to-cyan-50 p-3 pb-0">
                    <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-md flex items-center gap-1 border border-yellow-200">
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs font-bold text-slate-700">{doctor.rating}</span>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="absolute -bottom-2 left-5 bg-gradient-to-r from-blue-900 to-cyan-600 text-white px-2.5 py-0.5 rounded-full shadow-md">
                      <p className="text-[10px] font-semibold flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        {doctor.experience}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-cyan-700 transition-colors duration-300 line-clamp-1">
                      {doctor.name}
                    </h3>
                    <p className="text-[11px] text-cyan-600 font-semibold mt-1 uppercase tracking-wide line-clamp-1">
                      {doctor.role}
                    </p>
                    
                    {/* Specialization Tags */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {doctor.specialization.split(" | ").map((spec, i) => (
                        <span key={i} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    {/* Patient Count */}
                    <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-500">
                      <Users className="w-3 h-3" />
                      <span>{doctor.patients} happy patients</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-cyan-100 via-cyan-300 to-transparent my-2"></div>
                    
                    {/* View Profile Button */}
                    <button className="w-full mt-1 text-cyan-600 text-[11px] font-semibold flex items-center justify-center gap-1 hover:gap-2 transition-all duration-300 group/btn py-1.5 rounded-lg hover:bg-cyan-50">
                      View Profile
                      <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-xl"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button - FIXED */}
        <div className="flex justify-center mt-10 md:mt-12">
          <Link href="/doctors">
            <button className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-900 via-cyan-700 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Browse All Specialists
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}