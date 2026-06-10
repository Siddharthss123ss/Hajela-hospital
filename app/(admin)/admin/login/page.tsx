"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Mail, Lock, Loader2, AlertCircle } from "lucide-react"; 

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090b0f] px-4 antialiased selection:bg-blue-500/30 selection:text-white">
      <div className="w-full max-w-md z-10">
        <form
          onSubmit={handleLogin}
          className="bg-[#11141a] border border-zinc-800/80 rounded-md p-6 shadow-xl space-y-5"
        >
          {/* Header */}
          <div className="text-center space-y-1.5">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              Admin Portal
            </h1>
            <p className="text-zinc-400 text-xs">
              Hajela Hospital Management System
            </p>
          </div>

          <hr className="border-zinc-800/80" />

          {/* Error Message */}
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs p-3 rounded-md flex items-center gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-400 block">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors duration-200" />
                <input
                  type="email"
                  placeholder="enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#090b0f] border border-zinc-800 rounded-md py-2 pl-10 pr-4 text-sm text-white placeholder-zinc-700 outline-none focus:border-blue-500 transition-colors duration-200"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-400 block">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors duration-200" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#090b0f] border border-zinc-800 rounded-md py-2 pl-10 pr-4 text-sm text-white placeholder-zinc-700 outline-none focus:border-blue-500 transition-colors duration-200"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none text-white rounded-md py-2.5 text-xs font-medium tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        {/* Footer/Security Text */}
        <p className="text-center text-zinc-600 text-xs mt-5 tracking-wide">
          Secured with SSL encryption • Authorized personnel only
        </p>
      </div>
    </div>
  );
}