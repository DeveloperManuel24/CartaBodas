import React from "react";

export default function FormularioMensaje() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white/80 dark:bg-gray-800/90 rounded-2xl shadow-2xl w-full backdrop-blur-lg border border-white/20 dark:border-gray-700/50 p-8 max-w-md relative overflow-hidden">
        {/* Decoraciones */}
        <div className="w-32 h-32 bg-gradient-to-bl rounded-full absolute top-0 right-0 from-purple-200/30 to-transparent -translate-y-16 translate-x-16"></div>
        <div className="w-24 h-24 bg-gradient-to-tr rounded-full absolute bottom-0 left-0 from-pink-200/30 to-transparent translate-y-12 -translate-x-12"></div>

        {/* Título */}
        <div className="text-center mb-8 relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br rounded-2xl items-center justify-center shadow-lg from-purple-500 to-pink-500 flex transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M9 9h6M9 13h6"></path>
            </svg>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r text-transparent mb-3 from-purple-600 to-pink-600 bg-clip-text">
            BUZÓN DE MENSAJES
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-medium dark:text-gray-300">
            Deja aquí un mensaje de felicitación o un consejo de vida para los novios ✨
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-5 relative z-10">
          <div className="group">
            <input
              type="text"
              placeholder="Tu nombre"
              className="backdrop-blur border border-purple-200 dark:border-gray-600 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent group-hover:shadow-md transition-all duration-300 w-full px-5 py-4 bg-white/70 dark:bg-gray-700/70 rounded-xl text-gray-900 shadow-sm"
            />
          </div>
          <div className="group">
            <input
              type="email"
              placeholder="Tu e-mail"
              className="backdrop-blur border border-purple-200 dark:border-gray-600 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent group-hover:shadow-md transition-all duration-300 w-full px-5 py-4 bg-white/70 dark:bg-gray-700/70 rounded-xl text-gray-900 shadow-sm"
            />
          </div>
          <div className="group">
            <textarea
              rows="5"
              placeholder="Tu mensaje"
              className="w-full px-5 py-4 bg-white/70 dark:bg-gray-700/70 rounded-xl text-gray-900 shadow-sm backdrop-blur border border-purple-200 dark:border-gray-600 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none group-hover:shadow-md transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 w-full py-4 bg-gradient-to-r text-white rounded-xl font-semibold shadow-lg"
          >
            ENVIAR MENSAJE 💌
          </button>
        </form>
      </div>
    </div>
  );
}
