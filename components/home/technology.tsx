"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const technologies = [
  {
    title: "ICCU & NICU Care",
    image: "/hospital/ICCU.jpeg",
    desc: "Advanced ICU and NICU facilities with ventilator support, critical care specialists, neonatal monitoring systems and 24/7 emergency medical supervision for adults and newborns.",
    features: ["24/7 Critical Monitoring", "Ventilator Support Systems", "Neonatal Intensive Care"],
  },
  {
    title: "Robotic Surgery",
    image: "/hospital/joint.jpg",
    desc: "Modern robotic-assisted surgical procedures offering greater precision, smaller incisions, faster recovery and advanced minimally invasive treatment solutions.",
    features: ["Minimally Invasive Procedures", "Advanced Operation Theatres", "Faster Recovery Support"],
  },
  {
    title: "IVF & Fertility Centre",
    image: "/hospital/ivf.jpg",
    desc: "Comprehensive fertility and reproductive healthcare services including IVF, ICSI, infertility consultation and personalized fertility treatments with modern reproductive technology.",
    features: ["IVF & ICSI Treatments", "Fertility Consultation", "Reproductive Healthcare"],
  },
  {
    title: "ENT & Voice Disorders",
    image: "/hospital/ents.jpeg",
    desc: "Specialized ENT treatments for ear, nose, throat, sinus, allergy and voice disorders using advanced diagnostic and minimally invasive surgical techniques.",
    features: ["Microsurgical ENT Care", "Sinus & Allergy Treatment", "Voice Disorder Solutions"],
  },
  {
    title: "Cochlear Implantation Centre",
    image: "/hospital/cochlear.jpg",
    desc: "Advanced cochlear implant procedures helping patients restore hearing abilities with expert ENT surgeons, hearing rehabilitation and modern implant technologies.",
    features: ["Advanced Hearing Implants", "Hearing Rehabilitation", "Expert ENT Surgeons"],
  },
];

export default function Technology() {
  const [active, setActive] = useState(technologies[0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [active]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-28 bg-white">
      
      {/* Premium Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[140px] animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-4">
            <span className="text-cyan-600 uppercase tracking-[4px] text-xs font-bold">Advanced Facilities</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Advanced Medical
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {" "}Technology
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-slate-500 leading-relaxed">
            Hajela Hospital provides advanced healthcare technology with modern surgical systems,
            fertility treatments, critical care support and specialized ENT healthcare services.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">
          
          {/* LEFT SIDE — Tech List */}
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
            {technologies.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className={`
                  group relative w-full overflow-hidden border-b border-slate-100
                  px-7 py-5 text-left transition-all duration-500
                  ${active.title === item.title
                    ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-50 hover:pl-8"
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[15px] sm:text-[16px]">
                    {item.title}
                  </span>
                  <span className={`
                    text-xl transition-all duration-300
                    ${active.title === item.title ? "translate-x-1" : "group-hover:translate-x-1"}
                  `}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE — Active Tech Detail */}
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl transition-all duration-500 hover:shadow-3xl">
            
            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden bg-slate-800">
              {/* Skeleton Loader */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse z-10" />
              )}
              
              <Image
                key={active.title}
                src={active.image}
                alt={active.title}
                width={1600}
                height={1000}
                priority
                className={`
                  h-[300px] sm:h-[450px] lg:h-[650px] w-full object-cover
                  transition-all duration-700
                  ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                  hover:scale-[1.02]
                `}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 px-5 py-2 text-sm font-semibold text-white mb-5 shadow-lg">
                  ⚕️ Advanced Healthcare Facility
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-2xl">
                  {active.title}
                </h3>
              </div>
            </div>

            {/* DESCRIPTION & FEATURES */}
            <div className="p-7 sm:p-10">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                {active.desc}
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {active.features.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center hover:bg-cyan-50 hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-cyan-700">
                      ✓ {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}