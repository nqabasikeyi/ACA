import React from "react";

import africaDay1 from "../assets/africa-day/africa-day-1.jpg";
import africaDay2 from "../assets/africa-day/africa-day-2.jpg";
import africaDay3 from "../assets/africa-day/africa-day-3.jpg";
import africaDay4 from "../assets/africa-day/africa-day-4.jpg";

function Timer() {
  const africaDayImages = [africaDay1, africaDay2, africaDay3, africaDay4];

  return (
    <section className="relative mt-3 mb-3 px-4 py-10 lg:py-14 text-white overflow-hidden bg-gradient-to-r from-emerald-950 via-amber-700 to-red-900">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 african-pattern"></div>

      {/* Soft Animated Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-soft-float"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-soft-float-delay"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="text-sm lg:text-base uppercase tracking-widest text-yellow-100">
            Africa Day 2026 Recap
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Celebrating Culture, Unity <br />
            and African Pride
          </h1>

          <p className="text-white/90 text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
            Amazon Christian Academy proudly celebrated Africa Day with colour,
            culture, music, traditional attire, and joyful moments shared by our
            learners, staff, and school community.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
            <span className="bg-black/25 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">
              Cultural Displays
            </span>
            <span className="bg-black/25 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">
              Traditional Attire
            </span>
            <span className="bg-black/25 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">
              Music & Dance
            </span>
          </div>
        </div>

       {/* RIGHT SIDE IMAGE STRIP */}
<div className="w-full">
  {/* Mobile: swipe gallery */}
  <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory lg:hidden">
    {africaDayImages.slice(0, 4).map((image, index) => (
      <div
        key={index}
        className="min-w-[82%] snap-center aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-white/20 bg-black/20"
      >
        <img
          src={image}
          alt={`Africa Day celebration ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* Desktop: 2x2 grid */}
  <div className="hidden lg:grid grid-cols-2 gap-3">
    {africaDayImages.slice(0, 4).map((image, index) => (
      <div
        key={index}
        className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-white/20 bg-black/20"
      >
        <img
          src={image}
          alt={`Africa Day celebration ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>
       
      </div>
    </section>
  );
}

export default Timer;