"use client";

import {
  useState,
  useEffect,
  FormEvent
} from "react";

import {
  Calendar,
  ArrowRight,
  Heart,
  Shield,
  Ambulance,
  Star,
} from "lucide-react";

interface Department {

  _id: string;

  name: string;

}

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

  const [departments, setDepartments] =
    useState<Department[]>([]);

  useEffect(() => {

    const fetchDepartments =
      async () => {

        try {

          const res =
            await fetch(
              "/api/departments"
            );

          const data =
            await res.json();

          setDepartments(data);

        } catch (error) {

          console.log(error);

        }

      };

    fetchDepartments();

  }, []);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setIsSubmitting(true);

      const response =
        await fetch(
          "/api/appointments",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              patient_name:
                formData.name,

              patient_phone:
                formData.phone,

              patient_email:
                "demo@gmail.com",

              doctor_id:
                "6a0c9c72ea047527e5f85f17",

              dept_id:
                "6a0c9e6cea047527e5f85f24",

              appointment_date:
                formData.date,

              time_slot:
                "04:00 PM - 06:00 PM",

              reason:
                formData.message,

              status:
                "pending",

            }),

          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        throw new Error(
          data.error ||
          "Booking failed"
        );

      }

      alert(
        "Appointment booked successfully!"
      );

      setFormData({

        name: "",
        phone: "",
        department: "",
        date: "",
        message: "",

      });

    } catch (error) {

      console.log(error);

      alert(
        "Failed to book appointment"
      );

    } finally {

      setIsSubmitting(false);

    }

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
      id="appointment"

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

        </div>

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

          <div
            className="
            relative
            z-10
            grid
            lg:grid-cols-2
            "
          >

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

            </div>

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
                      department: e.target.value,
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
                    className="
                    text-slate-800
                    "
                  >

                    Select Department

                  </option>

                  {
                    departments.map(
                      (dept) => (

                        <option
                          key={dept._id}

                          value={dept.name}

                          className="
                          text-slate-800
                          "
                        >

                          {dept.name}

                        </option>

                      )
                    )
                  }

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
                      message: e.target.value,
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