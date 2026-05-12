import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Free Health Checkup Camp",
    image: "/hospital/about1.webp",
    date: "12 May 2026",
    description:
      "Hajela Hospital organized a free healthcare camp with specialist doctors and advanced diagnostic support.",
  },

  {
    title: "Advanced ICU Facilities Launch",
    image: "/hospital/about2.webp",
    date: "20 April 2026",
    description:
      "Our hospital introduced modern ICU and critical care technology for better patient treatment.",
  },

  {
    title: "Blood Donation Awareness Event",
    image: "/doctors/doc1.jpg",
    date: "5 March 2026",
    description:
      "A successful awareness event encouraging blood donation and community healthcare support.",
  },
];

export default function NewsEventsPage() {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg">
            Hajela Hospital Updates
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
            News & Events
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Stay updated with our latest healthcare events,
            medical activities, awareness programs, and hospital updates.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid lg:grid-cols-3 gap-10">

          {news.map((item, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-[35px]
              overflow-hidden
              shadow-xl
              hover:-translate-y-3
              transition-all
              duration-500
              group
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="
                  w-full
                  h-[260px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <p className="text-cyan-600 font-medium">
                  {item.date}
                </p>

                <h2
                  className="
                  mt-4
                  text-2xl
                  font-bold
                  text-slate-900
                  leading-snug
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                  mt-4
                  text-slate-600
                  leading-relaxed
                  "
                >
                  {item.description}
                </p>

                {/* BUTTON */}

                <Link
                  href="/contact"
                  className="
                  inline-flex
                  mt-6
                  bg-gradient-to-r
                  from-blue-700
                  to-cyan-500
                  text-white
                  px-6
                  py-3
                  rounded-full
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  Read More
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}