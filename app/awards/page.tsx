// app/awards/page.tsx

import Image from "next/image";

const trophies = [

  {
    title: "Oscar Award For Best Hospital",
    subtitle: "Six Sigma Healthcare Excellence",
    image: "/awards/oscar.jpg",
  },

  {
    title: "Kayastha Leadership Award",
    subtitle: "Presented with Vishwas Sarang",
    image: "/awards/KAYASTHA.jpg",
  },

  {
    title: "NABH Certification Ceremony",
    subtitle: "National Quality Healthcare Recognition",
    image: "/awards/nabh.jpg",
  },

  {
    title: "FMPCCI Healthcare Award",
    subtitle: "Outstanding Contribution in Healthcare",
    image: "/awards/fmpcci.jpg",
  },

];

const certifications = [

  {
    title: "Award for Excellence in Healthcare",
    subtitle: "Healthcare Leadership Recognition 2026",
    image: "/awards/award5.png",
  },

  {
    title: "Most Iconic Healthcare Leader",
    subtitle: "National Healthcare Recognition 2025",
    image: "/awards/certificate2.jpeg",
  },

  {
    title: "Nursing Excellence Certificate",
    subtitle: "Outstanding Nursing Services",
    image: "/awards/certificate3.jpeg",
  },

  {
    title: "AHPI Excellence Award",
    subtitle: "Patient Friendly Hospital 2022",
    image: "/awards/certificate4.jpg",
  },

  {
    title: "Cleanest Hospital Award Certificate",
    subtitle: "Cleanliness Excellence Recognition 2021",
    image: "/awards/certificate5.jpg",
  },

   {
    title: "Cleanest Hospital Award Certificate",
    subtitle: "Cleanliness Excellence Recognition 2022",
    image: "/awards/certificate6.jpg",
  },

  {
    title: "Patient Friendly Hospital Award",
    subtitle: "AHPI Awards 2022",
    image: "/awards/patient.jpg",
  },

  {
    title: "MPFICCI Award Certificate",
    subtitle: "Healthcare Achievement Recognition",
    image: "/awards/certificate7.jpg",
  },

  {
    title: "Oscar Award Certification",
    subtitle: "Six Sigma Hospital Excellence",
    image: "/awards/certificate8.jpg",
  },

  // {
  //   title: "Healthcare Quality Certification",
  //   subtitle: "Advanced Medical Standards",
  //   image: "/awards/certificate9.jpg",
  // },

];

export default function AwardsPage() {

  return (

    <main
      className="
      min-h-screen

      bg-gradient-to-b
      from-[#020617]
      via-black
      to-[#020617]

      pt-32
      pb-24

      overflow-hidden
      "
    >

      {/* PREMIUM GLOW */}

      <div
        className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[900px]

        bg-cyan-500/10
        blur-[180px]
        rounded-full

        pointer-events-none
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* TOP */}

        <div className="text-center mb-24">

          <p
            className="
            text-cyan-400

            uppercase
            tracking-[5px]

            text-sm
            font-semibold

            mb-5
            "
          >
            Recognition & Excellence
          </p>

          <h1
            className="
            text-4xl
            md:text-6xl
            lg:text-7xl

            font-black
            text-white

            leading-tight
            "
          >

            Awards & Certifications

          </h1>

          <p
            className="
            mt-7

            max-w-3xl
            mx-auto

            text-slate-300
            text-base
            sm:text-lg

            leading-relaxed
            "
          >
            Hajela Hospital has been nationally recognized for
            excellence in healthcare, patient safety, leadership,
            hospital operations, nursing services, and medical innovation.
          </p>

        </div>

        {/* TROPHIES SECTION */}

        <div className="mb-28">

          <div className="mb-14">

            <h2
              className="
              text-3xl
              md:text-5xl

              font-black
              text-white
              "
            >

              Trophy Awards

            </h2>

            <p
              className="
              mt-4

              text-slate-400
              max-w-2xl

              leading-relaxed
              "
            >
              Prestigious awards and honors recognizing excellence
              in hospital operations, patient care, and healthcare leadership.
            </p>

          </div>

          {/* GRID */}

          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-3

            gap-8
            "
          >

            {trophies.map((item, index) => (

              <div
                key={index}

                className="
                group
                overflow-hidden

                rounded-[34px]

                border
                border-white/10

                bg-white/[0.05]
                backdrop-blur-2xl

                hover:-translate-y-3
                hover:border-cyan-400/30

                transition-all
                duration-500

                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                "
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={600}
                    className="
                    w-full

                    h-[320px]

                    object-cover

                    group-hover:scale-110

                    transition-all
                    duration-700
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                    "
                  ></div>

                  {/* BADGE */}

                  <div
                    className="
                    absolute
                    top-4
                    left-4

                    px-4
                    py-1.5

                    rounded-full

                    bg-yellow-400/15
                    border
                    border-yellow-300/20

                    backdrop-blur-xl

                    text-yellow-200
                    text-xs
                    font-semibold
                    "
                  >
                    TROPHY AWARD
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  <h3
                    className="
                    text-white
                    text-2xl

                    font-bold

                    leading-snug
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-3

                    text-slate-400

                    text-sm
                    leading-relaxed
                    "
                  >
                    {item.subtitle}
                  </p>

                  <div
                    className="
                    mt-5

                    w-20
                    h-[3px]

                    rounded-full

                    bg-gradient-to-r
                    from-yellow-400
                    to-orange-500
                    "
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CERTIFICATIONS */}

        <div>

          <div className="mb-14">

            <h2
              className="
              text-3xl
              md:text-5xl

              font-black
              text-white
              "
            >

              Certifications & Recognition

            </h2>

            <p
              className="
              mt-4

              text-slate-400
              max-w-2xl

              leading-relaxed
              "
            >
              Nationally recognized certifications and healthcare
              quality acknowledgements awarded for medical excellence.
            </p>

          </div>

          {/* GRID */}

          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-4

            gap-8
            "
          >

            {certifications.map((item, index) => (

              <div
                key={index}

                className="
                group
                overflow-hidden

                rounded-[30px]

                border
                border-white/10

                bg-white/[0.05]
                backdrop-blur-2xl

                hover:-translate-y-2
                hover:border-cyan-400/30

                transition-all
                duration-500

                shadow-[0_15px_60px_rgba(0,0,0,0.4)]
                "
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="
                    w-full

                    h-[250px]

                    object-cover

                    group-hover:scale-105

                    transition-all
                    duration-700
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                    "
                  ></div>

                  {/* BADGE */}

                  <div
                    className="
                    absolute
                    top-4
                    left-4

                    px-4
                    py-1.5

                    rounded-full

                    bg-cyan-500/15
                    border
                    border-cyan-300/20

                    backdrop-blur-xl

                    text-cyan-200
                    text-xs
                    font-semibold
                    "
                  >
                    CERTIFICATION
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <h3
                    className="
                    text-white
                    text-xl

                    font-bold

                    leading-snug
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-3

                    text-slate-400

                    text-sm
                    leading-relaxed
                    "
                  >
                    {item.subtitle}
                  </p>

                  <div
                    className="
                    mt-5

                    w-16
                    h-[3px]

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-600
                    "
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}