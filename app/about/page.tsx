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
            innovation, and world-class infrastructure.
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
              title: "30+ Years",
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
              expert, and compassionate care for every patient with
              advanced healthcare technology and experienced specialists.
            </p>

            <p
              className="
              mt-6

              text-slate-400

              leading-relaxed
              "
            >
              From robotic surgeries and IVF treatments to infertility
              solutions, NICU care, trauma services, advanced diagnostics,
              sonology, laparoscopic surgeries and premium patient care —
              Hajela Hospital offers complete modern healthcare services
              under one roof.
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
                "Radiology & Sonology",
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
            "
          >

            <img
              src="https://res.cloudinary.com/dko6aobxx/image/upload/q_auto/f_auto/v1779436483/anoop_pdxflj.jpg"
              alt="Dr. Anoop Hajela"

              className="
              w-full

              h-[650px]

              object-cover
              object-top

              hover:scale-105

              transition-all
              duration-700
              "
            />

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
              "
            ></div>

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
              "
            >
              Dr. Anoop Hajela
            </h2>

            <p
              className="
              mt-3

              text-cyan-300

              text-lg

              font-semibold
              "
            >
              Managing Director • Senior Anaesthesiologist
            </p>

            <p
              className="
              mt-7

              text-slate-300

              leading-relaxed

              text-lg
              "
            >
              Under the visionary leadership of Dr. Anoop Hajela,
              Hajela Hospital has become one of Bhopal’s most trusted
              healthcare institutions known for patient care excellence,
              modern infrastructure and advanced healthcare technology.
            </p>

            <p
              className="
              mt-6

              text-slate-400

              leading-relaxed
              "
            >
              Hajela Hospital has received several
      prestigious recognitions including 1st
      Fully NABH Accreditation, Healthcare
      Excellence Awards, Green Hospital
      Certifications, and the Oscar Award
      for Best Green Hospital — reflecting
      his commitment towards innovation,
      sustainability, and compassionate care.
            </p>

          </div>

        </div>

        {/* ORGANIZATIONS & INSURANCE */}

<div
  className="
  mt-24

  grid
  lg:grid-cols-2

  gap-10
  "
>

  {/* ORGANIZATIONS */}

  <div
    className="
    rounded-[36px]

    border
    border-white/10

    bg-white/[0.06]

    backdrop-blur-2xl

    p-8
    lg:p-10

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

      mb-4
      "
    >
      Government Recognition
    </p>

    <h2
      className="
      text-3xl
      lg:text-4xl

      font-black

      text-white

      leading-tight

      mb-8
      "
    >
      Recognized Hospital
      Organizations
    </h2>

    <div
      className="
      grid

      gap-4
      "
    >

      {[
        "Recognized hospital for Central Govt Health Scheme for Central Govt. Employees",
        "Bharat Sanchar Nigam Limited (BSNL)",
        "Police Health Protection Scheme (PHPS) for Police personals of Dept. of Home (M.P)",
        "Maulana Azad National Institute of Technology (MANIT)",
        "M.P. Tourism Development Corporation (MPSTDC)",
        "Food Corporation of India (FCI)",
        "Central Pollution Control Board (C.P.C.B)",
        "Indira Gandhi National Open University (IGNOU)",
        "Indian Institute of Forest Management (IIFM)",
        "Indian Oil Corporation Ltd (IOC)",
        "Indian Institute of Soil & Science (IISS)",
        "National Institute of Technical Teachers' Training Institute & Research (NITTTR)",
        "Central Institute of Agricultural Engineering (CIAE)",
        "Central Power Research Institute (CPRI)",
        "Indian Institute of Science Education & Research Centre (IISER)",
        "Narmada Hydroelectric Development Corporation (NHDC)",
        "National Judicial Academy (NJA)",
        "M.P. State Government for Family Planning Operation",
        "M.P State Civil Supplies Corporation",
        "M.P State Agricultural Marketing Board (Mandi Board)",
        "Advanced Materials & Processes Research Institute (AMPRI)",
        "Judiciary Officials - In-service / Retired",
        "School of Planning and Architecture (SPA)",
        "VNS Group of Colleges, Bhopal",
        "Central Board of Secondary Education (CBSE)",
        "Maulana Azad Urdu University",
        "Central Institute of Petrochemicals Engineering & Technology (CIPET)",
        "Makhanlal Chaturvedi University of Journalism and Communication",
        "National Horticulture Board (NHB)",
        "Jawahar Navodaya Vidyalaya",
        "Rashtriya Bal Swasthya Karyakram (RBSK)",
        "Public Health and Family Welfare Department",
        "National Green Tribunal Central Zonal Bench (NGT)",
      ].map((item, index) => (

        <div
          key={index}

          className="
          rounded-2xl

          border
          border-white/10

          bg-white/[0.04]

          px-5
          py-4

          text-slate-200

          hover:bg-cyan-500/10

          transition-all
          duration-300
          "
        >

          {index + 1}. {item}

        </div>

      ))}

    </div>

  </div>

  {/* INSURANCE */}

  <div
    className="
    rounded-[36px]

    border
    border-white/10

    bg-gradient-to-br
    from-cyan-500/10
    to-blue-500/10

    backdrop-blur-2xl

    p-8
    lg:p-10

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

      mb-4
      "
    >
      Cashless & Insurance
    </p>

    <h2
      className="
      text-3xl
      lg:text-4xl

      font-black

      text-white

      leading-tight

      mb-8
      "
    >
      Approved Insurance
      Companies & TPA's
    </h2>

    <div
      className="
      grid

      gap-4
      "
    >

      {[
        "Alankit Healthcare TPA Limited",
        "Aditya Birla Health Insurance",
        "Cholamandalam MS General Insurance",
        "East West Assist (Volo Health Insurance TPA)",
        "Ericson Insurance TPA Pvt Ltd",
        "Family Health Plan Insurance TPA Limited",
        "Focus Health Insurance TPA Pvt. Ltd",
        "Future Generali India Insurance Co",
        "Genins India Insurance TPA Pvt Ltd",
        "Good Health Plan Insurance TPA Limited",
        "Grand Healthcare Service India Pvt. Ltd",
        "HDFC Ergo General Insurance",
        "Health India Insurance TPA Ltd",
        "Health Insurance TPA Pvt Ltd",
        "Heritage Health Services TPA",
        "ICICI Prudential Life Insurance",
        "IFFCO-TOKIO General Insurance Co Ltd",
        "Liberty General Insurance Co. Ltd",
        "M.D. India Health Insurance TPA Pvt. Ltd",
        "Medvantage Insurance TPA Pvt Ltd",
        "Med Save Health Insurance TPA Ltd",
        "Medi Assist Insurance TPA Pvt. Ltd",
        "Paramount Health Services TPA Pvt Ltd",
        "Park Mediclaim TPA Health Services Pvt. Ltd",
        "Raksha Health Insurance TPA Pvt. Ltd",
        "Reliance General Health Insurance",
        "SBI General Insurance Co Ltd",
        "Universal Sompo General Insurance",
        "Vidal Health Insurance TPA Pvt Ltd",
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

          hover:bg-blue-500/10

          transition-all
          duration-300
          "
        >

          {index + 1}. {item}

        </div>

    

              ))}

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}