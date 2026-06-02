"use client";

import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function ChangePasswordPage() {
  // Form Input States
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggles and UI Feedbacks
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
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      // Success state configuration - Multiple changes allowed: values cleared instantly
      setMessage({ type: "success", text: data.message || "Password updated successfully!" });
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to update password." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-b
      from-[#020617]
      via-black
      to-[#020617]
      pt-32
      pb-24
      overflow-hidden
      flex
      items-center
      justify-center
      px-4
      "
    >
      {/* PREMIUM CYAN GLOW (Same as Awards Page) */}
      <div
        className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
        pointer-events-none
        "
      ></div>

      <div className="w-full max-w-2xl relative z-10 mx-auto">
        {/* TOP / HEADER (Same as Awards Page Typography Style) */}
        <div className="text-center mb-14">
          <p
            className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
            font-semibold
            mb-5
            "
          >
            Security & Authentication
          </p>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-black
            text-white
            leading-tight
            "
          >
            Account Security
          </h1>

          <p
            className="
            mt-6
            max-w-lg
            mx-auto
            text-slate-300
            text-sm
            md:text-base
            leading-relaxed
            "
          >
            Update your administrative credentials securely below. Multiple system overrides are fully permitted.
          </p>
        </div>

        {/* CONTAINER CARD (Exactly matching Awards Grid Card Design) */}
        <div
          className="
          rounded-[34px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          p-8
          md:p-12
          "
        >
          {/* STATUS ALERTS */}
          {message && (
            <div
              className={`mb-8 p-4 rounded-xl text-sm font-medium border text-center transition-all ${
                message.type === "success"
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
                  : "bg-rose-500/15 border-rose-500/30 text-rose-300"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* FORM SETUP */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NEW PASSWORD FIELD */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-[2px] mb-3">
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
                  className="
                  w-full 
                  rounded-xl 
                  border 
                  border-white/10 
                  bg-black/50 
                  py-3.5 
                  pl-5 
                  pr-12 
                  text-sm 
                  text-white 
                  placeholder-slate-700 
                  focus:border-cyan-400/40 
                  focus:outline-none 
                  transition-all 
                  disabled:opacity-50
                  "
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showNewPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-[2px] mb-3">
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
                  className="
                  w-full 
                  rounded-xl 
                  border 
                  border-white/10 
                  bg-black/50 
                  py-3.5 
                  pl-5 
                  pr-12 
                  text-sm 
                  text-white 
                  placeholder-slate-700 
                  focus:border-cyan-400/40 
                  focus:outline-none 
                  transition-all 
                  disabled:opacity-50
                  "
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON WITH GRADIENT ACCENT STRIP */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full 
                bg-gradient-to-r 
                from-cyan-500 
                to-blue-600 
                hover:from-cyan-400 
                hover:to-blue-500 
                text-white 
                font-bold 
                text-sm 
                py-4 
                px-6 
                rounded-xl 
                transition-all 
                duration-300 
                transform 
                active:scale-[0.99] 
                disabled:opacity-50 
                shadow-[0_4px_30px_rgba(6,182,212,0.2)]
                flex 
                items-center 
                justify-center 
                gap-2 
                cursor-pointer
                "
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span>Re-configuring Access Keys...</span>
                  </>
                ) : (
                  <>
                    <FiLock className="w-4 h-4" />
                    <span>Apply Security Changes</span>
                  </>
                )}
              </button>

              {/* AWARDS MATCHING DECORATIVE BOTTOM ACCENT LINE */}
              <div
                className="
                mt-8 
                mx-auto
                w-24 
                h-[3px] 
                rounded-full 
                bg-gradient-to-r 
                from-cyan-400 
                to-blue-600
                "
              ></div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}