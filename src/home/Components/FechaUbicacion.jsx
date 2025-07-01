import React from "react";

export default function FechaUbicacion() {
  return (
    <div className="mx-auto bg-white max-w-md rounded-xl shadow-2xl overflow-hidden">
      {/* Línea superior */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-500"></div>

      {/* Fecha */}
      <div className="text-center p-10 relative">
        {/* Icono */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">📅</span>
          </div>
        </div>
        {/* Título */}
        <p
          className="text-3xl italic mb-6 text-emerald-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Fecha
        </p>
        {/* Contenido */}
        <div className="bg-white border border-emerald-200 rounded-2xl shadow p-6">
          <div className="text-emerald-700 text-lg font-semibold mb-2 uppercase tracking-wide">
            SÁBADO
          </div>
          <div className="text-gray-700 text-xl font-light">
            17 | MAYO | 2025
          </div>
        </div>
      </div>

      {/* Botón Google Calendar */}
      <div className="text-center p-8">
        <div
          className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-6 shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() =>
            window.open("https://calendar.google.com", "_blank")
          }
        >
          <span className="text-white text-3xl font-bold">G</span>
        </div>
        <div className="text-sm text-emerald-700 uppercase font-medium">
          CLICK AQUÍ PARA AÑADIR
          <br />
          <span className="font-semibold text-yellow-600">
            LA FECHA A TU CALENDARIO
          </span>
        </div>
      </div>

      {/* Ubicación */}
      <div className="text-center p-10 relative">
        {/* Icono */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">📍</span>
          </div>
        </div>
        {/* Título */}
        <p
          className="text-3xl italic mb-6 text-emerald-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ubicación
        </p>
        {/* Contenido */}
        <div className="bg-white border border-emerald-200 rounded-2xl shadow p-8">
          <div className="text-emerald-700 text-xl font-semibold uppercase mb-4">
            IGLESIA LA MERCED
          </div>
          <div className="text-gray-700 text-sm leading-relaxed space-y-1">
            <div className="font-medium">6a Avenida Norte y</div>
            <div className="font-medium">1a Calle Poniente</div>
            <div className="text-yellow-600 font-semibold">
              Antigua Guatemala
            </div>
          </div>
        </div>
      </div>

      {/* Botón Waze con ícono */}
      <div className="text-center p-8">
        <div
          className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl mx-auto mb-6 shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() =>
            window.open("https://www.waze.com/ul", "_blank")
          }
        >
          {/* Ícono Waze SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-10 h-10 text-white"
          >
            <path
              fill="currentColor"
              d="M484.7 325.6c-17.2-11.9-33.2-22.9-33.2-47.6V192c0-79.5-64.5-144-144-144H204C124.5 48 60 112.5 60 192v86c0 24.7-16 35.7-33.2 47.6C7.9 340.1 0 350.2 0 368c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40 0-17.8-7.9-27.9-27.3-42.4zM160 336c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            />
          </svg>
        </div>
        <div className="text-sm text-emerald-700 uppercase font-medium">
          CLICK AQUÍ PARA
          <br />
          <span className="font-semibold text-yellow-600">
            LLEGAR CON WAZE
          </span>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-500"></div>
    </div>
  );
}
