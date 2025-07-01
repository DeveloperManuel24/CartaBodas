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
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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
    <div className="mx-auto relative max-w-md">
      {/* Esferas decorativas */}
      <div className="w-20 h-20 bg-emerald-200 dark:bg-emerald-300 rounded-full absolute -top-6 -right-6 opacity-60"></div>
      <div className="w-16 h-16 bg-yellow-200 dark:bg-yellow-300 rounded-full absolute -bottom-4 -left-4 opacity-50"></div>

      {/* Tarjeta principal */}
      <div
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="eucalyptus" patternUnits="userSpaceOnUse" width="40" height="40"><ellipse cx="20" cy="10" rx="8" ry="4" fill="none" stroke="%235d7c5e" stroke-width="0.5" opacity="0.2"/><ellipse cx="20" cy="30" rx="6" ry="3" fill="none" stroke="%235d7c5e" stroke-width="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23eucalyptus)"/></svg>')`,
        }}
        className="bg-white shadow-2xl text-center relative z-10 p-10 border border-gray-200 dark:bg-white"
      >
        {/* SVG decorativos */}
        <div className="w-12 h-12 absolute top-4 left-4 opacity-40">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-500">
            <path d="M50,10 Q70,30 50,50 Q30,30 50,10 M50,50 Q70,70 50,90 Q30,70 50,50"></path>
          </svg>
        </div>
        <div className="w-12 h-12 absolute top-4 right-4 opacity-40">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-500">
            <path d="M50,10 Q70,30 50,50 Q30,30 50,10 M50,50 Q70,70 50,90 Q30,70 50,50"></path>
          </svg>
        </div>

        {/* Nombres */}
        <div className="mb-10">
          <p className="text-5xl text-emerald-700 mb-3 italic font-sans dark:text-emerald-800">
            Mario
          </p>
          <div className="items-center justify-center mb-3 flex">
            <div className="w-8 h-px bg-yellow-500"></div>
            <p className="text-sm text-stone-600 mx-4 tracking-widest italic font-sans dark:text-stone-700">
              &
            </p>
            <div className="w-8 h-px bg-yellow-500"></div>
          </div>
          <p className="text-5xl text-emerald-700 italic font-sans dark:text-emerald-800">
            Andrea
          </p>
        </div>

        {/* Mensaje */}
        <div className="mb-10">
          <p className="text-base text-stone-700 mb-2 italic font-sans dark:text-stone-800">
            Junto con sus familias
          </p>
          <p className="text-lg text-stone-800 italic font-sans dark:text-stone-900">
            solicitan el honor de su presencia
          </p>
          <p className="text-base text-stone-700 italic font-sans dark:text-stone-800">
            en su celebración de matrimonio
          </p>
        </div>

        {/* Fecha */}
        <div className="mb-10">
          <div className="bg-white dark:bg-emerald-50 inline-block border-2 border-yellow-400 dark:border-yellow-500 p-6">
            <p className="text-sm text-stone-600 tracking-widest mb-1 italic font-sans dark:text-stone-700">
              SÁBADO
            </p>
            <p className="text-4xl text-yellow-600 mb-1 italic font-sans dark:text-yellow-700">
              17
            </p>
            <p className="text-lg text-emerald-700 mb-1 italic font-sans dark:text-emerald-800">
              Mayo
            </p>
            <p className="text-2xl text-stone-800 italic font-sans dark:text-stone-900">
              2025
            </p>
            <div className="w-16 h-px bg-yellow-500 mx-auto my-3"></div>
            <p className="text-sm text-stone-600 italic font-sans dark:text-stone-700">
              4:00 de la tarde
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-2 justify-center">
            {[
              { label: "DÍAS", value: timeLeft.days },
              { label: "HRS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEG", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xl font-semibold text-emerald-700 italic font-sans dark:text-emerald-800">
                  {item.value}
                </div>
                <div className="text-xs text-stone-600 uppercase italic font-sans dark:text-stone-700">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dirección */}
        <div className="mb-8">
          <p className="text-base text-stone-700 font-semibold italic font-sans dark:text-stone-800">
            Calle Cualquiera 123
          </p>
          <p className="text-base text-stone-700 italic font-sans dark:text-stone-800">
            Ciudad Ejemplo
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-emerald-200 dark:border-emerald-300">
          <p className="text-sm text-emerald-700 italic font-sans dark:text-emerald-800">
            Cena y baile al finalizar
          </p>
        </div>

        {/* Esferitas pequeñas */}
        <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-1/4 right-8 opacity-60"></div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full absolute bottom-1/4 left-8 opacity-60"></div>
        <div className="w-1 h-1 bg-yellow-500 rounded-full absolute top-3/4 right-12 opacity-70"></div>
      </div>
    </div>
  );
}
