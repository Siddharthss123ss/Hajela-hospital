"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Clock,
  Stethoscope,
  ArrowRight,
  Shield,
  Award,
  ChevronRight,
  Send
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {  // ✅ FIXED
    e.preventDefault();
    if (subscriberEmail) {
      setEmailSubscribed(true);
      setSubscriberEmail("");
      setTimeout(() => setEmailSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Departments", href: "/departments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopaedics",
    "Pediatrics",
    "Gynecology",
    "Gastroenterology",
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { Icon: FaInstagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com", color: "hover:bg-blue-700" },
    { Icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
    { Icon: FaYoutube, href: "https://youtube.com", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 md:pt-20 pb-6 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 pb-10 md:pb-12 border-b border-white/10">
          
          {/* COLUMN 1 - Brand Info */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 text-white fill-white/20" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Hajela Hospital
              </h2>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              Advanced healthcare services with expert doctors and modern medical facilities. Your health is our priority.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-slate-300">NABH Accredited</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-slate-300">ISO Certified</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-2 pt-2">
              {socialIcons.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:${color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                >
                  <Icon size={14} className="text-slate-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2 group transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-cyan-400" />
              Departments
            </h3>
            <ul className="space-y-2.5">
              {departments.map((dept, idx) => (
                <li key={idx}>
                  <Link
                    href={`/departments/${dept.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2 group transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 - Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              Contact Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                  <Phone size={14} className="text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Emergency Helpline</p>
                  <p className="text-white text-sm font-medium">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                  <Mail size={14} className="text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Email Us</p>
                  <p className="text-white text-sm">info@hajelahospital.com</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                  <MapPin size={14} className="text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Visit Us</p>
                  <p className="text-white text-sm">Bhopal, Madhya Pradesh</p>
                </div>
              </div>

              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                  <Clock size={14} className="text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Working Hours</p>
                  <p className="text-white text-sm">24/7 Emergency Service</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <p className="text-xs text-slate-400 mb-2">Subscribe to Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                >
                  {emailSubscribed ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>
              {emailSubscribed && (
                <p className="text-[10px] text-green-400 mt-1 animate-pulse">Subscribed successfully!</p>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-slate-500 text-xs">
          <p>
            © {currentYear} Hajela Hospital. All Rights Reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
          </div>
          
          <p className="text-slate-600">
            Designed with <Heart className="w-3 h-3 inline text-red-400 animate-pulse" /> by Siddharth Singh
          </p>
        </div>
      </div>
    </footer>
  );
}