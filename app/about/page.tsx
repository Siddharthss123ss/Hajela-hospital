export default function AboutPage() {

  return (

    <main
      className="
      relative

      overflow-hidden

      bg-gradient-to-b
      from-slate-950
      via-slate-900
      to-black

      min-h-screen

      pt-32
      pb-24
      "
    >

      {/* PREMIUM GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[900px]

        rounded-full

        bg-cyan-500/10

        blur-[180px]
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-[150px]
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* HERO */}

        <div className="max-w-5xl">

          <p
            className="
            text-cyan-400

            uppercase

            tracking-[5px]

            font-bold

            text-sm

            mb-5
            "
          >
            Since 1995 • Trusted Healthcare Excellence
          </p>

          <h1
            className="
            text-5xl
            lg:text-7xl

            font-black

            text-white

            leading-tight
            "
          >
            About
            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-blue-500

              bg-clip-text
              text-transparent
              "
            >
              {" "}
              Hajela Hospital
            </span>
          </h1>

          <p
            className="
            mt-8

            text-slate-300

            text-lg
            lg:text-xl

            leading-relaxed

            max-w-4xl
            "
          >
            Established in 1995, Hajela Hospital has emerged as one of
            Bhopal’s most trusted and advanced healthcare institutions,
            delivering exceptional medical care with compassion,
            innovation, and world-class infrastructure. Known for its
            patient-first philosophy and premium healthcare services,
            the hospital continues to redefine excellence in modern
            medicine.
          </p>

        </div>

        {/* PREMIUM STATS */}

        <div
          className="
          grid

          sm:grid-cols-2
          lg:grid-cols-4

          gap-7

          mt-20
          "
        >

          {[
            {
              title: "29+ Years",
              desc: "Healthcare Excellence",
            },

            {
              title: "24/7",
              desc: "Emergency Care",
            },

            {
              title: "NABH",
              desc: "Accredited Hospital",
            },

            {
              title: "Top Hospital",
              desc: "Trusted Across Bhopal",
            },

          ].map((item, index) => (

            <div
              key={index}

              className="
              rounded-[32px]

              border
              border-white/10

              bg-white/[0.06]

              backdrop-blur-2xl

              p-8

              shadow-[0_10px_50px_rgba(0,0,0,0.25)]
              "
            >

              <h2
                className="
                text-4xl

                font-black

                text-white
                "
              >
                {item.title}
              </h2>

              <p
                className="
                mt-3

                text-slate-300
                "
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* ABOUT CONTENT */}

        <div
          className="
          grid
          lg:grid-cols-2

          gap-14

          mt-24
          "
        >

          {/* LEFT */}

          <div
            className="
            rounded-[36px]

            border
            border-white/10

            bg-white/[0.06]

            backdrop-blur-2xl

            p-10

            shadow-[0_10px_60px_rgba(0,0,0,0.25)]
            "
          >

            <p
              className="
              text-cyan-400

              uppercase

              tracking-[4px]

              font-bold

              text-sm

              mb-5
              "
            >
              Excellence In Healthcare
            </p>

            <h2
              className="
              text-4xl

              font-black

              text-white

              leading-tight
              "
            >
              Advanced Care With
              Compassion & Innovation
            </h2>

            <p
              className="
              mt-7

              text-slate-300

              leading-relaxed

              text-lg
              "
            >
              Hajela Hospital is committed to delivering immediate,
              expert, and compassionate care for every patient. The
              hospital operates a fully equipped 24-hour Emergency
              Department supported by trauma specialists,
              intensivists, radiologists, and experienced surgeons,
              ensuring rapid response and precise medical treatment at
              all times.
            </p>

            <p
              className="
              mt-6

              text-slate-400

              leading-relaxed
              "
            >
              From robotic surgeries and IVF treatments to infertility
              solutions, ICSI procedures, joint replacement surgeries,
              cochlear implants, NICU care, advanced diagnostics, and
              minimally invasive laparoscopic surgeries — Hajela
              Hospital offers a complete spectrum of modern healthcare
              services under one roof.
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
            rounded-[36px]

            border
            border-white/10

            bg-gradient-to-br
            from-cyan-500/10
            to-blue-500/10

            backdrop-blur-2xl

            p-10

            shadow-[0_10px_60px_rgba(0,0,0,0.25)]
            "
          >

            <p
              className="
              text-cyan-400

              uppercase

              tracking-[4px]

              font-bold

              text-sm

              mb-5
              "
            >
              Facilities & Specialities
            </p>

            <div
              className="
              grid
              sm:grid-cols-2

              gap-4
              "
            >

              {[
                "24-Hour Emergency Care",
                "Ambulance Services",
                "Laboratory Services",
                "Advanced Pharmacy",
                "ICU & CCU",
                "Trauma Centre",
                "Robotic Surgery",
                "IVF & Infertility Clinic",
                "Orthopedic Surgery",
                "ENT Specialist",
                "NICU & Pediatrics",
                "Radiology & Ultrasound",
              ].map((item, index) => (

                <div
                  key={index}

                  className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.05]

                  px-5
                  py-4

                  text-slate-200

                  text-sm

                  hover:bg-cyan-500/10

                  transition-all
                  duration-300
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

       {/* DIRECTOR SECTION */}

<div
  className="
  mt-24

  grid
  lg:grid-cols-2

  gap-12

  items-center

  rounded-[40px]

  border
  border-white/10

  bg-white/[0.06]

  backdrop-blur-2xl

  p-8
  lg:p-14

  shadow-[0_10px_70px_rgba(0,0,0,0.25)]
  "
>

  {/* IMAGE */}

  <div
    className="
    relative

    overflow-hidden

    rounded-[36px]

    border
    border-white/10

    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
  >

    <img
      src="/doctors/anoop.jpg"
      alt="Dr. Anoop Hajela"

      className="
      w-full
      h-full

      object-cover

      hover:scale-105

      transition-all
      duration-700
      "
    />

    {/* PREMIUM OVERLAY */}

    <div
      className="
      absolute
      inset-0

      bg-gradient-to-t
      from-black/60
      via-transparent
      to-transparent
      "
    ></div>

    {/* EXPERIENCE TAG */}

    <div
      className="
      absolute
      bottom-6
      left-6

      rounded-2xl

      bg-white/10

      backdrop-blur-xl

      border
      border-white/10

      px-5
      py-3
      "
    >

      <h3
        className="
        text-white

        font-bold

        text-lg
        "
      >
        45+ Years
      </h3>

      <p
        className="
        text-slate-300

        text-sm
        "
      >
        Medical Excellence
      </p>

    </div>

  </div>

  {/* CONTENT */}

  <div>

    <p
      className="
      text-cyan-400

      uppercase

      tracking-[4px]

      font-bold

      text-sm

      mb-5
      "
    >
      Leadership
    </p>

    <h2
      className="
      text-4xl
      lg:text-5xl

      font-black

      text-white

      leading-tight
      "
    >
      Dr. Anoop Hajela
    </h2>

    <p
      className="
      mt-3

      text-cyan-300

      text-lg
      "
    >
      Managing Director • Anaesthesiologist
    </p>

    <p
      className="
      mt-7

      text-slate-300

      leading-relaxed

      text-lg
      "
    >
      Under the visionary leadership of
      Dr. Anoop Hajela, Hajela Hospital has
      become one of Bhopal’s most trusted
      and advanced healthcare institutions.
      The hospital is widely recognized for
      premium healthcare services, patient
      care excellence, modern infrastructure,
      and world-class medical technology.
    </p>

    <p
      className="
      mt-6

      text-slate-400

      leading-relaxed
      "
    >
      Hajela Hospital has received several
      prestigious recognitions including
      NABH Accreditation, Healthcare
      Excellence Awards, Green Hospital
      Certifications, and the Oscar Award
      for Best Green Hospital — reflecting
      its commitment towards innovation,
      sustainability, and compassionate care.
    </p>

  </div>

</div>

        {/* FINAL SECTION */}

        <div
          className="
          mt-24

          text-center
          "
        >

          <h2
            className="
            text-4xl
            lg:text-5xl

            font-black

            text-white

            leading-tight
            "
          >
            Where Premium Healthcare
            Meets Exceptional Wellness
          </h2>

          <p
            className="
            mt-6

            text-slate-300

            max-w-3xl

            mx-auto

            leading-relaxed

            text-lg
            "
          >
            With advanced medical technology, expert specialists,
            compassionate patient care, and a legacy of healthcare
            excellence since 1995, Hajela Hospital continues to set
            benchmarks in modern healthcare services across Madhya
            Pradesh.
          </p>

        </div>

      </div>

    </main>

  );

}