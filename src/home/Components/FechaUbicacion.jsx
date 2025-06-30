import React from "react";

export default function FechaUbicacion() {
  return (
    <div className="mx-auto bg-white/80 dark:bg-gray-800/90 shadow-2xl max-w-md backdrop-blur-sm min-h-screen">
      <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"></div>

      {/* Fecha */}
      <div className="text-center bg-gradient-to-b p-10 from-white/90 to-purple-50/50 dark:from-gray-800/90 dark:to-purple-900/30 relative overflow-hidden">
        <div className="w-32 h-32 bg-purple-200/20 rounded-full absolute top-0 left-0 -translate-x-16 -translate-y-16"></div>
        <div className="w-24 h-24 bg-pink-200/20 rounded-full absolute bottom-0 right-0 translate-x-12 translate-y-12"></div>
        <div className="mb-6 relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r rounded-full items-center justify-center shadow-lg from-purple-400 to-pink-400 flex">
            <span className="text-3xl">🌸</span>
          </div>
        </div>
        <p
          style={{ fontFamily: "'Brush Script MT', cursive" }}
          className="text-3xl font-light text-transparent bg-gradient-to-r mb-8 bg-clip-text from-purple-600 to-pink-600"
        >
          Fecha:
        </p>
        <div className="bg-white/70 dark:bg-gray-700/50 rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-purple-100 dark:border-purple-800">
          <div className="text-purple-600 text-lg font-semibold tracking-wider mb-2 dark:text-purple-400 uppercase">
            SÁBADO
          </div>
          <div className="text-gray-700 text-xl font-light dark:text-gray-300">
            17 | MAYO | 2025
          </div>
        </div>
      </div>

      {/* Botón Google Calendar */}
      <div className="text-center bg-white/60 dark:bg-gray-800/60 p-8 relative">
        <div className="bg-gradient-to-r absolute inset-0 from-purple-100/20 to-pink-100/20 dark:from-purple-900/20 dark:to-pink-900/20"></div>
        <div className="relative">
          <div
            className="w-20 h-20 bg-gradient-to-br rounded-2xl items-center justify-center mx-auto mb-6 shadow-xl from-purple-500 to-purple-700 flex transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open("https://calendar.google.com", "_blank")}
          >
            <span className="text-white text-3xl font-bold">G</span>
          </div>
          <div className="text-sm text-gray-600 tracking-wide font-medium bg-white/50 dark:bg-gray-700/50 rounded-lg dark:text-gray-300 uppercase p-4 backdrop-blur-sm">
            CLICK AQUÍ PARA ACTIVAR
            <br />
            <span className="text-purple-600 font-semibold dark:text-purple-400">
              FECHA A TU GOOGLE CALENDAR
            </span>
          </div>
        </div>
      </div>

      {/* Ubicación */}
      <div className="text-center bg-gradient-to-b p-10 from-purple-50/50 to-white/90 dark:from-purple-900/30 dark:to-gray-800/90 relative overflow-hidden">
        <div className="w-28 h-28 bg-indigo-200/20 rounded-full absolute top-0 right-0 translate-x-14 -translate-y-14"></div>
        <div className="w-20 h-20 bg-purple-200/20 rounded-full absolute bottom-0 left-0 -translate-x-10 translate-y-10"></div>
        <div className="mb-6 relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r rounded-full items-center justify-center shadow-lg from-indigo-400 to-purple-500 flex">
            <span className="text-3xl">⛪</span>
          </div>
        </div>
        <p
          style={{ fontFamily: "'Brush Script MT', cursive" }}
          className="text-3xl font-light text-transparent bg-gradient-to-r mb-6 bg-clip-text from-indigo-600 to-purple-600"
        >
          Ubicación:
        </p>
        <div className="bg-white/80 dark:bg-gray-700/60 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-purple-100 dark:border-purple-800">
          <div className="text-purple-700 text-xl font-semibold tracking-wide mb-4 dark:text-purple-300 uppercase">
            IGLESIA LA MERCED
          </div>
          <div className="text-gray-600 text-sm leading-relaxed dark:text-gray-400 space-y-1">
            <div className="font-medium">6a Avenida Norte y</div>
            <div className="font-medium">1a Calle Poniente</div>
            <div className="text-indigo-600 font-semibold dark:text-indigo-400">
              Antigua Guatemala
            </div>
          </div>
        </div>
      </div>

      {/* Botón Waze */}
      <div className="text-center bg-white/60 dark:bg-gray-800/60 p-8 relative">
        <div className="bg-gradient-to-r absolute inset-0 from-indigo-100/20 to-purple-100/20 dark:from-indigo-900/20 dark:to-purple-900/20"></div>
        <div className="relative">
          <div
            className="w-20 h-20 bg-gradient-to-br rounded-2xl items-center justify-center mx-auto mb-6 shadow-xl from-blue-400 to-indigo-500 flex transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open("https://www.waze.com/ul", "_blank")}
          >
            <span className="text-white text-3xl font-bold">W</span>
          </div>
          <div className="text-sm text-gray-600 tracking-wide font-medium bg-white/50 dark:bg-gray-700/50 rounded-lg dark:text-gray-300 uppercase p-4 backdrop-blur-sm">
            CLICK AQUÍ PARA
            <br />
            <span className="text-indigo-600 font-semibold dark:text-indigo-400">
              LLEGAR CON WAZE
            </span>
          </div>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"></div>
    </div>
  );
}
