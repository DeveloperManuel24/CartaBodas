import React from "react";

export default function Confirmacion() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-3xl shadow-xl w-full text-center max-w-sm p-10 border border-emerald-100 space-y-6">
        {/* Mensaje principal */}
        <p
          className="text-emerald-700 text-base italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Para confirmar tu asistencia, háblanos a este número:
        </p>

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/50233331001"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center space-y-3 hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-emerald-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.38 0 0 5.38 0 12c0 2.12.56 4.17 1.63 5.98L0 24l6.25-1.63A11.97 11.97 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 22c-1.9 0-3.75-.5-5.38-1.47l-.38-.23-3.72.97.99-3.6-.24-.38C2.5 15.75 2 13.9 2 12 2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.9A9.91 9.91 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.04-7.4c-.27-.14-1.6-.8-1.85-.9-.25-.1-.44-.14-.63.14-.18.27-.72.9-.88 1.1-.16.18-.32.2-.6.07-.27-.14-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.42.11-.56.12-.12.27-.32.4-.48.13-.16.17-.27.25-.45.08-.18.04-.34-.02-.48-.07-.14-.63-1.52-.87-2.1-.23-.55-.46-.48-.63-.49-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.34.99 2.64 1.13 2.82.14.18 1.96 3 4.75 4.22.66.29 1.17.47 1.57.6.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.18-.52-.32z" />
          </svg>
          <p
            className="text-emerald-700 text-lg italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Andrea Cuéllar
          </p>
        </a>
      </div>
    </div>
  );
}
