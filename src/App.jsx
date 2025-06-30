import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import InvitacionBoda from "./home/InvitacionBoda";
import ConfigurarInvitados from "./home/ConfigurarInvitados";

export default function App() {
  const [invitados, setInvitados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const base64 = params.get("i");

    if (base64) {
      try {
        const json = atob(base64);
        const invitadosURL = JSON.parse(json);

        localStorage.setItem("invitados", JSON.stringify(invitadosURL));
        setInvitados(invitadosURL);

        console.log("✅ Invitados cargados desde URL:", invitadosURL);
        // Redirige automáticamente a /invitacion
        navigate("/invitacion");
      } catch (err) {
        console.error("❌ Error decodificando invitados:", err);
      }
    } else {
      const guardados = localStorage.getItem("invitados");
      if (guardados) {
        try {
          setInvitados(JSON.parse(guardados));
          console.log("✅ Invitados cargados desde localStorage");
        } catch (err) {
          console.error("❌ Error leyendo invitados guardados:", err);
        }
      }
    }
  }, [navigate]);

  return (
    <Routes key={window.location.search}>
      <Route
        path="/"
        element={
          <ConfigurarInvitados
            onSubmit={(data) => {
              setInvitados(data);
              localStorage.setItem("invitados", JSON.stringify(data));
            }}
          />
        }
      />
      <Route
        path="/invitacion"
        element={<InvitacionBoda invitados={invitados} />}
      />
    </Routes>
  );
}
