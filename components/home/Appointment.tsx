"use client";

import { useState, FormEvent } from "react";

import {

  Calendar,
  ArrowRight,
  Heart,
  Shield,
  Ambulance,
  Star,
  MapPin,

} from "lucide-react";

export default function Appointment() {

  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    department: "",
    date: "",
    message: "",

  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {

      setIsSubmitting(false);

      alert(
        "Appointment booked successfully! We'll contact you soon."
      );

      setFormData({

        name: "",
        phone: "",
        department: "",
        date: "",
        message: "",

      });

    }, 1500);

  };

  const features = [

    {
      icon: Ambulance,
      text: "24/7 Emergency Support",
      color: "text-red-400",
    },

    {
      icon: Shield,
      text: "NABH Accredited",
      color: "text-blue-400",
    },

    {
      icon: Heart,
      text: "Advanced Technology",
      color: "text-pink-400",
    },

  ];

  return (

    <section
      className="
      py-16
      md:py-20
      lg:py-28

      bg-gradient-to-br
      from-slate-50
      via-white
      to-cyan-50/30

      overflow-hidden

      relative
      "
    >

      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-0

        overflow-hidden

        pointer-events-none
        "
      >

        <div
          className="
          absolute
          -top-40
          -right-40

          w-80
          h-80

          bg-cyan-300

          rounded-full

          blur-3xl

          opacity-20
          "
        ></div>

        <div
          className="
          absolute
          -bottom-40
          -left-40

          w-80
          h-80

          bg-blue-400

          rounded-full

          blur-3xl

          opacity-20
          "
        ></div>

      </div>

      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8

        relative
        z-10
        "
      >

        {/* HEADER */}

        <div className="text-center mb-10 md:mb-16">

          <div
            className="
            inline-flex

            items-center

            gap-2

            bg-white/80

            px-4
            py-1.5

            rounded-full

            shadow-sm

            mb-4
            "
          >

            <Calendar
              className="
              w-4
              h-4

              text-cyan-600
              "
            />

            <span
              className="
              text-cyan-600

              font-semibold

              text-xs

              uppercase

              tracking-wider
              "
            >

              Book Appointment

            </span>

          </div>

          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold

            text-slate-800
            "
          >

            Schedule Your{" "}

            <span
              className="
              bg-gradient-to-r
              from-blue-900
              via-cyan-600
              to-cyan-500

              bg-clip-text

              text-transparent
              "
            >

              Visit

            </span>

          </h2>

          <div className="flex justify-center mt-3">

            <div
              className="
              w-20
              h-0.5

              bg-gradient-to-r
              from-cyan-500
              to-blue-900

              rounded-full
              "
            ></div>

          </div>

          <p
            className="
            text-sm
            sm:text-base

            text-slate-500

            mt-4

            max-w-2xl

            mx-auto
            "
          >

            Book your appointment with our expert
            doctors and experience world-class
            healthcare services.

          </p>

        </div>

        {/* MAIN */}

        <div
          className="
          relative

          bg-gradient-to-br
          from-blue-900
          via-indigo-900
          to-cyan-800

          rounded-3xl
          md:rounded-[3rem]

          shadow-2xl

          overflow-hidden
          "
        >

          {/* GLOW */}

          <div className="absolute inset-0 overflow-hidden">

            <div
              className="
              absolute
              top-0
              left-0

              w-[500px]
              h-[500px]

              bg-cyan-400

              rounded-full

              blur-[100px]

              opacity-10
              "
            ></div>

            <div
              className="
              absolute
              bottom-0
              right-0

              w-[500px]
              h-[500px]

              bg-blue-400

              rounded-full

              blur-[100px]

              opacity-10
              "
            ></div>

          </div>

          <div
            className="
            relative
            z-10

            grid
            lg:grid-cols-2
            "
          >

            {/* LEFT */}

            <div
              className="
              p-8
              md:p-10
              lg:p-12
              xl:p-14
              "
            >

              <div
                className="
                inline-flex

                items-center

                gap-2

                bg-white/10

                px-3
                py-1.5

                rounded-full

                mb-6
                "
              >

                <Star
                  className="
                  w-3.5
                  h-3.5

                  text-yellow-400

                  fill-yellow-400
                  "
                />

                <span
                  className="
                  text-white/90

                  text-xs

                  font-medium
                  "
                >

                  4.9/5 Patient Rating

                </span>

              </div>

              <h3
                className="
                text-3xl
                md:text-4xl
                lg:text-5xl

                font-bold

                text-white

                leading-tight
                "
              >

                Schedule Your Visit

                <span
                  className="
                  block

                  text-cyan-300

                  text-2xl
                  md:text-3xl

                  mt-2
                  "
                >

                  With Our Specialists

                </span>

              </h3>

              <p
                className="
                mt-4
                md:mt-6

                text-sm
                md:text-base

                text-slate-200

                leading-relaxed
                "
              >

                Hajela Hospital offers advanced
                healthcare services with experienced
                doctors and modern medical facilities.

              </p>

              {/* FEATURES */}

              <div
                className="
                mt-8
                md:mt-10

                space-y-3
                md:space-y-4
                "
              >

                {features.map((item, index) => (

                  <div
                    key={index}

                    className="
                    flex
                    items-center

                    gap-3
                    "
                  >

                    <div
                      className="
                      w-8
                      h-8

                      rounded-full

                      bg-white/10

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <item.icon
                        className={`
                        w-4
                        h-4
                        ${item.color}
                        `}
                      />

                    </div>

                    <p
                      className="
                      text-white

                      text-sm
                      md:text-base
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

              {/* REAL GOOGLE MAP */}

              <a
                href="https://maps.app.goo.gl/etzn6RHkcs1iNGPt7"

                target="_blank"

                rel="noopener noreferrer"

                className="
                block

                mt-10

                group
                "
              >

                <div
                  className="
                  relative

                  overflow-hidden

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/10

                  backdrop-blur-xl
                  "
                >

                  <iframe
                    src="https://maps.google.com/maps?q=Hajela%20Hospital%20Bhopal&t=&z=16&ie=UTF8&iwloc=&output=embed"

                    width="100%"

                    height="260"

                    loading="lazy"

                    className="
                    w-full

                    h-[260px]

                    border-0

                    transition-all
                    duration-500
                    "
                  ></iframe>

                  {/* OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent

                    pointer-events-none
                    "
                  ></div>

                  {/* CONTENT */}

                  <div
                    className="
                    absolute
                    bottom-5
                    left-5
                    right-5

                    flex
                    items-center
                    justify-between

                    pointer-events-none
                    "
                  >

                    <div>

                      <p
                        className="
                        text-white

                        font-bold

                        text-lg
                        "
                      >
                        Hajela Hospital
                      </p>

                      <p
                        className="
                        text-white/80

                        text-sm
                        "
                      >
                        Bhopal, Madhya Pradesh
                      </p>

                    </div>

                    <div
                      className="
                      w-12
                      h-12

                      rounded-full

                      bg-cyan-500

                      flex
                      items-center
                      justify-center

                      shadow-lg
                      "
                    >

                      <MapPin
                        className="
                        w-6
                        h-6

                        text-white
                        "
                      />

                    </div>

                  </div>

                </div>

              </a>

            </div>

            {/* RIGHT FORM */}

            <div
              className="
              bg-white/10

              backdrop-blur-xl

              border-l
              border-white/20

              p-6
              md:p-8
              lg:p-10
              "
            >

              <div
                className="
                flex
                items-center

                gap-3

                mb-6
                "
              >

                <div
                  className="
                  w-1
                  h-8

                  bg-gradient-to-b
                  from-cyan-400
                  to-blue-500

                  rounded-full
                  "
                ></div>

                <h4
                  className="
                  text-xl
                  md:text-2xl

                  font-bold

                  text-white
                  "
                >

                  Make An Appointment

                </h4>

              </div>

              <form
                onSubmit={handleSubmit}

                className="
                space-y-4
                md:space-y-5
                "
              >

                <input
                  type="text"

                  value={formData.name}

                  onChange={(e) =>
                    setFormData({

                      ...formData,

                      name: e.target.value,

                    })
                  }

                  placeholder="Enter your full name"

                  required

                  className="
                  w-full

                  px-4
                  py-3.5

                  rounded-xl

                  bg-white/10

                  border
                  border-white/20

                  text-white

                  placeholder:text-white/40

                  outline-none

                  focus:border-cyan-400
                  "
                />

                <input
                  type="tel"

                  value={formData.phone}

                  onChange={(e) =>
                    setFormData({

                      ...formData,

                      phone: e.target.value,

                    })
                  }

                  placeholder="+91 98765 43210"

                  required

                  className="
                  w-full

                  px-4
                  py-3.5

                  rounded-xl

                  bg-white/10

                  border
                  border-white/20

                  text-white

                  placeholder:text-white/40

                  outline-none

                  focus:border-cyan-400
                  "
                />

                <select
                  value={formData.department}

                  onChange={(e) =>
                    setFormData({

                      ...formData,

                      department:
                        e.target.value,

                    })
                  }

                  required

                  className="
                  w-full

                  px-4
                  py-3.5

                  rounded-xl

                  bg-white/10

                  border
                  border-white/20

                  text-white

                  outline-none

                  focus:border-cyan-400
                  "
                >

                  <option
                    value=""

                    className="text-slate-800"
                  >
                    Select Department
                  </option>

                  <option className="text-slate-800">
                    ENT & Voice Disorders
                  </option>

                  <option className="text-slate-800">
                    Cochlear Implant Centre
                  </option>

                  <option className="text-slate-800">
                    Orthopaedics & Joint Replacement
                  </option>

                  <option className="text-slate-800">
                    IVF & Infertility Centre
                  </option>

                  <option className="text-slate-800">
                    Pediatrics & NICU
                  </option>

                  <option className="text-slate-800">
                    Emergency & Trauma Care
                  </option>

                  <option className="text-slate-800">
                    Radiology & Imaging
                  </option>

                  <option className="text-slate-800">
                    Sonology & Imaging Services
                  </option>

                  <option className="text-slate-800">
                    Pathology
                  </option>

                  <option className="text-slate-800">
                    General Medicine
                  </option>

                  <option className="text-slate-800">
                    ICCU & Critical Care
                  </option>

                  <option className="text-slate-800">
                    Maternity & Women Care
                  </option>

                  <option className="text-slate-800">
                    Hospital & Ambulance Services
                  </option>

                </select>

                <input
                  type="date"

                  value={formData.date}

                  onChange={(e) =>
                    setFormData({

                      ...formData,

                      date: e.target.value,

                    })
                  }

                  required

                  className="
                  w-full

                  px-4
                  py-3.5

                  rounded-xl

                  bg-white/10

                  border
                  border-white/20

                  text-white

                  outline-none

                  focus:border-cyan-400
                  "
                />

                <textarea
                  value={formData.message}

                  onChange={(e) =>
                    setFormData({

                      ...formData,

                      message:
                        e.target.value,

                    })
                  }

                  placeholder="Describe your symptoms..."

                  rows={4}

                  className="
                  w-full

                  px-4
                  py-3

                  rounded-xl

                  bg-white/10

                  border
                  border-white/20

                  text-white

                  placeholder:text-white/40

                  outline-none

                  focus:border-cyan-400

                  resize-none
                  "
                />

                <button
                  type="submit"

                  disabled={isSubmitting}

                  className="
                  group

                  relative

                  w-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  text-white

                  font-semibold

                  py-3.5

                  rounded-xl

                  hover:shadow-xl

                  transition-all
                  duration-300
                  "
                >

                  <span
                    className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-center

                    gap-2
                    "
                  >

                    {isSubmitting ? (

                      <>Processing...</>

                    ) : (

                      <>

                        Book Appointment

                        <ArrowRight
                          className="
                          w-4
                          h-4

                          group-hover:translate-x-1

                          transition-transform
                          "
                        />

                      </>

                    )}

                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}