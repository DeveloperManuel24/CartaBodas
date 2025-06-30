import React from "react";

export default function CeremoniaRecepcion() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md overflow-hidden border border-pink-100 dark:border-gray-700">
        {/* Sección superior */}
        <div className="text-center py-8 px-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          {/* CEREMONIA */}
          <div className="items-center text-sm text-purple-600 tracking-wider mb-3 font-semibold inline-flex gap-2 dark:text-purple-300 uppercase">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12l-2-2 2-2 2 2-2 2z"></path>
            </svg>
            CEREMONIA
          </div>
          <div className="text-3xl text-purple-700 font-bold mb-8 bg-white dark:bg-gray-800 rounded-lg py-3 px-6 shadow-sm dark:text-purple-400">
            15:45 hrs.
          </div>
          {/* RECEPCIÓN */}
          <div className="items-center text-sm text-purple-600 tracking-wider mb-3 font-semibold inline-flex gap-2 dark:text-purple-300 uppercase">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
            RECEPCIÓN
          </div>
          <div className="text-3xl text-purple-700 font-bold bg-white dark:bg-gray-800 rounded-lg py-3 px-6 shadow-sm dark:text-purple-400">
            18:00 hrs.
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            alt="A smiling couple posing outdoors with trees in the background. The woman is wearing a burgundy dress and the man is wearing a dark navy suit. They are holding a small chalkboard sign together and looking happy on their wedding day."
            src="https://placehold.co/400x500/8B7355/FFFFFF?text=Wedding+Photo"
            className="object-cover w-full h-auto"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r text-white px-6 py-4 rounded-2xl shadow-2xl text-center from-purple-600 to-pink-600 border-4 border-white">
              <div className="items-center justify-center mb-2 flex gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm font-bold">NOS CASAMOS</div>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text-2xl font-bold">17 MAYO</div>
              <div className="text-2xl font-bold">2025</div>
            </div>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="bg-gradient-to-r p-6 from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <div className="text-center">
            <p className="text-purple-600 text-sm font-medium dark:text-purple-300">
              ¡Acompáñanos en este día tan especial!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
