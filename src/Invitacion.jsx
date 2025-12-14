import React from "react";
import { useNavigate } from "react-router-dom";

export default function Invitacion() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/PORTADA.jpeg')",
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

      {/* Contenido */}
      <div className="relative z-10 min-h-[100svh] w-full flex flex-col items-center">
        {/* Espacio superior */}
        <div className="h-[10svh] lg:h-[12svh]" />

        {/* Título (TEXTO, reemplaza imagen) */}
        <div
          className="select-none pointer-events-none text-center"
          style={{
            // Si algún día metés la fuente real como archivo, dejala primero:
            // fontFamily: "'EdwardianScriptITC', 'Great Vibes', cursive",
            fontFamily: "'Great Vibes', cursive",
            color: "rgba(255,255,255,0.98)",
            textShadow: "0 2px 14px rgba(0,0,0,0.55)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",

            // Tamaño y “ancho” visual similar a tu PNG
            fontSize: "clamp(44px, 7.2vw, 120px)",
            width: "min(96vw, 1100px)",
          }}
        >
          Mario&nbsp;&amp;&nbsp;Andrea
        </div>

        {/* Separación (controla dónde cae INGRESAR) */}
        <div className="h-[10svh] sm:h-[12svh] lg:h-[8svh]" />

        {/* INGRESAR */}
        <button
          type="button"
          aria-label="Ingresar"
          onClick={() => navigate("/boda")}
          className="text-center"
          style={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.50em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.82)",
            textShadow: "0 2px 12px rgba(0,0,0,0.60)",
            fontSize: "clamp(15px, 1.6vw, 24px)",
            background: "transparent",
            border: "0",
            padding: "18px 26px",
            cursor: "pointer",
          }}
        >
          INGRESAR
        </button>

        {/* Relleno abajo para centrar visualmente */}
        <div className="flex-1" />
      </div>
    </div>
  );
}
