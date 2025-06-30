import React from "react";

export default function Galeria({ setSelectedImage }) {
  const galleryItems = [
    { alt: "Wedding ceremony", text: "Ceremony" },
    { alt: "Wedding group photo", text: "Group" },
    { alt: "Bride and groom portrait", text: "Portrait" },
    { alt: "Wedding reception", text: "Reception" },
    { alt: "Wedding dance", text: "Dance" },
    { alt: "Wedding cake", text: "Cake" },
    { alt: "Wedding kiss", text: "Kiss" },
    { alt: "Wedding rings", text: "Rings" },
  ];

  return (
    <div className="w-full px-3 py-4 max-w-2xl mx-auto">
      {/* Imagen principal */}
      <div className="mb-4 relative">
        <img
          alt="Wedding couple holding hands"
          src="https://placehold.co/600x400/e5e7eb/6b7280?text=Wedding+Couple+Hands+Together"
          className="object-cover border-4 border-white/50 w-full h-48 md:h-64 rounded-xl shadow-xl"
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
                  `https://placehold.co/600x600/f3f4f6/6b7280?text=${item.text}`
                )
              }
              className="flex-shrink-0 focus:outline-none"
            >
              <img
                alt={item.alt}
                src={`https://placehold.co/150x150/f3f4f6/6b7280?text=${item.text}`}
                className="object-cover border-2 border-rose-200 hover:border-rose-400 transition-colors w-24 h-24 rounded-lg shadow-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mensaje central */}
      <div className="text-center px-2">
        <div className="bg-white/80 rounded-xl shadow-lg backdrop-blur-sm p-4 border border-rose-200">
          <p className="text-rose-800 text-base leading-relaxed font-medium dark:text-rose-200">
            Con la bendición de Dios y el amor de nuestros padres:
          </p>
        </div>
      </div>

      {/* Puntos decorativos */}
      <div className="justify-center mt-6 flex space-x-2">
        <div className="w-3 h-3 bg-rose-500 rounded-full shadow-md"></div>
        <div className="w-3 h-3 bg-rose-300 rounded-full shadow-md"></div>
        <div className="w-3 h-3 bg-rose-300 rounded-full shadow-md"></div>
      </div>
    </div>
  );
}
