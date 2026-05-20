"use client";

import { useState, useEffect } from "react";
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
  Star,
} from "lucide-react";

interface Department {
  _id: string;
  name: string;
}

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    patient_name: "",
    patient_email: "",
    patient_phone: "",
    dept_id: "",
    doctor_id: "",
    appointment_date: "",
    time_slot: "",
    reason: "",
  });

  const [departments, setDepartments] = useState<Department[]>([]);
  const [allDoctors, setAllDoctors] = useState<any[]>([]); // Any rakha taaki different schema formats handle ho sakein
  const [filteredDoctors, setFilteredDoctors] = useState<any[]>([]);
  
  const [isLoadingLists, setIsLoadingLists] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 1. Initial Data Load (Fetch Departments & Doctors)
  useEffect(() => {
    async function loadInitialData() {
      setIsLoadingLists(true);
      try {
        const [deptRes, docRes] = await Promise.all([
          fetch("/api/departments"),
          fetch("/api/doctors"),
        ]);

        if (!deptRes.ok || !docRes.ok) {
          throw new Error("Failed to fetch data from API");
        }

        const deptData = await deptRes.json();
        const docData = await docRes.json();

        console.log("Fetched Departments:", deptData); // Debugging ke liye console zaroor check karein
        console.log("Fetched Doctors:", docData);       // Debugging ke liye console zaroor check karein

        setDepartments(Array.isArray(deptData) ? deptData : []);
        setAllDoctors(Array.isArray(docData) ? docData : []);
      } catch (err) {
        console.error("Error loading appointment form data:", err);
        setErrorMessage("Could not load form lists. Please refresh the page.");
      } finally {
        setIsLoadingLists(false);
      }
    }
    loadInitialData();
  }, []);

  // 2. 🔥 UNIVERSAL FILTER LOGIC (Handles dept_id, department object, or direct string)
  useEffect(() => {
    if (formData.dept_id && allDoctors.length > 0) {
      const filtered = allDoctors.filter((doc) => {
        // Option A: doctor.dept_id check karein (String ya Object)
        if (doc.dept_id) {
          const id = typeof doc.dept_id === "object" ? doc.dept_id._id : doc.dept_id;
          if (id === formData.dept_id) return true;
        }

        // Option B: Agar aapke Doctor model me field ka naam 'department' hai
        if (doc.department) {
          const id = typeof doc.department === "object" ? doc.department._id : doc.department;
          if (id === formData.dept_id) return true;
        }

        // Option C: Agar direct field match ho rahi ho
        if (doc.department_id === formData.dept_id) return true;

        return false;
      });

      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors([]);
    }
  }, [formData.dept_id, allDoctors]);

  // 3. Form Submission Handling
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patient_name: formData.patient_name,
          patient_phone: formData.patient_phone,
          patient_email: formData.patient_email || undefined,
          doctor_id: formData.doctor_id,
          dept_id: formData.dept_id,
          appointment_date: new Date(formData.appointment_date),
          time_slot: formData.time_slot,
          reason: formData.reason || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Booking failed.");
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setIsSubmitted(false), 5000);

      setFormData({
        patient_name: "",
        patient_email: "",
        patient_phone: "",
        dept_id: "",
        doctor_id: "",
        appointment_date: "",
        time_slot: "",
        reason: "",
      });
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong while booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: CalendarDays,
      title: "Easy Appointment Booking",
      desc: "Book appointments with specialist doctors quickly and easily.",
    },
    {
      icon: Clock3,
      title: "24/7 Medical Support",
      desc: "Our healthcare professionals are available round the clock.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Healthcare Services",
      desc: "Experience safe and advanced treatment with expert doctors.",
    },
  ];

  return (
    <main className="pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-600 hover:text-blue-900 transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full shadow-sm mb-4">
            <Heart className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-xs uppercase tracking-wider">Hajela Hospital</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
            Book An <span className="bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-500 bg-clip-text text-transparent">Appointment</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
          
          {/* Left Badges Column */}
          <div className="space-y-5 md:space-y-6">
            {isSubmitted && (
              <div className="bg-green-500 text-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold">Appointment Success!</h4>
                  <p className="text-xs text-green-100">Your request has been registered in pending status.</p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-500 text-white px-5 py-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">{errorMessage}</p>
              </div>
            )}

            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
                  <feature.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 ">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Appointment Form</h2>
            <p className="text-sm text-slate-400 mb-6">Enter patient details below</p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.patient_name}
                    onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
                    placeholder="Enter patient full name"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    value={formData.patient_phone}
                    onChange={(e) => setFormData({ ...formData, patient_phone: e.target.value })}
                    placeholder="Enter mobile number"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={formData.patient_email}
                    onChange={(e) => setFormData({ ...formData, patient_email: e.target.value })}
                    placeholder="Enter email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Department Dropdown */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Department *</label>
                <div className="relative">
                  <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.dept_id}
                    onChange={(e) => setFormData({ ...formData, dept_id: e.target.value, doctor_id: "" })}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-cyan-500 appearance-none cursor-pointer"
                  >
                    <option value="">{isLoadingLists ? "Loading Departments..." : "Select Department"}</option>
                    {departments.map((dept) => (
                      <option key={dept._id} value={dept._id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Doctor Dropdown */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Select Doctor *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.doctor_id}
                    onChange={(e) => setFormData({ ...formData, doctor_id: e.target.value })}
                    required
                    disabled={!formData.dept_id || filteredDoctors.length === 0}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-cyan-500 appearance-none cursor-pointer disabled:bg-slate-50 disabled:text-slate-400"
                  >
                    <option value="">
                      {!formData.dept_id
                        ? "Choose department first"
                        : filteredDoctors.length === 0 
                        ? "No specialist found for this department" 
                        : "Choose a Specialist"}
                    </option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc._id} value={doc._id}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Preferred Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="date"
                    value={formData.appointment_date}
                    onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Preferred Time Slot *</label>
                <div className="relative">
                  <Clock3 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.time_slot}
                    onChange={(e) => setFormData({ ...formData, time_slot: e.target.value })}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-cyan-500 appearance-none cursor-pointer"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
                    <option value="12:00 PM - 02:00 PM">Midday (12:00 PM - 02:00 PM)</option>
                    <option value="04:00 PM - 06:00 PM">Evening (04:00 PM - 06:00 PM)</option>
                    <option value="06:00 PM - 08:00 PM">Late Evening (06:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-600 text-xs font-medium mb-1.5">Reason for Visit (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    rows={3}
                    placeholder="Describe symptoms briefly..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-900 via-cyan-700 to-cyan-500 text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Processing..." : "Book Appointment"}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}