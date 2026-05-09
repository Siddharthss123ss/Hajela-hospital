export default function Appointment() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="container-custom">

        <div
          className="
          bg-gradient-to-r
          from-blue-900
          to-cyan-600
          rounded-[40px]
          p-10
          lg:p-20
          shadow-2xl
          grid
          lg:grid-cols-2
          gap-16
          items-center
          overflow-hidden
          relative
          "
        >

          {/* GLOW EFFECT */}

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-300 rounded-full blur-3xl opacity-20"></div>

          {/* LEFT CONTENT */}

          <div className="relative z-10">

            <p className="text-cyan-200 font-semibold mb-4 text-lg">
              Book Appointment
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Schedule Your Visit
              With Our Specialists
            </h2>

            <p className="mt-8 text-slate-200 text-lg leading-relaxed">
              Hajela Hospital offers advanced healthcare services with
              experienced doctors and modern medical facilities.
            </p>

            {/* FEATURES */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-cyan-300"></div>

                <p className="text-white text-lg">
                  24/7 Emergency Support
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-cyan-300"></div>

                <p className="text-white text-lg">
                  Experienced Specialist Doctors
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-cyan-300"></div>

                <p className="text-white text-lg">
                  Modern Medical Infrastructure
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-[35px]
            p-10
            relative
            z-10
            "
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Make An Appointment
            </h3>

            <form className="space-y-6">

              {/* NAME */}

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                text-white
                placeholder:text-slate-300
                outline-none
                "
              />

              {/* PHONE */}

              <input
                type="text"
                placeholder="Phone Number"
                className="
                w-full
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                text-white
                placeholder:text-slate-300
                outline-none
                "
              />

              {/* DEPARTMENT */}

              <select
                className="
                w-full
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                text-white
                outline-none
                "
              >
                <option className="text-black">
                  Select Department
                </option>

                <option className="text-black">
                  Cardiology
                </option>

                <option className="text-black">
                  Neurology
                </option>

                <option className="text-black">
                  Orthopaedics
                </option>

              </select>

              {/* DATE */}

              <input
                type="date"
                className="
                w-full
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                text-white
                outline-none
                "
              />

              {/* BUTTON */}

              <button
                className="
                w-full
                bg-white
                text-blue-900
                font-bold
                py-5
                rounded-2xl
                hover:bg-cyan-300
                transition-all
                duration-300
                "
              >
                Book Appointment
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}