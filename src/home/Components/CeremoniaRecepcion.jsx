// src/home/Components/InvitacionPrincipal.jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function InvitacionPrincipal() {
  // =============================
  // PDF
  // =============================
  const PDF_URL = useMemo(() => encodeURI("/Invitacion Boda4.pdf"), []);

  // =============================
  // IMÁGENES (public)
  // =============================
  const slides = useMemo(() => ["/1.JPG", "/2.JPG", "/3.JPG", "/4.JPG", "/5.JPG"], []);

  // =============================
  // AJUSTES POR PORCENTAJE (TOCÁ SOLO ESTO)
  // =============================
  const SLIDES_PAGE = 1;

  // ===== WhatsApp hotspot =====
  // Página donde está el número (si está en otra, cambiá esto)
  const WHATSAPP_PAGE = 1;

  // Link WhatsApp (E.164 sin +, sin guiones)
  const WHATSAPP_PHONE_E164 = "50237144500";
  const WHATSAPP_TEXT = "Hola, si te confirmo mi asistencia!";
  const WHATSAPP_URL = useMemo(() => {
    const q = WHATSAPP_TEXT ? `?text=${encodeURIComponent(WHATSAPP_TEXT)}` : "";
    return `https://wa.me/${WHATSAPP_PHONE_E164}${q}`;
  }, []);

  // Ajustá estos 2 bloques hasta que el click quede EXACTO sobre el número/ícono
  const WHATSAPP_MOBILE = { top: "23%", left: "50%", w: "60%", hPx: 44 };
  const WHATSAPP_DESKTOP = { top: "23%", left: "50%", w: "50%", hPx: 100 };

  // Texto guía (solo label, delgadito)
  const WHATSAPP_LABEL = "click aqui";

  // Bloque “papel” (tapa el grid) — look impreso (menos “widget encima”)
  const TAPE_MOBILE_TOP = "45%";
  const TAPE_MOBILE_LEFT = "50%";
  const TAPE_MOBILE_W = "95%";
  const TAPE_MOBILE_H = 375;

  const TAPE_DESKTOP_TOP = "47%";
  const TAPE_DESKTOP_LEFT = "50%";
  const TAPE_DESKTOP_W = "90%";
  const TAPE_DESKTOP_H = 800;

  const TAPE_MOBILE_SHIFT_X = "0%";
  const TAPE_MOBILE_SHIFT_Y = "0%";
  const TAPE_DESKTOP_SHIFT_X = "0%";
  const TAPE_DESKTOP_SHIFT_Y = "0%";

  // Estética “impresa”
  const TAPE_BG = "rgba(255,255,255,0.96)";
  const TAPE_RADIUS = 10;
  const TAPE_SHADOW = "none";
  const TAPE_BORDER = "1px solid rgba(63,75,36,0.18)";
  const INNER_PAD_MOBILE = 12;
  const INNER_PAD_DESKTOP = 14;

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

  // ✅ FIX: mobile debe depender del contenedor (wrap), no del pageWidth
  const isMobile = wrapWidth < 640;

  const preset = useMemo(() => {
    return isMobile
      ? {
          top: TAPE_MOBILE_TOP,
          left: TAPE_MOBILE_LEFT,
          wPct: TAPE_MOBILE_W,
          hPx: TAPE_MOBILE_H,
          shiftX: TAPE_MOBILE_SHIFT_X,
          shiftY: TAPE_MOBILE_SHIFT_Y,
          pad: INNER_PAD_MOBILE,
        }
      : {
          top: TAPE_DESKTOP_TOP,
          left: TAPE_DESKTOP_LEFT,
          wPct: TAPE_DESKTOP_W,
          hPx: TAPE_DESKTOP_H,
          shiftX: TAPE_DESKTOP_SHIFT_X,
          shiftY: TAPE_DESKTOP_SHIFT_Y,
          pad: INNER_PAD_DESKTOP,
        };
  }, [
    isMobile,
    TAPE_MOBILE_TOP,
    TAPE_MOBILE_LEFT,
    TAPE_MOBILE_W,
    TAPE_MOBILE_H,
    TAPE_MOBILE_SHIFT_X,
    TAPE_MOBILE_SHIFT_Y,
    TAPE_DESKTOP_TOP,
    TAPE_DESKTOP_LEFT,
    TAPE_DESKTOP_W,
    TAPE_DESKTOP_H,
    TAPE_DESKTOP_SHIFT_X,
    TAPE_DESKTOP_SHIFT_Y,
  ]);

  const pctToPx = useCallback(
    (pctStr) => {
      const pct = parseFloat(String(pctStr).replace("%", ""));
      if (!pageWidth || Number.isNaN(pct)) return 0;
      return Math.round((pct / 100) * pageWidth);
    },
    [pageWidth]
  );

  const tapeWidthPx = useMemo(() => pctToPx(preset.wPct), [pctToPx, preset.wPct]);

  // =============================
  // GALERÍA (selección + prev/next + swipe)
  // =============================
  const [active, setActive] = useState(0);

  const goPrev = useCallback(() => {
    setActive((p) => (p - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setActive((p) => (p + 1) % slides.length);
  }, [slides.length]);

  // Teclado (desktop)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  // Swipe (móvil)
  const touchRef = useRef({ x: 0, y: 0, t: 0 });

  const onTouchStart = useCallback((e) => {
    const t = e.touches?.[0];
    if (!t) return;
    touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      const t = e.changedTouches?.[0];
      if (!t) return;

      const dx = t.clientX - touchRef.current.x;
      const dy = t.clientY - touchRef.current.y;
      const dt = Date.now() - touchRef.current.t;

      if (dt < 650 && Math.abs(dx) > 45 && Math.abs(dy) < 90) {
        if (dx > 0) goPrev();
        else goNext();
      }
    },
    [goPrev, goNext]
  );

  // Fallback si cambiás extensión (JPG <-> jpg)
  const onImgError = useCallback((e) => {
    const img = e.currentTarget;
    const src = String(img?.getAttribute("src") || "");
    if (!src) return;

    if (src.endsWith(".JPG")) img.src = src.replace(/\.JPG$/, ".jpg");
    else if (src.endsWith(".jpg")) img.src = src.replace(/\.jpg$/, ".JPG");
  }, []);

  // WhatsApp hotspot preset
  const waPreset = useMemo(() => (isMobile ? WHATSAPP_MOBILE : WHATSAPP_DESKTOP), [isMobile]);

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
                <b> Invitacion Boda4.pdf</b>
              </div>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, idx) => {
            const pageNumber = idx + 1;

            // Wrapper común por página (relative) para hotspots
            const PageWrapper = ({ children }) => (
              <div className="relative mx-auto w-fit" style={{ width: pageWidth }}>
                {children}

                {/* =============================
                    HOTSPOT WhatsApp + label "click aqui" (texto simple)
                   ============================= */}
                {pageNumber === WHATSAPP_PAGE && (
                  <>
                    {/* Texto guía (no bloquea el click) */}
                    <div
                      className="absolute z-50"
                      style={{
                        top: waPreset.top,
                        left: waPreset.left,
                        transform: "translate(-50%, calc(-50% - 12px))",
                        fontSize: isMobile ? 12 : 13,
                        fontWeight: 400,
                        letterSpacing: "0.2px",
                        color: "rgba(63,75,36,0.85)",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        boxShadow: "none",
                        pointerEvents: "none",
                        userSelect: "none",
                        whiteSpace: "nowrap",
                        textShadow: "0 1px 0 rgba(255,255,255,0.65)",
                      }}
                    >
                      {WHATSAPP_LABEL}
                    </div>

                    {/* Área clickeable */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Escribir por WhatsApp"
                      title="Escribir por WhatsApp"
                      className="absolute z-40"
                      style={{
                        top: waPreset.top,
                        left: waPreset.left,
                        width: `${pctToPx(waPreset.w)}px`,
                        height: `${waPreset.hPx}px`,
                        transform: "translate(-50%, -50%)",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    />
                  </>
                )}
              </div>
            );

            if (pageNumber === SLIDES_PAGE) {
              return (
                <PageWrapper key={pageNumber}>
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />

                  {/* ==================================
                      BLOQUE “PAPEL” + GALERÍA (look integrado)
                     ================================== */}
                  <div
                    className="absolute z-50"
                    style={{
                      top: preset.top,
                      left: preset.left,
                      width: `${tapeWidthPx}px`,
                      height: `${preset.hPx}px`,
                      transform: `translate(calc(-50% + ${preset.shiftX}), ${preset.shiftY})`,
                      background: TAPE_BG,
                      borderRadius: `${TAPE_RADIUS}px`,
                      boxShadow: TAPE_SHADOW,
                      border: TAPE_BORDER,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ padding: `${preset.pad}px`, width: "100%", height: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: isMobile ? 10 : 12,
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {/* Imagen principal */}
                        <div
                          onTouchStart={onTouchStart}
                          onTouchEnd={onTouchEnd}
                          style={{
                            position: "relative",
                            flex: "1 1 auto",
                            width: "100%",
                            borderRadius: `${Math.max(10, TAPE_RADIUS - 2)}px`,
                            overflow: "hidden",
                            background: "rgba(255,255,255,0.9)",
                            border: "1px solid rgba(0,0,0,0.06)",
                          }}
                        >
                          <img
                            key={slides[active]}
                            src={slides[active]}
                            onError={onImgError}
                            alt={`Foto ${active + 1}`}
                            draggable={false}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              transition: "opacity 220ms ease",
                            }}
                          />

                          {/* Prev/Next (desktop) */}
                          <button
                            type="button"
                            onClick={goPrev}
                            aria-label="Anterior"
                            style={{
                              display: isMobile ? "none" : "grid",
                              placeItems: "center",
                              position: "absolute",
                              top: "50%",
                              left: 10,
                              transform: "translateY(-50%)",
                              width: 34,
                              height: 34,
                              borderRadius: 999,
                              border: "1px solid rgba(63,75,36,0.18)",
                              background: "rgba(255,255,255,0.65)",
                              boxShadow: "none",
                              cursor: "pointer",
                              fontSize: 18,
                              lineHeight: 1,
                              userSelect: "none",
                            }}
                          >
                            ‹
                          </button>

                          <button
                            type="button"
                            onClick={goNext}
                            aria-label="Siguiente"
                            style={{
                              display: isMobile ? "none" : "grid",
                              placeItems: "center",
                              position: "absolute",
                              top: "50%",
                              right: 10,
                              transform: "translateY(-50%)",
                              width: 34,
                              height: 34,
                              borderRadius: 999,
                              border: "1px solid rgba(63,75,36,0.18)",
                              background: "rgba(255,255,255,0.65)",
                              boxShadow: "none",
                              cursor: "pointer",
                              fontSize: 18,
                              lineHeight: 1,
                              userSelect: "none",
                            }}
                          >
                            ›
                          </button>

                          {/* Dots */}
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              right: 0,
                              bottom: 8,
                              display: "flex",
                              justifyContent: "center",
                              gap: 6,
                              pointerEvents: "none",
                            }}
                          >
                            {slides.map((_, i) => (
                              <span
                                key={i}
                                style={{
                                  width: 7,
                                  height: 7,
                                  borderRadius: 999,
                                  background:
                                    i === active ? "rgba(63,75,36,0.72)" : "rgba(63,75,36,0.22)",
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Miniaturas */}
                        <div
                          style={{
                            flex: "0 0 auto",
                            width: "100%",
                            overflowX: "auto",
                            WebkitOverflowScrolling: "touch",
                            paddingBottom: 2,
                          }}
                        >
                          <div style={{ display: "flex", gap: 10 }}>
                            {slides.map((src, i) => {
                              const selected = i === active;
                              return (
                                <button
                                  key={`${src}-${i}`}
                                  type="button"
                                  onClick={() => setActive(i)}
                                  aria-label={`Seleccionar foto ${i + 1}`}
                                  style={{
                                    flex: "0 0 auto",
                                    border: selected
                                      ? "2px solid rgba(63,75,36,0.55)"
                                      : "1px solid rgba(0,0,0,0.10)",
                                    borderRadius: 10,
                                    overflow: "hidden",
                                    padding: 0,
                                    background: "rgba(255,255,255,0.85)",
                                    cursor: "pointer",
                                    boxShadow: "none",
                                    transform: selected ? "translateY(-1px)" : "none",
                                    transition: "transform 160ms ease, border-color 160ms ease",
                                  }}
                                >
                                  <img
                                    src={src}
                                    onError={onImgError}
                                    alt={`Mini ${i + 1}`}
                                    draggable={false}
                                    style={{
                                      width: isMobile ? 82 : 94,
                                      height: isMobile ? 62 : 70,
                                      objectFit: "cover",
                                      display: "block",
                                      filter: selected ? "none" : "saturate(0.95)",
                                      opacity: selected ? 1 : 0.92,
                                    }}
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PageWrapper>
              );
            }

            return (
              <PageWrapper key={pageNumber}>
                <Page
                  pageNumber={pageNumber}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </PageWrapper>
            );
          })}
        </Document>
      </div>
    </div>
  );
}
