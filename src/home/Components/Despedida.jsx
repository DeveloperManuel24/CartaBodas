import React from "react";

export default function Despedida() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full text-center space-y-8 max-w-lg px-4">
        {/* Imagen superior */}
        <div className="flex justify-center">
          <img src="/lirios.png" alt="Flores decorativas" className="w-20 h-auto" />
        </div>

        {/* Título */}
        <p
          className="text-4xl text-emerald-700 italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ¡Te esperamos!
        </p>

        {/* Cita */}
        <div className="text-emerald-800 text-base leading-relaxed space-y-2">
          <p
            className="italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Una cuerda triple no se rompe fácilmente."
          </p>
          <p
            className="text-right font-semibold text-emerald-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            — Eclesiastés 4:12
          </p>
        </div>

        {/* Imagen inferior */}
        <div className="flex justify-center">
          <img src="/lirios.png" alt="Flores decorativas" className="w-20 h-auto" />
        </div>

        {/* Leyenda de crédito */}
        <div className="mt-8 text-gray-500 text-sm">
          Desarrollado por: Ingeniero en Sistemas Manuel Ordoñez<br />
          54215106
        </div>
      </div>
    </div>
  );
}
