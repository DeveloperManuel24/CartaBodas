import React, { useEffect, useState } from "react";

const STORAGE_KEY = "config_invitados_v2";

const toInt = (v) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

// Base64 seguro para tildes/Unicode
const encodeBase64Unicode = (str) => btoa(unescape(encodeURIComponent(str)));

export default function ConfigurarInvitados() {
  const [cantidad, setCantidad] = useState(""); // cantidad de invitados (dinámico)
  const [adultos, setAdultos] = useState("");   // número de adultos (solo número)
  const [ninos, setNinos] = useState("");       // número de niños (solo número)
  const [invitados, setInvitados] = useState([]); // [{nombre, apellido}...]

  const buildInvitados = (total, prev) =>
    Array.from({ length: total }, (_, i) => prev?.[i] || { nombre: "", apellido: "" });

  // Cargar de localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);

      const cant = parsed?.cantidad ?? "";
      const ad = parsed?.adultos ?? "";
      const ni = parsed?.ninos ?? "";
      const prevInv = Array.isArray(parsed?.invitados) ? parsed.invitados : [];

      setCantidad(String(cant));
      setAdultos(String(ad));
      setNinos(String(ni));

      const total = toInt(String(cant));
      setInvitados(buildInvitados(total, prevInv));
    } catch {
      setCantidad("");
      setAdultos("");
      setNinos("");
      setInvitados([]);
    }
  }, []);

  // Guardar en localStorage cuando cambie algo
  useEffect(() => {
    try {
      const payload = {
        cantidad: toInt(cantidad),
        adultos: toInt(adultos),
        ninos: toInt(ninos),
        invitados,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // no rompemos UI si storage falla
    }
  }, [cantidad, adultos, ninos, invitados]);

  const handleCantidadChange = (e) => {
    const valueStr = e.target.value;
    const value = toInt(valueStr);

    setCantidad(valueStr);
    setInvitados((prev) => buildInvitados(value, prev));
  };

  const handleAdultosChange = (e) => setAdultos(e.target.value);
  const handleNinosChange = (e) => setNinos(e.target.value);

  const handleInvitadoChange = (index, field, value) => {
    setInvitados((prev) => {
      const nuevos = [...prev];
      nuevos[index] = { ...nuevos[index], [field]: value };
      return nuevos;
    });
  };

  const generarLink = async () => {
    try {
      const payload = {
        cantidad: toInt(cantidad),
        adultos: toInt(adultos),
        ninos: toInt(ninos),
        invitados,
      };

      const json = JSON.stringify(payload);
      const base64 = encodeBase64Unicode(json);
      const url = `${window.location.origin}/?i=${base64}`;

      await navigator.clipboard.writeText(url);
      alert(`Link copiado al portapapeles:\n\n${url}`);
    } catch {
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

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Adultos</label>
          <input
            type="number"
            min={0}
            value={adultos}
            onChange={handleAdultosChange}
            className="w-full border p-2 rounded"
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Niños</label>
          <input
            type="number"
            min={0}
            value={ninos}
            onChange={handleNinosChange}
            className="w-full border p-2 rounded"
            placeholder="0"
          />
        </div>
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

      <button
        onClick={generarLink}
        className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Generar Link
      </button>
    </div>
  );
}
