import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* GLOW EFFECTS */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* CONTENT */}

      <div className="container-custom relative z-20 grid lg:grid-cols-2 gap-10 items-center pt-32">

        {/* LEFT */}

        <div>

          <p className="text-cyan-300 font-semibold mb-4 text-lg">
            Welcome To Hajela Hospital
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            Advanced Healthcare
            <span className="block text-cyan-400">
              For Better Living
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
            Hajela Hospital provides world-class healthcare with experienced
            doctors, modern technology, and compassionate patient care.
          </p>

          {/* BUTTONS */}

          <div className="flex gap-5 mt-10 flex-wrap">

            <button className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore Services
            </button>

          </div>

          {/* FEATURES */}

          <div className="flex gap-10 mt-14 flex-wrap">

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                24/7
              </h3>

              <p className="text-slate-200">
                Emergency Care
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                100+
              </h3>

              <p className="text-slate-200">
                Expert Doctors
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                NABH
              </h3>

              <p className="text-slate-200">
                Certified Hospital
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative hidden lg:flex justify-center">

          <Image
            src="/hero/doctor.png"
            alt="Doctor"
            width={600}
            height={600}
            priority
            className="relative z-10 object-contain drop-shadow-2xl"
          />

          {/* FLOATING CARDS */}

          <div className="absolute top-16 left-0 bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20">
            <h3 className="text-4xl font-bold text-white">
              25+
            </h3>

            <p className="text-slate-200">
              Years Experience
            </p>
          </div>

          <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20">
            <h3 className="text-4xl font-bold text-cyan-300">
              50K+
            </h3>

            <p className="text-slate-200">
              Happy Patients
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}