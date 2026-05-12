"use client";

import { useState } from "react";
import { 
  Calendar, 
  User, 
  Phone, 
  Stethoscope, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Ambulance,
  Star
} from "lucide-react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Appointment booked successfully! We'll contact you soon.");
      setFormData({ name: "", phone: "", department: "", date: "", time: "", message: "" });
    }, 1500);
  };

  const features = [
    { icon: Ambulance, text: "24/7 Emergency Support", color: "text-red-400" },
    { icon: Shield, text: "NABH Accredited", color: "text-blue-400" },
    { icon: Heart, text: "Advanced Technology", color: "text-pink-400" },
    { icon: Clock, text: "Minimal Wait Time", color: "text-green-400" },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm mb-4">
            <Calendar className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-wider">
              Book Appointment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Visit
            </span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto">
            Book your appointment with our expert doctors. Experience world-class healthcare with minimal waiting time.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden">
          
          {/* Premium Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[100px] opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[100px] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-white/5 to-transparent"></div>
          </div>
          
          {/* Grid Layout - Responsive */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            
            {/* LEFT CONTENT - Elite Design */}
            <div className="p-8 md:p-10 lg:p-12 xl:p-14">
              
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-white/90 text-xs font-medium">4.9/5 Patient Rating</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Schedule Your Visit
                <span className="block text-cyan-300 text-2xl md:text-3xl mt-2">
                  With Our Specialists
                </span>
              </h3>
              
              <p className="mt-4 md:mt-6 text-sm md:text-base text-slate-200 leading-relaxed">
                Hajela Hospital offers advanced healthcare services with
                experienced doctors and modern medical facilities. Your health is our priority.
              </p>
              
              {/* Premium Features */}
              <div className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <p className="text-white text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-cyan-400 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">
                        ✓
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs">
                    Trusted by <span className="font-bold text-white">50,000+</span> patients
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM - Glassmorphism Premium */}
            <div className="bg-white/10 backdrop-blur-xl border-l border-white/20 p-6 md:p-8 lg:p-10">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Make An Appointment</h4>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                
                {/* Name Field */}
                <div className="group">
                  <label className="block text-white/70 text-xs mb-1.5 font-medium">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-cyan-300 transition-colors" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-cyan-400 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>
                
                {/* Phone Field */}
                <div className="group">
                  <label className="block text-white/70 text-xs mb-1.5 font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-cyan-300 transition-colors" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-cyan-400 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>
                
                {/* Department Field */}
                <div className="group">
                  <label className="block text-white/70 text-xs mb-1.5 font-medium">Select Department</label>
                  <div className="relative">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-cyan-300 transition-colors" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-cyan-400 transition-all duration-300 appearance-none cursor-pointer text-sm"
                    >
                      <option value="" className="text-slate-800">Select Department</option>
                      <option value="cardiology" className="text-slate-800">Cardiology</option>
                      <option value="neurology" className="text-slate-800">Neurology</option>
                      <option value="orthopedics" className="text-slate-800">Orthopedics</option>
                      <option value="pediatrics" className="text-slate-800">Pediatrics</option>
                      <option value="gynecology" className="text-slate-800">Gynecology</option>
                    </select>
                  </div>
                </div>
                
                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="group">
                    <label className="block text-white/70 text-xs mb-1.5 font-medium">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                        className="w-full pl-9 pr-2 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-cyan-400 transition-all duration-300 text-xs"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-white/70 text-xs mb-1.5 font-medium">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        required
                        className="w-full pl-9 pr-2 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-cyan-400 transition-all duration-300 appearance-none cursor-pointer text-xs"
                      >
                        <option value="" className="text-slate-800">Select Time</option>
                        <option value="09:00" className="text-slate-800">09:00 AM</option>
                        <option value="10:00" className="text-slate-800">10:00 AM</option>
                        <option value="11:00" className="text-slate-800">11:00 AM</option>
                        <option value="12:00" className="text-slate-800">12:00 PM</option>
                        <option value="14:00" className="text-slate-800">02:00 PM</option>
                        <option value="15:00" className="text-slate-800">03:00 PM</option>
                        <option value="16:00" className="text-slate-800">04:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="group">
                  <label className="block text-white/70 text-xs mb-1.5 font-medium">Additional Message (Optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your symptoms or any special requirements..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-cyan-400 transition-all duration-300 text-sm resize-none"
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>Processing... <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                    ) : (
                      <>Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                {/* Terms */}
                <p className="text-white/40 text-[10px] text-center">
                  By booking, you agree to our terms and privacy policy
                </p>
              </form>
            </div>
          </div>
          
          {/* Bottom Decorative Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}