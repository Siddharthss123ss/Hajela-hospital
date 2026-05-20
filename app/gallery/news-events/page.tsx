"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  ArrowRight,
  Award,
  Trophy,
  Newspaper,
  Loader2
} from "lucide-react";

// Types definition backend data ke hisab se
interface NewsItem {
  _id: string; // ya id
  title: string;
  image_url: string;
  date: string;
  description: string;
  iconType?: "Trophy" | "Award" | "Newspaper";
}

// Icon mapper helper function
const getIcon = (type?: string) => {
  switch (type) {
    case "Award":
      return Award;
    case "Newspaper":
      return Newspaper;
    case "Trophy":
    default:
      return Trophy; // Default icon agar backend se na mile
  }
};

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Apne actual backend endpoint se URL replace kar lena
        // Agar query param lagana hai toh: /api/events?category=news
        const response = await fetch("/api/gallery?category=news"); 
        
        if (!response.ok) {
          throw new Error("Failed to fetch news updates");
        }
        
        const data = await response.json();
        setNewsData(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/40
      min-h-screen
      pt-32
      pb-24
      "
    >
      {/* PREMIUM BACKGROUND */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-cyan-400/10
        blur-[160px]
        "
      ></div>

      <div className="container-custom relative z-10">
        {/* HEADING */}
        <div className="text-center mb-20">
          <p
            className="
            text-cyan-600
            uppercase
            tracking-[4px]
            font-bold
            text-sm
            mb-4
            "
          >
            Hajela Hospital Updates
          </p>

          <h1
            className="
            text-4xl
            lg:text-6xl
            font-black
            text-slate-900
            leading-tight
            "
          >
            News
          </h1>

          <p
            className="
            mt-6
            text-slate-600
            text-sm
            sm:text-lg
            leading-relaxed
            max-w-3xl
            mx-auto
            "
          >
            Explore Hajela Hospital’s latest recognitions, healthcare achievements, awards, medical
            excellence stories, and national healthcare rankings.
          </p>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" />
            <p className="text-slate-500 text-sm font-medium">Loading latest news...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="text-center py-20 text-red-500 font-medium">
            {error}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && newsData.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium">
            No news updates available at the moment.
          </div>
        )}

        {/* NEWS GRID */}
        {!loading && !error && newsData.length > 0 && (
          <div
            className="
            grid
            md:grid-cols-2
            gap-10
            "
          >
            {newsData.map((item) => {
              // Dynamic icon type backend se pick karne ke liye
              const Icon = getIcon(item.iconType);

              return (
                <div
                  key={item._id}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[38px]
                  border
                  border-white/20
                  bg-white/70
                  backdrop-blur-2xl
                  shadow-[0_15px_60px_rgba(15,23,42,0.08)]
                  hover:-translate-y-4
                  hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]
                  transition-all
                  duration-700
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      width={900}
                      height={700}
                      className="
                      w-full
                      h-[260px]
                      sm:h-[320px]
                      lg:h-[360px]
                      object-cover
                      group-hover:scale-105
                      transition-all
                      duration-700
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                      "
                    ></div>

                    {/* DATE */}
                    <div
                      className="
                      absolute
                      top-6
                      left-6
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      px-4
                      py-2
                      text-white
                      "
                    >
                      <CalendarDays size={16} />
                      <span className="text-sm font-medium">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    {/* ICON */}
                    <div
                      className="
                      w-16
                      h-16
                      rounded-[20px]
                      bg-gradient-to-br
                      from-cyan-500
                      to-blue-700
                      flex
                      items-center
                      justify-center
                      shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                      -mt-16
                      relative
                      z-20
                      border-4
                      border-white
                      "
                    >
                      <Icon
                        size={28}
                        className="text-white"
                      />
                    </div>

                    {/* TITLE */}
                    <h2
                      className="
                      mt-6
                      text-2xl
                      lg:text-3xl
                      font-black
                      text-slate-900
                      leading-snug
                      "
                    >
                      {item.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p
                      className="
                      mt-5
                      text-slate-600
                      leading-relaxed
                      text-sm
                      sm:text-base
                      "
                    >
                      {item.description}
                    </p>

                    {/* BUTTON */}
                    <button
                      className="
                      group/btn
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-gradient-to-r
                      from-blue-900
                      via-blue-700
                      to-cyan-500
                      px-7
                      py-3
                      text-white
                      font-semibold
                      shadow-[0_10px_40px_rgba(6,182,212,0.25)]
                      hover:scale-105
                      transition-all
                      duration-300
                      "
                    >
                      Read More
                      <ArrowRight
                        size={18}
                        className="
                        transition-all
                        duration-300
                        group-hover/btn:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}