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
import Confirmacion from "./Components/Confirmacion";

export default function InvitacionBoda() {
  const [invitados, setInvitados] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Cargar invitados desde localStorage
    const guardados = localStorage.getItem("invitados");
    if (guardados) {
      try {
        setInvitados(JSON.parse(guardados));
      } catch (err) {
        console.error("❌ Error leyendo invitados guardados:", err);
      }
    }

    // Intentar reproducir música
    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            console.log("🎵 Música reproduciéndose automáticamente.");
          })
          .catch((err) => {
            console.warn("🎵 Autoplay bloqueado, esperando interacción:", err);

            const unlockAudio = () => {
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  console.log("🎵 Música iniciada tras interacción.");
                })
                .catch((err2) => {
                  console.error("🎵 Aún no se pudo reproducir:", err2);
                });

              document.removeEventListener("click", unlockAudio);
              document.removeEventListener("touchstart", unlockAudio);
            };

            document.addEventListener("click", unlockAudio);
            document.addEventListener("touchstart", unlockAudio);
          });
      }
    };

    attemptPlay();
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

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
        py-10
        px-4
        bg-white
      "
    >
      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto" src="/cancion.mp3" />

      {/* Botón de control de audio */}
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 bg-white/80 hover:bg-white/90 text-emerald-700 rounded-full p-3 shadow-lg transition"
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
          <Confirmacion />
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
