import React from "react";
import { useNavigate } from "react-router-dom";

export default function Invitacion() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa translúcida difuminada en toda la pantalla */}
      <div
        className="absolute inset-0 bg-white/40 z-10"
        style={{
          backdropFilter: "blur(1px)",             // 👈 Control fino del blur
          WebkitBackdropFilter: "blur(6px)",       // 👈 Soporte para Safari
        }}
      />

      {/* Contenido encima del fondo difuminado */}
      <div className="relative z-20 text-center px-6 py-12 max-w-3xl">
        {/* Nombres */}
        <div className="mb-10">
          <p
            className="text-7xl md:text-8xl font-medium mb-4 leading-tight"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#D4AF37",
            }}
          >
            Mario
          </p>
          <div className="flex items-center justify-center my-4">
            <div className="w-12 h-px bg-gray-400"></div>
            <span
              className="text-xl text-gray-500 mx-4"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              &
            </span>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>
          <p
            className="text-7xl md:text-8xl font-medium leading-tight"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#D4AF37",
            }}
          >
            Andrea
          </p>
        </div>

        {/* Fecha */}
        <div className="mb-10">
          <p
            className="text-base md:text-lg text-gray-600 tracking-[0.3em]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            28 | FEBRERO | 2026
          </p>
        </div>

        {/* Botón */}
        <button
          onClick={() => navigate("/boda")}
          className="relative inline-flex items-center justify-center w-48 h-12 font-medium group"
        >
          <span className="absolute w-48 h-0.5 bg-gray-400 top-0 left-0 transform group-hover:scale-x-0 transition-transform duration-300"></span>
          <span className="absolute w-48 h-0.5 bg-gray-400 bottom-0 right-0 transform group-hover:scale-x-0 transition-transform duration-300"></span>
          <span className="relative text-gray-700 group-hover:text-gray-900 tracking-[0.3em] text-sm">
            INGRESAR
          </span>
        </button>
      </div>
    </div>
  );
}
