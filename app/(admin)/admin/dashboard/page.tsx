"use client";

import React, { useEffect, useState } from "react";
import {
  Users,
  BookmarkCheck,
  Inbox,
  Star,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

interface Stats {
  doctors: number;
  appointments: number;
  enquiries: number;
  reviews: number;
}

export default function DashboardHome() {
  const [stats, setStats] = useState<Stats>({
    doctors: 0,
    appointments: 0,
    enquiries: 0,
    reviews: 0,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/admin/stats", {
        cache: "no-store",
      });

      const data = await res.json();

      console.log("Dashboard Stats:", data);

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch statistics");
      }

      setStats(data);
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Unable to load dashboard metrics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const metricCards = [
    {
      title: "Registered Doctors",
      val: stats.doctors,
      icon: <Users className="text-blue-500" />,
    },
    {
      title: "Active Appointments",
      val: stats.appointments,
      icon: <BookmarkCheck className="text-blue-500" />,
    },
    {
      title: "Pending Enquiries",
      val: stats.enquiries,
      icon: <Inbox className="text-blue-500" />,
    },
    {
      title: "Patient Reviews",
      val: stats.reviews,
      icon: <Star className="text-blue-500" />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div>
          <h2 className="text-lg font-semibold tracking-wide text-white">
            Dashboard Overview
          </h2>

          <p className="text-xs text-zinc-400">
            Real-time summary of hospital activities
          </p>
        </div>

        <button
          onClick={fetchMetrics}
          disabled={loading}
          className="px-3 py-1.5 border border-zinc-800 bg-[#11141a] hover:bg-zinc-800/40 text-zinc-300 hover:text-white transition-all text-xs font-medium flex items-center gap-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw
            size={13}
            className={loading ? "animate-spin text-blue-500" : ""}
          />

          {loading ? "Updating..." : "Refresh Data"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-3 rounded-md border border-rose-500/20 bg-rose-500/10 p-3.5 text-rose-400">
          <AlertCircle className="h-4 w-4 shrink-0" />

          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#11141a] border border-zinc-800/80 p-4 rounded-md flex items-center justify-between relative overflow-hidden transition-all hover:border-zinc-700"
          >
            <div className="space-y-0.5">
              <span className="text-xs text-zinc-400 font-medium">
                {card.title}
              </span>

              <p className="text-2xl font-semibold tracking-tight text-white">
                {loading ? "..." : card.val}
              </p>
            </div>

            <div className="p-2 bg-[#090b0f] rounded-md border border-zinc-800/60">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}