import React, { useState } from "react";

export default function ConfigurarInvitados() {
  const [cantidad, setCantidad] = useState("");
  const [invitados, setInvitados] = useState([]);

  const handleCantidadChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setCantidad(e.target.value);

    if (value > 0) {
      setInvitados(
        Array.from({ length: value }, (_, i) => invitados[i] || { nombre: "", apellido: "" })
      );
    } else {
      setInvitados([]);
    }
  };

  const handleInvitadoChange = (index, field, value) => {
    const nuevos = [...invitados];
    nuevos[index][field] = value;
    setInvitados(nuevos);
  };

  const generarLink = () => {
    try {
      const json = JSON.stringify(invitados);
      const base64 = btoa(json);
      const url = `${window.location.origin}/?i=${base64}`;
      navigator.clipboard.writeText(url);
      alert(`✅ Link copiado al portapapeles:\n\n${url}`);
    } catch (err) {
      console.error("❌ Error generando el link:", err);
      alert("Error generando el link");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold text-purple-500">Configura tus invitados</h2>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Cantidad de invitados</label>
        <input
          type="number"
          min={0}
          value={cantidad}
          onChange={handleCantidadChange}
          className="w-full border p-2 rounded"
          placeholder="0"
        />
      </div>
      {invitados.length > 0 && (
        <div className="space-y-4">
          {invitados.map((invitado, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder={`Nombre ${idx + 1}`}
                value={invitado.nombre}
                onChange={(e) => handleInvitadoChange(idx, "nombre", e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder={`Apellido ${idx + 1}`}
                value={invitado.apellido}
                onChange={(e) => handleInvitadoChange(idx, "apellido", e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          ))}
        </div>
      )}
      <div>
        <button
          onClick={generarLink}
          className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Generar Link
        </button>
      </div>
    </div>
  );
}
