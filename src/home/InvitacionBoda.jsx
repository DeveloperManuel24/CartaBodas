import React, { useEffect, useState, useRef } from "react";
import Padres from "./Components/Padres";
import FechaUbicacion from "./Components/FechaUbicacion";
import CeremoniaRecepcion from "./Components/CeremoniaRecepcion";
import FormularioMensaje from "./Components/FormularioMensaje";
import Despedida from "./Components/Despedida";
import ModalImagen from "./Components/ModalImagen";
import InvitacionPrincipal from "./Components/InvitacionPrincipal";
import Galeria from "./Components/Galeria";

import AOS from "aos";
import "aos/dist/aos.css";

export default function InvitacionBoda({ invitados = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("🎵 Música reproduciéndose automáticamente.");
        })
        .catch((err) => {
          setIsPlaying(false);
          setAutoplayAttempted(true);
          console.warn("🎵 Autoplay bloqueado por el navegador:", err);
        });
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    // Si el autoplay falló, resetear audio antes de reproducir
    if (autoplayAttempted && audioRef.current.paused) {
      audioRef.current.load();
    }

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("🎵 Error al reproducir:", err);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-br
        from-purple-100
        via-pink-50
        to-purple-200
        dark:from-gray-900
        dark:via-gray-800
        dark:to-gray-900
        py-10
        px-4
      "
    >
      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto" src="/cancion.mp3" />

      {/* Botón de control de audio */}
      <button
        onClick={toggleAudio}
        className="absolute top-4 right-4 bg-white/80 hover:bg-white/90 text-purple-600 rounded-full p-3 shadow-lg transition"
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="space-y-10 max-w-4xl mx-auto">
        <div data-aos="fade-up">
          <InvitacionPrincipal />
        </div>

        <div data-aos="fade-right">
          <Galeria setSelectedImage={setSelectedImage} />
        </div>

        <div data-aos="fade-left">
          <Padres invitados={invitados} />
        </div>

        <div data-aos="zoom-in">
          <FechaUbicacion />
        </div>

        <div data-aos="fade-up">
          <CeremoniaRecepcion />
        </div>

        <div data-aos="fade-up">
          <FormularioMensaje />
        </div>

        <div data-aos="fade-up">
          <Despedida />
        </div>

        <ModalImagen
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}
