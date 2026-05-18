"use client";

import React, { useEffect, useState } from 'react';
import { FiUser, FiActivity, FiClock, FiCalendar, FiAward, FiPlus, FiEdit2, FiTrash2, FiAlertCircle, FiCamera, FiBookOpen } from 'react-icons/fi';

interface IDepartmentField {
  _id: string;
  name: string;
}

interface IDoctorData {
  _id: string;
  name: string;
  dept_id: IDepartmentField | string | null;
  specialization: string;
  degree: string[];
  experience: number;
  about: string;
  awards: string[];
  image_url?: string;
  available_days: string[];
  start_time: string;
  end_time: string;
  is_active: boolean;
}

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState<IDoctorData[]>([]);
  const [departments, setDepartments] = useState<IDepartmentField[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [deptId, setDeptId] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [degree, setDegree] = useState('');
  const [experience, setExperience] = useState('');
  const [about, setAbout] = useState('');
  const [awards, setAwards] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    Promise.all([fetchDoctors(), fetchDepartments()]).finally(() => setLoading(false));
  }, []);

  async function fetchDoctors() {
    try {
      const res = await fetch('/api/doctors');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setDoctors(data);
    } catch {
      setError("Failed to load doctors");
    }
  }

  async function fetchDepartments() {
    try {
      const res = await fetch('/api/departments');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setDepartments(data);
    } catch {
      setError("Failed to load departments");
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDayToggle = (day: string) => {
    setAvailableDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const resetForm = () => {
    setName('');
    setDeptId('');
    setSpecialization('');
    setDegree('');
    setExperience('');
    setAbout('');
    setAwards('');
    setStartTime('');
    setEndTime('');
    setIsActive(true);
    setAvailableDays([]);
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      dept_id: deptId,
      specialization,
      degree: degree.split(',').map(d => d.trim()).filter(Boolean),
      experience: Number(experience),
      about,
      awards: awards.split(',').map(a => a.trim()).filter(Boolean),
      available_days: availableDays,
      start_time: startTime,
      end_time: endTime,
      is_active: isActive,
      ...(image && { image })
    };

    try {
      const url = editingId ? `/api/doctors/${editingId}` : '/api/doctors';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error();

      resetForm();
      fetchDoctors();
    } catch {
      setError("Operation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (doc: IDoctorData) => {
    const extractedDeptId = doc.dept_id && typeof doc.dept_id === 'object' ? doc.dept_id._id : doc.dept_id || '';
    
    setEditingId(doc._id);
    setName(doc.name);
    setDeptId(extractedDeptId);
    setSpecialization(doc.specialization);
    setDegree(doc.degree.join(', '));
    setExperience(doc.experience.toString());
    setAbout(doc.about);
    setAwards(doc.awards.join(', '));
    setStartTime(doc.start_time);
    setEndTime(doc.end_time);
    setIsActive(doc.is_active);
    setAvailableDays(doc.available_days);
    setImage(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/doctors/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchDoctors();
    } catch {
      setError("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading...</p>
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

        <div className="grid gap-8 lg:grid-cols-3">
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 h-fit max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-emerald-400" /> : <FiPlus className="text-emerald-400" />}
              {editingId ? 'Update Doctor' : 'Add Doctor'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Department</label>
                <select 
                  value={deptId} 
                  onChange={(e) => setDeptId(e.target.value)} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none cursor-pointer"
                >
                  <option value="">Select Department</option>
                  {departments.map((d) => (
                    <option key={d._id} value={d._id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Specialization</label>
                  <input 
                    type="text" 
                    value={specialization} 
                    onChange={(e) => setSpecialization(e.target.value)} 
                    required 
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Experience (Years)</label>
                  <input 
                    type="number" 
                    value={experience} 
                    onChange={(e) => setExperience(e.target.value)} 
                    required 
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Degrees (Comma Separated)</label>
                <input 
                  type="text" 
                  value={degree} 
                  onChange={(e) => setDegree(e.target.value)} 
                  placeholder="MD, MBBS"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Awards (Comma Separated)</label>
                <input 
                  type="text" 
                  value={awards} 
                  onChange={(e) => setAwards(e.target.value)} 
                  placeholder="Best Cardiologist 2024"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Start Time</label>
                  <input 
                    type="text" 
                    placeholder="09:00 AM"
                    value={startTime} 
                    onChange={(e) => setStartTime(e.target.value)} 
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">End Time</label>
                  <input 
                    type="text" 
                    placeholder="05:00 PM"
                    value={endTime} 
                    onChange={(e) => setEndTime(e.target.value)} 
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Available Days</label>
                <div className="flex flex-wrap gap-1.5">
                  {DAYS_OF_WEEK.map((day) => {
                    const isSelected = availableDays.includes(day);
                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() => handleDayToggle(day)}
                        className={`text-xs px-2.5 py-1.5 rounded-md border transition-colors cursor-pointer ${
                          isSelected 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                            : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {day.substring(0, 3)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">About Bio</label>
                <textarea 
                  value={about} 
                  onChange={(e) => setAbout(e.target.value)} 
                  required 
                  rows={3}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Profile Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex items-center gap-2 py-1">
                <input 
                  type="checkbox" 
                  id="active"
                  checked={isActive} 
                  onChange={(e) => setIsActive(e.target.checked)} 
                  className="h-4 w-4 rounded border-zinc-800 bg-zinc-950 text-emerald-500 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="active" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                  Is Active Profile
                </label>
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Saving...' : editingId ? 'Update' : 'Save'}
                </button>
                {editingId && (
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Doctors</h1>
              <p className="mt-1 text-sm text-zinc-400">Manage directory setup and schedules</p>
            </div>

            {doctors.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiUser className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No doctors registered</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {doctors.map((doc) => (
                  <div key={doc._id} className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                          {doc.image_url ? (
                            <img src={doc.image_url} alt={doc.name} className="object-cover w-full h-full" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-zinc-600">
                              <FiCamera className="w-6 h-6" />
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="font-semibold text-white text-lg leading-snug">{doc.name}</h3>
                          <p className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                            <FiActivity className="text-[10px]" /> {doc.specialization}
                          </p>
                          <p className="text-xs text-zinc-400">
                            Dept: <span className="text-zinc-300">{typeof doc.dept_id === 'object' && doc.dept_id ? doc.dept_id.name : 'N/A'}</span>
                          </p>
                          <p className="text-xs text-zinc-500 font-medium">Exp: {doc.experience} Years</p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1">
                        {doc.degree.map((deg, idx) => (
                          <span key={idx} className="flex items-center gap-1 bg-zinc-950 text-zinc-400 text-[11px] px-2 py-0.5 rounded border border-zinc-800">
                            <FiBookOpen className="text-[10px] text-zinc-500" /> {deg}
                          </span>
                        ))}
                      </div>

                      <p className="mt-3 text-xs text-zinc-400 line-clamp-3 italic">"{doc.about}"</p>

                      <div className="mt-4 space-y-2 border-t border-zinc-800/60 pt-3 text-xs">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <FiClock className="text-zinc-500 shrink-0" />
                          <span>Timing: <strong className="text-zinc-200 font-normal">{doc.start_time || 'N/A'} - {doc.end_time || 'N/A'}</strong></span>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-400">
                          <FiCalendar className="text-zinc-500 shrink-0 mt-0.5" />
                          <p className="line-clamp-1">Days: <span className="text-zinc-300">{doc.available_days.join(', ') || 'None'}</span></p>
                        </div>
                        {doc.awards.length > 0 && (
                          <div className="flex items-start gap-2 text-zinc-400">
                            <FiAward className="text-amber-500 shrink-0 mt-0.5" />
                            <p className="line-clamp-1 text-zinc-300">{doc.awards.join(' | ')}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-2 border-t border-zinc-800/60 pt-3">
                      <button 
                        onClick={() => handleEdit(doc)}
                        className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-3 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(doc._id)}
                        className="flex items-center gap-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 text-xs font-medium py-1.5 px-3 rounded-md border border-rose-900/30 transition-colors cursor-pointer"
                      >
                        <FiTrash2 className="w-3 h-3" /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}