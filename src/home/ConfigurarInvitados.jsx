import React, { useEffect, useState } from "react";

const STORAGE_KEY = "config_invitados_v2";

const toInt = (v) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

// Base64 URL-safe (sin + / =) y seguro para tildes/Unicode
const encodeBase64UrlUnicode = (str) => {
  const b64 = btoa(unescape(encodeURIComponent(str)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

// Detecta si estás usando HashRouter (URL con #/...)
const isHashRouter = () => {
  const h = String(window.location.hash || "");
  return h.startsWith("#/") || h.startsWith("#!");
};

// Armá el URL base apuntando a la pantalla principal de invitación
// - BrowserRouter:   https://dominio.com/?i=...
// - HashRouter:      https://dominio.com/#/?i=...
const buildInviteBaseUrl = () => {
  const origin = window.location.origin;
  const basePath = window.location.pathname; // mantiene subpath si existe

  if (isHashRouter()) {
    // Invitación en root del hash
    return `${origin}${basePath}#/`;
  }

  // Invitación en root normal
  return `${origin}/`;
};

export default function ConfigurarInvitados() {
  const [cantidad, setCantidad] = useState("");
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("");
  const [invitados, setInvitados] = useState([]);

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

  // Guardar en localStorage (solo para que tu configurador recuerde lo último que editaste)
  useEffect(() => {
    try {
      const payload = {
        cantidad: toInt(cantidad),
        adultos: toInt(adultos),
        ninos: toInt(ninos),
        invitados,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {}
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
      const base64 = encodeBase64UrlUnicode(json);

      const base = buildInviteBaseUrl();
      const url = `${base}?i=${base64}&adultos=${toInt(adultos)}&ninos=${toInt(ninos)}`;

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
