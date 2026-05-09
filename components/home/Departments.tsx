import FadeUp from "../ui/FadeUp";

import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Microscope,
} from "lucide-react";

const departments = [
  {
    title: "Cardiology",
    icon: HeartPulse,
    desc: "Advanced heart care with expert cardiologists.",
  },
  {
    title: "Neurology",
    icon: Brain,
    desc: "Specialized neurological treatments and care.",
  },
  {
    title: "Orthopaedics",
    icon: Bone,
    desc: "Bone and joint treatments with modern technology.",
  },
  {
    title: "Pediatrics",
    icon: Baby,
    desc: "Comprehensive healthcare for children.",
  },
  {
    title: "Emergency Care",
    icon: Activity,
    desc: "24/7 emergency medical support available.",
  },
  {
    title: "Diagnostics",
    icon: Microscope,
    desc: "Modern pathology and radiology services.",
  },
];

export default function Departments() {
  return (
    <section className="py-28 bg-white">

  <FadeUp>

    <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-16">

          <p className="text-cyan-600 font-semibold mb-3">
            Our Departments
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Medical Services
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Hajela Hospital offers advanced healthcare services with
            experienced doctors and modern medical facilities.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((dept, index) => (
            <div
              key={index}
              className="
              group
              bg-slate-50
              rounded-[30px]
              p-10
              hover:bg-gradient-to-r
              hover:from-blue-900
              hover:to-cyan-600
              transition-all
              duration-500
              shadow-lg
              hover:-translate-y-3
              cursor-pointer
              "
            >

              <div
                className="
                w-20
                h-20
                rounded-2xl
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
                group-hover:bg-white/20
                transition-all
                "
              >

                <dept.icon
                  size={40}
                  className="
                  text-cyan-600
                  group-hover:text-white
                  "
                />

              </div>

              <h3
                className="
                text-2xl
                font-bold
                mb-4
                text-slate-900
                group-hover:text-white
                "
              >
                {dept.title}
              </h3>

              <p
                className="
                text-slate-600
                leading-relaxed
                group-hover:text-white/80
                "
              >
                {dept.desc}
              </p>

            </div>
          ))}

        </div>

     </div>

</FadeUp>

</section>
  );
}