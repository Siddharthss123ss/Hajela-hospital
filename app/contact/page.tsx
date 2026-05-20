"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Loader2,
  CheckCircle,
  AlertCircle,
  Search,
  MessageSquare,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  // 1. Form Inputs State
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // 2. UI Status States (Form Submission)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // 3. Search Enquiry States (Naya Section)
  const [searchKey, setSearchKey] = useState(""); // Email ya Phone holder
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchError, setSearchError] = useState("");

  // FIX: Typing Issue solved (Ab smoothly type hoga)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Bracket [] lagana zaroori tha dynamic key ke liye
    }));
  };

  // Form Submission Logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending enquiry.");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setFormData({ full_name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Failed to connect to server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Search Enquiry Logic (Email/Phone se status fetch karne ke liye)
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKey.trim()) return;

    setIsSearching(true);
    setSearchError("");
    setSearchResults([]);

    try {
      // API call: /api/contact?search=email_or_phone (Aapke API route handler ke mutabik query send hogi)
      const response = await fetch(`/api/enquiry?search=${encodeURIComponent(searchKey)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Enquiry not found.");
      }

      // Agar direct array milta hai toh thik, warna backend data wrapper check karein
      const results = Array.isArray(data) ? data : data.enquiries || [data];
      setSearchResults(results);

      if (results.length === 0) {
        setSearchError("No data found for this email or phone number.");
      }
    } catch (error: any) {
      setSearchError(error.message || "Something went wrong while fetching status.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container-custom px-4 max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: TOP HEADING & CORE CONTACT */}
        <div>
          <div className="text-center mb-16">
            <p className="text-cyan-600 font-semibold text-lg">Contact Hajela Hospital</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">Get In Touch</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-14">
            {/* LEFT INFO CARDS */}
            <div className="space-y-6">
              <div className="bg-white rounded-[30px] p-6 shadow-md flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-2xl"><Phone className="text-cyan-600 w-6 h-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Call Us</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-6 shadow-md flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-2xl"><Mail className="text-cyan-600 w-6 h-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Email Address</h3>
                  <p className="text-slate-600">info@hajelahospital.com</p>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-6 shadow-md flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-2xl"><MapPin className="text-cyan-600 w-6 h-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Location</h3>
                  <p className="text-slate-600">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="bg-white rounded-[30px] p-6 shadow-md flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-2xl"><Clock3 className="text-cyan-600 w-6 h-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Working Hours</h3>
                  <p className="text-slate-600">24/7 Emergency Services</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900">Send Message</h2>
              <p className="mt-2 text-slate-500 text-sm">Fill the form and we will contact you shortly.</p>

              {submitStatus.type === "success" && (
                <div className="mt-4 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              {submitStatus.type === "error" && (
                <div className="mt-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name *" required disabled={isSubmitting} className="w-full border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:border-cyan-500 transition-colors disabled:bg-slate-50" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required disabled={isSubmitting} className="w-full border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:border-cyan-500 transition-colors disabled:bg-slate-50" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required disabled={isSubmitting} className="w-full border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:border-cyan-500 transition-colors disabled:bg-slate-50" />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required disabled={isSubmitting} className="w-full border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:border-cyan-500 transition-colors disabled:bg-slate-50" />
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Your Message *" required disabled={isSubmitting} className="w-full border border-slate-200 rounded-xl px-5 py-3.5 outline-none focus:border-cyan-500 resize-none transition-colors disabled:bg-slate-50"></textarea>
                
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 shadow-md">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* SECTION 2: LIVE RESPONSE / STATUS TRACKER */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Track Your Enquiry Response</h2>
            <p className="mt-3 text-slate-500 text-sm">
              Enter your registered Email Address or Phone Number to check replies or updates from our medical panel.
            </p>
          </div>

          {/* Search Bar Input */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Enter Email or Phone Number..."
                required
                className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-cyan-500 transition-all shadow-inner bg-slate-50/50"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
            >
              {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : "Track Status"}
            </button>
          </form>

          {/* Error Message */}
          {searchError && (
            <div className="mt-6 flex items-center gap-3 bg-amber-50 text-amber-800 px-5 py-4 rounded-2xl max-w-2xl mx-auto border border-amber-100">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <p className="text-sm font-medium">{searchError}</p>
            </div>
          )}

          {/* Search Output / Responses Dashboard */}
          {searchResults.length > 0 && (
            <div className="mt-10 space-y-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-600" /> Found ({searchResults.length}) Enquiry Logs:
              </h3>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {searchResults.map((item: any, idx: number) => (
                  <div key={item._id || idx} className="border border-slate-100 bg-slate-50/50 rounded-3xl p-6 shadow-sm space-y-4">
                    
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/60 pb-3">
                      <div>
                        <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase bg-cyan-50 px-2.5 py-1 rounded-md">
                          {item.subject || "General Enquiry"}
                        </span>
                        <h4 className="font-bold text-slate-800 mt-1.5">{item.full_name}</h4>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Just Now"}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {/* User's Original Message */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-100">
                        <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Your Message:</p>
                        <p className="mt-1 text-slate-700 italic">"{item.message}"</p>
                      </div>

                      {/* Admin/Hospital Response Panel */}
                      <div className={`p-4 rounded-2xl border ${item.response ? "bg-emerald-50/40 border-emerald-100" : "bg-amber-50/40 border-amber-100"}`}>
                        <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Hospital Reply:</p>
                        {item.admin_response ? (
                          <p className="mt-1 text-slate-800 font-medium whitespace-pre-line">{item.admin_response}</p>
                        ) : (
                          <p className="mt-1 text-amber-700 font-medium flex items-center gap-1.5 text-xs">
                            <Clock3 className="w-3.5 h-3.5 animate-pulse" /> Pending Review — Our operators will update soon.
                          </p>
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}