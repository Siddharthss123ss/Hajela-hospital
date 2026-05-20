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
      title: "Registered Specialists",
      val: stats.doctors,
      icon: <Users className="text-blue-400" />,
      border: "border-blue-900/40",
    },
    {
      title: "Active Bookings",
      val: stats.appointments,
      icon: <BookmarkCheck className="text-emerald-400" />,
      border: "border-emerald-900/40",
    },
    {
      title: "Pending Enquiries",
      val: stats.enquiries,
      icon: <Inbox className="text-purple-400" />,
      border: "border-purple-900/40",
    },
    {
      title: "Patient Reviews",
      val: stats.reviews,
      icon: <Star className="text-amber-400" />,
      border: "border-amber-900/40",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
        <div>
          <h2 className="text-xl font-bold tracking-wider text-white uppercase">
            System Overview
          </h2>

          <p className="text-xs text-zinc-500">
            Live operational data from central cluster
          </p>
        </div>

        <button
          onClick={fetchMetrics}
          disabled={loading}
          className="p-2 border border-zinc-800 bg-[#111115] hover:bg-[#16161f] text-zinc-400 hover:text-white transition-all text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw
            size={14}
            className={loading ? "animate-spin text-emerald-400" : ""}
          />

          {loading ? "Syncing..." : "Sync Metrics"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-3 rounded-lg border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
          <AlertCircle className="h-5 w-5 shrink-0" />

          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-[#111115] border ${card.border} p-6 rounded flex items-center justify-between relative overflow-hidden group`}
          >
            <div className="space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest">
                {card.title}
              </span>

              <p className="text-3xl font-bold tracking-tight text-white">
                {loading ? "..." : card.val}
              </p>
            </div>

            <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/60 group-hover:scale-105 transition-transform">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}