import { notFound } from "next/navigation";
import db_connect from "@/lib/db";
import { service } from "@/app/api/models/service";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";

interface Service {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  image_id: string;
  shortDescription?: string;
  features?: string[];
  contact_number?: string;
}

// 🔴 Direct database se fetch (NO API call)
async function getService(slug: string): Promise<Service | null> {
  try {
    await db_connect();
    const serv = await service.findOne({ slug }).lean();
    return serv as Service | null;
  } catch (error) {
    console.error("Failed to fetch service:", error);
    return null;
  }
}

// 🔴 Generate static params for Vercel
export async function generateStaticParams() {
  try {
    await db_connect();
    const services = await service.find({}).lean();
    
    console.log("✅ Generating service pages for:", services.length);
    
    return services.map((serv) => ({
      slug: serv.slug,
    }));
  } catch (error) {
    console.error("GenerateStaticParams error:", error);
    return [];
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serv = await getService(slug);

  if (!serv) {
    notFound();
  }

  const getOptimizedImageUrl = (url: string) => {
    if (url?.includes('cloudinary')) {
      return url.replace('/upload/', '/upload/q_auto,f_auto,w_1400,c_limit/');
    }
    return url;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero Image */}
        <div className="relative w-full h-[340px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
          <Image
            src={getOptimizedImageUrl(serv.image_url)}
            alt={serv.name}
            fill
            priority
            className="object-cover object-center transition-all duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl">
              {serv.name}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 mt-14">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-4">About this Service</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{serv.description}</p>
            </div>

            {/* Features */}
            {serv.features && serv.features.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 mt-8">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {serv.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                      <CheckCircle2 className="text-cyan-600 mt-0.5 flex-shrink-0" size={20} />
                      <p className="text-slate-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 sticky top-28">
              <p className="text-xs uppercase tracking-[4px] text-cyan-600 font-bold">Contact</p>
              
              {serv.contact_number && (
                <>
                  <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <Phone className="text-cyan-600" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Contact Number</p>
                        <p className="text-xl font-black text-slate-900 mt-1">+91 {serv.contact_number}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:+91${serv.contact_number}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Phone size={18} />
                    Call for Appointment
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}