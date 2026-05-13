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

      setScrolled(window.scrollY > 20);

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
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-3"
      }
      `}
    >

      <div className="container-custom flex items-center justify-between">

        {/* LEFT BRANDING */}

        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
        >

          {/* MAIN LOGO */}

          <div
            className="
            w-11
            h-11
            lg:w-14
            lg:h-14
            rounded-full
            overflow-hidden
            border
            border-white/20
            shadow-xl
            shrink-0
            "
          >

            <img
              src="/images/Logo.avif"
              alt="Hajela Hospital"
              className="w-full h-full object-cover"
            />

          </div>

          {/* TEXT */}

          <div className="leading-tight">

            <h1
              className="
              text-white
              font-extrabold
              text-sm
              sm:text-lg
              lg:text-2xl
              tracking-wide
              "
            >
              HAJELA HOSPITAL
            </h1>

            {/* TAGLINES */}

            <div className="flex items-center gap-2 flex-wrap">

              <p
                className="
                text-green-400
                text-[8px]
                sm:text-[10px]
                lg:text-xs
                font-medium
                "
              >
                Advanced Medical Care
              </p>

              <span className="text-white/40 text-[8px]">
                •
              </span>

              <p
                className="
                text-white/70
                text-[8px]
                sm:text-[10px]
                lg:text-xs
                "
              >
                Since 1995
              </p>

            </div>

          </div>

          {/* NABH */}

          <div
            className="
            hidden
            xl:flex
            items-center
            gap-2
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            rounded-full
            px-3
            py-1.5
            ml-2
            "
          >

            <img
              src="/images/green.avif"
              alt="NABH"
              className="w-4 h-4 object-contain"
            />

            <p
              className="
              text-[10px]
              text-white
              whitespace-nowrap
              "
            >
              NABH Accredited • First Green Hospital of MP & C.G.
            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}

        <nav
          className="
          hidden
          lg:flex
          items-center
          gap-7
          text-white
          font-medium
          text-[15px]
          "
        >

          <Link
            href="/"
            className="hover:text-cyan-400 transition-all"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-cyan-400 transition-all"
          >
            About
          </Link>

          <Link
            href="/departments"
            className="hover:text-cyan-400 transition-all"
          >
            Departments
          </Link>

          <Link
            href="/doctors"
            className="hover:text-cyan-400 transition-all"
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
            className="hover:text-cyan-400 transition-all"
          >
            Contact
          </Link>

        </nav>

        {/* PATIENT PORTAL */}

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
          text-sm
          font-semibold
          shadow-xl
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Patient Portal
        </Link>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >

          {
            mobileOpen
              ? <X size={28} />
              : <Menu size={28} />
          }

        </button>

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

            <h2 className="text-xl font-bold text-white">
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

        <div className="flex flex-col gap-6 p-6 text-white text-lg">

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

              <div className="flex flex-col gap-4 pl-4 text-slate-300 text-base">

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

        </div>

        {/* BUTTON */}

        <div className="mt-auto p-6">

          <Link
            href="/appointment"
            onClick={() => setMobileOpen(false)}
            className="
            w-full
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-blue-700
            to-cyan-500
            text-white
            py-4
            rounded-2xl
            font-semibold
            shadow-xl
            "
          >
            Patient Portal
          </Link>

        </div>

      </div>

    </header>
  );
}