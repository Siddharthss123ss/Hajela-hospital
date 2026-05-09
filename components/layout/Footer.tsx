import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8">

      <div className="container-custom">

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* ABOUT */}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Hajela Hospital
            </h2>

            <p className="text-slate-400 leading-relaxed text-sm">
              Advanced healthcare services with expert doctors and
              modern medical facilities.
            </p>

            {/* SOCIALS */}

            <div className="flex gap-3 mt-6">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-cyan-500
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                  >

                    <Icon size={16} />

                  </div>
                )
              )}

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400 text-sm">

              <li className="hover:text-cyan-400 cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                About
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Departments
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Doctors
              </li>

            </ul>

          </div>

          {/* DEPARTMENTS */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Departments
            </h3>

            <ul className="space-y-3 text-slate-400 text-sm">

              <li className="hover:text-cyan-400 cursor-pointer">
                Cardiology
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Neurology
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Orthopaedics
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Pediatrics
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400 text-sm">

              <div className="flex gap-3 items-start">

                <Phone size={18} className="text-cyan-400 mt-1" />

                <p>+91 98765 43210</p>

              </div>

              <div className="flex gap-3 items-start">

                <Mail size={18} className="text-cyan-400 mt-1" />

                <p>info@hajelahospital.com</p>

              </div>

              <div className="flex gap-3 items-start">

                <MapPin size={18} className="text-cyan-400 mt-1" />

                <p>Bhopal, Madhya Pradesh</p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          pt-8
          text-slate-500
          text-sm
          "
        >

          <p>
            © 2026 Hajela Hospital. All Rights Reserved.
          </p>

          <p>
            Designed By Siddharth Singh
          </p>

        </div>

      </div>

    </footer>
  );
}