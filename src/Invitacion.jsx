import React from "react";
import { useNavigate } from "react-router-dom";

export default function Invitacion() {
  const navigate = useNavigate();

  // 🔧 AJUSTES RÁPIDOS
  const TITLE_SCALE = 2.0; // 👈 subí esto (1.3 / 1.5 / 1.7)
  const TITLE_TOP = "15%";  // 👈 mové esto si querés (8% / 12% / etc)

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.78) contrast(1.08)",
          transform: "scale(1.02)",
        }}
      />

      {/* Degradado arriba */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0) 78%)",
        }}
      />

      {/* Micro-sombra donde está INGRESAR */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 44%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 35%)",
        }}
      />

      {/* Contenido (SIN max-w que te capaba) */}
      <div className="relative z-10 min-h-[100svh] w-full">
        <div className="relative h-[100svh] w-full">
          {/* Mario & Andrea (IMAGEN transparente) */}
          <div
            className="absolute left-1/2 text-center select-none"
            style={{
              top: TITLE_TOP,
              transform: `translateX(-50%) scale(${TITLE_SCALE})`,
              transformOrigin: "top center",
              pointerEvents: "none",
            }}
          >
            <img
              src="/mario_andrea_text_transparent.png"
              alt="Mario & Andrea"
              draggable={false}
              className="
    block
    w-[min(98vw,1400px)] md:w-[min(92vw,1700px)] lg:w-[min(90vw,2200px)]
    h-auto
    drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]
    select-none
  "
            />

          </div>

          {/* INGRESAR (click real) */}
          <button
            type="button"
            aria-label="Ingresar"
            onClick={() => navigate("/boda")}
            className="absolute left-1/2 -translate-x-1/2 top-[33%] text-center"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.50em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.82)",
              textShadow: "0 2px 12px rgba(0,0,0,0.60)",
              fontSize: "clamp(12px, 2.2vw, 18px)",
              background: "transparent",
              border: "0",
              padding: "18px 26px",
              cursor: "pointer",
            }}
          >
            INGRESAR
          </button>
        </div>
      </div>
    </div>
  );
}
