import React from "react";
import { useNavigate } from "react-router-dom";

export default function Invitacion() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('fondo.jpg')", // Cambia esta ruta
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa translúcida */}
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 py-12 max-w-3xl">
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

        {/* Línea divisoria */}
        <div className="mb-8">
          <div className="w-full h-px bg-gray-400 opacity-50"></div>
        </div>

        {/* Fecha */}
        <div className="mb-10">
          <p
            className="text-base md:text-lg text-gray-600 tracking-[0.3em]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            17 | MAYO | 2025
          </p>
        </div>

        {/* Contador */}
        <div className="mb-10 grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[
            { label: "DÍAS" },
            { label: "HRS." },
            { label: "MIN." },
            { label: "SEG." },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div
                className="text-3xl md:text-4xl font-light text-gray-700 mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                00
              </div>
              <div className="text-xs md:text-sm text-gray-500 tracking-[0.2em] font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Botón elegante */}
        <button
          onClick={() => navigate("/boda")}
          className="relative inline-flex items-center justify-center w-48 h-12 font-medium group"
        >
          <span
            className="absolute w-48 h-0.5 bg-gray-400 top-0 left-0 transform group-hover:scale-x-0 transition-transform duration-300"
          ></span>
          <span
            className="absolute w-48 h-0.5 bg-gray-400 bottom-0 right-0 transform group-hover:scale-x-0 transition-transform duration-300"
          ></span>
          <span className="relative text-gray-700 group-hover:text-gray-900 tracking-[0.3em] text-sm">
            INGRESAR
          </span>
        </button>
      </div>
    </div>
  );
}
