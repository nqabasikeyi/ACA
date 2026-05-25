import React, { useEffect, useState } from "react";

function Timer() {
  const targetDate = new Date("2026-05-29T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-3 mb-3 px-4 py-10 lg:py-14 text-white overflow-hidden bg-gradient-to-r from-green-800 via-yellow-700 to-red-800">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 african-pattern"></div>

      {/* Soft Animated Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-soft-float"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-red-500/30 rounded-full blur-3xl animate-soft-float-delay"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3 text-center lg:text-left max-w-2xl">
          <span className="text-sm lg:text-base uppercase tracking-widest opacity-90">
            Africa Day Celebrations — 29 May 2026
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Celebrating African Heritage, <br />
            Unity, Culture & Pride 🌍
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-3">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Sec", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={`${item.label}-${item.value}`}
              className="bg-black/25 border border-white/25 backdrop-blur px-4 py-3 rounded-xl text-center shadow-lg min-w-[70px] animate-count-pop"
            >
              <p className="text-xl lg:text-2xl font-bold">{item.value}</p>
              <p className="text-xs uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timer;
