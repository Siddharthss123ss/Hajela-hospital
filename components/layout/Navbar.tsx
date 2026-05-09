"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500
      ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-2xl py-2"
          : "bg-transparent py-4"
      }
      `}
    >

      <div className="container-custom flex items-center justify-between">

        {/* LOGO */}

        <h1 className="text-3xl font-bold text-white">
          Hajela Hospital
        </h1>

        {/* DESKTOP MENU */}

        <nav className="hidden lg:flex gap-10 text-white font-medium">

          <Link href="/">Home</Link>

          <Link href="/">About</Link>

          <Link href="/">Departments</Link>

          <Link href="/">Doctors</Link>

          <Link href="/">Contact</Link>

        </nav>

        {/* APPOINTMENT BUTTON */}

        <button
          className="
          hidden
          lg:block
          bg-gradient-to-r
          from-blue-700
          to-cyan-500
          text-white
          px-7
          py-3
          rounded-full
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Appointment
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >

          {open ? <X size={34} /> : <Menu size={34} />}

        </button>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-500
        ${
          open
            ? "max-h-[500px] py-8 bg-slate-950/95"
            : "max-h-0"
        }
        `}
      >

        <div className="container-custom flex flex-col gap-6 text-white text-lg">

          <Link href="/">Home</Link>

          <Link href="/">About</Link>

          <Link href="/">Departments</Link>

          <Link href="/">Doctors</Link>

          <Link href="/">Contact</Link>

          <button
            className="
            mt-4
            bg-gradient-to-r
            from-blue-700
            to-cyan-500
            text-white
            px-7
            py-4
            rounded-full
            "
          >
            Appointment
          </button>

        </div>

      </div>

    </header>
  );
}