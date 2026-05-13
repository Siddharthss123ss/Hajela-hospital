import Image from "next/image";

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
        object-center
        "
      >
        <source src="/videos/hero4.mp4" type="video/mp4" />
      </video>

      {/* PREMIUM OVERLAY */}

      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}

      <div className="relative z-20 h-full px-6">

        {/* LEFT TOP BRAND */}

        <div
          className="
          absolute
          top-8
          left-6
          sm:left-10
          flex
          items-center
          gap-4
          "
        >

          {/* LOGO */}

          <div
            className="
            w-14
            h-14
            sm:w-16
            sm:h-16
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            overflow-hidden
            shadow-2xl
            "
          >

            <Image
              src="/images/logo.avif"
              alt="Hajela Hospital"
              width={45}
              height={45}
              priority
              className="object-contain"
            />

          </div>

          {/* TEXT */}

          <div>

            <h2
              className="
              text-white
              font-bold
              text-2xl
              sm:text-3xl
              leading-tight
              drop-shadow-xl
              "
            >
              Hajela Hospital
            </h2>

            <p
              className="
              text-cyan-300
              text-sm
              sm:text-lg
              tracking-wide
              "
            >
              Advanced Medical Care
            </p>

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
        h-52
        bg-gradient-to-t
        from-black
        to-transparent
        "
      ></div>

    </section>
  );
}