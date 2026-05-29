import React from "react";

function Timer() {
  return (
    <div className="relative mt-3 mb-3 px-4 py-10 lg:py-14 text-white overflow-hidden bg-gradient-to-r from-emerald-900 via-amber-600 to-red-800">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 african-pattern"></div>

      {/* Soft Animated Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-soft-float"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-soft-float-delay"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3 text-center lg:text-left max-w-2xl">
          <span className="text-sm lg:text-base uppercase tracking-widest opacity-90">
            Africa Day Celebrations — Happening Today
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Celebrating African Heritage, <br />
            Unity, Culture & Pride 🌍
          </h1>

          <p className="text-white/90 text-base lg:text-lg max-w-xl">
            Join us as Amazon Christian Academy celebrates Africa Day through
            culture, colour, music, food, and community.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-black/25 border border-white/25 backdrop-blur px-6 py-5 rounded-2xl text-center shadow-lg max-w-sm">
          <p className="text-sm uppercase tracking-widest text-yellow-200">
            Event Status
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            We Are Live 🎉
          </h2>

          <p className="text-white/85 mt-2 text-sm lg:text-base">
            Africa Day celebrations are taking place today at Amazon Christian
            Academy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
