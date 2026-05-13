"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

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
      duration-300
      ${
        scrolled
          ? "bg-black/55 backdrop-blur-lg border-b border-white/10"
          : "bg-gradient-to-b from-black/60 to-black/10"
      }
      `}
    >

      <div
        className="
        max-w-[1450px]
        mx-auto
        h-[62px]
        px-4
        lg:px-8
        flex
        items-center
        justify-between
        "
      >

        {/* LEFT */}

        <Link
          href="/"
          className="flex items-center gap-2"
        >

          {/* LOGO */}

          <img
            src="/images/Logo.avif"
            alt="Hajela Hospital"
            className="
            w-9
            h-9
            sm:w-10
            sm:h-10
            object-contain
            rounded-full
            bg-white
            p-1
            shadow-lg
            "
          />

          {/* TEXT */}

          <div className="leading-tight">

            <h1
              className="
              text-white
              font-bold
              text-[14px]
              sm:text-[20px]
              tracking-wide
              "
            >
              HAJELA HOSPITAL
            </h1>

            <div className="flex items-center gap-2 flex-wrap">

              <p
                className="
                text-green-400
                text-[7px]
                sm:text-[11px]
                "
              >
                Advanced Medical Care
              </p>

              <span className="text-white/40 text-[9px]">
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
            border
            border-white/10
            rounded-full
            px-3
            py-1.5
            backdrop-blur-xl
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
                Quality Care
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
            border
            border-emerald-400/20
            rounded-full
            px-3
            py-1.5
            backdrop-blur-xl
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
            transition-all
            "
          >
            Home
          </Link>

          <Link
            href="/about"
            className="
            hover:text-cyan-400
            transition-all
            "
          >
            About
          </Link>

          <Link
            href="/departments"
            className="
            hover:text-cyan-400
            transition-all
            "
          >
            Departments
          </Link>

          <Link
            href="/doctors"
            className="
            hover:text-cyan-400
            transition-all
            "
          >
            Doctors
          </Link>

          <Link
            href="/contact"
            className="
            hover:text-cyan-400
            transition-all
            "
          >
            Contact
          </Link>

        </nav>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

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
            px-4
            py-2
            rounded-full
            text-[13px]
            font-semibold
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            "
          >
            ⚡ Patient Portal
          </Link>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >

            {
              open
                ? <X size={26} />
                : <Menu size={26} />
            }

          </button>

        </div>

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
            ? "max-h-[450px]"
            : "max-h-0"
        }
        `}
      >

        <div
          className="
          bg-black/95
          backdrop-blur-xl
          px-6
          py-6
          flex
          flex-col
          gap-5
          text-white
          "
        >

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/departments">Departments</Link>

          <Link href="/doctors">Doctors</Link>

          <Link href="/contact">Contact</Link>

          {/* MOBILE BADGES */}

          <div className="flex gap-3 mt-2">

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
                src="/images/green.avif"
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

          {/* BUTTON */}

          <Link
            href="/appointment"
            className="
            mt-2
            bg-gradient-to-r
            from-blue-700
            to-cyan-500
            py-3
            rounded-xl
            text-center
            font-semibold
            "
          >
            ⚡ Patient Portal
          </Link>

        </div>

      </div>

    </header>
  );
}