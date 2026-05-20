"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2, ImageOff, Calendar } from "lucide-react";

// Mongoose document interface ke mutabik type definition
interface GalleryItem {
  _id: string;
  title: string;
  category: "event" | "news" | "videos";
  image_url: string;
  image_id: string;
  createdAt: string;
}

export default function GalleryPhotosPage() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEventImages = async () => {
      try {
        setLoading(true);
        // API call me ?category=event filter lagaya hai taaki sirf events ka data aaye
        const response = await fetch("/api/gallery?category=event", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch event images from server.");
        }

        const data = await response.json();
        setImages(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong while loading the gallery.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventImages();
  }, []);

  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container-custom px-4 max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-cyan-600 font-semibold text-lg tracking-wider uppercase">
            Hajela Hospital Gallery
          </p>
          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
            Event Images
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our hospital facilities, healthcare events, patient care activities, and medical excellence.
          </p>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-cyan-600" />
            <p className="text-slate-500 font-medium animate-pulse">Loading amazing event memories...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-3xl max-w-xl mx-auto text-center shadow-sm">
            <p className="font-semibold">Oops! Could not load images</p>
            <p className="text-sm mt-1 text-red-600/90">{error}</p>
          </div>
        )}

        {/* EMPTY STATE */}
        {images.length === 0 && !loading && !error && (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 max-w-lg mx-auto">
            <div className="bg-slate-100 p-4 rounded-2xl mb-4">
              <ImageOff className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">No Event Images Found</h3>
            <p className="text-slate-500 text-sm mt-2 max-w-xs">
              We haven't uploaded any photos under the "event" category yet. Please check back later!
            </p>
          </div>
        )}

        {/* GALLERY GRID (UI UPGRADED) */}
        {!loading && !error && images.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((item) => (
              <div
                key={item._id}
                className="group relative overflow-hidden rounded-[35px] shadow-xl bg-white aspect-[4/3] border border-slate-100/60"
              >
                {/* Image Container */}
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src={item.image_url}
                    alt={item.title || "Hospital Event"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Dynamic Glassmorphism Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <h3 className="text-xl font-bold text-white line-clamp-2 drop-shadow-sm">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-300 text-xs mt-3 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {new Date(item.createdAt).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}