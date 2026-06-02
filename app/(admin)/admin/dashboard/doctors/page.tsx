"use client";

import React, { useEffect, useState } from 'react';
import { FiUser, FiActivity, FiClock, FiCalendar, FiAward, FiPlus, FiEdit2, FiTrash2, FiAlertCircle, FiCamera } from 'react-icons/fi';

// Aapke Mongoose Model ke exact data types se sync kiya hai
interface IDoctorData {
  _id: string;
  name: string;
  slug: string;
  role: string;
  degree: string;
  experience: string;
  department: string;
  opd_timing: string;
  appointment_number: string;
  about: string;
  expertise: string[];
  image_url: string;
}

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState<IDoctorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form States (Ab ye MongoDB keys se 100% match karti hain)
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [role, setRole] = useState('');
  const [degree, setDegree] = useState('');
  const [experience, setExperience] = useState('');
  const [department, setDepartment] = useState('');
  const [opdTiming, setOpdTiming] = useState('');
  const [appointmentNumber, setAppointmentNumber] = useState('');
  const [about, setAbout] = useState('');
  const [expertise, setExpertise] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchDoctors().finally(() => setLoading(false));
  }, []);

  // Automatic slug generate karne ke liye utility function
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (!editingId) {
      setSlug(generateSlug(value)); // Naya doctor banate waqt auto-slug
    }
  };

  async function fetchDoctors() {
    try {
      setError(null);
      const res = await fetch('/api/doctors');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setDoctors(data);
    } catch {
      setError("Failed to load doctors directory");
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExpertiseToggle = (item: string) => {
    setExpertise(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const resetForm = () => {
    setName('');
    setSlug('');
    setRole('');
    setDegree('');
    setExperience('');
    setDepartment('');
    setOpdTiming('');
    setAppointmentNumber('');
    setAbout('');
    setExpertise([]);
    setImageUrl(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Exact database format object payload
    const payload = {
      name,
      slug: slug.toLowerCase().trim() || generateSlug(name),
      role,
      degree,
      experience,
      department,
      opd_timing: opdTiming,
      appointment_number: appointmentNumber,
      about,
      expertise,
      image_url: imageUrl || "",
    };

    try {
      const url = editingId ? `/api/doctors/${editingId}` : '/api/doctors';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Operation failed");
      }

      resetForm();
      fetchDoctors();
    } catch (err: any) {
      setError(err.message || "Something went wrong while saving profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (doc: IDoctorData) => {
    setEditingId(doc._id);
    setName(doc.name);
    setSlug(doc.slug);
    setRole(doc.role);
    setDegree(doc.degree);
    setExperience(doc.experience);
    setDepartment(doc.department);
    setOpdTiming(doc.opd_timing);
    setAppointmentNumber(doc.appointment_number);
    setAbout(doc.about);
    setExpertise(doc.expertise || []);
    setImageUrl(doc.image_url || null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this doctor?")) return;
    try {
      setError(null);
      const res = await fetch(`/api/doctors/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchDoctors();
    } catch {
      setError("Failed to delete doctor account");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading Database...</p>
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
          
          {/* Form Side */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 h-fit max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-emerald-400" /> : <FiPlus className="text-emerald-400" />}
              {editingId ? 'Update Doctor Profile' : 'Register New Doctor'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={handleNameChange} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  placeholder="Dr. Saurabh Kumar"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Slug URL (Unique Identifer)</label>
                <input 
                  type="text" 
                  value={slug} 
                  onChange={(e) => setSlug(generateSlug(e.target.value))} 
                  required
                  disabled={!!editingId}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none disabled:opacity-50"
                  placeholder="dr-saurabh-kumar"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Role/Designation</label>
                  <input 
                    type="text" 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    required 
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                    placeholder="Paediatrician"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Experience Status</label>
                  <input 
                    type="text" 
                    value={experience} 
                    onChange={(e) => setExperience(e.target.value)} 
                    required 
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                    placeholder="14+ Years"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Department</label>
                <input 
                  type="text" 
                  value={department} 
                  onChange={(e) => setDepartment(e.target.value)} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  placeholder="Paediatricians & Neonatology"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Degrees/Qualifications</label>
                <input 
                  type="text" 
                  value={degree} 
                  onChange={(e) => setDegree(e.target.value)} 
                  required
                  placeholder="MBBS, MD Paediatrics, Fellowship in Neonatology"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">OPD Timing Info</label>
                  <input 
                    type="text" 
                    placeholder="Mon-Sat | 1:30 PM - 3:00 PM"
                    value={opdTiming} 
                    onChange={(e) => setOpdTiming(e.target.value)} 
                    required
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Appointment Numbers</label>
                  <input 
                    type="text" 
                    placeholder="+91-9575052525 / 2773392"
                    value={appointmentNumber} 
                    onChange={(e) => setAppointmentNumber(e.target.value)} 
                    required
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Expertise Badges (Select Schedule Days / Areas)</label>
                <div className="flex flex-wrap gap-1.5">
                  {DAYS_OF_WEEK.map((day) => {
                    const isSelected = expertise.includes(day);
                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() => handleExpertiseToggle(day)}
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
                <label className="block text-xs font-medium text-zinc-400 mb-1">About Biography</label>
                <textarea 
                  value={about} 
                  onChange={(e) => setAbout(e.target.value)} 
                  required 
                  rows={3}
                  placeholder="Write a small professional bio description..."
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Cloudinary/Profile Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Syncing...' : editingId ? 'Update Doctor' : 'Save Profile'}
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

          {/* Directory Grid View Side */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Hospital Doctors Directory</h1>
              <p className="mt-1 text-sm text-zinc-400">Live operational sync status with Hajela Hospital Schema</p>
            </div>

            {doctors.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiUser className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No doctors verified inside MongoDB</h3>
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
                            <FiActivity className="text-[10px]" /> {doc.role}
                          </p>
                          <p className="text-xs text-zinc-400">
                            Dept: <span className="text-zinc-300">{doc.department || 'General'}</span>
                          </p>
                          <p className="text-xs text-zinc-500 font-medium">Exp: {doc.experience}</p>
                        </div>
                      </div>

                      <div className="mt-3 text-xs text-zinc-400 bg-zinc-950 border border-zinc-800/50 p-2 rounded-md">
                        <span className="text-[11px] block font-semibold text-zinc-500 uppercase tracking-wider mb-0.5">Qualifications:</span>
                        {doc.degree}
                      </div>

                      <p className="mt-3 text-xs text-zinc-400 line-clamp-3 italic">"{doc.about}"</p>

                      <div className="mt-4 space-y-2 border-t border-zinc-800/60 pt-3 text-xs">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <FiClock className="text-zinc-500 shrink-0" />
                          <span>OPD: <strong className="text-zinc-200 font-normal">{doc.opd_timing || 'N/A'}</strong></span>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-400">
                          <FiCalendar className="text-zinc-500 shrink-0 mt-0.5" />
                          <p className="line-clamp-1">Expertise Days: <span className="text-emerald-400">{doc.expertise?.join(', ') || 'None'}</span></p>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <FiAward className="text-amber-500 shrink-0" />
                          <span>Call: <strong className="text-zinc-300 font-normal">{doc.appointment_number}</strong></span>
                        </div>
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