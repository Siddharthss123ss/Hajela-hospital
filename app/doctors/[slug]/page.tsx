// app/doctors/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Award,
  BriefcaseMedical,
  GraduationCap,
} from "lucide-react";

const doctors = [

  {
    slug: "dr-anoop-hajela",
    name: "Dr. Anoop Hajela",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "45+ Years",
    image: "/doctors/anoop.jpg",
  },

  {
    slug: "dr-rajni-hajela",
    name: "Dr. Rajni Hajela",
    role: "Gynaecologist",
    degree: "MBBS, MD Obstetrics and Gynecology",
    experience: "38+ Years",
    image: "/doctors/rajni.jpeg",
  },

  {
    slug: "dr-sanjeev-johri",
    name: "Dr. Sanjeev Johri",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "14+ Years",
    image: "/doctors/sanjeev.png",
  },

  {
  slug: "dr-supriya-hajela",
  name: "Dr. Supriya Hajela",
  role: "Obstetrician & Gynecologist",
  degree: "MBBS, MD Obstetrics & Gynecology",
  experience: "14+ Years",
  image: "/doctors/supriya.png",
  website: "https://www.supriyahajela.in/",
},

  {
    slug: "dr-anupriya-hajela",
    name: "Dr. Anupriya Hajela",
    role: "ENT Specialist",
    degree: "MBBS, MS ENT, DNB ENT",
    experience: "10+ Years",
    image: "/doctors/anupriya.png",
  },

  {
    slug: "dr-saurabh-kumar",
    name: "Dr. Saurabh Kumar",
    role: "Paediatrician",
    degree: "MBBS, MD Paediatrics, Fellowship in Neonatology",
    experience: "10+ Years",
    image: "/doctors/sourabh.jpg",
  },

  {
    slug: "dr-tanmay-shah",
    name: "Dr. Tanmay Shah",
    role: "Orthopedic Doctor",
    degree: "MBBS, MS Orthopaedics, Fellowship in Joint Replacement",
    experience: "10+ Years",
    image: "/doctors/tanmay.png",
  },

  {
    slug: "dr-aneesa-zutshi",
    name: "Dr. Aneesa Zutshi",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "45+ Years",
    image: "/doctors/aneesha.jpg",
  },

  {
    slug: "dr-deepak-zutshi",
    name: "Dr. Deepak Zutshi",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "45+ Years",
    image: "/doctors/deepak.jpg",
  },

  {
    slug: "dr-ss-velury",
    name: "Dr. S S Velury",
    role: "Paediatrician",
    degree: "MBBS, MD Paediatrics",
    experience: "32+ Years",
    image: "/doctors/velury.webp",
  },

  {
    slug: "dr-amit-ganguly",
    name: "Dr. Amit Ganguly",
    role: "ENT Specialist",
    degree: "MBBS, MS ENT",
    experience: "25+ Years",
    image: "/doctors/amit.png",
  },

  {
    slug: "dr-jyoti-valecha",
    name: "Dr. Jyoti Valecha",
    role: "Radiologist",
    degree: "MBBS, MD Radiodiagnosis",
    experience: "23+ Years",
    image: "/doctors/jyoti.webp",
  },

  {
    slug: "dr-dhananjay-mishra",
    name: "Dr. Dhananjay Mishra",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "21+ Years",
    image: "/doctors/dhananjay.png",
  },

  {
    slug: "dr-sameer-zutshi",
    name: "Dr. Sameer Zutshi",
    role: "Anaesthesiologist",
    degree: "MBBS, MD Anaesthesiology",
    experience: "20+ Years",
    image: "/doctors/sameer.webp",
  },

  {
    slug: "dr-pravin-dandekar",
    name: "Dr. Pravin Gulab Dandekar",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "17+ Years",
    image: "/doctors/praveen.png",
  },

  {
    slug: "dr-amit-jain",
    name: "Dr. Amit Jain",
    role: "Urologist",
    degree: "MBBS, MS General Surgery, MCh Urology",
    experience: "14+ Years",
    image: "/doctors/amit-jain.png",
  },

  {
    slug: "dr-juned-hasan",
    name: "Dr. Juned Hasan",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "8+ Years",
    image: "/doctors/juneed.png",
  },

  {
    slug: "dr-surjeet-singh-rajput",
    name: "Dr. Surjeet Singh Rajput",
    role: "Internal Medicine Specialist",
    degree: "MBBS, MD General Medicine",
    experience: "10+ Years",
    image: "/doctors/surjeet.png",
  },

  {
    slug: "dr-sandeep-jain",
    name: "Dr. Sandeep Jain",
    role: "Laparoscopic & Gastrointestinal Surgeon",
    degree: "MBBS, MS General Surgery, MCh Surgical Gastroenterology",
    experience: "10+ Years",
    image: "/doctors/sandeep.png",
  },

];

export default async function DoctorDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const doctor = doctors.find(
    (doc) => doc.slug === slug
  );

  if (!doctor) {

    return (

      <div
        className="
        min-h-screen

        flex
        items-center
        justify-center

        text-3xl
        font-bold

        text-slate-900
        "
      >
        Doctor Not Found
      </div>

    );

  }

  return (

    <main
      className="
      relative

      min-h-screen

      bg-gradient-to-b
      from-white
      via-slate-50
      to-white

      pt-32
      pb-24

      overflow-hidden
      "
    >

      {/* PREMIUM BG GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[900px]
        h-[900px]

        bg-cyan-500/5
        blur-[160px]

        rounded-full
        "
      ></div>

      <div className="container-custom relative z-10">

        {/* BACK BUTTON */}

        <Link
          href="/doctors"
          className="
          inline-flex

          items-center
          gap-2

          text-slate-600
          font-semibold

          hover:text-cyan-600

          transition-all
          duration-300
          "
        >

          <ArrowLeft className="w-5 h-5" />

          Back to Doctors

        </Link>

        {/* MAIN */}

        <div
          className="
          mt-12

          grid
          lg:grid-cols-2

          gap-14
          lg:gap-20

          items-center
          "
        >

          {/* IMAGE */}

          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]

            bg-slate-100

            border
            border-slate-200

            shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            "
          >

            <Image
              src={doctor.image}
              alt={doctor.name}
              width={900}
              height={1100}
              className="
              w-full

              h-[500px]
              lg:h-[720px]

              object-cover
              object-top
              "
            />

          </div>

          {/* CONTENT */}

          <div>

            {/* EXPERIENCE */}

            <div
              className="
              inline-flex

              items-center
              gap-2

              px-5
              py-2.5

              rounded-full

              bg-cyan-50

              border
              border-cyan-100

              text-cyan-700
              font-bold
              "
            >

              <Award className="w-5 h-5" />

              {doctor.experience} Experience

            </div>

            {/* NAME */}

            <h1
              className="
              mt-7

              text-4xl
              md:text-5xl
              lg:text-6xl

              font-black

              text-slate-900

              leading-tight
              "
            >
              {doctor.name}
            </h1>

            {/* ROLE */}

            <p
              className="
              mt-5

              text-2xl

              text-cyan-700

              font-semibold
              "
            >
              {doctor.role}
            </p>

            {/* LINE */}

            <div
              className="
              mt-7

              w-20
              h-[4px]

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              to-blue-700
              "
            ></div>

            {/* QUALIFICATION */}

            <div
              className="
              mt-10

              flex
              items-start
              gap-5
              "
            >

              <div
                className="
                w-14
                h-14

                rounded-2xl

                bg-cyan-50

                flex
                items-center
                justify-center
                "
              >

                <GraduationCap
                  className="
                  w-7
                  h-7

                  text-cyan-700
                  "
                />

              </div>

              <div>

                <h3
                  className="
                  text-xl
                  font-bold

                  text-slate-900
                  "
                >
                  Qualification
                </h3>

                <p
                  className="
                  mt-2

                  text-slate-600

                  leading-relaxed
                  "
                >
                  {doctor.degree}
                </p>

              </div>

            </div>

            {/* SPECIALITY */}

            <div
              className="
              mt-10

              flex
              items-start
              gap-5
              "
            >

              <div
                className="
                w-14
                h-14

                rounded-2xl

                bg-blue-50

                flex
                items-center
                justify-center
                "
              >

                <BriefcaseMedical
                  className="
                  w-7
                  h-7

                  text-blue-700
                  "
                />

              </div>

              <div>

                <h3
                  className="
                  text-xl
                  font-bold

                  text-slate-900
                  "
                >
                  Specialization
                </h3>

                <p
                  className="
                  mt-2

                  text-slate-600

                  leading-relaxed
                  "
                >
                  {doctor.role}
                </p>

              </div>

            </div>

            {/* ABOUT */}

            <p
              className="
              mt-10

              text-slate-600

              leading-relaxed

              text-base
              lg:text-lg
              "
            >
              {doctor.name} is one of the experienced and trusted
              specialists at Hajela Hospital, committed to delivering
              compassionate patient care with modern medical expertise,
              precision and excellence.
            </p>

            {/* BUTTONS */}

            {/* BUTTONS */}

<div
  className="
  mt-12

  flex
  flex-wrap

  gap-4
  "
>

  {/* APPOINTMENT */}

  <Link
    href="/appointment"
    className="
    bg-gradient-to-r
    from-cyan-600
    to-blue-700

    text-white

    px-8
    py-4

    rounded-full

    font-bold

    shadow-[0_10px_40px_rgba(6,182,212,0.25)]

    hover:scale-105

    transition-all
    duration-300
    "
  >
    Book Appointment
  </Link>

  {/* CONTACT */}

  <Link
    href="/contact"
    className="
    border
    border-slate-300

    text-slate-700

    px-8
    py-4

    rounded-full

    font-semibold

    hover:bg-slate-100

    transition-all
    duration-300
    "
  >
    Contact Hospital
  </Link>

  {/* WEBSITE */}

  {doctor.website && (

    <a
      href={doctor.website}
      target="_blank"
      rel="noopener noreferrer"

      className="
      border
      border-cyan-200

      bg-cyan-50

      text-cyan-700

      px-8
      py-4

      rounded-full

      font-bold

      hover:bg-cyan-600
      hover:text-white
      hover:border-cyan-600

      transition-all
      duration-300
      "
    >

      Visit Official Website

    </a>

  )}

</div>

          </div>

        </div>

      </div>

    </main>
  );
}