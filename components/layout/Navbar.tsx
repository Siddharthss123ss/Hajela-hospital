"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [galleryOpen, setGalleryOpen] = useState(false);

  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 10);

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
          ? "bg-black/55 backdrop-blur-xl border-b border-white/10"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }
      `}
    >

      {/* PREMIUM LIGHT EFFECT */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-cyan-500/5
        via-transparent
        to-blue-500/5
        pointer-events-none
        "
      ></div>

      <div
        className="
        max-w-[1500px]
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        "
      >

        <div
          className="
          h-[68px]
          flex
          items-center
          justify-between
          "
        >

          {/* LEFT */}

          <Link
            href="/"
            className="
            flex
            items-center
            gap-2
            shrink-0
            "
          >

            {/* MAIN LOGO */}

            <div
              className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              overflow-hidden
              bg-white
              shadow-xl
              border
              border-white/20
              shrink-0
              "
            >

              <img
                src="/images/Logo.avif"
                alt="Hajela Hospital"
                className="
                w-full
                h-full
                object-cover
                "
              />

            </div>

            {/* TEXT */}

            <div className="leading-tight">

              <h1
                className="
                text-white
                font-extrabold
                text-[13px]
                sm:text-[20px]
                tracking-wide
                "
              >
                HAJELA HOSPITAL
              </h1>

              <div
                className="
                flex
                items-center
                gap-2
                flex-wrap
                "
              >

                <p
                  className="
                  text-green-400
                  text-[7px]
                  sm:text-[11px]
                  font-medium
                  "
                >
                  Advanced Medical Care
                </p>

                <span
                  className="
                  text-white/40
                  text-[8px]
                  "
                >
                  •
                </span>

                <p
                  className="
                  text-white/70
                  text-[7px]
                  sm:text-[10px]
                  "
                >
                  Since 1995
                </p>

              </div>

            </div>

          </Link>

          {/* CENTER BADGES */}

          <div
            className="
            hidden
            2xl:flex
            items-center
            gap-3
            "
          >

            {/* NABH */}

            <div
              className="
              flex
              items-center
              gap-2
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-full
              px-3
              py-1.5
              "
            >

              <img
                src="/images/nabh-logo.png"
                alt="NABH"
                className="
                w-7
                h-7
                object-contain
                "
              />

              <div>

                <p
                  className="
                  text-white
                  text-[10px]
                  font-semibold
                  "
                >
                  NABH Accredited
                </p>

                <p
                  className="
                  text-white/60
                  text-[8px]
                  "
                >
                  Quality Healthcare
                </p>

              </div>

            </div>

            {/* GREEN */}

            <div
              className="
              flex
              items-center
              gap-2
              bg-emerald-500/10
              backdrop-blur-xl
              border
              border-emerald-400/20
              rounded-full
              px-3
              py-1.5
              "
            >

              <img
                src="/images/green.avif"
                alt="Green"
                className="
                w-6
                h-6
                object-contain
                "
              />

              <div>

                <p
                  className="
                  text-emerald-300
                  text-[10px]
                  font-semibold
                  "
                >
                  Green Certified
                </p>

                <p
                  className="
                  text-white/60
                  text-[8px]
                  "
                >
                  First Green Hospital
                </p>

              </div>

            </div>

          </div>

          {/* DESKTOP MENU */}

          <nav
            className="
            hidden
            lg:flex
            items-center
            gap-6
            text-white
            text-[14px]
            font-medium
            "
          >

            <Link
              href="/"
              className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
              transition-all
              "
            >
              Home
            </Link>

            <Link
              href="/about"
              className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
              transition-all
              "
            >
              About
            </Link>

            <Link
              href="/departments"
              className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
              transition-all
              "
            >
              Departments
            </Link>

            <Link
              href="/doctors"
              className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
              transition-all
              "
            >
              Doctors
            </Link>

            {/* GALLERY */}

            <div className="relative">

              <button
                onClick={() => setGalleryOpen(!galleryOpen)}
                className="
                flex
                items-center
                gap-1
                hover:text-cyan-400
                hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
                transition-all
                "
              >

                Gallery

                <ChevronDown
                  size={16}
                  className={`
                  transition-all
                  duration-300
                  ${
                    galleryOpen
                      ? "rotate-180"
                      : ""
                  }
                  `}
                />

              </button>

              {/* DROPDOWN */}

              <div
                className={`
                absolute
                top-12
                left-0
                w-60
                rounded-2xl
                overflow-hidden
                bg-white
                shadow-2xl
                border
                border-slate-100
                transition-all
                duration-300
                ${
                  galleryOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                }
                `}
              >

                <Link
                  href="/gallery/photos"
                  className="
                  block
                  px-5
                  py-4
                  text-slate-800
                  hover:bg-slate-50
                  border-b
                  border-slate-100
                  "
                  onClick={() => setGalleryOpen(false)}
                >
                  Event Images
                </Link>

                <Link
                  href="/gallery/videos"
                  className="
                  block
                  px-5
                  py-4
                  text-slate-800
                  hover:bg-slate-50
                  border-b
                  border-slate-100
                  "
                  onClick={() => setGalleryOpen(false)}
                >
                  Video Gallery
                </Link>

                <Link
                  href="/gallery/news-events"
                  className="
                  block
                  px-5
                  py-4
                  text-slate-800
                  hover:bg-slate-50
                  "
                  onClick={() => setGalleryOpen(false)}
                >
                  News & Events
                </Link>

              </div>

            </div>

            <Link
              href="/contact"
              className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
              transition-all
              "
            >
              Contact
            </Link>

          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            {/* DESKTOP BUTTON */}

            <Link
              href="/appointment"
              className="
              hidden
              lg:flex
              items-center
              justify-center
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              text-white
              px-5
              py-2.5
              rounded-full
              text-[13px]
              font-semibold
              shadow-[0_8px_30px_rgba(37,99,235,0.45)]
              hover:scale-105
              transition-all
              duration-300
              "
            >
              ⚡ Patient Portal
            </Link>

            {/* MOBILE PORTAL */}

            <Link
              href="/appointment"
              className="
              lg:hidden
              absolute
              left-1/2
              -translate-x-1/2
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              text-white
              px-4
              py-2
              rounded-full
              text-[11px]
              font-semibold
              shadow-xl
              "
            >
              ⚡ Patient Portal
            </Link>

            {/* MOBILE MENU */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
              lg:hidden
              text-white
              "
            >

              {
                mobileOpen
                  ? <X size={26} />
                  : <Menu size={26} />
              }

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE OVERLAY */}

      <div
        className={`
        fixed
        inset-0
        bg-black/60
        backdrop-blur-sm
        z-40
        transition-all
        duration-300
        lg:hidden
        ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
        `}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* MOBILE DRAWER */}

      <div
        className={`
        fixed
        top-0
        left-0
        h-screen
        w-[82%]
        max-w-[320px]
        bg-slate-950
        z-50
        shadow-2xl
        transition-all
        duration-300
        lg:hidden
        flex
        flex-col
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        `}
      >

        {/* TOP */}

        <div className="p-5 border-b border-white/10">

          <div className="flex items-center justify-between">

            <h2
              className="
              text-xl
              font-bold
              text-white
              "
            >
              Hajela Hospital
            </h2>

            <button
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>

          </div>

        </div>

        {/* LINKS */}

        <div
          className="
          flex
          flex-col
          gap-6
          p-6
          text-white
          text-lg
          "
        >

          <Link href="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>

          <Link href="/departments" onClick={() => setMobileOpen(false)}>
            Departments
          </Link>

          <Link href="/doctors" onClick={() => setMobileOpen(false)}>
            Doctors
          </Link>

          {/* MOBILE GALLERY */}

          <div>

            <button
              onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
              className="
              flex
              items-center
              gap-2
              text-cyan-400
              "
            >

              Gallery

              <ChevronDown
                size={18}
                className={`
                transition-all
                duration-300
                ${
                  mobileGalleryOpen
                    ? "rotate-180"
                    : ""
                }
                `}
              />

            </button>

            <div
              className={`
              overflow-hidden
              transition-all
              duration-300
              ${
                mobileGalleryOpen
                  ? "max-h-60 mt-4"
                  : "max-h-0"
              }
              `}
            >

              <div
                className="
                flex
                flex-col
                gap-4
                pl-4
                text-slate-300
                text-base
                "
              >

                <Link
                  href="/gallery/photos"
                  onClick={() => setMobileOpen(false)}
                >
                  Event Images
                </Link>

                <Link
                  href="/gallery/videos"
                  onClick={() => setMobileOpen(false)}
                >
                  Video Gallery
                </Link>

                <Link
                  href="/gallery/news-events"
                  onClick={() => setMobileOpen(false)}
                >
                  News & Events
                </Link>

              </div>

            </div>

          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          {/* BADGES */}

          <div className="flex gap-3 pt-2">

            {/* NABH */}

            <div
              className="
              flex-1
              bg-white/5
              rounded-2xl
              p-3
              border
              border-white/10
              "
            >

              <img
                src="/images/nabh.png"
                alt="NABH"
                className="
                w-10
                h-10
                object-contain
                mb-2
                "
              />

              <p className="text-xs">
                NABH Accredited
              </p>

            </div>

            {/* GREEN */}

            <div
              className="
              flex-1
              bg-emerald-500/10
              rounded-2xl
              p-3
              border
              border-emerald-400/20
              "
            >

              <img
                src="/images/Green.avif"
                alt="Green"
                className="
                w-9
                h-9
                object-contain
                mb-2
                "
              />

              <p
                className="
                text-xs
                text-emerald-300
                "
              >
                Green Certified
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}