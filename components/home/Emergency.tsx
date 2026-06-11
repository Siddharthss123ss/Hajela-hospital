"use client";

import {
  PhoneCall,
  Ambulance,
  Clock,
  Shield,
  AlertCircle,
  Heart,
  Navigation,
  Sparkles,
  ShieldCheck,
  Mic,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Emergency() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-br from-[#071521] via-[#0b1f30] to-[#071521]">
      
      {/* Premium Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-red-500/10 blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[120px]" />
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-400/10 blur-3xl" />

      {/* Animated Border Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 border border-red-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 border border-red-500/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="relative overflow-hidden rounded-[38px] border border-white/15 bg-gradient-to-r from-red-700 via-red-600 to-red-500 shadow-2xl hover:shadow-red-500/25 transition-all duration-500">
          
          {/* Top Light Bar */}
          <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse" />
          
          {/* Animated Siren Effect */}
          <div className="absolute top-4 right-4 flex gap-1 opacity-70">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping delay-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping delay-600" />
          </div>

          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-white/10" />

          <div className="relative z-10 p-8 md:p-12 lg:p-14">
            
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
                <div className="w-2 h-2 rounded-full bg-red-200 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[3px] text-white">
                  🚨 24/7 Emergency Support
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-sm px-4 py-2">
                <Clock className="w-4 h-4 text-white/80" />
                <span className="text-sm text-white/80 font-mono font-medium">
                  {currentTime} IST
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
              
              {/* Left Section */}
              <div className="text-center xl:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                    Immediate Response
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Emergency
                  <span className="block text-red-100 text-3xl md:text-4xl mt-2">
                    Medical Assistance
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
                  Hajela Hospital provides rapid emergency response, trauma support, ICU facilities,
                  ambulance services and critical care treatment with experienced emergency specialists.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center xl:justify-start">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/10">
                    <AlertCircle className="w-4 h-4 text-red-100" />
                    <span className="text-sm text-white font-medium">Critical Care</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/10">
                    <Ambulance className="w-4 h-4 text-red-100" />
                    <span className="text-sm text-white font-medium">Ambulance Support</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-red-100" />
                    <span className="text-sm text-white font-medium">Insurance Accepted</span>
                  </div>
                </div>
              </div>

              {/* Center — Phone Numbers */}
              <div className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl animate-pulse" />
                  <div className="relative mx-auto flex items-center justify-center w-24 h-24 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-lg">
                    <PhoneCall className="w-10 h-10 text-white animate-pulse" />
                  </div>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[3px] text-red-100 font-semibold">
                  Emergency Helpline
                </p>
                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    <a href="tel:07552773393" className="hover:text-red-200 transition-colors">0755 277 3393</a>
                  </h3>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    <a href="tel:07553773392" className="hover:text-red-200 transition-colors">0755 377 3392</a>
                  </h3>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    <a href="tel:07552772233" className="hover:text-red-200 transition-colors">0755 277 2233</a>
                  </h3>
                   <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    <a href="tel:+919575052525" className="hover:text-red-200 transition-colors">+919575052525</a>
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/70">📞 Available 24/7 • Immediate Assistance</p>
              </div>

              {/* Right — Action Buttons */}
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <a
                  href="tel:07552773393"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-red-600 font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <PhoneCall className={`w-5 h-5 ${isHovered ? "animate-bounce" : ""}`} />
                    Call Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>

                <a
                  href="https://maps.app.goo.gl/KuLYge1xJFzkihGZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-3 justify-center xl:justify-start">
              {[
                { icon: Ambulance, label: "Book Ambulance", color: "hover:bg-red-500/30" },
                { icon: Shield, label: "Insurance Support", color: "hover:bg-blue-500/30" },
                { icon: Heart, label: "Critical Care", color: "hover:bg-pink-500/30" },
                { icon: Mic, label: "Voice Assistance", color: "hover:bg-purple-500/30" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`group flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 hover:${item.color} transition-all duration-300 hover:scale-105`}
                >
                  <item.icon className="w-4 h-4 text-white group-hover:scale-110 transition-all" />
                  <span className="text-sm text-white font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Decorative Line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>

      {/* Add custom animation to globals.css if not present */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}