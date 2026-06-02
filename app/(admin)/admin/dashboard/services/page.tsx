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

  // Controlled States (Ab exact Database Model se mapped hain)
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

  // Automatic Clean Slug Generation logic
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
      setSlug(generateSlug(value)); // Insert flow me auto URL slug banega
    }
  };

  async function fetchServices() {
    try {
      const res = await fetch('/api/services');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setServices(data);
    } catch {
      setError("Failed to fetch medical services from database");
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
    
    // Strict schema payload structure
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
      setError("Database sync operational failure");
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
    if (!confirm("Are you sure you want to remove this service profile?")) return;
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchServices();
    } catch {
      setError("Failed to execute data deletion");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading medical services...</p>
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
          
          {/* Form Setup Panel */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 h-fit max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-emerald-400" /> : <FiPlus className="text-emerald-400" />}
              {editingId ? 'Update Service Config' : 'Create New Service'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Service Department Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={handleNameChange} 
                  required 
                  placeholder="24/7 Reception Services"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Slug URL Identifier</label>
                <input 
                  type="text" 
                  value={slug} 
                  onChange={(e) => setSlug(generateSlug(e.target.value))} 
                  required 
                  disabled={!!editingId}
                  placeholder="reception-services"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Timing Status</label>
                  <input 
                    type="text" 
                    value={timing} 
                    onChange={(e) => setTiming(e.target.value)} 
                    required 
                    placeholder="24 Hours"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Contact Number</label>
                  <input 
                    type="text" 
                    value={contactNumber} 
                    onChange={(e) => setContactNumber(e.target.value)} 
                    required 
                    placeholder="7777802365"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Description Profile</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  rows={3}
                  placeholder="Round-the-clock reception and patient assistance..."
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Facilities Provided (Comma Separated)</label>
                <input 
                  type="text" 
                  value={facilities} 
                  onChange={(e) => setFacilities(e.target.value)} 
                  placeholder="24/7 Reception, Patient Assistance, Billing Support"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Service Panel Cover Image</label>
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
                  {isSubmitting ? 'Writing to DB...' : editingId ? 'Update Service' : 'Publish Service'}
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

          {/* Directory Monitoring Grid */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Clinical Offerings & Facilities</h1>
              <p className="mt-1 text-sm text-zinc-400">Direct active state representation mapping from MongoDB cluster</p>
            </div>

            {services.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiActivity className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No medical services registered</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((srv) => (
                  <div key={srv._id} className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white text-lg leading-snug">{srv.name}</h3>
                      </div>

                      <div className="mt-3 overflow-hidden rounded-lg border border-zinc-800 h-36 w-full relative bg-zinc-950">
                        {srv.image_url ? (
                          <img src={srv.image_url} alt={srv.name} className="object-cover w-full h-full" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-600">
                            <FiCamera className="w-6 h-6" />
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-xs text-zinc-400 line-clamp-3 italic">"{srv.description}"</p>

                      {srv.facilities && srv.facilities.length > 0 && (
                        <div className="mt-4 space-y-1.5 border-t border-zinc-800/50 pt-3">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">Core Facilities:</span>
                          <div className="grid grid-cols-1 gap-1.5">
                            {srv.facilities.map((feat, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                                <FiCheck className="text-emerald-400 shrink-0 text-[11px]" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-zinc-800/40 pt-3 text-[11px] text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <FiClock className="text-emerald-400 shrink-0" />
                          <span className="truncate">{srv.timing || '24 Hours'}</span>
                        </div>
                        <div className="flex items-center gap-1.5 justify-end">
                          <FiPhone className="text-emerald-400 shrink-0" />
                          <span className="truncate text-zinc-300 font-medium">{srv.contact_number}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-2 border-t border-zinc-800/60 pt-3">
                      <button 
                        onClick={() => handleEdit(srv)}
                        className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium py-1.5 px-3 rounded-md transition-colors cursor-pointer"
                      >
                        <FiEdit2 className="w-3 h-3" /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(srv._id)}
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