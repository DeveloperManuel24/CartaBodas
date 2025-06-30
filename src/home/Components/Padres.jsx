import React from "react";

export default function Padres({ invitados = [] }) {
  return (
    <div className="w-full max-w-md mx-auto text-center space-y-6 py-6">
      {/* Label "Invitan a" */}
      <div>
        <p className="text-purple-500 text-base sm:text-lg font-medium">
          Invitan a
        </p>
      </div>

      {/* Ornamento superior */}
      <div>
        <svg
          className="w-16 h-8 mx-auto text-purple-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <path d="M10 15L20 10L30 15L20 20L10 15Z M25 12L35 7L45 12L35 17L25 12Z M40 9L50 4L60 9L50 14L40 9Z" />
        </svg>
      </div>

      {/* Nombres dinámicos */}
      {invitados.length > 0 ? (
        <div className="space-y-6">
          {invitados.map((inv, idx) => (
            <div
              key={idx}
              className={`${
                idx % 2 === 1
                  ? "pt-4 border-t border-gray-200 dark:border-gray-600"
                  : ""
              }`}
            >
              <p className="text-2xl font-light text-blue-400 mb-1">
                {inv.nombre.toUpperCase()}
              </p>
              <p className="text-sm text-blue-400 font-light tracking-wide">
                {inv.apellido.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-gray-400 text-sm italic">
            (No hay invitados configurados)
          </p>
        </div>
      )}

      {/* Ornamento inferior */}
      <div>
        <svg
          className="w-16 h-8 mx-auto text-purple-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <path d="M60 21L50 16L40 21L50 26L60 21Z M75 18L65 13L55 18L65 23L75 18Z M90 15L80 10L70 15L80 20L90 15Z" />
        </svg>
      </div>

      {/* Mensaje final */}
      <div>
        <p className="text-purple-400 text-sm leading-relaxed">
          nosotros el día de <br /> nuestra boda.
        </p>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mt-4">
        <div className="w-8 border-t border-purple-300"></div>
        <div className="mx-2">
          <svg
            className="w-4 h-4 text-purple-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2L12 8L18 8L13.5 12L15.5 18L10 14L4.5 18L6.5 12L2 8L8 8L10 2Z" />
          </svg>
        </div>
        <div className="w-8 border-t border-purple-300"></div>
      </div>
    </div>
  );
}
