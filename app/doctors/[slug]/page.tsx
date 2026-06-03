"use client";
import Image from "next/image";
import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "next/navigation";

interface Doctor {

  slug: string;

  name: string;

  role: string;

  degree: string;

  experience: string;

  department: string;

  opd_timing: string;

  appointment_number: string;

  about: string;

  image_url: string;

  expertise: string[];

}

export default function DoctorDetailPage() {

  const params =
    useParams();

  const slug =
    params.slug as string;

  const [doctor, setDoctor] =
    useState<Doctor | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchDoctor =
      async () => {

        try {

          const res =
            await fetch(
              `/api/doctors/${slug}`
            );

          const data =
            await res.json();

          setDoctor(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    if (slug) {

      fetchDoctor();

    }

  }, [slug]);

  if (loading) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        text-3xl
        font-bold
        "
      >

        Loading...

      </div>

    );

  }

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
        text-red-500
        "
      >

        Doctor Not Found

      </div>

    );

  }

  return (

    <main
      className="
      min-h-screen
      bg-white
      pt-32
      pb-20
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        grid
        lg:grid-cols-2
        gap-14
        items-center
        "
      >

       <div
  className="
  relative
  w-full
  h-[600px]
  rounded-3xl
  overflow-hidden
  shadow-2xl
  "
>
  <Image
    src={doctor.image_url.replace(
      "/upload/",
      "/upload/f_auto,q_auto,w_600/"
    )}
    alt={doctor.name}
    fill
    sizes="(max-width:768px) 100vw, 50vw"
    className="object-cover"
  />
</div>

        <div>

          <p
            className="
            text-cyan-600
            font-bold
            uppercase
            tracking-[3px]
            "
          >

            Hajela Hospital

          </p>

          <h1
            className="
            mt-4
            text-5xl
            font-black
            text-slate-900
            "
          >

            {doctor.name}

          </h1>

          <p
            className="
            mt-4
            text-2xl
            font-semibold
            text-cyan-700
            "
          >

            {doctor.role}

          </p>

          <p
            className="
            mt-5
            text-slate-600
            leading-relaxed
            "
          >

            {doctor.about}

          </p>

          <div
            className="
            mt-8
            space-y-4
            "
          >

            <div
  className="
  mt-8
  grid
  md:grid-cols-2
  gap-5
  "
>

  <div
    className="
    bg-slate-50
    p-4
    rounded-2xl
    "
  >

    <span className="font-bold text-slate-900">
      Degree
    </span>

    <p className="mt-2 text-slate-600">
      {doctor.degree}
    </p>

  </div>

  <div
    className="
    bg-slate-50
    p-4
    rounded-2xl
    "
  >

    <span className="font-bold text-slate-900">
      Experience
    </span>

    <p className="mt-2 text-slate-600">
      {doctor.experience}
    </p>

  </div>

  <div
    className="
    bg-slate-50
    p-4
    rounded-2xl
    "
  >

    <span className="font-bold text-slate-900">
      Department
    </span>

    <p className="mt-2 text-slate-600">
      {doctor.department}
    </p>

  </div>

  <div
    className="
    bg-slate-50
    p-4
    rounded-2xl
    "
  >

    <span className="font-bold text-slate-900">
      OPD Timing
    </span>

    <p className="mt-2 text-slate-600">
      {doctor.opd_timing}
    </p>

  </div>

</div>

<div
  className="
  mt-5
  p-5
  bg-cyan-50
  rounded-2xl
  border
  border-cyan-100
  "
>

  <span
    className="
    font-bold
    text-cyan-800
    text-lg
    "
  >
    Appointment & Contact
  </span>

  <p
    className="
    mt-2
    text-slate-600
    "
  >
    {doctor.appointment_number}
  </p>

  <div
    className="
    mt-4
    flex
    flex-wrap
    gap-3
    "
  >

    <a
      href={`tel:${doctor.appointment_number.split("/")[0].replace(/\s+/g, "")}`}
      className="
      px-6
      py-3

      rounded-xl

      bg-green-600
      text-white

      font-semibold

      hover:bg-green-700

      transition-all
      "
    >
      📞 Call Now
    </a>

    <a
      href="/contact"
      className="
      px-6
      py-3

      rounded-xl

      border-2
      border-cyan-600

      text-cyan-700

      font-semibold

      hover:bg-cyan-50

      transition-all
      "
    >
      📍 Contact Hospital
    </a>

  </div>

</div>

          </div>

          <div className="mt-10">

            <h3
              className="
              text-2xl
              font-bold
              text-slate-900
              mb-4
              "
            >

              Expertise

            </h3>

            <div
              className="
              flex
              flex-wrap
              gap-3
              "
            >

              {doctor.expertise?.map(
                (item, index) => (

                  <div
                    key={index}

                    className="
                    px-4
                    py-2
                    bg-cyan-50
                    text-cyan-700
                    rounded-full
                    font-medium
                    "
                  >

                    {item}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}