"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface VideoItem {
  _id: string;
  title: string;
  image_url: string;
  category: string;
}

export default function GalleryVideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // Apne actual API route se isko replace kar lena
        const response = await fetch("/api/gallery?category=videos");

        if (!response.ok) {
          throw new Error("something went wrong");
        }

        const data = await response.json();
        setVideos(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom">
        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-cyan-600 font-semibold text-lg">
            Hajela Hospital Media
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
            Video Gallery
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our hospital facilities, healthcare services, advanced
            treatment technology, and patient care videos.
          </p>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" />
            <p className="text-slate-500 text-sm font-medium">Loading gallery videos...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="text-center py-20 text-red-500 font-medium">
            {error}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && videos.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium">
            no data available
          </div>
        )}

        {/* VIDEO GRID */}
        {!loading && !error && videos.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-10">
            {videos.map((item) => (
              <div
                key={item._id}
                className="
                bg-slate-950
                rounded-[35px]
                overflow-hidden
                shadow-2xl
                "
              >
                {/* VIDEO */}
                <video
                  controls
                  className="
                  w-full
                  h-[300px]
                  object-cover
                  "
                >
                  <source
                    src={item.image_url}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* CONTENT */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white">
                    {item.title} {/* Dynamic Title */}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}