import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  "24/7 Emergency Support",
  "Experienced Specialist Doctors",
  "Modern ICU & Operation Theatres",
  "Advanced Diagnostic Facilities",
];

export default function About() {
  return (
    <section className="py-32 bg-white">

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGES */}

        <div className="relative">

          {/* IMAGE 1 */}

          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/hospital/about1.webp"
              alt="Hospital"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* IMAGE 2 */}

          <div className="absolute -bottom-10 -right-10 rounded-[30px] overflow-hidden border-[10px] border-white shadow-2xl">
            <Image
              src="/hospital/about2.webp"
              alt="Doctors"
              width={300}
              height={250}
              className="w-[250px] h-[220px] object-cover"
            />
          </div>

          {/* EXPERIENCE CARD */}

          <div className="absolute top-10 -left-10 bg-gradient-to-r from-blue-900 to-cyan-500 text-white p-8 rounded-[30px] shadow-2xl">

            <h3 className="text-5xl font-bold">
              25+
            </h3>

            <p className="mt-2 text-lg">
              Years Of Excellence
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-cyan-600 font-semibold mb-4 text-lg">
            About Hajela Hospital
          </p>

          <h2 className="text-5xl font-bold leading-tight text-slate-900">
            Delivering Exceptional
            Healthcare Services
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            Hajela Hospital is committed to providing advanced medical care
            with cutting-edge technology, experienced specialists, and
            compassionate patient support.
          </p>

          {/* FEATURES */}

          <div className="mt-10 space-y-5">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >

                <CheckCircle className="text-cyan-600 w-7 h-7" />

                <p className="text-lg text-slate-700">
                  {item}
                </p>

              </div>
            ))}

          </div>

          {/* BUTTON */}

          <button className="mt-12 bg-gradient-to-r from-blue-900 to-cyan-500 text-white px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
            Discover More
          </button>

        </div>

      </div>

    </section>
  );
}