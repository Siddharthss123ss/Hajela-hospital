"use client";
import React, { useEffect, useState } from 'react';
import { Users, BookmarkCheck, Inbox, Star, RefreshCw, AlertCircle } from 'lucide-react';

interface Stats { 
  doctors: number; 
  appointments: number; 
  enquiries: number; 
  reviews: number; 
}

export default function DashboardHome() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/stats');
      if (!res.ok) throw new Error("Failed to clear data pipeline");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      setError("Failed to synchronize cluster metrics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchMetrics(); 
  }, []);

  const metricCards = [
    { title: 'Registered Specialists', val: stats?.doctors ?? 0, icon: <Users className="text-blue-400" />, border: 'border-blue-900/40' },
    { title: 'Active Bookings', val: stats?.appointments ?? 0, icon: <BookmarkCheck className="text-emerald-400" />, border: 'border-emerald-900/40' },
    { title: 'Pending Enquiries', val: stats?.enquiries ?? 0, icon: <Inbox className="text-purple-400" />, border: 'border-purple-900/40' },
    { title: 'Patient Reviews', val: stats?.reviews ?? 0, icon: <Star className="text-amber-400" />, border: 'border-amber-900/40' },
  ];

  return (
    <div className="space-y-8">
      {/* Top Controls Action Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
        <div>
          <h2 className="text-xl font-bold tracking-wider text-white uppercase">System Overview</h2>
          <p className="text-xs text-zinc-500">Live operational data from central cluster</p>
        </div>
        <button 
          onClick={fetchMetrics} 
          disabled={loading}
          className="p-2 border border-zinc-800 bg-[#111115] hover:bg-[#16161f] text-zinc-400 hover:text-white transition-all text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin text-emerald-400' : ''} /> 
          {loading ? 'Syncing...' : 'Sync Metrics'}
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-3 rounded-lg border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Grid Status Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((card, idx) => (
          <div key={idx} className={`bg-[#111115] border ${card.border} p-6 rounded flex items-center justify-between relative overflow-hidden group`}>
            <div className="space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest">{card.title}</span>
              <p className="text-3xl font-bold tracking-tight text-white">
                {loading && !stats ? '...' : card.val}
              </p>
            </div>
            <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/60 group-hover:scale-105 transition-transform">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Console System Log Terminal */}
      <div className="bg-[#0b0b0d] border border-zinc-800 rounded p-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 text-xs uppercase tracking-widest text-zinc-500">
          <span>System Console Logs</span>
          <span className="text-emerald-500 animate-pulse flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span> 
            System Operational
          </span>
        </div>
        <div className="space-y-1.5 text-[11px] text-zinc-400 font-mono">
          <p><span className="text-zinc-600">[21:40:11]</span> <span className="text-blue-400">INFO</span> Connection verified with MongoDB Server cluster.</p>
          <p><span className="text-zinc-600">[21:42:05]</span> <span className="text-purple-400">AUTH</span> Session handshake processed via NextAuth.</p>
          <p><span className="text-zinc-600">[21:55:00]</span> <span className="text-emerald-400">SYNC</span> Metric tables cached safely with 0 validation conflicts.</p>
        </div>
      </div>
    </div>
  );
}