"use client";

import React, { useEffect, useState } from 'react';
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiPhone, 
  FiMail, 
  FiActivity, 
  FiCheckCircle, 
  FiXCircle, 
  FiAlertCircle, 
  FiFileText 
} from 'react-icons/fi';

// Define structures matched with your populated Mongoose schema
interface IPopulatedField {
  _id: string;
  name?: string; // Adjust based on your Doctor/Department schema fields (e.g., title, name)
}

interface IAppointmentData {
  _id: string;
  patient_name: string;
  patient_phone: string;
  patient_email?: string;
  doctor_id: IPopulatedField | null;
  dept_id: IPopulatedField | null;
  appointment_date: string | Date;
  time_slot: string;
  reason?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export default function AppointmentList() {
  const [appointments, setAppointments] = useState<IAppointmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch('/api/appointments'); // Update route to match your file structure
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, []);

  // Status Badge Helper
  const getStatusStyle = (status: IAppointmentData['status']) => {
    switch (status) {
      case 'confirmed':
        return { bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: <FiCheckCircle /> };
      case 'cancelled':
        return { bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: <FiXCircle /> };
      case 'completed':
        return { bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <FiCheckCircle /> };
      default:
        return { bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <FiAlertCircle /> };
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading appointments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <div className="flex items-center gap-3 rounded-lg border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
          <FiXCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100 sm:p-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Appointments</h1>
            <p className="mt-1 text-sm text-zinc-400">Monitor and manage patient bookings</p>
          </div>
          <div className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-emerald-400 border border-zinc-800">
            Total Bookings: {appointments.length}
          </div>
        </div>

        {/* Empty State */}
        {appointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
            <FiCalendar className="mx-auto h-12 w-12 text-zinc-600" />
            <h3 className="mt-4 text-sm font-semibold text-zinc-200">No appointments found</h3>
            <p className="mt-1 text-sm text-zinc-500">New requests will appear here dynamically.</p>
          </div>
        ) : (
          /* Grid Layout */
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {appointments.map((appt) => {
              const statusMeta = getStatusStyle(appt.status);
              const formattedDate = new Date(appt.appointment_date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <div 
                  key={appt._id} 
                  className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40"
                >
                  <div>
                    {/* Patient Top Info */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                          <FiUser className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white line-clamp-1">{appt.patient_name}</h3>
                          <span className="text-xs text-zinc-500">Patient Data</span>
                        </div>
                      </div>
                      
                      {/* Dynamic Status Badge */}
                      <span className={`flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider ${statusMeta.bg}`}>
                        {statusMeta.icon}
                        {appt.status}
                      </span>
                    </div>

                    {/* Date & Time Slot Accent Banner */}
                    <div className="mt-4 flex items-center justify-between gap-2 rounded-lg bg-zinc-950/60 p-2.5 text-xs text-zinc-300 border border-zinc-800/50">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="text-emerald-400" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium text-emerald-400">
                        <FiClock />
                        <span>{appt.time_slot}</span>
                      </div>
                    </div>

                    {/* Meta Details List */}
                    <div className="mt-4 space-y-2 text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <FiActivity className="text-zinc-500 shrink-0" />
                        <span className="line-clamp-1">
                          Dept: <strong className="text-zinc-300 font-normal">{appt.dept_id?.name || 'N/A'}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUser className="text-zinc-500 shrink-0" />
                        <span className="line-clamp-1">
                          Doctor ID/Name: <strong className="text-zinc-300 font-normal">{appt.doctor_id?.name || appt.doctor_id?._id || 'N/A'}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiPhone className="text-zinc-500 shrink-0" />
                        <span className="text-zinc-300">{appt.patient_phone}</span>
                      </div>
                      {appt.patient_email && (
                        <div className="flex items-center gap-2">
                          <FiMail className="text-zinc-500 shrink-0" />
                          <span className="text-zinc-300 truncate">{appt.patient_email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Reason section if present */}
                  {appt.reason && (
                    <div className="mt-4 border-t border-zinc-800/80 pt-3">
                      <div className="flex items-start gap-1.5 text-xs text-zinc-400">
                        <FiFileText className="mt-0.5 shrink-0 text-zinc-500" />
                        <p className="italic line-clamp-2">"{appt.reason}"</p>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}