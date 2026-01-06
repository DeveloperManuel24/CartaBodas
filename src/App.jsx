import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import InvitacionBoda from "./home/InvitacionBoda";
import ConfigurarInvitados from "./home/ConfigurarInvitados";
import Invitacion from "./Invitacion";

// Lee ?... tanto en BrowserRouter como en HashRouter (#/...?...)
// y lo devuelve como string empezando con "?" o "".
const getQueryString = (location) => {
  if (location?.search && location.search.includes("?")) return location.search;

  const hash = String(location?.hash || "");
  const qPos = hash.indexOf("?");
  if (qPos >= 0) return hash.substring(qPos);

  return "";
};

// Base64 url-safe -> normal + padding
const normalizeBase64 = (b64) => {
  let s = String(b64 || "").trim().replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4 !== 0) s += "=";
  return s;
};

// Decodifica JSON string (utf-8) desde base64 (aunque tenga tildes)
const decodeBase64Utf8 = (b64) => {
  const fixed = normalizeBase64(b64);
  const bin = atob(fixed);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const qs = getQueryString(location);
    if (!qs) return;

    const params = new URLSearchParams(qs);
    const base64 = params.get("i");
    if (!base64) return;

    // (Opcional) seguir guardando en localStorage por compatibilidad
    // pero ahora YA NO SE PIERDE el query, así que no se contamina.
    try {
      const json = decodeBase64Utf8(base64);
      const invitadosURL = JSON.parse(json);
      localStorage.setItem("invitados", JSON.stringify(invitadosURL));
      // console.log("Invitados cargados desde URL:", invitadosURL);
    } catch (err) {
      console.error("Error decodificando invitados:", err);
    }

    // Si ya estás en /invitacion o /boda, no redirijas.
    // Si estás en / o cualquier otra ruta, mandalo a /invitacion PERO conservando el query.
    if (location.pathname !== "/invitacion" && location.pathname !== "/boda") {
      navigate(`/invitacion${qs}`, { replace: true });
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<ConfigurarInvitados />} />
      <Route path="/invitacion" element={<Invitacion />} />
      <Route path="/boda" element={<InvitacionBoda />} />
    </Routes>
  );
}
