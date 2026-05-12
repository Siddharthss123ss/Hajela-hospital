"use client";

import { PhoneCall, Ambulance, Clock, Shield, AlertCircle, Heart, Navigation } from "lucide-react";
import { useState, useEffect } from "react";

export default function Emergency() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 overflow-hidden relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Emergency Banner */}
        <div className="relative group">
          
          {/* Multiple Glow Layers */}
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-[2rem] blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-sm">
            
            {/* Siren Light Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent animate-pulse"></div>
            
            {/* Animated Background Lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10 p-6 md:p-8 lg:p-10">
              
              {/* Header with Time */}
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-xs uppercase tracking-wider">
                    24/7 Emergency Support
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-white/70" />
                  <span className="text-white/70 text-xs font-mono">{currentTime}</span>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                
                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Emergency
                    <span className="block text-red-200 text-xl sm:text-2xl md:text-3xl mt-1">
                      Medical Assistance
                    </span>
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
                    <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                      <AlertCircle className="w-3 h-3 text-red-200" />
                      <span className="text-white/80 text-[10px]">Critical Care</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                      <Ambulance className="w-3 h-3 text-red-200" />
                      <span className="text-white/80 text-[10px]">Free Ambulance</span>
                    </div>
                  </div>
                </div>
                
                {/* CENTER - Big Phone Number */}
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 animate-ping"></div>
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                      <PhoneCall className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
                    </div>
                  </div>
                  <p className="text-red-100 text-xs uppercase tracking-wider">Emergency Helpline</p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    +91 98765 43210
                  </h3>
                  <p className="text-white/50 text-[10px] mt-0.5">Available 24/7 • Free Call</p>
                </div>
                
                {/* RIGHT - Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative px-6 md:px-8 py-3 md:py-3.5 bg-white rounded-full font-bold text-red-600 hover:shadow-2xl transition-all duration-300 overflow-hidden min-w-[160px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                      <PhoneCall className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                      Call Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  
                  <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full transition-all duration-300 border border-white/20">
                    <Navigation className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">Get Directions</span>
                  </button>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  { icon: Ambulance, label: "Book Ambulance", color: "hover:bg-red-500" },
                  { icon: Shield, label: "Insurance Claim", color: "hover:bg-blue-500" },
                  { icon: Heart, label: "Critical Care", color: "hover:bg-pink-500" },
                ].map((item, idx) => (
                  <button 
                    key={idx}
                    className={`flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all duration-300 group ${item.color}`}
                  >
                    <item.icon className="w-3 h-3 text-white/80 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-xs font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}