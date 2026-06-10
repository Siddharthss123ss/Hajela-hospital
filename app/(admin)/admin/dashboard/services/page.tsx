"use client";

import React, { useEffect, useState } from 'react';
import { FiActivity, FiPlus, FiTrash2, FiEdit2, FiAlertCircle, FiCheck, FiCamera, FiPhone, FiClock } from 'react-icons/fi';

interface IServiceData {
  _id: string;
  name: string;
  slug: string;
  image_url: string;
  description: string;
  facilities: string[];
  timing: string;
  contact_number: string;
}

export default function ServiceManagement() {
  const [services, setServices] = useState<IServiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Controlled States matched to the structural schema
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [facilities, setFacilities] = useState('');
  const [timing, setTiming] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [image, setImage] = useState<string | null>(null);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

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
      setSlug(generateSlug(value));
    }
  };

  async function fetchServices() {
    try {
      const res = await fetch('/api/services');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setServices(data);
    } catch {
      setError("Failed to fetch medical services from cluster database.");
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
    setTiming('');
    setContactNumber('');
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const facilitiesArray = facilities.split(',').map(f => f.trim()).filter(Boolean);
    
    const payload = {
      name,
      slug: slug.toLowerCase().trim() || generateSlug(name),
      description,
      facilities: facilitiesArray,
      timing,
      contact_number: contactNumber,
      image_url: image || ""
    };

    try {
      const url = editingId ? `/api/services/${editingId}` : '/api/services';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error();
      
      resetForm();
      fetchServices();
    } catch {
      setError("Database schema synchronization operational failure.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (srv: IServiceData) => {
    setEditingId(srv._id);
    setName(srv.name);
    setSlug(srv.slug);
    setDescription(srv.description);
    setFacilities(srv.facilities.join(', '));
    setTiming(srv.timing);
    setContactNumber(srv.contact_number);
    setImage(srv.image_url || null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this service profile configuration?")) return;
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchServices();
    } catch {
      setError("Failed to execute remote data configuration deletion.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-[#090b0f] text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Parsing operational schema indices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090b0f] p-6 text-zinc-100 antialiased sm:p-8">
      <div className="mx-auto max-w-7xl">
        
        {error && (
          <div className="mb-5 flex items-center gap-3 rounded-md border border-rose-500/20 bg-rose-500/10 p-3.5 text-rose-400">
            <FiAlertCircle className="h-4 w-4 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Form Setup Panel */}
          <div className="rounded-md border border-zinc-800/80 bg-[#11141a] p-5 h-fit max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-blue-500" /> : <FiPlus className="text-blue-500" />}
              {editingId ? 'Update System Config' : 'Register Offering'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Service Division Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={handleNameChange} 
                  required 
                  placeholder="e.g. Outpatient Diagnostics"
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-700 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">URL Route Parameter Slug</label>
                <input 
                  type="text" 
                  value={slug} 
                  onChange={(e) => setSlug(generateSlug(e.target.value))} 
                  required 
                  disabled={!!editingId}
                  placeholder="outpatient-diagnostics"
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none disabled:opacity-40 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Operations Window</label>
                  <input 
                    type="text" 
                    value={timing} 
                    onChange={(e) => setTiming(e.target.value)} 
                    required 
                    placeholder="e.g. 24 Hours"
                    className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Dedicated Line</label>
                  <input 
                    type="text" 
                    value={contactNumber} 
                    onChange={(e) => setContactNumber(e.target.value)} 
                    required 
                    placeholder="e.g. +1 (555) 0192"
                    className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-700 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Division Profile Overview</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  rows={3}
                  placeholder="Provide precise scope definition statements..."
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none resize-none placeholder-zinc-700 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Integrated Core Facilities (Comma Separated)</label>
                <input 
                  type="text" 
                  value={facilities} 
                  onChange={(e) => setFacilities(e.target.value)} 
                  placeholder="Imaging, Laboratory, Rapid Assessment"
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-700 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Cover Asset File</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  className="w-full text-xs text-zinc-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2 px-3 rounded-md transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Syncing to Cluster...' : editingId ? 'Apply Patch' : 'Publish Asset'}
                </button>
                {editingId && (
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs py-2 px-3 rounded-md transition-colors cursor-pointer"
                  >
                    Abort
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Directory Monitoring Grid */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <h1 className="text-xl font-semibold tracking-wide text-white">Clinical Offerings & Facilities</h1>
              <p className="mt-0.5 text-xs text-zinc-400">Direct mapping indexes retrieved from primary dataset aggregates</p>
            </div>

            {services.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-800 bg-[#11141a]/50 py-12 text-center">
                <FiActivity className="mx-auto h-8 w-8 text-zinc-600" />
                <h3 className="mt-3 text-xs font-medium text-zinc-400">No medical services registered inside system database</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((srv) => (
                  <div key={srv._id} className="flex flex-col justify-between rounded-md border border-zinc-800 bg-[#11141a] p-4.5 transition-colors hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-white text-base leading-snug">{srv.name}</h3>
                      </div>

                      <div className="mt-2.5 overflow-hidden rounded-md border border-zinc-800 h-32 w-full relative bg-[#090b0f]">
                        {srv.image_url ? (
                          <img src={srv.image_url} alt={srv.name} className="object-cover w-full h-full" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-700">
                            <FiCamera className="w-5 h-5" />
                          </div>
                        )}
                      </div>

                      <p className="mt-2.5 text-xs text-zinc-400 line-clamp-2 italic font-normal">"{srv.description}"</p>

                      {srv.facilities && srv.facilities.length > 0 && (
                        <div className="mt-3.5 space-y-1 border-t border-zinc-800/60 pt-2.5">
                          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">Core Facilities:</span>
                          <div className="grid grid-cols-1 gap-1">
                            {srv.facilities.map((feat, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                                <FiCheck className="text-blue-400 shrink-0 text-[10px]" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-3.5 grid grid-cols-2 gap-2 border-t border-zinc-800/40 pt-2.5 text-[10px] text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <FiClock className="text-blue-500 shrink-0" />
                          <span className="truncate">{srv.timing || '24 Hours'}</span>
                        </div>
                        <div className="flex items-center gap-1.5 justify-end">
                          <FiPhone className="text-blue-500 shrink-0" />
                          <span className="truncate text-zinc-300 font-medium">{srv.contact_number}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2 border-t border-zinc-800/60 pt-2.5">
                      <button 
                        onClick={() => handleEdit(srv)}
                        className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1 px-2.5 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Config
                      </button>
                      <button 
                        onClick={() => handleDelete(srv._id)}
                        className="flex items-center gap-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 text-xs font-medium py-1 px-2.5 rounded-md border border-rose-900/20 transition-colors cursor-pointer"
                      >
                        <FiTrash2 className="w-3 h-3" /> Decom
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