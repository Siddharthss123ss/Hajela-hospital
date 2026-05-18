"use client";

import React, { useEffect, useState } from 'react';
import { FiActivity, FiPlus, FiTrash2, FiEdit2, FiAlertCircle, FiCheck, FiLayers, FiStar, FiCamera } from 'react-icons/fi';

interface IServiceData {
  _id: string;
  title: string;
  description: string;
  features: string[];
  image_url?: string;
  is_featured: boolean;
}

export default function ServiceManagement() {
  const [services, setServices] = useState<IServiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await fetch('/api/services');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setServices(data);
    } catch {
      setError("Failed to fetch medical services");
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
    setFeatures('');
    setIsFeatured(false);
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const featuresArray = features.split(',').map(f => f.trim()).filter(Boolean);
    const payload = {
      title,
      description,
      features: featuresArray,
      is_featured: isFeatured,
      ...(image && { image })
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
      setError("Operation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (srv: IServiceData) => {
    setEditingId(srv._id);
    setTitle(srv.title);
    setDescription(srv.description);
    setFeatures(srv.features.join(', '));
    setIsFeatured(srv.is_featured);
    setImage(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchServices();
    } catch {
      setError("Delete failed");
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
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {editingId ? <FiEdit2 className="text-emerald-400" /> : <FiPlus className="text-emerald-400" />}
              {editingId ? 'Update Service' : 'Add Service'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Service Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
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
                  rows={4}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Key Features (Comma Separated)</label>
                <input 
                  type="text" 
                  value={features} 
                  onChange={(e) => setFeatures(e.target.value)} 
                  placeholder="24 Hour Lab, Expert Surgeons, Post-op Care"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Service Image</label>
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
                  id="featured"
                  checked={isFeatured} 
                  onChange={(e) => setIsFeatured(e.target.checked)} 
                  className="h-4 w-4 rounded border-zinc-800 bg-zinc-950 text-emerald-500 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="featured" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                  Highlight as Featured Service
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
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Our Medical Services</h1>
              <p className="mt-1 text-sm text-zinc-400">View and manage clinical treatment offerings</p>
            </div>

            {services.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiActivity className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No medical services configured</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((srv) => (
                  <div key={srv._id} className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white text-lg">{srv.title}</h3>
                        {srv.is_featured && (
                          <span className="flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            <FiStar className="fill-amber-400 text-[9px]" /> Featured
                          </span>
                        )}
                      </div>

                      <div className="mt-3 overflow-hidden rounded-lg border border-zinc-800 h-36 w-full relative bg-zinc-950">
                        {srv.image_url ? (
                          <img src={srv.image_url} alt={srv.title} className="object-cover w-full h-full" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-600">
                            <FiCamera className="w-6 h-6" />
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-sm text-zinc-400 line-clamp-3">{srv.description}</p>

                      {srv.features.length > 0 && (
                        <div className="mt-4 space-y-1.5">
                          {srv.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                              <FiCheck className="text-emerald-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
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