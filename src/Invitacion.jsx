import React from "react";
import { useNavigate } from "react-router-dom";

export default function Invitacion() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl text-center shadow-2xl max-w-lg backdrop-blur-lg p-10 border border-white/20 mx-auto mt-10">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br rounded-full from-pink-400 to-purple-500 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
          </svg>
        </div>
        <p className="text-gray-600 text-sm font-medium tracking-wide dark:text-gray-300">SILVIA BARRIOS</p>
        <p className="text-gray-500 text-sm dark:text-gray-400">Cordialmente te invita</p>
      </div>
      <div className="mb-10">
        <div className="text-5xl font-bold bg-gradient-to-r text-transparent mb-2 from-pink-500 to-purple-600 bg-clip-text">
          Zaira
        </div>
        <div className="text-3xl text-gray-400 font-light dark:text-gray-500">&amp;</div>
        <div className="text-5xl font-bold bg-gradient-to-r text-transparent mt-2 from-blue-500 to-purple-600 bg-clip-text">
          Josué
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-gradient-to-r text-white px-6 py-3 rounded-full font-semibold text-lg mb-6 inline-block from-pink-500 to-purple-600">
          17 MAYO 2025
        </div>
        <div className="mb-6 grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br rounded-2xl from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 p-4">
            <div className="text-3xl font-bold text-gray-800 dark:text-white">00</div>
            <div className="text-xs text-gray-600 font-medium dark:text-gray-300">DÍAS</div>
          </div>
          <div className="bg-gradient-to-br rounded-2xl from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-4">
            <div className="text-3xl font-bold text-gray-800 dark:text-white">00</div>
            <div className="text-xs text-gray-600 font-medium dark:text-gray-300">HORAS</div>
          </div>
          <div className="bg-gradient-to-br rounded-2xl from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-4">
            <div className="text-3xl font-bold text-gray-800 dark:text-white">00</div>
            <div className="text-xs text-gray-600 font-medium dark:text-gray-300">MIN</div>
          </div>
          <div className="bg-gradient-to-br rounded-2xl from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-4">
            <div className="text-3xl font-bold text-gray-800 dark:text-white">00</div>
            <div className="text-xs text-gray-600 font-medium dark:text-gray-300">SEG</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => navigate("/boda")}
        className="from-pink-500 via-purple-500 to-blue-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full bg-gradient-to-r text-white font-semibold py-4 px-8 rounded-2xl shadow-lg text-lg"
      >
        ✨ INGRESAR A LA INVITACIÓN ✨
      </button>
      <div className="mt-6 justify-center flex space-x-4">
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div
          style={{ animationDelay: "0.2s" }}
          className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
        ></div>
        <div
          style={{ animationDelay: "0.4s" }}
          className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
        ></div>
      </div>
    </div>
  );
}
