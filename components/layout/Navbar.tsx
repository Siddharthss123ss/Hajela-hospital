"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  CalendarDays,
  Stethoscope,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileGalleryOpen(false);
  };

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "bg-white shadow-2xl border-b border-slate-200" 
          : "bg-white/95 backdrop-blur-2xl shadow-xl"
        }
        `}
      >
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[80px] lg:h-[84px] flex items-center justify-between gap-4">
            
            {/* LOGO SECTION */}
            <Link href="/" className="group flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-full overflow-hidden border-2 border-white bg-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/Logo.avif"
                    alt="Hajela Hospital"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-slate-900 font-black text-[14px] sm:text-[18px] lg:text-[28px] tracking-tight">
                  HAJELA HOSPITAL
                </h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <Sparkles size={12} className="text-cyan-600" />
                  <p className="text-cyan-700 text-[9px] sm:text-[11px] lg:text-[13px] font-semibold">
                    Advanced Medical Care
                  </p>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <p className="text-slate-500 text-[9px] sm:text-[11px] lg:text-[13px] font-medium hidden sm:block">
                    Since 1995
                  </p>
                </div>
              </div>
            </Link>

            {/* CERTIFICATES - Desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-50 to-white border border-slate-200 px-3 py-1.5 shadow-md hover:shadow-lg transition-all">
                <img src="/images/nabh.png" alt="NABH" className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">NABH Accredited</p>
                  <p className="text-[9px] text-slate-500">Quality Healthcare</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-50 to-white border border-emerald-200 px-3 py-1.5 shadow-md hover:shadow-lg transition-all">
                <img src="/images/Green.avif" alt="Green" className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-[11px] font-bold text-emerald-700 leading-tight">Green Certified</p>
                  <p className="text-[9px] text-emerald-600">First Green Hospital</p>
                </div>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-slate-700">
              <Link href="/" className="relative group py-2 hover:text-cyan-700 transition-colors">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
              <Link href="/about" className="relative group py-2 hover:text-cyan-700 transition-colors">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
              <Link href="/departments" className="relative group py-2 hover:text-cyan-700 transition-colors">
                Departments
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
              <Link href="/doctors" className="relative group py-2 hover:text-cyan-700 transition-colors">
                Doctors
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
              <Link href="/services" className="relative group py-2 hover:text-cyan-700 transition-colors">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
              <Link href="/awards" className="relative group py-2 hover:text-cyan-700 transition-colors">
                Awards
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>

              {/* Gallery Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setGalleryOpen(!galleryOpen)}
                  onMouseEnter={() => setGalleryOpen(true)}
                  onMouseLeave={() => setGalleryOpen(false)}
                  className="flex items-center gap-1 py-2 hover:text-cyan-700 transition-colors"
                >
                  Gallery
                  <ChevronDown size={16} className={`transition-transform duration-300 ${galleryOpen ? "rotate-180" : ""}`} />
                </button>

                <div
                  onMouseEnter={() => setGalleryOpen(true)}
                  onMouseLeave={() => setGalleryOpen(false)}
                  className={`
                    absolute top-10 left-0 w-56 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xl
                    transition-all duration-300 origin-top
                    ${galleryOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"}
                  `}
                >
                  <Link href="/gallery/event" className="block px-5 py-3 hover:bg-cyan-50 hover:text-cyan-700 transition-colors border-b border-slate-100">
                    Event Images
                  </Link>
                  <Link href="/gallery/videos" className="block px-5 py-3 hover:bg-cyan-50 hover:text-cyan-700 transition-colors border-b border-slate-100">
                    Video Gallery
                  </Link>
                  <Link href="/gallery/news-events" className="block px-5 py-3 hover:bg-cyan-50 hover:text-cyan-700 transition-colors">
                    News
                  </Link>
                </div>
              </div>

              <Link href="/contact" className="relative group py-2 hover:text-cyan-700 transition-colors">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            </nav>

            {/* APPOINTMENT BUTTON */}
            <div className="flex items-center gap-4">
              <Link
                href="/appointment"
                className="
                  hidden lg:flex items-center gap-2
                  bg-gradient-to-r from-cyan-600 to-blue-700
                  text-white font-semibold text-[14px]
                  px-6 py-3 rounded-xl
                  shadow-lg shadow-cyan-500/25
                  hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40
                  transition-all duration-300
                "
              >
                <CalendarDays size={18} />
                Appointment
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 shadow-md"
              >
                {mobileOpen ? <X size={26} className="text-slate-700" /> : <Menu size={26} className="text-slate-700" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================== */}
      {/* MOBILE MENU - FORCED SOLID WHITE BACKGROUND */}
      {/* ============================================== */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-[360px] z-50
          transition-transform duration-500 ease-out shadow-2xl
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ 
          backgroundColor: "#ffffff",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto"
        }}
      >
        {/* Mobile Header - Solid Gradient (No transparency) */}
        <div style={{ background: "linear-gradient(135deg, #0f766e, #1e40af)" }} className="px-6 pt-8 pb-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={closeMobileMenu}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <X size={22} className="text-white" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50 bg-white shadow-lg">
              <img src="/images/Logo.avif" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Hajela Hospital</h2>
              <p className="text-cyan-200 text-xs mt-1">Advanced Medical Care</p>
            </div>
          </div>
        </div>

        {/* Mobile Links - SOLID WHITE */}
        <div style={{ backgroundColor: "#ffffff" }} className="flex flex-col px-5 py-4 text-slate-700 text-base font-medium">
          <Link href="/" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <Stethoscope size={18} className="text-cyan-600" /> Home
          </Link>
          <Link href="/about" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <Stethoscope size={18} className="text-cyan-600" /> About
          </Link>
          <Link href="/departments" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <Stethoscope size={18} className="text-cyan-600" /> Departments
          </Link>
          <Link href="/doctors" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <Stethoscope size={18} className="text-cyan-600" /> Doctors
          </Link>
          <Link href="/services" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <Stethoscope size={18} className="text-cyan-600" /> Services
          </Link>
          <Link href="/awards" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <Stethoscope size={18} className="text-cyan-600" /> Awards
          </Link>

          {/* Mobile Gallery */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
              className="w-full flex items-center justify-between py-3 hover:text-cyan-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📷</span> Gallery
              </div>
              <ChevronDown size={18} className={`transition-transform duration-300 ${mobileGalleryOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobileGalleryOpen ? "max-h-48 pb-3" : "max-h-0"}`}>
              <div className="flex flex-col gap-2 pl-8 text-sm text-slate-500">
                <Link href="/gallery/event" onClick={closeMobileMenu} className="py-2 hover:text-cyan-700">• Event Images</Link>
                <Link href="/gallery/videos" onClick={closeMobileMenu} className="py-2 hover:text-cyan-700">• Video Gallery</Link>
                <Link href="/gallery/news-events" onClick={closeMobileMenu} className="py-2 hover:text-cyan-700">• News</Link>
              </div>
            </div>
          </div>

          <Link href="/contact" onClick={closeMobileMenu} className="py-3 border-b border-slate-100 flex items-center gap-3 hover:text-cyan-700 transition-colors">
            <span className="text-xl">📞</span> Contact
          </Link>

          {/* Mobile Appointment */}
          <Link
            href="/appointment"
            onClick={closeMobileMenu}
            className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg"
          >
            <CalendarDays size={18} />
            Appointment
          </Link>

          {/* Mobile Certificates */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-around">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-full">
              <img src="/images/nabh.png" alt="NABH" className="w-7 h-7 object-contain" />
              <span className="text-[10px] font-bold text-slate-700">NABH</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-full">
              <img src="/images/Green.avif" alt="Green" className="w-6 h-6 object-contain" />
              <span className="text-[10px] font-bold text-emerald-700">Green</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={closeMobileMenu}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-all duration-400
          lg:hidden
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />
    </>
  );
}