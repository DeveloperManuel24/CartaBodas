import React, { useEffect, useState } from "react";

export default function InvitacionPrincipal() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const weddingDate = new Date("2025-05-17T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center px-2 sm:px-4">
      <div className="w-full max-w-md text-center space-y-6 py-6">
        {/* Encabezado */}
        <div className="space-y-2">
          <p className="text-purple-600 text-base sm:text-lg">
            Ha llegado
          </p>
          <p className="text-purple-600 text-base sm:text-lg">
            nuestro momento...
          </p>
          <p className="text-purple-700 text-lg sm:text-xl font-semibold">
            ¡NOS CASAMOS!
          </p>
        </div>

        {/* Nombres */}
        <div className="space-y-2">
          <div className="flex justify-center">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
            </svg>
          </div>
          <p className="text-4xl sm:text-5xl font-script text-blue-500">
            Zaira
          </p>
          <p className="text-pink-500 text-xl">&</p>
          <p className="text-4xl sm:text-5xl font-script text-blue-500">
            Josué
          </p>
          <div className="flex justify-center">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
            </svg>
          </div>
        </div>

        {/* Fecha */}
        <div className="border-t border-b border-purple-200 py-3">
          <p className="text-purple-600 text-lg font-semibold tracking-wide">
            17 | MAYO | 2025
          </p>
        </div>

        {/* Contador */}
        <div>
          <div className="grid grid-cols-4 gap-2 justify-center">
            {[
              { label: "DÍAS", value: timeLeft.days },
              { label: "HRS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEG", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xl font-semibold text-purple-600">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
