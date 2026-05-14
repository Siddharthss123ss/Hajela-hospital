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

      {/* DESKTOP VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/poster.jpg"
        className="
        hidden
        md:block

        absolute
        inset-0

        w-full
        h-full

        object-cover
        object-center

        scale-[1.03]

        brightness-[1.12]
        contrast-[1.08]
        saturate-[1.18]

        transition-all
        duration-700
        "
      >

        <source
          src="/videos/hero1.mp4"
          type="video/mp4"
        />

      </video>

      {/* MOBILE VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/poster.jpg"
        className="
        md:hidden

        absolute
        inset-0

        w-full
        h-full

        object-cover
        object-center

        scale-[1.02]

        brightness-[1.15]
        contrast-[1.05]
        saturate-[1.2]

        transition-all
        duration-700
        "
      >

        <source
          src="/videos/hero-mobile.mp4"
          type="video/mp4"
        />

      </video>

      {/* LIGHT OVERLAY */}

      <div
        className="
        absolute
        inset-0

        bg-black/8
        "
      ></div>

      {/* SIDE CINEMATIC SHADE */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r
        from-black/25
        via-transparent
        to-black/15
        "
      ></div>

      {/* TOP SHADE */}

      <div
        className="
        absolute
        top-0
        left-0

        w-full
        h-28

        bg-gradient-to-b
        from-black/35
        via-black/5
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
        h-44

        bg-gradient-to-t
        from-black/70
        via-black/15
        to-transparent
        "
      ></div>

      {/* CYAN GLOW */}

      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%)]
        "
      ></div>

      {/* BLUE GLOW */}

      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_30%)]
        "
      ></div>

      {/* BUTTONS */}

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

        {/* BOOK BUTTON */}

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

          shadow-[0_10px_40px_rgba(6,182,212,0.45)]

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

        {/* SERVICES BUTTON */}

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

    </section>
  );
}