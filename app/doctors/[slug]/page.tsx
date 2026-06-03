import { notFound } from "next/navigation";
import db_connect from "@/lib/db";
import { doctor } from "@/app/api/models/doctor";
import Image from "next/image";

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

// 🔴 Direct database se fetch (NO API call)
async function getDoctor(slug: string): Promise<Doctor | null> {
  try {
    await db_connect();
    const doc = await doctor.findOne({ slug }).lean();
    return doc as Doctor | null;
  } catch (error) {
    console.error("Failed to fetch doctor:", error);
    return null;
  }
}

// 🔴 Generate static params for Vercel
export async function generateStaticParams() {
  try {
    await db_connect();
    const doctors = await doctor.find({}).lean();
    
    console.log("✅ Generating doctor pages for:", doctors.length);
    
    return doctors.map((doc) => ({
      slug: doc.slug,
    }));
  } catch (error) {
    console.error("GenerateStaticParams error:", error);
    return [];
  }
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = await getDoctor(slug);

  if (!doctor) {
    notFound();
  }

  const getOptimizedImageUrl = (url: string) => {
    if (url?.includes('cloudinary')) {
      return url.replace('/upload/', '/upload/q_auto,f_auto,w_800,c_limit/');
    }
    return url;
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
          <Image
            src={getOptimizedImageUrl(doctor.image_url)}
            alt={doctor.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
            quality={85}
          />
        </div>

        {/* CONTENT SECTION */}
        <div>
          <p className="text-cyan-600 font-bold uppercase tracking-[3px] text-sm">
            Hajela Hospital
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            {doctor.name}
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-cyan-700">
            {doctor.role}
          </p>
          <p className="mt-5 text-slate-600 leading-relaxed">
            {doctor.about}
          </p>

          {/* INFO GRID */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <span className="font-bold text-slate-900">Degree</span>
              <p className="mt-2 text-slate-600">{doctor.degree}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <span className="font-bold text-slate-900">Experience</span>
              <p className="mt-2 text-slate-600">{doctor.experience}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <span className="font-bold text-slate-900">Department</span>
              <p className="mt-2 text-slate-600">{doctor.department}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <span className="font-bold text-slate-900">OPD Timing</span>
              <p className="mt-2 text-slate-600">{doctor.opd_timing}</p>
            </div>
          </div>

          {/* APPOINTMENT CARD */}
          <div className="mt-6 p-5 bg-cyan-50 rounded-2xl border border-cyan-100">
            <span className="font-bold text-cyan-800 text-lg">
              Appointment & Contact
            </span>
            <p className="mt-2 text-slate-700 font-medium">
              {doctor.appointment_number}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${doctor.appointment_number.split("/")[0].replace(/\s+/g, "")}`}
                className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
              >
                📞 Call Now
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl border-2 border-cyan-600 text-cyan-700 font-semibold hover:bg-cyan-50 transition-all"
              >
                📍 Contact Hospital
              </a>
            </div>
          </div>

          {/* EXPERTISE */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {doctor.expertise?.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full font-medium text-sm hover:bg-cyan-100 transition-all"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}