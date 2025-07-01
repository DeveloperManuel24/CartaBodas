import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import InvitacionBoda from "./home/InvitacionBoda";
import ConfigurarInvitados from "./home/ConfigurarInvitados";
import Invitacion from "./Invitacion";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const base64 = params.get("i");

    if (base64) {
      try {
        const json = atob(base64);
        const invitadosURL = JSON.parse(json);

        localStorage.setItem("invitados", JSON.stringify(invitadosURL));
        console.log("✅ Invitados cargados desde URL:", invitadosURL);

        // Redirige automáticamente a /invitacion
        navigate("/invitacion", { replace: true });
      } catch (err) {
        console.error("❌ Error decodificando invitados:", err);
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ConfigurarInvitados
            onSubmit={(data) => {
              localStorage.setItem("invitados", JSON.stringify(data));
            }}
          />
        }
      />
      <Route
        path="/invitacion"
        element={<Invitacion />}
      />
      <Route
        path="/boda"
        element={<InvitacionBoda />}
      />
    </Routes>
  );
}
