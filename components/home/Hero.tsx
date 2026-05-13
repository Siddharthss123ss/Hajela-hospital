import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      relative
      h-[100svh]
      overflow-hidden
      bg-black
      "
    >

      {/* VIDEO */}

     {/* DESKTOP VIDEO */}

<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="
  hidden
  md:block
  absolute
  inset-0
  w-full
  h-full
  object-cover
  object-center
  brightness-[0.9]
  scale-[1.02]
  "
>
  <source src="/videos/hero1.mp4" type="video/mp4" />
</video>

{/* MOBILE VIDEO */}

<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="
  md:hidden
  absolute
  inset-0
  w-full
  h-full
  object-cover
  object-center
  brightness-[0.96]
  "
>
  <source src="/videos/hero-mobile.mp4.mp4" type="video/mp4" />
</video>

      {/* PREMIUM OVERLAY */}

      <div
        className="
        absolute
        inset-0
        bg-black/30
        "
      ></div>

      {/* CINEMATIC LIGHT */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/55
        via-transparent
        to-black/35
        "
      ></div>

      {/* TOP PREMIUM GLOW */}

      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-36
        bg-gradient-to-b
        from-black/70
        via-black/20
        to-transparent
        "
      ></div>

      {/* BOTTOM FADE */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-52
        bg-gradient-to-t
        from-black/90
        via-black/40
        to-transparent
        "
      ></div>

      {/* PREMIUM BUTTONS */}

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
        px-5
        sm:w-auto
        sm:px-0
        "
      >

        {/* BUTTON 1 */}

        <Link
          href="/appointment"
          className="
          group
          relative
          overflow-hidden
          bg-gradient-to-r
          from-blue-700
          via-blue-600
          to-cyan-500
          text-white
          text-center
          font-semibold
          text-sm
          sm:text-base
          px-7
          sm:px-8
          py-3.5
          rounded-full
          shadow-[0_8px_30px_rgba(6,182,212,0.45)]
          hover:scale-105
          transition-all
          duration-300
          "
        >

          <span className="relative z-10">
            Book Appointment
          </span>

          <div
            className="
            absolute
            inset-0
            bg-white/20
            translate-y-full
            group-hover:translate-y-0
            transition-all
            duration-300
            "
          ></div>

        </Link>

        {/* BUTTON 2 */}

        <Link
          href="/departments"
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          text-white
          text-center
          font-semibold
          text-sm
          sm:text-base
          px-7
          sm:px-8
          py-3.5
          rounded-full
          shadow-xl
          hover:bg-white
          hover:text-black
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Explore Services
        </Link>

      </div>

      {/* SUBTLE PREMIUM SHINE */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%)]
        "
      ></div>

    </section>
  );
}