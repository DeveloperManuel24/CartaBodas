import React from "react";

export default function CeremoniaRecepcion() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-white rounded-2xl shadow-xl max-w-md overflow-hidden border border-emerald-100">
        {/* Sección superior */}
        <div className="text-center py-8 px-6">
          {/* CEREMONIA */}
          <div className="items-center text-sm text-emerald-700 tracking-wide mb-3 font-semibold inline-flex gap-2 uppercase">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12l-2-2 2-2 2 2-2 2z"></path>
            </svg>
            Ceremonia
          </div>
          <div className="text-3xl text-emerald-800 font-semibold mb-8 bg-white rounded-lg py-3 px-6 shadow">
            15:45 hrs.
          </div>
          {/* RECEPCIÓN */}
          <div className="items-center text-sm text-emerald-700 tracking-wide mb-3 font-semibold inline-flex gap-2 uppercase">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
            Recepción
          </div>
          <div className="text-3xl text-emerald-800 font-semibold bg-white rounded-lg py-3 px-6 shadow">
            18:00 hrs.
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            alt="Foto de la boda"
            src="https://placehold.co/400x500/edf4ee/2f855a?text=Foto+Boda"
            className="object-cover w-full h-auto"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-xl text-center border-4 border-white">
              <div className="items-center justify-center mb-2 flex gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div
                  className="text-sm font-semibold italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Nos Casamos
                </div>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                className="text-2xl font-semibold italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                17 Mayo
              </div>
              <div
                className="text-2xl font-semibold italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                2025
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="bg-emerald-50 p-6">
          <div className="text-center">
            <p
              className="text-emerald-800 text-base italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ¡Acompáñanos en este día tan especial!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
