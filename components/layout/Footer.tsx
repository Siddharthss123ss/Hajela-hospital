"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Stethoscope,
  ArrowRight,
  Shield,
  Award,
  ChevronRight,
  Send,
  CheckCircle,
  Heart,
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

  const handleSubscribe = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (subscriberEmail) {

      setEmailSubscribed(true);

      setSubscriberEmail("");

      setTimeout(() => {

        setEmailSubscribed(false);

      }, 3000);

    }

  };

  const quickLinks = [

    { name: "Home", href: "/" },

    { name: "About Us", href: "/about" },

    { name: "Doctors", href: "/doctors" },

    { name: "Departments", href: "/departments" },

    { name: "Gallery", href: "/gallery" },

    { name: "Contact", href: "/contact" },

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

    {
      Icon: FaFacebookF,
      href: "https://facebook.com",
    },

    {
      Icon: FaInstagram,
      href: "https://instagram.com",
    },

    {
      Icon: FaLinkedinIn,
      href: "https://linkedin.com",
    },

    {
      Icon: FaTwitter,
      href: "https://twitter.com",
    },

    {
      Icon: FaYoutube,
      href: "https://youtube.com",
    },

  ];

  return (

    <footer
      className="
      relative

      bg-[#071521]

      text-white

      pt-20
      pb-8

      overflow-hidden
      "
    >

      {/* TOP BORDER */}

      <div
        className="
        absolute
        top-0
        left-0

        w-full
        h-[2px]

        bg-gradient-to-r
        from-transparent
        via-cyan-500
        to-transparent
        "
      ></div>

      {/* SOFT BG */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[700px]
        h-[700px]

        rounded-full

        bg-cyan-500/5

        blur-[160px]
        "
      ></div>

      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8

        relative
        z-10
        "
      >

        {/* GRID */}

        <div
          className="
          grid

          md:grid-cols-2
          lg:grid-cols-4

          gap-12

          pb-14

          border-b
          border-white/10
          "
        >

          {/* BRAND */}

          <div>

            {/* LOGO */}

            <div
              className="
              flex
              items-center

              gap-3
              "
            >

              <div
                className="
                w-12
                h-12

                rounded-xl

                overflow-hidden

                bg-white

                flex
                items-center
                justify-center
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

              <div>

                <h2
                  className="
                  text-2xl

                  font-black
                  "
                >
                  Hajela Hospital
                </h2>

                <p
                  className="
                  text-sm

                  text-cyan-400
                  "
                >
                  Trusted Healthcare Since 1995
                </p>

              </div>

            </div>

            {/* TEXT */}

            <p
              className="
              mt-6

              text-slate-400

              leading-relaxed

              text-sm
              "
            >

              Hajela Hospital provides advanced healthcare,
              emergency treatment, IVF services, robotic
              surgeries, trauma care, and compassionate
              patient-focused medical excellence in Bhopal.

            </p>

            {/* BADGES */}

            <div
              className="
              flex
              flex-wrap

              gap-3

              mt-6
              "
            >

              <div
                className="
                flex
                items-center

                gap-2

                bg-white/5

                border
                border-white/10

                px-4
                py-2

                rounded-full
                "
              >

                <Award
                  className="
                  w-4
                  h-4

                  text-cyan-400
                  "
                />

                <span
                  className="
                  text-xs

                  text-slate-300
                  "
                >
                  NABH Accredited
                </span>

              </div>

              <div
                className="
                flex
                items-center

                gap-2

                bg-white/5

                border
                border-white/10

                px-4
                py-2

                rounded-full
                "
              >

                <Shield
                  className="
                  w-4
                  h-4

                  text-cyan-400
                  "
                />

                <span
                  className="
                  text-xs

                  text-slate-300
                  "
                >
                  Green Certified
                </span>

              </div>

            </div>

            {/* SOCIAL */}

            <div
              className="
              flex

              gap-3

              mt-8
              "
            >

              {socialIcons.map(
                ({ Icon, href }, index) => (

                  <a
                    key={index}

                    href={href}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    w-10
                    h-10

                    rounded-full

                    bg-white/5

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    hover:bg-cyan-500

                    transition-all
                    duration-300
                    "
                  >

                    <Icon
                      size={15}

                      className="text-white"
                    />

                  </a>

                )
              )}

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3
              className="
              text-lg

              font-bold

              mb-6
              "
            >

              Quick Links

            </h3>

            <ul className="space-y-4">

              {quickLinks.map(
                (link, idx) => (

                  <li key={idx}>

                    <Link
                      href={link.href}

                      className="
                      flex
                      items-center

                      gap-2

                      text-slate-400

                      hover:text-cyan-400

                      transition-all
                      duration-300
                      "
                    >

                      <ChevronRight
                        className="
                        w-4
                        h-4
                        "
                      />

                      {link.name}

                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>

          {/* DEPARTMENTS */}

          <div>

            <h3
              className="
              text-lg

              font-bold

              mb-6
              "
            >

              Departments

            </h3>

            <ul className="space-y-4">

              {departments.map(
                (dept, idx) => (

                  <li key={idx}>

                    <Link
                      href="/departments"

                      className="
                      flex
                      items-center

                      gap-2

                      text-slate-400

                      hover:text-cyan-400

                      transition-all
                      duration-300
                      "
                    >

                      <Stethoscope
                        className="
                        w-4
                        h-4
                        "
                      />

                      {dept}

                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
              text-lg

              font-bold

              mb-6
              "
            >

              Contact Info

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone
                  className="
                  w-5
                  h-5

                  text-cyan-400

                  mt-1
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Emergency Helpline
                  </p>

                  <p className="text-white font-medium">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Mail
                  className="
                  w-5
                  h-5

                  text-cyan-400

                  mt-1
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Email Address
                  </p>

                  <p className="text-white">
                    info@hajelahospital.com
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <MapPin
                  className="
                  w-5
                  h-5

                  text-cyan-400

                  mt-1
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Address
                  </p>

                  <p className="text-white">
                    Bhopal, Madhya Pradesh
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Clock
                  className="
                  w-5
                  h-5

                  text-cyan-400

                  mt-1
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Working Hours
                  </p>

                  <p className="text-white">
                    24/7 Emergency Available
                  </p>

                </div>

              </div>

            </div>

            {/* NEWSLETTER */}

            <div className="mt-8">

              <p
                className="
                text-sm

                text-slate-400

                mb-3
                "
              >
                Subscribe To Newsletter
              </p>

              <form
                onSubmit={handleSubscribe}

                className="
                flex

                gap-2
                "
              >

                <input
                  type="email"

                  value={subscriberEmail}

                  onChange={(e) =>
                    setSubscriberEmail(e.target.value)
                  }

                  placeholder="Your email"

                  className="
                  flex-1

                  px-4
                  py-3

                  rounded-xl

                  bg-white/5

                  border
                  border-white/10

                  text-white

                  placeholder:text-slate-500

                  focus:outline-none
                  focus:border-cyan-500
                  "
                  required
                />

                <button
                  type="submit"

                  className="
                  w-12
                  h-12

                  rounded-xl

                  bg-cyan-500

                  hover:bg-cyan-600

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300
                  "
                >

                  {
                    emailSubscribed
                      ? (
                        <CheckCircle
                          className="
                          w-5
                          h-5
                          "
                        />
                      )
                      : (
                        <Send
                          className="
                          w-5
                          h-5
                          "
                        />
                      )
                  }

                </button>

              </form>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-4

          pt-8

          text-sm

          text-slate-500
          "
        >

          <p>
            © {currentYear} Hajela Hospital.
            All Rights Reserved.
          </p>

          <div
            className="
            flex

            gap-6
            "
          >

            <Link
              href="/privacy"

              className="
              hover:text-cyan-400

              transition-all
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"

              className="
              hover:text-cyan-400

              transition-all
              "
            >
              Terms & Conditions
            </Link>

            <Link
              href="/sitemap"

              className="
              hover:text-cyan-400

              transition-all
              "
            >
              Sitemap
            </Link>

          </div>

          <p
            className="
            flex
            items-center

            gap-1
            "
          >

            Designed With

            <Heart
              className="
              w-4
              h-4

              text-red-400
              "
            />

            by Siddharth Singh

          </p>

        </div>

      </div>

    </footer>

  );

}