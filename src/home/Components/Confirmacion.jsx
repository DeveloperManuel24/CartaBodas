import React from "react";

export default function Confirmacion() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white/90 rounded-3xl shadow-2xl w-full text-center backdrop-blur max-w-sm p-6 border-2 border-purple-200 relative overflow-hidden">
        {/* Decoraciones */}
        <div className="w-full h-full absolute top-0 left-0 opacity-5">
          <div className="text-purple-300 text-6xl absolute top-4 right-4">✨</div>
          <div className="text-pink-300 text-4xl absolute bottom-8 left-4">🌸</div>
        </div>

        {/* Invitado */}
        <div className="mb-6 relative z-10">
          <div className="mb-4">
            <p className="text-purple-600 font-light text-3xl mb-1 tracking-wide">Silvia</p>
            <p className="text-purple-600 font-light text-3xl mb-4 tracking-wide">Barrios</p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r rounded-full px-6 py-3 shadow-lg from-purple-500 to-pink-500 inline-block">
              <span className="text-white font-bold text-3xl">7</span>
            </div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full absolute -top-2 -right-2 animate-pulse"></div>
          </div>
          <p className="text-purple-500 text-sm mt-3 font-medium">Número de invitados</p>
        </div>

        {/* Avisos */}
        <div className="mb-6 space-y-3">
          <div className="bg-gradient-to-r rounded-2xl shadow-sm from-purple-100 to-purple-50 p-4 border border-purple-200">
            <div className="items-center justify-center mb-2 flex">
              <span className="text-2xl mr-2">🎫</span>
              <p className="text-purple-700 font-semibold text-sm">IMPORTANTE</p>
            </div>
            <p className="text-purple-600 text-sm leading-relaxed">
              Presentar invitación para ingresar al parque, espacios limitados.
            </p>
          </div>
          <div className="bg-gradient-to-r rounded-2xl shadow-sm from-pink-100 to-pink-50 p-4 border border-pink-200">
            <div className="items-center justify-center mb-2 flex">
              <span className="text-2xl mr-2">📅</span>
              <p className="text-pink-700 font-semibold text-sm">CONFIRMA TU ASISTENCIA</p>
            </div>
            <p className="text-pink-600 text-sm leading-relaxed mb-2">
              No olvides confirmar antes del
            </p>
            <div className="bg-pink-200 rounded-lg py-2 px-3 inline-block">
              <span className="font-bold text-pink-800 text-lg">3 de Mayo</span>
            </div>
          </div>
        </div>

        {/* Botón Confirmar */}
        <div className="mb-8 relative z-10">
          <p className="text-gray-600 text-sm mb-3 font-medium">👆 Toca para confirmar</p>
          <div className="relative inline-block">
            <div className="items-center justify-center w-20 h-20 bg-gradient-to-r rounded-full shadow-xl inline-flex from-green-400 to-green-500 hover:shadow-2xl transition-all cursor-pointer hover:scale-110 transform">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
              </svg>
            </div>
            <div className="w-6 h-6 bg-red-500 rounded-full items-center justify-center absolute -top-1 -right-1 flex">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div className="w-4 h-4 bg-green-500 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-ping"></div>
          </div>
          <div className="mt-3 bg-green-50 rounded-lg py-2 px-4 inline-block border border-green-200">
            <p className="text-green-700 text-sm font-semibold">📱 NANCY CABRERA</p>
          </div>
        </div>

        {/* Separador */}
        <div className="mb-6">
          <div className="items-center justify-center flex">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1"></div>
            <div className="mx-4 flex space-x-1">
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1"></div>
          </div>
        </div>

        {/* Observaciones */}
        <div className="mb-6">
          <div className="text-5xl mb-3">🌿</div>
          <p style={{ fontFamily: "cursive" }} className="text-teal-500 text-2xl mb-4 font-light">
            Observaciones
          </p>
        </div>

        <div className="bg-gradient-to-br rounded-2xl shadow-inner from-purple-50 via-pink-50 to-blue-50 p-6 border-2 border-purple-100">
          <div className="justify-center mb-4 flex space-x-4">
            <div className="text-center">
              <div className="text-4xl mb-1">👔</div>
              <p className="text-xs text-purple-600">Hombres</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-1">👗</div>
              <p className="text-xs text-purple-600">Mujeres</p>
            </div>
          </div>
          <div className="bg-white rounded-lg py-3 px-4 shadow-sm border border-purple-200">
            <p className="text-purple-600 font-bold text-lg tracking-wider mb-1">
              CÓDIGO DE VESTIMENTA
            </p>
            <p className="text-purple-700 text-xl font-bold">FORMAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
