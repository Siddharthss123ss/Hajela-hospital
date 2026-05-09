"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      flex
      items-center
      justify-center
      shadow-2xl
      hover:scale-110
      transition-all
      duration-300
      animate-bounce
      "
    >

      <FaWhatsapp
        size={34}
        className="text-white"
      />

    </a>
  );
}