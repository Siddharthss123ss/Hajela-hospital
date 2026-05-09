"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

export default function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
      fixed
      right-6
      bottom-28
      z-50
      w-14
      h-14
      rounded-full
      bg-blue-900
      text-white
      flex
      items-center
      justify-center
      shadow-2xl
      transition-all
      duration-300
      hover:scale-110
      ${
        show
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }
      `}
    >

      <ChevronUp size={28} />

    </button>
  );
}