"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Service {
  _id: string;
  name: string;
  slug: string;
  image_url: string;
  description: string;
  facilities: string[];
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/services");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>
          <p className="mt-2 text-slate-500">Unable to load services. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-600 uppercase tracking-[4px] font-bold text-sm mb-4">
            Hospital Services
          </p>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900">
            Patient Care
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {" "}Facilities
            </span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-[34px] bg-white border border-slate-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image_url?.replace("/upload/", "/upload/f_auto,q_auto,w_800/") || "/placeholder.jpg"}
                  alt={service.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.name}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed line-clamp-4">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 px-5 py-3 text-white font-semibold">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}