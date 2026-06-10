"use client";
import React, { useState } from 'react';
import {
  LayoutDashboard, Layers, UserCheck,
  HelpCircle, Star, Image, Activity, LogOut, Menu, X,
  Wrench,
  Trophy,
  Key
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
    { name: 'Awards', icon: <Trophy size={18} />, href: '/admin/dashboard/awards' },
    // { name: 'Enquiries', icon: <HelpCircle size={18} />, href: '/admin/dashboard/enquiries' },
    // { name: 'Reviews', icon: <Star size={18} />, href: '/admin/dashboard/reviews' },
    { name: 'Gallery', icon: <Image size={18} />, href: '/admin/dashboard/gallery' },
    { name: 'Services', icon: <Wrench size={18} />, href: '/admin/dashboard/services' },
    { name: 'Password', icon: <Key size={18} />, href: '/admin/dashboard/change-password' },
  ];

  return (
    <div className="min-h-screen bg-[#090b0f] text-zinc-100 antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Mobile Navbar */}
      <header className="lg:hidden flex items-center justify-between px-5 py-4 bg-[#11141a] border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Activity className="text-blue-500" size={20} />
          <span className="font-semibold text-sm tracking-wide text-white">Hajela Hospital</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-zinc-400 hover:text-white cursor-pointer p-1">
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-60 bg-[#11141a] border-r border-zinc-800/80 transform lg:transform-none lg:opacity-100 transition-all duration-200 ease-in-out flex flex-col justify-between
          ${sidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full lg:translate-x-0'}`}>

          <div>
            {/* Header Identity */}
            <div className="hidden lg:flex items-center gap-3 px-5 py-5 border-b border-zinc-800/60">
              <Activity className="text-blue-500" size={22} />
              <div>
                <h1 className="font-semibold text-sm text-white tracking-wide">Hajela Hospital</h1>
                <p className="text-[11px] text-zinc-400">Admin Dashboard</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="p-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/40 border border-transparent hover:border-zinc-800/40 transition-all text-sm font-medium"
                >
                  <span className="text-zinc-500 transition-colors">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* User Status / Logout */}
          <div className="p-4 border-t border-zinc-800/60 bg-[#141820]">
            <div className="flex items-center justify-between gap-2">
              <div className="truncate">
                <p className="text-xs font-medium text-zinc-200 truncate">admin@hajela.com</p>
                <span className="text-[10px] text-zinc-400">Authorized Session</span>
              </div>
              <button 
                onClick={handleLogout}
                className="p-2 text-zinc-400 hover:text-rose-400 hover:bg-rose-950/20 rounded-md transition-colors cursor-pointer flex-shrink-0"
                title="Sign Out"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile active drawer */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
        )}

        {/* Main Operational View Space */}
        <main className="flex-1 min-h-screen lg:pl-60 w-full bg-[#090b0f]">
          <div className="p-5 lg:p-8 max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}