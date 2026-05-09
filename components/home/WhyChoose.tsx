import {
  Ambulance,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

const features = [
  {
    icon: Ambulance,
    title: "24/7 Emergency",
    desc: "Immediate emergency care with advanced ambulance support.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Treatment",
    desc: "Providing safe and trusted healthcare services for patients.",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Experienced specialists across multiple medical departments.",
  },
  {
    icon: HeartPulse,
    title: "Advanced Technology",
    desc: "Modern healthcare infrastructure with latest equipment.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-32 bg-white">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold mb-4 text-lg">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Exceptional Healthcare
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Hajela Hospital combines advanced medical technology with
            compassionate patient care for the best treatment experience.
          </p>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
              bg-slate-50
              rounded-[35px]
              p-10
              text-center
              shadow-lg
              hover:-translate-y-4
              hover:bg-gradient-to-r
              hover:from-blue-900
              hover:to-cyan-600
              transition-all
              duration-500
              group
              "
            >

              {/* ICON */}

              <div
                className="
                w-24
                h-24
                mx-auto
                rounded-full
                bg-cyan-100
                flex
                items-center
                justify-center
                mb-8
                group-hover:bg-white/20
                transition-all
                "
              >

                <item.icon
                  size={45}
                  className="
                  text-cyan-600
                  group-hover:text-white
                  "
                />

              </div>

              {/* TITLE */}

              <h3
                className="
                text-2xl
                font-bold
                text-slate-900
                group-hover:text-white
                "
              >
                {item.title}
              </h3>

              {/* DESC */}

              <p
                className="
                mt-5
                text-slate-600
                leading-relaxed
                group-hover:text-white/80
                "
              >
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}