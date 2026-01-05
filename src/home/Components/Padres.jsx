// src/home/Components/InvitacionPrincipal2.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function InvitacionPrincipal2() {
  // =============================
  // PDF
  // =============================
  const PDF_URL = useMemo(() => encodeURI("/Invitacion Boda2.pdf"), []);

  // =============================
  // DATOS DIRECCIÓN / EVENTO (TOCÁ SOLO ESTO)
  // =============================
  // ✅ Dirección EXACTA (la de la imagen)
  const ADDRESS_TEXT =
    "Club Campestre La Montaña, Km. 18.5 Carretera a San Juan Sacatepequez, Zona 6, Mixco.";

  const EVENT_TITLE = "Boda Mario & Andrea";
  const EVENT_DETAILS = "¡Te esperamos para celebrar con nosotros!";
  const EVENT_LOCATION = ADDRESS_TEXT;

  // 28 Feb 2026 — 10:00 a.m. a 12:00 p.m. (local)
  const EVENT_START_LOCAL = "20260228T100000";
  const EVENT_END_LOCAL = "20260228T120000";

  // ✅ ZOOM (TOCÁ SOLO ESTO)
  const ZOOM_WEB_URL =
    "https://us02web.zoom.us/j/2326987913?pwd=A2LRCE9PEGFCEFBLAOS5RRV1T25UUT09&omn=81836695375";

  // ✅ WAZE (LINK EXACTO COMO LO PASASTE)
  const WAZE_MEETING_URL =
    "https://www.waze.com/live-map/meeting?token=odC8fegcj7wK4Fgj0A-sd&locale=es-419&env=row&utm_campaign=share_drive&utm_source=waze_app&utm_medium=undefined";

  // =============================
  // AJUSTES POR PORCENTAJE (TOCÁ SOLO ESTO)
  // =============================
  // ✅ Hotspot WAZE
  const WAZE_MOBILE = { top: "83%", left: "39%", w: "16%", hPx: 56 };
  const WAZE_DESKTOP = { top: "83%", left: "38%", w: "10%", hPx: 100 };

  // ✅ Hotspot CALENDARIO
  const CAL_MOBILE = { top: "83%", left: "63%", w: "16%", hPx: 56 };
  const CAL_DESKTOP = { top: "83%", left: "63%", w: "10%", hPx: 100 };

  // ✅ Hotspot ZOOM
  const ZOOM_MOBILE = { top: "35%", left: "45%", w: "70%", hPx: 56 };
  const ZOOM_DESKTOP = { top: "35%", left: "45%", w: "70%", hPx: 100 };

  // =============================
  // RESPONSIVE PDF
  // =============================
  const wrapRef = useRef(null);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => setWrapWidth(el.clientWidth));
    ro.observe(el);
    setWrapWidth(el.clientWidth);

    return () => ro.disconnect();
  }, []);

  const pageWidth = useMemo(() => {
    if (!wrapWidth) return 360;
    return Math.min(wrapWidth, 1100);
  }, [wrapWidth]);

  const isMobile = pageWidth < 640;

  const preset = useMemo(() => {
    return isMobile
      ? { waze: WAZE_MOBILE, cal: CAL_MOBILE, zoom: ZOOM_MOBILE }
      : { waze: WAZE_DESKTOP, cal: CAL_DESKTOP, zoom: ZOOM_DESKTOP };
  }, [
    isMobile,
    WAZE_MOBILE,
    WAZE_DESKTOP,
    CAL_MOBILE,
    CAL_DESKTOP,
    ZOOM_MOBILE,
    ZOOM_DESKTOP,
  ]);

  const pctToPx = useCallback(
    (pctStr) => {
      const pct = parseFloat(String(pctStr).replace("%", ""));
      if (!pageWidth || Number.isNaN(pct)) return 0;
      return Math.round((pct / 100) * pageWidth);
    },
    [pageWidth]
  );

  // =============================
  // LINKS: CALENDAR + ZOOM
  // =============================
  const googleCalendarUrl = useMemo(() => {
    const text = encodeURIComponent(EVENT_TITLE);
    const details = encodeURIComponent(EVENT_DETAILS);
    const location = encodeURIComponent(EVENT_LOCATION);
    const dates = `${EVENT_START_LOCAL}/${EVENT_END_LOCAL}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  }, [EVENT_TITLE, EVENT_DETAILS, EVENT_LOCATION, EVENT_START_LOCAL, EVENT_END_LOCAL]);

  // Deep link Zoom (derivado del link web)
  const zoomDeepLink = useMemo(() => {
    try {
      const u = new URL(ZOOM_WEB_URL);
      const parts = u.pathname.split("/").filter(Boolean);
      const jIndex = parts.findIndex((p) => p === "j");
      const confno = jIndex >= 0 ? parts[jIndex + 1] : "";
      const pwd = u.searchParams.get("pwd") || "";

      if (!confno) return "";
      const q = new URLSearchParams();
      q.set("confno", confno);
      if (pwd) q.set("pwd", pwd);

      return `zoommtg://zoom.us/join?${q.toString()}`;
    } catch {
      return "";
    }
  }, [ZOOM_WEB_URL]);

  // Android intent (mejor tasa de éxito para abrir app)
  const zoomAndroidIntent = useMemo(() => {
    if (!zoomDeepLink) return "";
    try {
      const u = new URL(zoomDeepLink);
      const qs = u.searchParams.toString();
      return `intent://zoom.us/join?${qs}#Intent;scheme=zoommtg;package=us.zoom.videomeetings;end`;
    } catch {
      return "";
    }
  }, [zoomDeepLink]);

  // =============================
  // ACTIONS
  // =============================
  // ✅ Waze igual que el anterior: intenta app con waze://, fallback a TU link meeting en misma pestaña
  const openWaze = useCallback(() => {
    // Intento abrir app (usa tu dirección como query; si no abre, cae al link meeting)
    const q = encodeURIComponent(ADDRESS_TEXT);
    const deepLink = `waze://?q=${q}&navigate=yes`;

    window.location.href = deepLink;

    setTimeout(() => {
      window.location.href = WAZE_MEETING_URL;
    }, 700);
  }, [ADDRESS_TEXT, WAZE_MEETING_URL]);

  const openCalendar = useCallback(() => {
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  }, [googleCalendarUrl]);

  // ✅ Zoom robusto: intenta app, fallback a web solo si no se abrió la app
  const openZoom = useCallback(() => {
    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);

    if (isAndroid && zoomAndroidIntent) {
      window.location.href = zoomAndroidIntent;
    } else if (zoomDeepLink) {
      window.location.href = zoomDeepLink;
    } else {
      window.location.href = ZOOM_WEB_URL;
      return;
    }

    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = ZOOM_WEB_URL;
      }
    }, 1200);
  }, [ZOOM_WEB_URL, zoomDeepLink, zoomAndroidIntent]);

  return (
    <div className="w-full min-h-[100svh] bg-[#dfeee7] flex justify-center px-3 py-6">
      <div ref={wrapRef} className="w-full max-w-[1100px]">
        <Document
          file={PDF_URL}
          onLoadSuccess={({ numPages }) => setNumPages(numPages || 1)}
          loading={<div className="text-center text-gray-700 py-10">Cargando…</div>}
          error={
            <div className="text-center text-red-700 py-10">
              No se pudo cargar el PDF.
              <div className="text-sm text-gray-700 mt-1">
                Revisá que exista en <b>public</b> y el nombre sea exactamente:
                <b> Invitacion Boda2.pdf</b>
              </div>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, idx) => {
            const pageNumber = idx + 1;

            // Hotspots solo sobre la página 1
            if (pageNumber === 1) {
              return (
                <div
                  key={pageNumber}
                  className="relative mx-auto w-fit"
                  style={{ width: pageWidth }}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />

                  {/* ===== HOTSPOT: WAZE ===== */}
                  <button
                    type="button"
                    aria-label="Abrir Waze"
                    onClick={openWaze}
                    className="absolute z-30"
                    style={{
                      top: preset.waze.top,
                      left: preset.waze.left,
                      width: `${pctToPx(preset.waze.w)}px`,
                      height: `${preset.waze.hPx}px`,
                      transform: "translate(-50%, -50%)",
                      background: "transparent",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                    }}
                  />

                  {/* ===== HOTSPOT: ZOOM ===== */}
                  <button
                    type="button"
                    aria-label="Abrir Zoom"
                    onClick={openZoom}
                    className="absolute z-30"
                    style={{
                      top: preset.zoom.top,
                      left: preset.zoom.left,
                      width: `${pctToPx(preset.zoom.w)}px`,
                      height: `${preset.zoom.hPx}px`,
                      transform: "translate(-50%, -50%)",
                      background: "transparent",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                    }}
                  />

                  {/* ===== HOTSPOT: CALENDARIO ===== */}
                  <button
                    type="button"
                    aria-label="Agregar al calendario"
                    onClick={openCalendar}
                    className="absolute z-30"
                    style={{
                      top: preset.cal.top,
                      left: preset.cal.left,
                      width: `${pctToPx(preset.cal.w)}px`,
                      height: `${preset.cal.hPx}px`,
                      transform: "translate(-50%, -50%)",
                      background: "transparent",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                    }}
                  />
                </div>
              );
            }

            return (
              <div key={pageNumber} className="mx-auto w-fit">
                <Page
                  pageNumber={pageNumber}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            );
          })}
        </Document>
      </div>
    </div>
  );
}
