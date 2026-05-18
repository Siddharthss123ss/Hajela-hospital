"use client";
import React, { useState } from 'react';
import { ShieldAlert, Terminal, AlertCircle, CheckCircle } from 'lucide-react';

export default function AdminSetup() {
  const [form, setForm] = useState({ email: '', password: '', secret_key: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Execution failed");
      }

      setStatus({ type: 'success', msg: "System admin registered successfully." });
      setForm({ email: '', password: '', secret_key: '' });
    } catch (err: any) {
      setStatus({ type: 'error', msg: err.message || "An unexpected error occurred" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] flex items-center justify-center p-4 font-mono text-zinc-300">
      <div className="w-full max-w-md bg-[#0f0f12] border border-zinc-800 p-6 shadow-2xl relative overflow-hidden rounded">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500" />
        
        <div className="flex items-center gap-3 mb-6">
          <ShieldAlert className="text-amber-500" size={24} />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">System Deployment</h2>
            <p className="text-[10px] text-zinc-500">Initialize Primary Admin Credentials</p>
          </div>
        </div>

        {status && (
          <div className={`mb-4 flex items-start gap-2.5 p-3 text-xs border rounded ${
            status.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
          }`}>
            {status.type === 'success' ? <CheckCircle size={16} className="shrink-0 mt-0.5" /> : <AlertCircle size={16} className="shrink-0 mt-0.5" />}
            <p>{status.msg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-zinc-500 mb-1">Root Email</label>
            <input 
              type="email" 
              placeholder="root@domain.local" 
              value={form.email}
              required 
              className="w-full bg-[#141418] border border-zinc-800 focus:border-amber-500 outline-none px-3 py-2 text-xs text-white transition-colors" 
              onChange={e => setForm({...form, email: e.target.value})} 
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-zinc-500 mb-1">Cipher Password</label>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              value={form.password}
              required 
              className="w-full bg-[#141418] border border-zinc-800 focus:border-amber-500 outline-none px-3 py-2 text-xs text-white transition-colors" 
              onChange={e => setForm({...form, password: e.target.value})} 
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-zinc-500 mb-1">Environment Setup Secret</label>
            <input 
              type="password" 
              placeholder="ADMIN_SETUP_KEY" 
              value={form.secret_key}
              required 
              className="w-full bg-[#141418] border border-zinc-800 focus:border-amber-500 outline-none px-3 py-2 text-xs text-white transition-colors" 
              onChange={e => setForm({...form, secret_key: e.target.value})} 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-amber-600/10 hover:bg-amber-600 border border-amber-500/30 hover:border-amber-400 text-amber-400 hover:text-black font-bold uppercase tracking-widest text-xs py-2.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Terminal size={14} className={isSubmitting ? "animate-spin" : ""} /> 
            {isSubmitting ? "Executing Sequence..." : "Execute Setup Sequence"}
          </button>
        </form>
      </div>
    </div>
  );
}