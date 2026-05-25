"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Menu,
  X,
  ChevronDown,
  CalendarDays,
} from "lucide-react";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [galleryOpen, setGalleryOpen] =
    useState(false);

  const [
    mobileGalleryOpen,
    setMobileGalleryOpen,
  ] = useState(false);

  return (

    <header
      className="
      fixed
      top-0
      left-0

      w-full

      z-50

      bg-white/95

      backdrop-blur-xl

      border-b
      border-slate-200
      "
    >

      <div
        className="
        max-w-[1450px]
        mx-auto

        px-4
        sm:px-6
        lg:px-8
        "
      >

        <div
          className="
          h-[84px]

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

            gap-3

            shrink-0
            "
          >

            {/* LOGO */}

            <div
              className="
              w-[55px]
              h-[55px]

              rounded-full

              overflow-hidden

              border
              border-slate-200

              bg-white

              shadow-md
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
                text-slate-900

                font-black

                text-[14px]
                sm:text-[18px]
                lg:text-[28px]

                tracking-tight
                "
              >

                HAJELA HOSPITAL

              </h1>

              <div
                className="
                flex
                items-center

                gap-2

                mt-1
                "
              >

                <p
                  className="
                  text-cyan-700

                  text-[9px]
                  sm:text-[11px]
                  lg:text-[13px]

                  font-medium
                  "
                >

                  Advanced Medical Care

                </p>

                <span className="text-slate-300">

                  •

                </span>

                <p
                  className="
                  text-slate-500

                  text-[9px]
                  sm:text-[11px]
                  lg:text-[13px]
                  "
                >

                  Since 1995

                </p>

              </div>

            </div>

          </Link>

          {/* CERTIFICATES */}

<div
  className="
  flex

  items-center

  gap-1
  sm:gap-2
  lg:gap-3

  ml-2
  "
>

  {/* NABH */}

  <div
    className="
    flex
    items-center

    gap-1
    sm:gap-2
    lg:gap-3

    rounded-full

    border
    border-slate-200

    bg-slate-50

    px-1
    sm:px-2
    lg:px-4

    py-1
    sm:py-2

    shadow-sm
    "
  >

    <img
      src="/images/nabh.png"
      alt="NABH"

      className="
      w-5
      h-5

      sm:w-7
      sm:h-7

      lg:w-9
      lg:h-9

      object-contain
      "
    />

    <div className="hidden sm:block">

      <p
        className="
        text-[9px]
        lg:text-[12px]

        font-semibold

        text-slate-800

        leading-none
        "
      >

        NABH Accredited

      </p>

      <p
        className="
        text-[7px]
        lg:text-[10px]

        text-slate-500

        mt-1
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

    gap-1
    sm:gap-2
    lg:gap-3

    rounded-full

    border
    border-emerald-100

    bg-emerald-50

    px-1
    sm:px-2
    lg:px-4

    py-1
    sm:py-2

    shadow-sm
    "
  >

    <img
      src="/images/Green.avif"
      alt="Green Hospital"

      className="
      w-5
      h-5

      sm:w-7
      sm:h-7

      lg:w-9
      lg:h-9

      object-contain
      "
    />

    <div className="hidden sm:block">

      <p
        className="
        text-[9px]
        lg:text-[12px]

        font-semibold

        text-emerald-700

        leading-none
        "
      >

        Green Certified

      </p>

      <p
        className="
        text-[7px]
        lg:text-[10px]

        text-emerald-500

        mt-1
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

            gap-7

            text-[15px]

            font-medium

            text-slate-700
            "
          >

            <Link
              href="/"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              Home

            </Link>

            <Link
              href="/about"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              About

            </Link>

            <Link
              href="/departments"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              Departments

            </Link>

            <Link
              href="/doctors"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              Doctors

            </Link>

            <Link
              href="/services"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              Services

            </Link>

            <Link
              href="/awards"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              Awards

            </Link>

            {/* GALLERY */}

            <div className="relative">

              <button
                onClick={() =>
                  setGalleryOpen(!galleryOpen)
                }

                className="
                flex
                items-center

                gap-1

                hover:text-cyan-700

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

                border
                border-slate-200

                shadow-xl

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
                  href="/gallery/event"

                  className="
                  block

                  px-5
                  py-4

                  border-b

                  hover:bg-slate-50
                  "
                >

                  Event Images

                </Link>

                <Link
                  href="/gallery/videos"

                  className="
                  block

                  px-5
                  py-4

                  border-b

                  hover:bg-slate-50
                  "
                >

                  Video Gallery

                </Link>

                <Link
                  href="/gallery/news-events"

                  className="
                  block

                  px-5
                  py-4

                  hover:bg-slate-50
                  "
                >

                  News

                </Link>

              </div>

            </div>

            <Link
              href="/contact"

              className="
              hover:text-cyan-700

              transition-all
              "
            >

              Contact

            </Link>

          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-4">

            {/* APPOINTMENT */}

            <Link
              href="/appointment"

              className="
              hidden
              lg:flex

              items-center

              gap-2

              bg-[#00658a]

              text-white

              font-semibold

              px-6
              py-3

              rounded-xl

              shadow-md

              hover:bg-[#004f6d]

              transition-all
              "
            >

              <CalendarDays size={18} />

              Appointment

            </Link>

            {/* MOBILE BUTTON */}

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }

              className="
              lg:hidden

              text-slate-700
              "
            >

              {
                mobileOpen
                  ? <X size={34} />
                  : <Menu size={34} />
              }

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`
        lg:hidden

        fixed
        top-0
        right-0

        h-screen
        w-[82%]
        max-w-[320px]

        bg-white

        z-50

        transition-all
        duration-300

        shadow-2xl

        ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }
        `}
      >

        {/* TOP */}

        <div
          className="
          flex
          items-center
          justify-between

          p-5

          border-b
          border-slate-200
          "
        >

          <h2
            className="
            text-xl

            font-bold

            text-slate-900
            "
          >

            Hajela Hospital

          </h2>

          <button
            onClick={() =>
              setMobileOpen(false)
            }
          >

            <X size={30} />

          </button>

        </div>

        {/* MOBILE LINKS */}

        <div
          className="
          flex
          flex-col

          p-6

          text-slate-700

          text-lg

          font-medium
          "
        >

          <Link href="/" className="py-4 border-b border-slate-100">
            Home
          </Link>

          <Link href="/about" className="py-4 border-b border-slate-100">
            About
          </Link>

          <Link href="/departments" className="py-4 border-b border-slate-100">
            Departments
          </Link>

          <Link href="/doctors" className="py-4 border-b border-slate-100">
            Doctors
          </Link>

          <Link href="/services" className="py-4 border-b border-slate-100">
            Services
          </Link>

          <Link href="/awards" className="py-4 border-b border-slate-100">
            Awards
          </Link>

          {/* MOBILE GALLERY */}

          <div className="border-b border-slate-100">

            <button
              onClick={() =>
                setMobileGalleryOpen(
                  !mobileGalleryOpen
                )
              }

              className="
              w-full

              flex
              items-center
              justify-between

              py-4
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
                  ? "max-h-60 pb-4"
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

                text-base

                text-slate-500
                "
              >

                <Link href="/gallery/photos">
                  Event Images
                </Link>

                <Link href="/gallery/videos">
                  Video Gallery
                </Link>

                <Link href="/gallery/news-events">
                  News
                </Link>

              </div>

            </div>

          </div>

          <Link href="/contact" className="py-4 border-b border-slate-100">
            Contact
          </Link>

          {/* MOBILE APPOINTMENT */}

          <Link
            href="/appointment"

            className="
            mt-8

            flex
            items-center
            justify-center

            gap-2

            bg-[#00658a]

            text-white

            py-4

            rounded-xl

            font-semibold
            "
          >

            <CalendarDays size={18} />

            Appointment

          </Link>

        </div>

      </div>

      {/* OVERLAY */}

      <div
        onClick={() =>
          setMobileOpen(false)
        }

        className={`
        lg:hidden

        fixed
        inset-0

        bg-black/40

        z-40

        transition-all
        duration-300

        ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
        `}
      />

    </header>

  );

}