import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg">
            Contact Hajela Hospital
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
            Get In Touch
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Contact our healthcare team for appointments,
            emergency support, and medical assistance.
          </p>

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT INFO */}

          <div className="space-y-8">

            {/* CARD */}

            <div className="bg-white rounded-[35px] p-8 shadow-xl">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Phone className="text-cyan-600 w-7 h-7" />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Call Us
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +91 98765 43210
                  </p>

                </div>

              </div>

            </div>

            {/* CARD */}

            <div className="bg-white rounded-[35px] p-8 shadow-xl">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Mail className="text-cyan-600 w-7 h-7" />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Email Address
                  </h3>

                  <p className="mt-2 text-slate-600">
                    info@hajelahospital.com
                  </p>

                </div>

              </div>

            </div>

            {/* CARD */}

            <div className="bg-white rounded-[35px] p-8 shadow-xl">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <MapPin className="text-cyan-600 w-7 h-7" />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Location
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Bhopal, Madhya Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* CARD */}

            <div className="bg-white rounded-[35px] p-8 shadow-xl">

              <div className="flex items-start gap-5">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Clock3 className="text-cyan-600 w-7 h-7" />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-slate-600">
                    24/7 Emergency & Trauma Services
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="bg-white rounded-[40px] p-10 shadow-2xl">

            <h2 className="text-4xl font-bold text-slate-900">
              Send Message
            </h2>

            <p className="mt-4 text-slate-600">
              Fill the form below and our team will contact you shortly.
            </p>

            <form className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                border
                border-slate-200
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-500
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                border
                border-slate-200
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-500
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                w-full
                border
                border-slate-200
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-500
                "
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="
                w-full
                border
                border-slate-200
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-500
                resize-none
                "
              ></textarea>

              <button
                className="
                w-full
                bg-gradient-to-r
                from-blue-700
                to-cyan-500
                text-white
                py-5
                rounded-2xl
                font-semibold
                hover:scale-[1.02]
                transition-all
                duration-300
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}