"use client";

import React, { useEffect, useState } from 'react';
import { FiGrid, FiPlus, FiTrash2, FiEdit2, FiAlertCircle, FiCheck, FiLayers } from 'react-icons/fi';

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
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-emerald-400" /> : <FiPlus className="text-emerald-400" />}
              {editingId ? 'Update Department' : 'Add Department'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Department Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Slug</label>
                <input 
                  type="text" 
                  value={slug} 
                  onChange={(e) => setSlug(e.target.value)} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  rows={3}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Facilities (Comma Separated)</label>
                <input 
                  type="text" 
                  value={facilities} 
                  onChange={(e) => setFacilities(e.target.value)} 
                  placeholder="ICU, Ventilator, 24/7 Pharmacy"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Department Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex items-center gap-2 py-2">
                <input 
                  type="checkbox" 
                  id="emergency"
                  checked={isEmergency} 
                  onChange={(e) => setIsEmergency(e.target.checked)} 
                  className="h-4 w-4 rounded border-zinc-800 bg-zinc-950 text-emerald-500 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="emergency" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                  Is Emergency Department
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
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Departments</h1>
              <p className="mt-1 text-sm text-zinc-400">View and manage clinical hospital sectors</p>
            </div>

            {departments.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiGrid className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No departments setup</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {departments.map((dept) => (
                  <div key={dept._id} className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-white text-lg">{dept.name}</h3>
                          <span className="text-xs text-zinc-500 font-mono">/{dept.slug}</span>
                        </div>
                        {dept.is_emergency_dept && (
                          <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            Emergency
                          </span>
                        )}
                      </div>

                      {dept.image_url && (
                        <div className="mt-3 overflow-hidden rounded-lg border border-zinc-800 h-32 w-full relative bg-zinc-950">
                          <img src={dept.image_url} alt={dept.name} className="object-cover w-full h-full" />
                        </div>
                      )}

                      <p className="mt-3 text-sm text-zinc-400 line-clamp-3">{dept.description}</p>

                      {dept.facilities.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {dept.facilities.map((fac, i) => (
                            <span key={i} className="flex items-center gap-1 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-800/60">
                              <FiLayers className="text-emerald-400 text-[10px]" /> {fac}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex justify-end gap-2 border-t border-zinc-800/60 pt-3">
                      <button 
                        onClick={() => handleEdit(dept)}
                        className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-3 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(dept._id)}
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