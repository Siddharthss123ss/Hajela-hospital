"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-xl py-3"
          : "bg-transparent py-5"
      }
      `}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Hajela Hospital
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10 text-white font-medium">
          <Link href="/" className="hover:text-cyan-400 transition-all">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition-all">
            About
          </Link>
          <Link href="/departments" className="hover:text-cyan-400 transition-all">
            Departments
          </Link>
          <Link href="/doctors" className="hover:text-cyan-400 transition-all">
            Doctors
          </Link>

          {/* GALLERY DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setGalleryOpen(!galleryOpen)}
              className="flex items-center gap-2 hover:text-cyan-400 transition-all"
            >
              Gallery
              <ChevronDown
                size={18}
                className={`transition-all duration-300 ${galleryOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`
              absolute top-14 left-0 w-64 rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100
              transition-all duration-300
              ${galleryOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"}
              `}
            >
              <Link
                href="/gallery/photos"
                className="block px-6 py-5 text-slate-800 hover:bg-slate-50 border-b border-slate-100 transition-all"
                onClick={() => setGalleryOpen(false)}
              >
                Event Images
              </Link>
              <Link
                href="/gallery/videos"
                className="block px-6 py-5 text-slate-800 hover:bg-slate-50 border-b border-slate-100 transition-all"
                onClick={() => setGalleryOpen(false)}
              >
                Video Gallery
              </Link>
              <Link
                href="/gallery/news-events"
                className="block px-6 py-5 text-slate-800 hover:bg-slate-50 transition-all"
                onClick={() => setGalleryOpen(false)}
              >
                News & Events
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-cyan-400 transition-all">
            Contact
          </Link>
        </nav>

        {/* APPOINTMENT BUTTON */}
        <Link
          href="/appointment"
          className="hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-7 py-3 rounded-full hover:scale-105 transition-all duration-300"
        >
          Appointment
        </Link>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`
        fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden
        ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* MOBILE DRAWER */}
      <div
        className={`
        fixed top-0 left-0 h-screen w-[80%] max-w-[320px] bg-slate-950 z-50 shadow-2xl transition-all duration-300 lg:hidden flex flex-col
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* TOP */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Hajela Hospital</h2>
          <button onClick={() => setMobileOpen(false)} className="text-white">
            <X size={30} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-6 p-6 text-white text-lg">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/departments" onClick={() => setMobileOpen(false)}>Departments</Link>
          <Link href="/doctors" onClick={() => setMobileOpen(false)}>Doctors</Link>

          {/* MOBILE GALLERY */}
          <div>
            <button
              onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
              className="flex items-center gap-2 text-cyan-400 font-semibold"
            >
              Gallery
              <ChevronDown
                size={18}
                className={`transition-all duration-300 ${mobileGalleryOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileGalleryOpen ? "max-h-60 mt-4" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-4 pl-4 text-slate-300 text-base">
                <Link href="/gallery/photos" onClick={() => setMobileOpen(false)}>Event Images</Link>
                <Link href="/gallery/videos" onClick={() => setMobileOpen(false)}>Video Gallery</Link>
                <Link href="/gallery/news-events" onClick={() => setMobileOpen(false)}>News & Events</Link>
              </div>
            </div>
          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>

        {/* MOBILE APPOINTMENT */}
        <div className="mt-auto p-6">
          <Link
            href="/appointment"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-4 rounded-2xl font-semibold"
          >
            Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}