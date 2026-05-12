"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Star, 
  Phone, 
  Mail, 
  Calendar, 
  Award, 
  Stethoscope,
  ArrowLeft,
  ChevronRight,
  Heart,
  Shield
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Cardiologist",
    specialization: "Heart Specialist | Interventional Cardiology",
    image: "/doctors/doc1.jpg",
    experience: "15+ Years",
    education: "MBBS, MD (Cardiology), DM",
    rating: 4.9,
    patients: "5000+",
    availability: "Mon-Sat",
    fees: "₹1200",
  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    role: "Neurologist",
    specialization: "Brain & Spine Specialist | Stroke Expert",
    image: "/doctors/doc2.jpg",
    experience: "12+ Years",
    education: "MBBS, MD (Neurology), DM",
    rating: 4.8,
    patients: "4200+",
    availability: "Mon-Sat",
    fees: "₹1500",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    role: "Orthopaedic",
    specialization: "Joint Replacement | Sports Injury",
    image: "/doctors/doc3.jpg",
    experience: "18+ Years",
    education: "MBBS, MS (Ortho), DNB",
    rating: 4.9,
    patients: "6800+",
    availability: "Mon-Sat",
    fees: "₹1300",
  },
  {
    id: 4,
    name: "Dr. Sneha Kapoor",
    role: "Pediatrician",
    specialization: "Child Care | Newborn Specialist",
    image: "/doctors/doc4.jpg",
    experience: "10+ Years",
    education: "MBBS, MD (Pediatrics)",
    rating: 4.7,
    patients: "3500+",
    availability: "Mon-Sat",
    fees: "₹1000",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    role: "Gastroenterologist",
    specialization: "Liver Diseases | Endoscopy",
    image: "/doctors/doc5.jpg",
    experience: "14+ Years",
    education: "MBBS, MD (Medicine), DM (Gastro)",
    rating: 4.8,
    patients: "3900+",
    availability: "Mon-Sat",
    fees: "₹1400",
  },
  {
    id: 6,
    name: "Dr. Neha Gupta",
    role: "Gynecologist",
    specialization: "Women's Health | Maternity Care",
    image: "/doctors/doc6.jpg",
    experience: "11+ Years",
    education: "MBBS, MS (Obstetrics & Gynecology)",
    rating: 4.9,
    patients: "4800+",
    availability: "Mon-Sat",
    fees: "₹1100",
  },
];

export default function DoctorsPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(doctor => {
    if (filter !== "all" && doctor.role !== filter) return false;
    if (searchTerm && !doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !doctor.role.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const specialties = ["all", "Cardiologist", "Neurologist", "Orthopaedic", "Pediatrician", "Gastroenterologist", "Gynecologist"];

  return (
    <main className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/20 min-h-screen">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-600 hover:text-blue-900 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full shadow-sm mb-4">
            <Stethoscope className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-wider">
              Medical Specialists
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Expert Doctors
            </span>
          </h1>
          
          <div className="flex justify-center mt-3">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto">
            Our experienced medical specialists provide advanced treatment and compassionate patient care.
            Book your appointment with the best doctors in town.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 text-sm"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 justify-center">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setFilter(spec)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    filter === spec
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-400 hover:text-cyan-600"
                  }`}
                >
                  {spec === "all" ? "All Specialists" : spec}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DOCTORS GRID - Premium Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          
          {filteredDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Image Section */}
              <div className="relative bg-gradient-to-br from-slate-100 to-cyan-50 p-3 pb-0">
                <div className="relative h-52 md:h-56 w-full rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <span className="text-xs font-bold text-slate-700">{doctor.rating}</span>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-2 left-5 bg-gradient-to-r from-blue-900 to-cyan-600 text-white px-2.5 py-0.5 rounded-full shadow-md">
                  <p className="text-[10px] font-semibold">⚕️ {doctor.experience}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-base font-bold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-1">
                  {doctor.name}
                </h2>
                <p className="text-[11px] text-cyan-600 font-semibold mt-0.5 uppercase tracking-wide">
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
                
                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-cyan-600" />
                    <p className="text-[10px] text-slate-500">{doctor.fees}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-600" />
                    <p className="text-[10px] text-slate-500">{doctor.availability}</p>
                  </div>
                </div>
                
                {/* Education */}
                <p className="text-[10px] text-slate-400 mt-2 line-clamp-1">
                  {doctor.education}
                </p>
                
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-cyan-100 via-cyan-300 to-transparent my-2"></div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-[11px] font-semibold py-2 rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Book
                  </button>
                  <button className="px-3 py-2 border border-cyan-600 text-cyan-600 text-[11px] font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300">
                    Profile
                  </button>
                </div>
              </div>
              
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600">No doctors found</h3>
            <p className="text-slate-400 mt-2">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-800 rounded-2xl p-6 md:p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">50k+</p>
              <p className="text-cyan-200 text-xs mt-1">Happy Patients</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">100+</p>
              <p className="text-cyan-200 text-xs mt-1">Expert Doctors</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
              <p className="text-cyan-200 text-xs mt-1">Emergency Care</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">15+</p>
              <p className="text-cyan-200 text-xs mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}