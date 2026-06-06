"use client";

import React, { useEffect, useState } from 'react';
import { FiGrid, FiPlus, FiTrash2, FiEdit2, FiAlertCircle, FiLayers } from 'react-icons/fi';

interface IDepartmentData {
  _id: string;
  name: string;
  slug: string;
  description: string;
  facilities: string[];
  image_url?: string;
  is_emergency_dept: boolean;
}

export default function DepartmentManagement() {
  const [departments, setDepartments] = useState<IDepartmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [facilities, setFacilities] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchDepartments();
  }, []);

  async function fetchDepartments() {
    try {
      const res = await fetch('/api/departments');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setDepartments(data);
    } catch {
      setError("Failed to fetch data");
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
    setName('');
    setSlug('');
    setDescription('');
    setFacilities('');
    setIsEmergency(false);
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const facilitiesArray = facilities.split(',').map(f => f.trim()).filter(Boolean);
    const payload = {
      name,
      slug,
      description,
      facilities: facilitiesArray,
      is_emergency_dept: isEmergency,
      ...(image && { image })
    };

    try {
      const url = '/api/departments';
      const method = editingId ? 'PUT' : 'POST';
      const bodyPayload = editingId ? { id: editingId, ...payload } : payload;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload)
      });

      if (!res.ok) throw new Error();
      
      resetForm();
      fetchDepartments();
    } catch {
      setError("Operation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (dept: IDepartmentData) => {
    setEditingId(dept._id);
    setName(dept.name);
    setSlug(dept.slug);
    setDescription(dept.description);
    setFacilities(dept.facilities.join(', '));
    setIsEmergency(dept.is_emergency_dept);
    setImage(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch('/api/departments', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (!res.ok) throw new Error();
      fetchDepartments();
    } catch {
      setError("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-[#090b0f] text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading details...</p>
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
          
          {/* Action Form Panel */}
          <div className="rounded-md border border-zinc-800/80 bg-[#11141a] p-5 h-fit">
            <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-blue-500" /> : <FiPlus className="text-blue-500" />}
              {editingId ? 'Modify Department' : 'Create New Department'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Department Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Web Link Extension (Slug)</label>
                <input 
                  type="text" 
                  value={slug} 
                  onChange={(e) => setSlug(e.target.value)} 
                  required 
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Summary / Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  rows={3}
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none resize-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Available Facilities (Separate with commas)</label>
                <input 
                  type="text" 
                  value={facilities} 
                  onChange={(e) => setFacilities(e.target.value)} 
                  placeholder="e.g. ICU, Emergency Ward, 24/7 Labs"
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Upload Sector Cover Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  className="w-full text-xs text-zinc-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex items-center gap-2.5 py-1">
                <input 
                  type="checkbox" 
                  id="emergency"
                  checked={isEmergency} 
                  onChange={(e) => setIsEmergency(e.target.checked)} 
                  className="h-4 w-4 rounded-sm border-zinc-800 bg-[#090b0f] text-blue-600 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="emergency" className="text-xs font-medium text-zinc-300 cursor-pointer select-none">
                  Mark as Emergency Unit
                </label>
              </div>

              <div className="flex gap-2 pt-1">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2 px-3 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Saving changes...' : editingId ? 'Update Unit' : 'Save Unit'}
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

          {/* List Display Panel */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <h1 className="text-xl font-semibold tracking-wide text-white">Hospital Sectors</h1>
              <p className="mt-0.5 text-xs text-zinc-400">View and adjust active clinical departments</p>
            </div>

            {departments.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-800 bg-[#11141a]/50 py-12 text-center">
                <FiGrid className="mx-auto h-8 w-8 text-zinc-600" />
                <h3 className="mt-3 text-xs font-medium text-zinc-400">No departments added yet</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {departments.map((dept) => (
                  <div key={dept._id} className="flex flex-col justify-between rounded-md border border-zinc-800 bg-[#11141a] p-4 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-white text-base">{dept.name}</h3>
                          <span className="text-xs text-zinc-500">Extension: /{dept.slug}</span>
                        </div>
                        {dept.is_emergency_dept && (
                          <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                            Emergency
                          </span>
                        )}
                      </div>

                      {dept.image_url && (
                        <div className="mt-3 overflow-hidden rounded-md border border-zinc-800 h-28 w-full relative bg-[#090b0f]">
                          <img src={dept.image_url} alt={dept.name} className="object-cover w-full h-full" />
                        </div>
                      )}

                      <p className="mt-2.5 text-xs text-zinc-400 line-clamp-3 leading-relaxed">{dept.description}</p>

                      {dept.facilities.length > 0 && (
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {dept.facilities.map((fac, i) => (
                            <span key={i} className="flex items-center gap-1.5 bg-[#090b0f] text-zinc-300 text-[11px] px-2 py-1 rounded-md border border-zinc-800/60">
                              <FiLayers className="text-blue-500 text-[9px]" /> {fac}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex justify-end gap-2 border-t border-zinc-800/60 pt-2.5">
                      <button 
                        onClick={() => handleEdit(dept)}
                        className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-2.5 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(dept._id)}
                        className="flex items-center gap-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 text-xs font-medium py-1.5 px-2.5 rounded-md border border-rose-900/30 transition-colors cursor-pointer"
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