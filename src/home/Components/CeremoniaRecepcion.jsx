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
  // IMÁGENES (TU RUTA REAL)
  // =============================
  const slides = useMemo(
    () => ["/1.JPG", "/2.JPG", "/3.JPG", "/4.JPG", "/5.JPG"],
    []
  );

  // =============================
  // AJUSTES POR PORCENTAJE (TOCÁ SOLO ESTO)
  // =============================
  const SLIDES_PAGE = 1;

  // Bloque blanco grande (tapa el grid)
  const TAPE_MOBILE_TOP = "45%";
  const TAPE_MOBILE_LEFT = "50%";
  const TAPE_MOBILE_W = "120%";
  const TAPE_MOBILE_H = 387;

  const TAPE_DESKTOP_TOP = "40%";
  const TAPE_DESKTOP_LEFT = "50%";
  const TAPE_DESKTOP_W = "88%";
  const TAPE_DESKTOP_H = 560;

  const TAPE_MOBILE_SHIFT_X = "0%";
  const TAPE_MOBILE_SHIFT_Y = "0%";
  const TAPE_DESKTOP_SHIFT_X = "0%";
  const TAPE_DESKTOP_SHIFT_Y = "0%";

  const TAPE_RADIUS = 22;
  const TAPE_SHADOW = "0 28px 70px rgba(0,0,0,0.14)";
  const TAPE_BORDER = "1px solid rgba(0,0,0,0.06)";
  const INNER_PAD_MOBILE = 14;
  const INNER_PAD_DESKTOP = 18;

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

      if (dt < 600 && Math.abs(dx) > 45 && Math.abs(dy) < 80) {
        if (dx > 0) goPrev();
        else goNext();
      }
    },
    [goPrev, goNext]
  );

  // Fallback si un día cambiás extensión (JPG <-> jpg)
  const onImgError = useCallback((e) => {
    const img = e.currentTarget;
    const src = String(img?.getAttribute("src") || "");
    if (!src) return;

    if (src.endsWith(".JPG")) img.src = src.replace(/\.JPG$/, ".jpg");
    else if (src.endsWith(".jpg")) img.src = src.replace(/\.jpg$/, ".JPG");
  }, []);

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

            if (pageNumber === SLIDES_PAGE) {
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

                  {/* ==================================
                      BLOQUE BLANCO + GALERÍA SELECCIONABLE
                     ================================== */}
                  <div
                    className="absolute z-50"
                    style={{
                      top: preset.top,
                      left: preset.left,
                      width: `${tapeWidthPx}px`,
                      height: `${preset.hPx}px`,
                      transform: `translate(calc(-50% + ${preset.shiftX}), ${preset.shiftY})`,
                      background: "white",
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
                            borderRadius: `${Math.max(14, TAPE_RADIUS - 6)}px`,
                            overflow: "hidden",
                            background: "#fff",
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
                            }}
                          />

                          {/* Prev/Next */}
                          <button
                            type="button"
                            onClick={goPrev}
                            aria-label="Anterior"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: 10,
                              transform: "translateY(-50%)",
                              width: 42,
                              height: 42,
                              borderRadius: 999,
                              border: "1px solid rgba(0,0,0,0.08)",
                              background: "rgba(255,255,255,0.92)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                              cursor: "pointer",
                              display: "grid",
                              placeItems: "center",
                              fontSize: 20,
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
                              position: "absolute",
                              top: "50%",
                              right: 10,
                              transform: "translateY(-50%)",
                              width: 42,
                              height: 42,
                              borderRadius: 999,
                              border: "1px solid rgba(0,0,0,0.08)",
                              background: "rgba(255,255,255,0.92)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                              cursor: "pointer",
                              display: "grid",
                              placeItems: "center",
                              fontSize: 20,
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
                              bottom: 10,
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
                                    i === active ? "rgba(0,0,0,0.70)" : "rgba(0,0,0,0.20)",
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
                            {slides.map((src, i) => (
                              <button
                                key={`${src}-${i}`}
                                type="button"
                                onClick={() => setActive(i)}
                                aria-label={`Seleccionar foto ${i + 1}`}
                                style={{
                                  flex: "0 0 auto",
                                  border:
                                    i === active
                                      ? "2px solid rgba(0,0,0,0.55)"
                                      : "1px solid rgba(0,0,0,0.10)",
                                  borderRadius: 14,
                                  overflow: "hidden",
                                  padding: 0,
                                  background: "white",
                                  cursor: "pointer",
                                  boxShadow:
                                    i === active
                                      ? "0 14px 35px rgba(0,0,0,0.14)"
                                      : "0 10px 25px rgba(0,0,0,0.08)",
                                }}
                              >
                                <img
                                  src={src}
                                  onError={onImgError}
                                  alt={`Mini ${i + 1}`}
                                  draggable={false}
                                  style={{
                                    width: isMobile ? 86 : 96,
                                    height: isMobile ? 66 : 72,
                                    objectFit: "cover",
                                    display: "block",
                                  }}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
