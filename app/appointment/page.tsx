"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Phone,
  ShieldCheck,
  User,
  Mail,
  Stethoscope,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Heart,
  Ambulance,
  Award,
  Star
} from "lucide-react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({
        name: "", email: "", phone: "", department: "", date: "", time: "", message: ""
      });
    }, 1500);
  };

  const features = [
    {
      icon: CalendarDays,
      title: "Easy Appointment Booking",
      desc: "Book appointments with specialist doctors quickly and easily through our healthcare support system.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Clock3,
      title: "24/7 Medical Support",
      desc: "Our healthcare professionals are available round the clock for emergency and critical care services.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: ShieldCheck,
      title: "Trusted Healthcare Services",
      desc: "Experience safe and advanced treatment with experienced doctors and modern medical facilities.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <main className="pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 min-h-screen">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-600 hover:text-blue-900 transition-colors group">
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full shadow-sm mb-4">
            <Heart className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-wider">
              Hajela Hospital
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
            Book An{" "}
            <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Appointment
            </span>
          </h1>
          
          <div className="flex justify-center mt-3">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto">
            Schedule your consultation with our experienced doctors and receive world-class 
            healthcare services with advanced medical support.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
          
          {/* LEFT SIDE - Features */}
          <div className="space-y-5 md:space-y-6">
            
            {/* Success Toast */}
            {isSubmitted && (
              <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Appointment booked successfully!</span>
              </div>
            )}

            {/* Feature Cards */}
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex items-start gap-4 md:gap-5 border border-slate-100 hover:border-cyan-200"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Emergency Card - Premium */}
            <div className="relative group overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 flex items-center gap-4 md:gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center animate-pulse">
                  <Ambulance size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-red-100 text-xs md:text-sm font-medium uppercase tracking-wider">
                    24/7 Emergency Helpline
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1">
                    +91 98765 43210
                  </h3>
                </div>
                <button className="bg-white text-red-600 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm hover:bg-red-50 transition-all duration-300 shadow-lg flex items-center gap-2">
                  <Phone size={16} />
                  Call Now
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <Award className="w-3.5 h-3.5 text-cyan-600" />
                <span className="text-[10px] font-medium text-slate-600">NABH Accredited</span>
              </div>
              <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <Star className="w-3.5 h-3.5 text-yellow-500" />
                <span className="text-[10px] font-medium text-slate-600">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                <span className="text-[10px] font-medium text-slate-600">50k+ Patients</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-slate-100">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-900 flex items-center justify-center">
                <CalendarDays className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Appointment Form</h2>
                <p className="text-sm text-slate-400 mt-1">Fill details & we'll contact you</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              
              {/* Name */}
              <div className="group">
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Department & Date Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-slate-600 text-xs font-medium mb-1.5">Department *</label>
                  <div className="relative">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select Department</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Orthopaedics">Orthopaedics</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Gynecology">Gynecology</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-slate-600 text-xs font-medium mb-1.5">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="group">
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Preferred Time *</label>
                <div className="relative">
                  <Clock3 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Additional Message (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    placeholder="Describe your symptoms or any special requirements..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-blue-900 via-cyan-700 to-cyan-500 text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>Processing... <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                  ) : (
                    <>Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              <p className="text-center text-slate-400 text-[10px] mt-2">
                By booking, you agree to our terms and privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}