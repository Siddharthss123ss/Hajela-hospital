"use client";

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

        <div>

          <img
            src={doctor.image_url}
            alt={doctor.name}

            className="
            w-full
            rounded-3xl
            object-cover
            shadow-2xl
            "
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

            <div>

              <span className="font-bold">
                Degree:
              </span>

              {" "}

              {doctor.degree}

            </div>

            <div>

              <span className="font-bold">
                Experience:
              </span>

              {" "}

              {doctor.experience}

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