import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}

      <div
        className="
        relative
        z-20
        h-full
        flex
        items-center
        justify-center
        text-center
        px-6
        "
      >

        <div className="max-w-4xl">

          {/* TAG */}

          <p
            className="
            text-cyan-300
            font-semibold
            tracking-[4px]
            uppercase
            mb-5
            text-sm
            sm:text-base
            "
          >
            Hajela Hospital Bhopal
          </p>

          {/* HEADING */}

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-bold
            leading-tight
            text-white
            "
          >
            Advanced Healthcare

            <span className="block text-cyan-400">
              For Better Living
            </span>

          </h1>

          {/* TEXT */}

          <p
            className="
            mt-6
            text-base
            sm:text-lg
            text-slate-200
            leading-relaxed
            max-w-2xl
            mx-auto
            "
          >
            Experience world-class healthcare services with
            advanced technology, expert doctors, and compassionate care.
          </p>

          {/* BUTTONS */}

          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            "
          >

            {/* APPOINTMENT BUTTON */}

            <Link
              href="/appointment"
              className="
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              text-white
              px-8
              py-4
              rounded-full
              hover:scale-105
              transition-all
              duration-300
              shadow-2xl
              "
            >
              Book Appointment
            </Link>

            {/* SERVICES BUTTON */}

            <Link
              href="/departments"
              className="
              border
              border-white
              text-white
              px-8
              py-4
              rounded-full
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
              "
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM FADE */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        bg-gradient-to-t
        from-black/80
        to-transparent
        "
      ></div>

    </section>
  );
}