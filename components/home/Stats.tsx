"use client";

import {
  Users,
  Stethoscope,
  Ambulance,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: "100+",
    text: "Expert Doctors",
    icon: Stethoscope,
  },

  {
    number: "50K+",
    text: "Happy Patients",
    icon: Users,
  },

  {
    number: "24/7",
    text: "Emergency Service",
    icon: Ambulance,
  },

  {
    number: "25+",
    text: "Years Experience",
    icon: ShieldCheck,
  },
];

export default function Stats() {
 return (
  <section className="relative overflow-hidden">
    {/* BACKGROUND WITH DARKER OVERLAY */}
    <div className="absolute inset-0 bg-[url('/hospital/stats-bg.jpg')] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-slate-950/85"></div> {/* pehle 80 tha, ab 85 darker */}

    {/* CONTENT */}
    <div className="relative z-10 container-custom py-12 md:py-16"> {/* pehle py-10 tha */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center"> {/* pehle flex-wrap */}
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center group transition-all duration-500 hover:-translate-y-2" // pehle -translate-y-3
          >
            {/* ICON - size kam */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <item.icon size={32} className="text-white group-hover:rotate-6 transition-all duration-500" strokeWidth={1.8} /> {/* size 42 se 32 */}
            </div>

            {/* NUMBER - size consistent */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-none group-hover:text-cyan-300 transition-all duration-500"> {/* pehle lg:text-5xl */}
              {item.number}
            </h2>

            {/* TEXT */}
            <p className="mt-2 text-xs lg:text-sm text-slate-300 group-hover:text-white transition-all duration-500"> {/* pehle mt-3 */}
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}