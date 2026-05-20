"use client";
import React, { useState } from 'react';
import {
  LayoutDashboard, Layers, UserCheck, Calendar,
  HelpCircle, Star, Image, Activity, LogOut, Menu, X,
  Toolbox
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleLogout() {
    await fetch(
      "/api/admin/logout",
      {
        method: "POST",
      }
    );

    window.location.href =
      "/admin/login";
  }

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '/admin/dashboard' },
    { name: 'Departments', icon: <Layers size={18} />, href: '/admin/dashboard/departments' },
    { name: 'Doctors', icon: <UserCheck size={18} />, href: '/admin/dashboard/doctors' },
    { name: 'Appointments', icon: <Calendar size={18} />, href: '/admin/dashboard/appointments' },
    { name: 'Enquiries', icon: <HelpCircle size={18} />, href: '/admin/dashboard/enquiries' },
    { name: 'Reviews', icon: <Star size={18} />, href: '/admin/dashboard/reviews' },
    { name: 'Gallery', icon: <Image size={18} />, href: '/admin/dashboard/gallery' },
    { name: 'Services', icon: <Toolbox size={18} />, href: '/admin/dashboard/services' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 font-mono selection:bg-emerald-500 selection:text-black">
      {/* Top Mobile Navbar */}
      <header className="lg:hidden flex items-center justify-between px-6 py-4 bg-[#111115] border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Activity className="text-emerald-500 animate-pulse" size={22} />
          <span className="font-bold tracking-widest text-sm">HAJELA.ADM</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-zinc-400 hover:text-white cursor-pointer">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111115] border-r border-zinc-800 transform lg:transform-none lg:opacity-100 transition-all duration-300 ease-in-out flex flex-col justify-between
          ${sidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full lg:translate-x-0'}`}>

          <div>
            {/* Header Identity */}
            <div className="hidden lg:flex items-center gap-3 px-6 py-6 border-b border-zinc-800/60">
              <Activity className="text-emerald-400" size={24} />
              <div>
                <h1 className="font-bold tracking-wider text-sm text-white">HAJELA HOSPITAL</h1>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Core Engine v1.0</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded text-zinc-400 hover:text-emerald-400 hover:bg-[#16161f] border border-transparent hover:border-zinc-800/50 transition-all text-xs tracking-wide"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* User Status / Logout */}
          <div className="p-4 border-t border-zinc-800/60 bg-[#0e0e12]">
            <div className="flex items-center justify-between">
              <div className="truncate pr-2">
                <p className="text-xs font-semibold text-zinc-300 truncate">admin@hajela.com</p>
                <span className="text-[9px] text-emerald-500 tracking-widest uppercase">Root Access</span>
              </div>
              <button className="p-2 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/20 rounded transition-colors cursor-pointer">
                <LogOut onClick={handleLogout} size={16} />
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile active drawer */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden" />
        )}

        {/* Main Operational View Space */}
        <main className="flex-1 min-h-screen lg:pl-64 w-full bg-[#09090b]">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}