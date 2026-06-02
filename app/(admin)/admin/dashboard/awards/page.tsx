"use client";

import React, { useEffect, useState } from 'react';
import { FiAward, FiPlus, FiTrash2, FiEdit2, FiAlertCircle, FiCheck, FiCamera, FiCalendar, FiTag } from 'react-icons/fi';

interface IAwardData {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  image_id: string;
  year: string;
  category: "trophy award" | "certifications";
}

export default function AwardManagement() {
  const [awards, setAwards] = useState<IAwardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Form Field Controlled States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState<'trophy award' | 'certifications'>('trophy award');
  const [image, setImage] = useState<string | null>(null); // Base64 string raw handler
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchAwards();
  }, []);

  async function fetchAwards() {
    try {
      const res = await fetch('/api/awards');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setAwards(data);
    } catch {
      setError("Failed to fetch awards catalog from DB cluster.");
    } finally {
      setLoading(false);
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

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setYear('');
    setCategory('trophy award');
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Payload configuration matching backend requirements
    const payload = {
      title,
      description,
      year,
      category,
      ...(image && { image }) // Base64 image bhejenge agar user ne image load ki h
    };

    try {
      const url = editingId ? `/api/awards/${editingId}` : '/api/awards';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Operation failed");
      }
      
      resetForm();
      fetchAwards();
    } catch (err: any) {
      setError(err.message || "Execution failure during pipeline transaction.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (awd: IAwardData) => {
    setEditingId(awd._id);
    setTitle(awd.title);
    setDescription(awd.description);
    setYear(awd.year);
    setCategory(awd.category);
    setImage(null); // Image input blank rakhenge jab tak naya image select na ho
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently remove this award record?")) return;
    try {
      const res = await fetch(`/api/awards/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchAwards();
    } catch {
      setError("Deletion execution pipeline dropped.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading hospital recognition registry...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100 sm:p-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Error Notification Alert */}
        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
            <FiAlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Form Control Side Panel */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-emerald-400" /> : <FiPlus className="text-emerald-400" />}
              {editingId ? 'Edit Recognition Details' : 'Register New Honor'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Award / Honor Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                  placeholder="Best Multispeciality Hospital"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Conferred Year</label>
                  <input 
                    type="text" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)} 
                    required 
                    placeholder="e.g. 2026"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Strict Category</label>
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none h-[42px] cursor-pointer"
                  >
                    <option value="trophy award">Trophy Award</option>
                    <option value="certifications">Certifications</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Honor Citation / Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  rows={4}
                  placeholder="Awarded for excellence in executing critical healthcare setups..."
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Award Certificate / Image {editingId && <span className="text-zinc-500">(Optional if keeping old)</span>}
                </label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  required={!editingId}
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Syncing Assets...' : editingId ? 'Update Record' : 'Publish Award'}
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

          {/* Directory Monitoring Grid Display */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Accreditations & Honors</h1>
              <p className="mt-1 text-sm text-zinc-400">Manage hospital recognition and dynamic certifications verified on core storage.</p>
            </div>

            {awards.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiAward className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No awards logged in database</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {awards.map((awd) => (
                  <div key={awd._id} className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white text-lg leading-snug">{awd.title}</h3>
                        <span className="flex items-center gap-1 shrink-0 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          <FiTag className="text-[9px]" /> {awd.category === 'trophy award' ? 'Trophy' : 'Certificate'}
                        </span>
                      </div>

                      {/* Display Box */}
                      <div className="mt-3 overflow-hidden rounded-lg border border-zinc-800 h-40 w-full relative bg-zinc-950">
                        {awd.image_url ? (
                          <img src={awd.image_url} alt={awd.title} className="object-cover w-full h-full" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-600">
                            <FiCamera className="w-6 h-6" />
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-sm text-zinc-400 line-clamp-3">{awd.description}</p>

                      {/* Metadata row */}
                      <div className="mt-4 flex items-center gap-2 border-t border-zinc-800/50 pt-3 text-xs text-zinc-500">
                        <FiCalendar className="text-emerald-500 text-sm" />
                        <span>Conferred Session: <strong className="text-zinc-300">{awd.year}</strong></span>
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="mt-5 flex justify-end gap-2 border-t border-zinc-800/60 pt-3">
                      <button 
                        onClick={() => handleEdit(awd)}
                        className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-3 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(awd._id)}
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