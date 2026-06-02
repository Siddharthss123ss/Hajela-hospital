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
              title: "31+ Years",
              desc: "Healthcare Excellence",
            },

            {
              title: "24/7",
              desc: "Emergency Care",
            },

            {
              title: "NABH",
              desc: "Fully Accredited Hospital",
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
              src="https://res.cloudinary.com/dko6aobxx/image/upload/v1780139450/DR_ANOOP_HAJELA_e4uevn.png"
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

           <ul
  className="
  mt-3

  text-cyan-300

  text-lg

  font-semibold

  space-y-2

  list-disc
  pl-6
  "
>

  <li>Proprietor & Director</li>

  <li>Senior Anaesthesiologist</li>

  <li>NABH Ambassador - Climate Change Resilience and Sustainability</li>

  <li>Chairman - QPAC (Quality Promotion and Advisory Council) for MP, Quality Council of India</li>

  <li>State Lead - Health & Environment Leadership Platform (HELP)</li>

  <li>President - AHPI, MP Chapter</li>

  <li>Director - India Waste Management Pvt. Ltd., Bhopal (M.P.)</li>

</ul>

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
      Certifications,
       — reflecting
      his commitment towards innovation,
      sustainability, and compassionate care.
      
            </p>

          </div>

        </div>

    {/* ORGANIZATIONS + INSURANCE + TPA */}

<div
  className="
  mt-24

  grid
  lg:grid-cols-1
xl:grid-cols-3

  gap-10
  "
>

  {/* GOVERNMENT */}

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

      max-h-[800px]

      overflow-y-auto
      scrollbar-thin
scrollbar-thumb-cyan-500/30
scrollbar-track-transparent

      pr-2
      "
    >

     {[
  "Archaeological Survey of India (ASI)",
  "Bhopal Memorial Hospital & Research Centre (BMHRC)",
  "Central Bureau of Investigation (CBI)",
  "Central Government Health Scheme (CGHS) – Serving Employees & Pensioners",
  "Central Ground Water Board (CGWB)",
  "Food Corporation of India (FCI)",
  "National Institute of Design, Madhya Pradesh",
  "Narmada Hydroelectric Development Corporation (NHDC)",
  "Police Health Protection Scheme (PHPS)",
  "Reserve Bank of India (RBI)",
  "Rashtriya Bal Swasthya Karyakram (RBSK)",
  "Advanced Materials & Processes Research Institute (AMPRI)",
  "Bharat Sanchar Nigam Limited (BSNL)",
  "Central Board of Secondary Education (CBSE)",
  "Central Institute of Agricultural Engineering (CIAE)",
  "Central Institute of Petrochemicals Engineering & Technology (CIPET)",
  "Central Pollution Control Board (CPCB)",
  "Central Power Research Institute (CPRI)",
  "Indian Institute of Forest Management (IIFM)",
  "Indian Institute of Science Education & Research (IISER)",
  "Indian Institute of Soil Science (IISS)",
  "Indian Oil Corporation Limited (IOCL)",
  "Indira Gandhi National Open University (IGNOU)",
  "Jawahar Navodaya Vidyalaya",
  "Judiciary Officials – In-service / Retired",
  "Makhanlal Chaturvedi National University of Journalism & Communication",
  "Maulana Azad National Institute of Technology (MANIT)",
  "Maulana Azad National Urdu University (MANUU)",
  "Madhya Pradesh Government – Family Planning Operations",
  "Madhya Pradesh State Agricultural Marketing Board (Mandi Board)",
  "Madhya Pradesh State Civil Supplies Corporation",
  "Madhya Pradesh Tourism Development Corporation (MPTDC)",
  "National Green Tribunal (NGT)",
  "National Horticulture Board (NHB)",
  "National Institute of Technical Teachers' Training & Research (NITTTR)",
  "National Judicial Academy (NJA)",
  "Public Health & Family Welfare Department",
  "School of Planning & Architecture (SPA), Bhopal",
  "VNS Group of Institutions, Bhopal"
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
          hover:translate-x-1

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
      Insurance Companies
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
      Companies
    </h2>

    <div
      className="
      grid

      gap-4

      max-h-[800px]

      overflow-y-auto
      scrollbar-thin
scrollbar-thumb-cyan-500/30
scrollbar-track-transparent

      pr-2
      "
    >

      {[
  "Aditya Birla Health Insurance",
  "Cholamandalam MS General Insurance Company Limited",
  "Future Generali India Insurance Company Limited",
  "Go Digit General Insurance Limited",
  "HDFC ERGO General Insurance Company Limited",
  "ICICI Prudential Life Insurance",
  "IFFCO-TOKIO General Insurance Company Limited",
  "IndusInd General Insurance (Formerly Reliance General Insurance Company Limited)",
  "Liberty General Insurance Limited",
  "SBI General Insurance Company Limited",
  "TATA AIG General Insurance Company Limited",
  "Universal Sompo General Insurance Company Limited"
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

         hover:bg-cyan-500/10
hover:translate-x-1

          transition-all
          duration-300
          "
        >

          {index + 1}. {item}

        </div>

      ))}

    </div>

  </div>

  {/* TPA */}

  <div
    className="
    rounded-[36px]

    border
    border-white/10

    bg-gradient-to-br
    from-emerald-500/10
    to-cyan-500/10

    backdrop-blur-2xl

    p-8
    lg:p-10

    shadow-[0_10px_60px_rgba(0,0,0,0.25)]
    "
  >

    <p
      className="
      text-emerald-400

      uppercase

      tracking-[4px]

      font-bold

      text-sm

      mb-4
      "
    >
      Cashless & TPA
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
      Approved TPA
      Partners
    </h2>

    <div
      className="
      grid

      gap-4

      max-h-[800px]

      overflow-y-auto
      scrollbar-thin
scrollbar-thumb-cyan-500/30
scrollbar-track-transparent

      pr-2
      "
    >

      {[
  "Alankit Health Care TPA Limited",
  "Ericson Insurance TPA Pvt. Ltd.",
  "Family Health Plan Insurance TPA Limited (FHPL)",
  "Focus Health Services TPA Pvt. Ltd.",
  "Genins India Insurance TPA Limited",
  "Good Health Insurance TPA Limited",
  "Health India Insurance TPA Services Pvt. Ltd.",
  "Health Insurance TPA of India Limited (HITPA)",
  "Heritage Health Insurance TPA Pvt. Ltd.",
  "MDIndia Health Insurance TPA Pvt. Ltd.",
  "Medi Assist Insurance TPA Pvt. Ltd.",
  "Medsave Health Insurance TPA Limited",
  "Medvantage Insurance TPA Pvt. Ltd.",
  "Paramount Health Services & Insurance TPA Pvt. Ltd.",
  "Park Mediclaim Insurance TPA Pvt. Ltd.",
  "Safeway Insurance TPA Pvt. Ltd.",
  "Vidal Health Insurance TPA Pvt. Ltd.",
  "Volo Health Insurance TPA Pvt. Ltd. (Formerly East West Assist Insurance TPA Pvt. Ltd.)"
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

          
          hover:bg-cyan-500/10
hover:translate-x-1

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