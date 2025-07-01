import React from "react";

export default function Galeria({ setSelectedImage }) {
  const galleryItems = [
    { alt: "Wedding ceremony", text: "Ceremonia" },
    { alt: "Wedding group photo", text: "Grupo" },
    { alt: "Bride and groom portrait", text: "Retrato" },
    { alt: "Wedding reception", text: "Recepción" },
    { alt: "Wedding dance", text: "Baile" },
    { alt: "Wedding cake", text: "Pastel" },
    { alt: "Wedding kiss", text: "Beso" },
    { alt: "Wedding rings", text: "Anillos" },
  ];

  return (
    <div className="w-full px-3 py-6 max-w-2xl mx-auto space-y-6">
      {/* Imagen principal */}
      <div className="mb-4 relative">
        <img
          alt="Pareja de novios"
          src="https://placehold.co/600x400/edf4ee/2f855a?text=Pareja"
          className="object-cover border-4 border-emerald-100 w-full h-48 md:h-64 rounded-xl shadow-2xl"
        />
      </div>

      {/* Miniaturas */}
      <div className="mb-4 overflow-x-auto">
        <div
          className="flex space-x-3 px-1 pb-3"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {galleryItems.map((item) => (
            <button
              key={item.text}
              type="button"
              onClick={() =>
                setSelectedImage(
                  `https://placehold.co/600x600/edf4ee/2f855a?text=${item.text}`
                )
              }
              className="flex-shrink-0 focus:outline-none"
            >
              <img
                alt={item.alt}
                src={`https://placehold.co/150x150/edf4ee/2f855a?text=${item.text}`}
                className="object-cover border-2 border-emerald-200 hover:border-yellow-500 transition-colors w-24 h-24 rounded-lg shadow-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mensaje central */}
      <div className="text-center px-2">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-emerald-200">
          <p
            className="text-emerald-700 text-base leading-relaxed italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Con la bendición de Dios y el amor de nuestros padres
          </p>
        </div>
      </div>

      {/* Puntos decorativos */}
      <div className="justify-center mt-6 flex space-x-2">
        <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-md"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-md"></div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-md"></div>
      </div>
    </div>
  );
}
