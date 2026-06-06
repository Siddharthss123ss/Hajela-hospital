"use client";

import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function ChangePasswordPage() {
  // Form Input States
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggles and UI Feedbacks
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Basic Validation
    if (newPassword.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters long." });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match. Please verify." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/setup", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessage({ type: "success", text: data.message || "Password updated successfully!" });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to update password." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#090b0f] pt-24 pb-16 flex items-center justify-center px-4 antialiased">
      <div className="w-full max-w-lg relative z-10 mx-auto">
        
        {/* TOP / HEADER */}
        <div className="text-center mb-8">
          <p className="text-blue-500 uppercase tracking-wider text-xs font-semibold mb-2">
            Security & Authentication
          </p>

          <h1 className="text-xl font-semibold text-white tracking-wide">
            Account Security Configuration
          </h1>

          <p className="mt-2 max-w-sm mx-auto text-zinc-400 text-xs leading-relaxed">
            Update administrative access keys down into the encrypted security directory.
          </p>
        </div>

        {/* CONTAINER CARD */}
        <div className="rounded-md border border-zinc-800/80 bg-[#11141a] p-6 shadow-xl">
          
          {/* STATUS ALERTS */}
          {message && (
            <div
              className={`mb-5 p-3 rounded-md text-xs font-medium border text-center transition-all ${
                message.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/20 text-rose-400"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* FORM SETUP */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* OLD PASSWORD FIELD */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Current Admin Password
              </label>
              <div className="relative">
                <input
                  type={showOldPassword ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] py-2 pl-3.5 pr-10 text-sm text-white placeholder-zinc-700 focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-40"
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showOldPassword ? <FiEyeOff className="w-3.5 h-3.5" /> : <FiEye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* NEW PASSWORD FIELD */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                New Admin Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] py-2 pl-3.5 pr-10 text-sm text-white placeholder-zinc-700 focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-40"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showNewPassword ? <FiEyeOff className="w-3.5 h-3.5" /> : <FiEye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-zinc-800 bg-[#090b0f] py-2 pl-3.5 pr-10 text-sm text-white placeholder-zinc-700 focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-40"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff className="w-3.5 h-3.5" /> : <FiEye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2.5 px-4 rounded-md transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span>Applying Overrides...</span>
                  </>
                ) : (
                  <>
                    <FiLock className="w-3.5 h-3.5" />
                    <span>Apply Security Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}