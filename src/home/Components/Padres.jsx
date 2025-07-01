import React from "react";

export default function Padres({ invitados = [] }) {
  return (
    <div className="w-full max-w-md mx-auto text-center space-y-6 py-6 px-4">
      {/* Imagen superior */}
      <div className="flex justify-center">
        <img src="/lirios.png" alt="Flores decorativas" className="w-20 h-auto" />
      </div>

      {/* Label "Invitan a" */}
      <div>
        <p
          className="text-emerald-700 text-lg italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Invitan a
        </p>
      </div>

      {/* Nombres dinámicos */}
      {invitados.length > 0 ? (
        <div className="space-y-6">
          {invitados.map((inv, idx) => (
            <div key={idx} className="space-y-1">
              <p
                className="text-xl italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#D4AF37", // dorado
                }}
              >
                {inv.nombre}
              </p>
              <p
                className="text-base italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#D4AF37", // dorado
                }}
              >
                {inv.apellido}
              </p>

              {/* Separador */}
              {idx < invitados.length - 1 && (
                <div className="flex justify-center items-center mt-2">
                  {idx % 2 === 0 ? (
                    <div className="w-16 border-t border-yellow-300"></div>
                  ) : (
                    <svg
                      className="w-4 h-4 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2L12 8L18 8L13.5 12L15.5 18L10 14L4.5 18L6.5 12L2 8L8 8L10 2Z" />
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-gray-400 text-sm italic font-sans">
            (No hay invitados configurados)
          </p>
        </div>
      )}

      {/* Mensaje final */}
      <div>
        <p
          className="text-emerald-700 text-base italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Los esperamos a nuestra boda
        </p>
      </div>

      {/* Imagen inferior */}
      <div className="flex justify-center">
        <img src="/lirios.png" alt="Flores decorativas" className="w-20 h-auto" />
      </div>
    </div>
  );
}
