import React from "react";

export default function Despedida() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full text-center bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl max-w-lg space-y-10 backdrop-blur-sm p-12 border border-purple-100">
        {/* Separador superior */}
        <div className="items-center justify-center mb-10 flex space-x-6">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="text-purple-400 text-2xl transform rotate-45">✦</div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-purple-300 to-transparent"></div>
        </div>

        {/* Icono central */}
        <div className="justify-center mb-8 flex">
          <div className="relative">
            <div className="w-24 h-16 bg-gradient-to-b rounded-t-full from-purple-400 to-purple-600 relative overflow-hidden">
              <div className="w-3 h-3 bg-yellow-300 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-3 left-4"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full absolute top-3 right-4"></div>
            </div>
            <div className="w-28 h-2 bg-gradient-to-r rounded-sm from-purple-500 to-purple-700 -mt-1"></div>
          </div>
        </div>

        {/* Título */}
        <p className="text-5xl font-bold bg-gradient-to-r text-transparent mb-10 tracking-wide from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
          ¡Te Esperamos!
        </p>

        {/* Flor central */}
        <div className="justify-center mb-10 flex">
          <div className="relative">
            <div className="w-16 h-12 relative">
              <div className="w-6 h-8 bg-gradient-to-br rounded-full absolute top-0 left-2 from-purple-400 to-purple-600 transform -rotate-12"></div>
              <div className="w-6 h-8 bg-gradient-to-bl rounded-full absolute top-0 right-2 from-purple-400 to-purple-600 transform rotate-12"></div>
              <div className="w-4 h-6 bg-gradient-to-br rounded-full absolute top-4 left-4 from-pink-300 to-purple-400 transform -rotate-12"></div>
              <div className="w-4 h-6 bg-gradient-to-bl rounded-full absolute top-4 right-4 from-pink-300 to-purple-400 transform rotate-12"></div>
              <div className="w-0.5 h-8 bg-gray-700 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Cita */}
        <div className="bg-gradient-to-r rounded-2xl text-purple-700 text-base leading-relaxed mb-10 from-purple-50 to-pink-50 dark:from-gray-700 dark:to-purple-800 p-8 dark:text-purple-200 border-l-4 border-purple-400">
          <p className="italic mb-4">
            "Por nuestra parte, hemos conocido el amor que Dios nos tiene, y hemos creído en él. Dios es amor; el que permanece en el amor permanece en Dios y Dios en él."
          </p>
          <p className="text-right font-semibold text-purple-600 dark:text-purple-300">
            - 1 Juan 4:16
          </p>
        </div>

        {/* Flores inferiores */}
        <div className="justify-center flex space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br rounded-full from-pink-300 to-purple-400 relative">
            <div className="w-3 h-6 bg-green-400 rounded-full absolute -top-1 -left-1 transform rotate-45"></div>
          </div>
          <div className="w-6 h-6 bg-gradient-to-br rounded-full mt-1 from-purple-300 to-pink-400 relative">
            <div className="w-2 h-4 bg-green-300 rounded-full absolute -top-1 -right-1 transform -rotate-45"></div>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br rounded-full from-purple-400 to-pink-500 relative -mt-1">
            <div className="w-4 h-8 bg-green-500 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="w-6 h-6 bg-gradient-to-br rounded-full mt-1 from-pink-300 to-purple-400 relative">
            <div className="w-2 h-4 bg-green-300 rounded-full absolute -top-1 -left-1 transform rotate-45"></div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br rounded-full from-purple-300 to-pink-400 relative">
            <div className="w-3 h-6 bg-green-400 rounded-full absolute -top-1 -right-1 transform -rotate-45"></div>
          </div>
        </div>

        {/* Separador inferior */}
        <div className="justify-center mt-8 flex space-x-8">
          <div className="text-purple-300 text-sm transform rotate-12">✦</div>
          <div className="text-pink-300 text-lg">✧</div>
          <div className="text-purple-400 text-sm transform -rotate-12">✦</div>
        </div>
      </div>
    </div>
  );
}
