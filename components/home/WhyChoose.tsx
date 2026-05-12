"use client";

import { useEffect, useRef, useState } from "react";
import {
  Ambulance,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Award,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Ambulance,
    title: "24/7 Emergency",
    desc: "Immediate emergency care with advanced ambulance support. Rapid response team always ready.",
    stat: "Response within 15 mins",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Treatment",
    desc: "NABH accredited hospital with patient-first approach and safe healthcare services.",
    stat: "98% Patient Satisfaction",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Experienced specialists across multiple medical departments with years of expertise.",
    stat: "100+ Specialists",
  },
  {
    icon: HeartPulse,
    title: "Advanced Technology",
    desc: "Modern infrastructure with latest diagnostic equipment and robotic surgery.",
    stat: "50+ Modern Equipment",
  },
];

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full shadow-sm mb-4">
            <TrendingUp className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
            Exceptional{" "}
            <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Healthcare
            </span>
          </h2>
          
          <div className="flex justify-center mt-3">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto">
            Hajela Hospital combines advanced medical technology with
            compassionate patient care for the best treatment experience.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          
          {features.map((item, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                
                {/* Premium Border Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-900"></div>
                
                {/* Content */}
                <div className="p-5 md:p-6 text-center">
                  
                  {/* Icon with Animation */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-cyan-100 rounded-2xl group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-cyan-600 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-cyan-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Stat Badge */}
                  <div className="mt-3 inline-block bg-slate-50 px-3 py-1 rounded-full">
                    <p className="text-[10px] font-semibold text-cyan-600">
                      ✓ {item.stat}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-10 md:mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-900 via-cyan-700 to-cyan-500 text-white rounded-full text-sm md:text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Learn More About Us
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}