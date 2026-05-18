"use client";

import React, { useEffect, useState } from 'react';
import { FiCheck, FiX, FiMessageSquare, FiStar, FiAlertCircle, FiUser } from 'react-icons/fi';

interface IDoctorField {
  _id: string;
  name: string;
}

interface IReviewData {
  _id: string;
  patient_name: string;
  rating: number;
  comment: string;
  doctor_id?: IDoctorField | string | null;
  is_approved: boolean;
  createdAt: string;
}

export default function ReviewManagement() {
  const [reviews, setReviews] = useState<IReviewData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      const res = await fetch('/api/reviews');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setReviews(data);
    } catch {
      setError("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  }

  const handleStatusUpdate = async (id: string, approveStatus: boolean) => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_approved: approveStatus })
      });

      if (!res.ok) throw new Error();

      setReviews(prev =>
        prev.map(rev => (rev._id === id ? { ...rev, is_approved: approveStatus } : rev))
      );
    } catch {
      setError("Failed to update status");
    }
  };

  const filteredReviews = reviews.filter(rev => {
    if (filter === 'pending') return !rev.is_approved;
    if (filter === 'approved') return rev.is_approved;
    return true;
  });

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100 sm:p-8">
      <div className="mx-auto max-w-7xl">

        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
            <FiAlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Patient Reviews</h1>
            <p className="mt-1 text-sm text-zinc-400">Moderate and approve patient feedback</p>
          </div>

          <div className="flex rounded-lg border border-zinc-800 bg-zinc-900 p-1">
            {(['all', 'pending', 'approved'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === type
                    ? 'bg-emerald-600 text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {filteredReviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
            <FiMessageSquare className="mx-auto h-12 w-12 text-zinc-600" />
            <h3 className="mt-4 text-sm font-semibold text-zinc-200">No reviews found</h3>
            <p className="mt-1 text-sm text-zinc-500">No items match the chosen filter configuration.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((rev) => (
              <div
                key={rev._id}
                className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                        <FiUser className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm line-clamp-1">{rev.patient_name}</h3>
                        <span className="text-[10px] text-zinc-500">
                          {new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>

                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      rev.is_approved
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {rev.is_approved ? 'Approved' : 'Pending'}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FiStar
                        key={index}
                        className={`h-3.5 w-3.5 ${index < rev.rating ? 'fill-amber-500' : 'text-zinc-700'}`}
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-zinc-300 italic line-clamp-4">"{rev.comment}"</p>
                </div>

                <div className="mt-5 space-y-3 border-t border-zinc-800/60 pt-3">
                  {rev.doctor_id && (
                    <div className="text-xs text-zinc-400 truncate">
                      Assigned Doctor Name/ID:{' '}
                      <strong className="text-zinc-300 font-normal">
                        {typeof rev.doctor_id === 'object' ? rev.doctor_id?.name : rev.doctor_id}
                      </strong>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {!rev.is_approved ? (
                      <button
                        onClick={() => handleStatusUpdate(rev._id, true)}
                        className="flex flex-1 items-center justify-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/20 text-xs font-medium py-2 px-3 rounded-lg transition-all cursor-pointer"
                      >
                        <FiCheck className="w-3.5 h-3.5" /> Approve
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatusUpdate(rev._id, false)}
                        className="flex flex-1 items-center justify-center gap-1.5 bg-zinc-800 hover:bg-rose-950/40 text-zinc-300 hover:text-rose-400 border border-transparent hover:border-rose-900/30 text-xs font-medium py-2 px-3 rounded-lg transition-all cursor-pointer"
                      >
                        <FiX className="w-3.5 h-3.5" /> Reject / Revoke
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}