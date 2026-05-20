// src/app/(admin)/layout.tsx

import React from "react";

export const metadata = {
  title: "Hajela Hospital - Admin Terminal",
  description: "Internal Core Operations Management Engine",
};

export default function AdminGroupRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 antialiased selection:bg-emerald-500 selection:text-black">
      {children}
    </div>
  );
}