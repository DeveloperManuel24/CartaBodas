import React from "react";

export default function ModalImagen({ selectedImage, setSelectedImage }) {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={() => setSelectedImage(null)}
    >
      <img
        src={selectedImage}
        alt="Ampliada"
        className="max-w-full max-h-full rounded-xl shadow-2xl"
      />
    </div>
  );
}
