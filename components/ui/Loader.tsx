"use client";

export default function Loader() {
  return (
    <div
      className="
      fixed
      inset-0
      z-[999]
      bg-slate-950
      flex
      items-center
      justify-center
      "
    >

      <div className="text-center">

        {/* SPINNER */}

        <div
          className="
          w-20
          h-20
          border-4
          border-cyan-400
          border-t-transparent
          rounded-full
          animate-spin
          mx-auto
          "
        ></div>

        {/* TEXT */}

        <h2 className="text-white text-3xl font-bold mt-8">
          Hajela Hospital
        </h2>

        <p className="text-slate-400 mt-3">
          Advanced Healthcare Services
        </p>

      </div>

    </div>
  );
}