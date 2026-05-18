"use client";

import React, { useEffect, useState } from 'react';
import { FiCamera, FiPlus, FiTrash2, FiAlertCircle, FiImage, FiFilter } from 'react-icons/fi';

interface IGalleryData {
  _id: string;
  title: string;
  category: 'icu' | 'ot' | 'ward' | 'exterior' | 'camps';
  image_url: string;
  image_id: string;
  createdAt: string;
}

const CATEGORIES: IGalleryData['category'][] = ['icu', 'ot', 'ward', 'exterior', 'camps'];

export default function GalleryManagement() {
  const [photos, setPhotos] = useState<IGalleryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<IGalleryData['category']>('icu');
  const [image, setImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPhotos();
  }, [selectedFilter]);

  async function fetchPhotos() {
    try {
      const url = selectedFilter === 'all' ? '/api/gallery' : `/api/gallery?category=${selectedFilter}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPhotos(data);
    } catch {
      setError("Failed to fetch gallery items");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, image })
      });

      if (!res.ok) throw new Error();

      setTitle('');
      setCategory('icu');
      setImage(null);
      const fileInput = document.getElementById('gallery-file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      fetchPhotos();
    } catch {
      setError("Upload failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      fetchPhotos();
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
              <FiPlus className="text-emerald-400" /> Add New Photo
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Photo Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Category</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value as IGalleryData['category'])} 
                  required 
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none cursor-pointer uppercase"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Select Image</label>
                <input 
                  id="gallery-file-input"
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange} 
                  required
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              {image && (
                <div className="mt-2 overflow-hidden rounded-lg border border-zinc-800 h-32 w-full relative bg-zinc-950">
                  <img src={image} alt="Preview" className="object-cover w-full h-full" />
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting || !image}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pt-2"
              >
                {isSubmitting ? 'Uploading...' : 'Upload To Gallery'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Hospital Gallery</h1>
                <p className="mt-1 text-sm text-zinc-400">View and organize gallery showcase imagery</p>
              </div>
              
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5">
                <FiFilter className="text-zinc-500 text-sm" />
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="bg-transparent text-xs font-medium text-zinc-300 focus:outline-none cursor-pointer uppercase"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {photos.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 py-16 text-center">
                <FiImage className="mx-auto h-12 w-12 text-zinc-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-200">No images inside this category</h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {photos.map((photo) => (
                  <div key={photo._id} className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 aspect-square flex flex-col justify-between">
                    
                    <div className="w-full h-full absolute inset-0 bg-zinc-950">
                      <img src={photo.image_url} alt={photo.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90"></div>

                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-zinc-900/90 text-emerald-400 border border-zinc-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm">
                        {photo.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-2">
                      <p className="text-xs font-semibold text-white truncate drop-shadow-md">{photo.title}</p>
                      <button 
                        onClick={() => handleDelete(photo._id)}
                        className="p-2 bg-rose-950/80 hover:bg-rose-900 text-rose-400 rounded-lg border border-rose-900/40 transition-colors cursor-pointer shrink-0"
                        title="Delete Image"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" />
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