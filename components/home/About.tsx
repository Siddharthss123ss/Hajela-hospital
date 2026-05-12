import Image from "next/image";
import { CheckCircle, Heart, Stethoscope, Ambulance, ArrowRight } from "lucide-react";

const features = [
  {
    text: "24/7 Emergency Support",
    icon: Ambulance,
    color: "text-red-500",
  },
  {
    text: "Experienced Specialist Doctors",
    icon: Stethoscope,
    color: "text-blue-500",
  },
  {
    text: "Modern ICU & Operation Theatres",
    icon: Heart,
    color: "text-pink-500",
  },
  {
    text: "Advanced Diagnostic Facilities",
    icon: CheckCircle,
    color: "text-emerald-500",
  },
];

export default function About() {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT IMAGES SECTION - Premium */}
          <div className="relative group">
            
            {/* Main Image with Glow Effect */}
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl ring-4 ring-white/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
              <Image
                src="/hospital/about.webp"
                alt="Hospital Main Building"
                width={600}
                height={700}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Floating Image 2 with rotation & hover */}
            <div className="absolute -bottom-12 -right-8 lg:-right-12 rounded-[32px] overflow-hidden border-[6px] border-white shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-2 z-20">
              <Image
                src="/hospital/about2.jpg"
                alt="Expert Doctors Team"
                width={300}
                height={250}
                className="w-[220px] h-[200px] lg:w-[270px] lg:h-[240px] object-cover"
              />
            </div>

            {/* Experience Card - Enhanced with Glassmorphism */}
            <div className="absolute top-8 -left-6 lg:top-12 lg:-left-10 bg-gradient-to-br from-blue-900 via-cyan-700 to-cyan-500 text-white p-6 lg:p-8 rounded-[32px] shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 z-20">
              <h3 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
                25<span className="text-cyan-200">+</span>
              </h3>
              <p className="mt-2 text-sm lg:text-base font-medium uppercase tracking-wide">
                Years of Excellence
              </p>
              <div className="mt-3 h-1 w-12 bg-white/40 rounded-full"></div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-cyan-200 rounded-full opacity-50"></div>
          </div>

          {/* RIGHT CONTENT - Premium typography & spacing */}
          <div className="space-y-8">
            
            {/* Subtitle with accent line */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-gradient-to-b from-blue-900 to-cyan-500 rounded-full"></div>
              <p className="text-cyan-600 font-bold text-lg uppercase tracking-wider">
                About Hajela Hospital
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-slate-900">
              Delivering{" "}
              <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                Exceptional
              </span>
              <br />
              Healthcare Services
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-cyan-500 pl-6">
              Hajela Hospital is committed to providing advanced medical care
              with cutting-edge technology, experienced specialists, and
              compassionate patient support — because your health is our priority.
            </p>

            {/* Premium Features Grid */}
            <div className="grid gap-5 pt-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group/item"
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 group-hover/item:scale-110 transition-transform">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <p className="text-lg font-medium text-slate-700 group-hover/item:text-slate-900">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button - Premium with arrow animation */}
            <div className="pt-4">
              <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Discover More
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>24/7 Emergency Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>NABH Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}