"use client";

import { PhoneCall } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+919876543210"
      className="
      fixed
      bottom-28
      left-6
      z-50
      w-16
      h-16
      rounded-full
      bg-red-600
      flex
      items-center
      justify-center
      shadow-2xl
      hover:scale-110
      transition-all
      duration-300
      "
    >

      <PhoneCall
        size={30}
        className="text-white"
      />

    </a>
  );
}