import React, { useEffect, useState } from "react";

function Timer() {
  const targetDate = new Date("2026-09-08T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
      finished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-blue-950
        via-blue-900
        to-teal-800
        text-white
        px-6
        py-14
        lg:px-12
        lg:py-20
      "
    >
      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>

      {/* Subtle Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)]
          bg-[length:24px_24px]
        "
      ></div>

      <div
        className="
          relative
          z-10
          container
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 text-center lg:text-left">

          <span
            className="
              text-sm
              sm:text-base
              uppercase
              tracking-[0.3em]
              text-teal-200
              font-semibold
            "
          >
            Tuesday • 8 September 2026
          </span>

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              leading-[1.05]
            "
          >
            Countdown to
            <span className="block text-teal-300">
              Term 3
            </span>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">

          <div
            className="
              w-full
              max-w-xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              p-5
              sm:p-8
              shadow-2xl
            "
          >
            {!timeLeft.finished ? (
              <>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {countdownItems.map((item) => (
                    <div
                      key={item.label}
                      className="
                        bg-black/20
                        border
                        border-white/10
                        rounded-2xl
                        py-5
                        sm:py-7
                        px-1
                        sm:px-2
                        text-center
                      "
                    >
                      <span
                        className="
                          block
                          text-2xl
                          sm:text-4xl
                          lg:text-5xl
                          font-bold
                        "
                      >
                        {String(item.value).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          block
                          mt-2
                          text-[9px]
                          sm:text-xs
                          uppercase
                          tracking-wider
                          text-white/60
                        "
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-10">
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-teal-200
                    mb-3
                  "
                >
                  Welcome Back
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                  Term 3 Has Begun
                </h2>

                <p className="text-white/70">
                  Wishing all our learners a productive final term
                  and success in their examinations.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timer;