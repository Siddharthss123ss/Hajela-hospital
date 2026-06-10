"use client";

import React, { useEffect, useState } from 'react';
import { 
  FiAward, FiPlus, FiTrash2, FiEdit2, FiAlertCircle, 
  FiCamera, FiCalendar, FiTag, FiArrowUp, FiArrowDown 
} from 'react-icons/fi';

interface IAwardData {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  image_id: string;
  year: string;
  category: "trophy award" | "certifications";
  order: number;
}

export default function AwardManagement() {
  const [awards, setAwards] = useState<IAwardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState<'trophy award' | 'certifications'>('trophy award');
  const [order, setOrder] = useState<number>(999);
  const [image, setImage] = useState<string | null>(null);
  
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
      const sorted = data.sort((a: IAwardData, b: IAwardData) => (a.order || 999) - (b.order || 999));
      setAwards(sorted);
    } catch {
      setError("Failed to fetch credentials and recognitions data.");
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
    setOrder(999);
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      title,
      description,
      year,
      category,
      order,
      ...(image && { image })
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
      setError(err.message || "An internal structural update error occurred.");
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
    setOrder(awd.order || 999);
    setImage(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently remove this recognition record?")) return;
    try {
      const res = await fetch(`/api/awards/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchAwards();
    } catch {
      setError("Failed to complete removal request.");
    }
  };

  const moveUp = async (index: number) => {
    if (index === 0) return;
    const newAwards = [...awards];
    const temp = newAwards[index];
    newAwards[index] = newAwards[index - 1];
    newAwards[index - 1] = temp;
    
    for (let i = 0; i < newAwards.length; i++) {
      newAwards[i].order = i + 1;
    }
    
    setAwards(newAwards);
    
    for (const award of newAwards) {
      await fetch(`/api/awards/${award._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: award.order })
      });
    }
    fetchAwards();
  };

  const moveDown = async (index: number) => {
    if (index === awards.length - 1) return;
    const newAwards = [...awards];
    const temp = newAwards[index];
    newAwards[index] = newAwards[index + 1];
    newAwards[index + 1] = temp;
    
    for (let i = 0; i < newAwards.length; i++) {
      newAwards[i].order = i + 1;
    }
    
    setAwards(newAwards);
    
    for (const award of newAwards) {
      await fetch(`/api/awards/${award._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: award.order })
      });
    }
    fetchAwards();
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-[#090b0f] text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading recognition logs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090b0f] text-zinc-100 antialiased">
      <div className="mx-auto max-w-7xl">
        
        {error && (
          <div className="mb-5 flex items-center gap-3 rounded-md border border-rose-500/20 bg-rose-500/10 p-3.5 text-rose-400">
            <FiAlertCircle className="h-4 w-4 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Form Panel */}
          <div className="rounded-md border border-zinc-800/80 bg-[#11141a] p-5 h-fit">
            <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-blue-500" /> : <FiPlus className="text-blue-500" />}
              {editingId ? 'Modify Recognition Entry' : 'Register New Honor'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Award / Honor Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                  placeholder="e.g. Excellence in Healthcare Delivery"
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Conferred Year</label>
                  <input 
                    type="text" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)} 
                    required 
                    placeholder="2026"
                    className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Classification</label>
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none h-[38px] cursor-pointer"
                  >
                    <option value="trophy award">Trophy Award</option>
                    <option value="certifications">Certifications</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Sequence Order</label>
                  <input 
                    type="number" 
                    value={order} 
                    onChange={(e) => setOrder(parseInt(e.target.value))} 
                    placeholder="1"
                    className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Honor Citation / Context</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  rows={4}
                  placeholder="Summarize the core impact and significance of the commendation..."
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none resize-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Document Check / Graphic Asset {editingId && <span className="text-zinc-500">(Optional)</span>}
                </label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  required={!editingId}
                  className="w-full text-xs text-zinc-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2 px-3 rounded-md transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Syncing assets...' : editingId ? 'Update Entry' : 'Publish Entry'}
                </button>
                {editingId && (
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs py-2 px-3 rounded-md transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Awards List */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <h1 className="text-xl font-semibold tracking-wide text-white">Accreditations & Distinctions</h1>
              <p className="mt-0.5 text-xs text-zinc-400">Review sequence matrix and maintain verifiable organization credentials.</p>
            </div>

            {awards.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-800 bg-[#11141a]/50 py-12 text-center">
                <FiAward className="mx-auto h-8 w-8 text-zinc-600" />
                <h3 className="mt-3 text-xs font-medium text-zinc-400">No organizational records found</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {awards.map((awd, idx) => (
                  <div key={awd._id} className="flex flex-col justify-between rounded-md border border-zinc-800 bg-[#11141a] p-4 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white text-base leading-snug">{awd.title}</h3>
                        <div className="flex flex-col items-end gap-1">
                          <span className="flex items-center gap-1 shrink-0 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            <FiTag className="text-[9px]" /> {awd.category === 'trophy award' ? 'Trophy' : 'Certificate'}
                          </span>
                          <span className="text-[10px] text-zinc-500 bg-[#090b0f] border border-zinc-800/60 px-2 py-0.5 rounded-full">
                            Index: {awd.order || 999}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 overflow-hidden rounded-md border border-zinc-800 h-36 w-full relative bg-[#090b0f]">
                        {awd.image_url ? (
                          <img src={awd.image_url} alt={awd.title} className="object-cover w-full h-full" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-600">
                            <FiCamera className="w-5 h-5" />
                          </div>
                        )}
                      </div>

                      <p className="mt-2.5 text-xs text-zinc-400 line-clamp-3 leading-relaxed">{awd.description}</p>

                      <div className="mt-3.5 flex items-center gap-2 border-t border-zinc-800/50 pt-2.5 text-xs text-zinc-500">
                        <FiCalendar className="text-blue-500 text-sm" />
                        <span>Conferred Allocation: <strong className="text-zinc-300 font-normal">{awd.year}</strong></span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex justify-end gap-1.5 border-t border-zinc-800/60 pt-2.5">
                      <button 
                        onClick={() => moveUp(idx)}
                        disabled={idx === 0}
                        className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-2.5 rounded-md transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <FiArrowUp className="w-3 h-3" /> Up
                      </button>
                      <button 
                        onClick={() => moveDown(idx)}
                        disabled={idx === awards.length - 1}
                        className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-2.5 rounded-md transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <FiArrowDown className="w-3 h-3" /> Down
                      </button>
                      <button 
                        onClick={() => handleEdit(awd)}
                        className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-2.5 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(awd._id)}
                        className="flex items-center gap-1 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 text-xs font-medium py-1.5 px-2.5 rounded-md border border-rose-900/30 transition-colors cursor-pointer"
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