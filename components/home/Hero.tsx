import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-black">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        md:object-center
        object-[65%_center]
        scale-105
        brightness-[0.9]
        "
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* LIGHT OVERLAY */}

      <div className="absolute inset-0 bg-black/25"></div>

      {/* TOP GRADIENT */}

      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-28
        bg-gradient-to-b
        from-black/70
        to-transparent
        z-10
        "
      />

      {/* BOTTOM GRADIENT */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        bg-gradient-to-t
        from-black/70
        via-black/20
        to-transparent
        z-10
        "
      />

      {/* PATIENT PORTAL */}

      <div
        className="
        absolute
        top-24
        right-4
        z-30
        "
      >
        <Link
          href="/appointment"
          className="
          bg-gradient-to-r
          from-blue-700
          to-cyan-500
          text-white
          text-sm
          font-semibold
          px-5
          py-2.5
          rounded-md
          shadow-xl
          hover:scale-105
          transition-all
          duration-300
          "
        >
          ⚡ Patient Portal
        </Link>
      </div>

      {/* BOTTOM BUTTONS */}

      <div
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        z-30
        flex
        flex-col
        sm:flex-row
        gap-4
        w-full
        px-6
        sm:w-auto
        sm:px-0
        "
      >

        <Link
          href="/appointment"
          className="
          bg-gradient-to-r
          from-blue-700
          to-cyan-500
          text-white
          text-center
          font-semibold
          px-8
          py-4
          rounded-full
          shadow-2xl
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Book Appointment
        </Link>

        <Link
          href="/departments"
          className="
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          text-white
          text-center
          font-semibold
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

    </section>
  );
}