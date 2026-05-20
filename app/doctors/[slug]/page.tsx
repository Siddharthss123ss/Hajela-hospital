// app/doctors/[slug]/page.tsx (Ya isko [id]/page.tsx folder me rakhein)

import { doctors } from "@/data/doctors";

import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import { notFound } from "next/navigation";
=======
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

export default async function DoctorPage({

<<<<<<< HEAD
interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  degree: string[];
  experience: number;
  image_url: string;
  website?: string;
}

async function getDoctorData(id: string) {
  try {
    const res = await fetch(`/api/doctors/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    return null;
  }
}

export default async function DoctorDetails({
=======
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
  params,

}: {

  params: Promise<{ slug: string }>;

}) {

  const resolvedParams = await params;
  const doctorId = resolvedParams.slug; 

<<<<<<< HEAD
  const doctor: Doctor | null = await getDoctorData(doctorId);

  if (!doctor) {
    notFound();
=======
  const doctor = doctors.find(
    (item) => item.slug === slug
  );

  if (!doctor) {

    return (

      <div
        className="
        pt-40

        text-center

        text-3xl

        font-bold
        "
      >
        Doctor Not Found
      </div>

    );

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
  }

  return (
    <main
      className="
<<<<<<< HEAD
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
=======
      bg-slate-50

      min-h-screen

      pt-28
      pb-24
      "
    >

      {/* HERO */}

      <section className="container-custom">

        <div
          className="
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
          grid
          lg:grid-cols-2
          gap-14
<<<<<<< HEAD
          lg:gap-20
=======

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
          items-center
          "
        >
          {/* IMAGE */}
          <div
<<<<<<< HEAD
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
              src={doctor.image_url || "/doctors/placeholder.jpg"}
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
              priority // Hero/Main image ke liye optimize karega
            />
          </div>
=======
  className="
  overflow-hidden

  rounded-[40px]

  bg-slate-100
  "
>

  <img
    src={doctor.image}
    alt={doctor.name}

    className="
    w-full

    h-[650px]

    object-cover
    object-top
    "
  />

</div>
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

          {/* CONTENT */}
          <div>
<<<<<<< HEAD
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
=======

            <p
              className="
              text-cyan-600

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
              font-bold

              uppercase

              tracking-[3px]
              "
            >
<<<<<<< HEAD
              <Award className="w-5 h-5" />
              {doctor.experience}+ Years Experience
            </div>

            {/* NAME */}
            <h1
              className="
              mt-7
=======
              Hajela Hospital Specialist
            </p>

            <h1
              className="
              mt-4

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
              text-4xl
              lg:text-6xl
              font-black
              text-slate-900
<<<<<<< HEAD
              leading-tight
=======
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
              "
            >
              {doctor.name}
            </h1>

<<<<<<< HEAD
            {/* ROLE / SPECIALIZATION */}
            <p
              className="
              mt-5
              text-2xl
=======
            <p
              className="
              mt-4

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
              text-cyan-700
              font-semibold

              text-xl
              "
            >
              {doctor.specialization}
            </p>

<<<<<<< HEAD
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
                <GraduationCap className="w-7 h-7 text-cyan-700" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Qualification
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {doctor.degree ? doctor.degree.join(", ") : "N/A"}
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
                <BriefcaseMedical className="w-7 h-7 text-blue-700" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Specialization
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {doctor.specialization}
                </p>
              </div>
            </div>

=======
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
            {/* ABOUT */}
            <p
              className="
<<<<<<< HEAD
              mt-10
=======
              mt-6

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
              text-slate-600
              leading-relaxed
              text-base
              lg:text-lg
              "
            >
              {doctor.about}
            </p>

<<<<<<< HEAD
            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">
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
=======
            {/* DETAILS */}

            <div className="mt-8 space-y-4">

              <div
                className="
                bg-white

                rounded-2xl

                p-5

                shadow-sm
                "
              >

                <span className="font-bold">
                  Qualification:
                </span>{" "}

                {doctor.degree}

              </div>

              <div
                className="
                bg-white

                rounded-2xl

                p-5

                shadow-sm
                "
              >

                <span className="font-bold">
                  Experience:
                </span>{" "}

                {doctor.experience}

              </div>

            </div>

            {/* EXPERTISE */}

            <div className="mt-10">

              <h3
                className="
                text-2xl

                font-black

                text-slate-900
                "
              >
                Areas of Expertise
              </h3>

              <div
                className="
                mt-6

                grid
                sm:grid-cols-2

                gap-4
                "
              >

                {doctor.expertise.map((item, index) => (

                  <div
                    key={index}

                    className="
                    bg-white

                    rounded-2xl

                    px-5
                    py-4

                    shadow-sm

                    border
                    border-slate-100
                    "
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>
>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2

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
<<<<<<< HEAD
      </div>
=======

      </section>

>>>>>>> 557e447de4f10950cc038c3b1b339ac4f5eaebb2
    </main>

  );

}