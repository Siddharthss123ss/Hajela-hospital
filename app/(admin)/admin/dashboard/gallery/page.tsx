"use client";

import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiAlertCircle,
  FiImage,
  FiFilter,
} from "react-icons/fi";

interface IGalleryData {
  _id: string;
  title: string;
  category: "event" | "videos" | "news";
  image_url: string;
  image_id: string;
  createdAt: string;
}

const CATEGORIES: IGalleryData["category"][] = [
  "event",
  "videos",
  "news",
];

export default function GalleryManagement() {
  const [photos, setPhotos] = useState<IGalleryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<IGalleryData["category"]>("event");
  const [image, setImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPhotos();
  }, [selectedFilter]);

  async function fetchPhotos() {
    try {
      setLoading(true);
      const url =
        selectedFilter === "all"
          ? "/api/gallery"
          : `/api/gallery?category=${selectedFilter}`;

      const res = await fetch(url, {
        cache: "no-store",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch gallery records");
      }

      setPhotos(data);
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Failed to retrieve media library items.");
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

    if (!image) {
      setError("Please select a media resource file.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          image,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload process failed.");
      }

      setTitle("");
      setCategory("event");
      setImage(null);

      const fileInput = document.getElementById("gallery-file-input") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }

      await fetchPhotos();
    } catch (err: any) {
      console.log(err);
      setError(err.message || "File upload failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this media asset?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Removal transaction failed.");
      }

      await fetchPhotos();
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Failed to finalize asset removal.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-[#090b0f] text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading media indexes...</p>
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
          
          {/* Upload Section */}
          <div className="rounded-md border border-zinc-800/80 bg-[#11141a] p-5 h-fit">
            <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <FiPlus className="text-blue-500" />
              Add Gallery Image
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Image Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="e.g. Annual Symposium Opening"
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none placeholder-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Classification Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as IGalleryData["category"])}
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] p-2 text-sm text-white focus:border-blue-500 focus:outline-none cursor-pointer uppercase h-[38px]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Select Media File
                </label>
                <input
                  id="gallery-file-input"
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleImageChange}
                  required
                  className="w-full text-xs text-zinc-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-zinc-800 file:text-zinc-200 file:cursor-pointer hover:file:bg-zinc-700"
                />
              </div>

              {image && (
                <div className="overflow-hidden rounded-md border border-zinc-800 h-32 bg-[#090b0f]">
                  <img
                    src={image}
                    alt="Upload Preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !image}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2 px-3 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Uploading file..." : "Commit Asset"}
              </button>
            </form>
          </div>

          {/* Gallery View */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-xl font-semibold tracking-wide text-white">
                  Media Library Hub
                </h1>
                <p className="mt-0.5 text-xs text-zinc-400">
                  Broadcast administrative assets across news, clips, and milestone schedules.
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-[#11141a] px-3 py-1.5">
                <FiFilter className="text-zinc-500 text-sm" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="bg-transparent text-xs font-medium text-zinc-300 focus:outline-none cursor-pointer uppercase"
                >
                  <option value="all">All Channels</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {photos.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-zinc-800 bg-[#11141a]/50 py-12 text-center">
                <FiImage className="mx-auto h-8 w-8 text-zinc-600" />
                <h3 className="mt-3 text-xs font-medium text-zinc-400">
                  No active collection media logged
                </h3>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {photos.map((photo) => (
                  <div
                    key={photo._id}
                    className="group relative aspect-square overflow-hidden rounded-md border border-zinc-800 bg-[#11141a]"
                  >
                    <img
                      src={photo.image_url}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded-md border border-zinc-800 bg-[#090b0f]/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-400">
                        {photo.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 flex items-center justify-between p-3.5">
                      <p className="truncate text-xs font-medium text-white pr-2">
                        {photo.title}
                      </p>

                      <button
                        onClick={() => handleDelete(photo._id)}
                        className="rounded-md border border-rose-900/40 bg-rose-950/80 p-1.5 text-rose-400 transition-colors hover:bg-rose-900 shrink-0 cursor-pointer"
                      >
                        <FiTrash2 className="h-3 w-3" />
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