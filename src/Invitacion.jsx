// src/Invitacion.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Invitacion() {
  const navigate = useNavigate();

  const wrapRef = useRef(null);
  const [wrapSize, setWrapSize] = useState({ w: 0, h: 0 });
  const [pageSize, setPageSize] = useState({ w: 0, h: 0 });
  const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setWrapSize({ w: el.clientWidth, h: el.clientHeight });
    });

    ro.observe(el);
    setWrapSize({ w: el.clientWidth, h: el.clientHeight });

    return () => ro.disconnect();
  }, []);

  const scale = useMemo(() => {
    if (!wrapSize.w || !wrapSize.h || !pageSize.w || !pageSize.h) return 1;

    const sW = wrapSize.w / pageSize.w;
    const sH = wrapSize.h / pageSize.h;

    return Math.min(sW, sH) * 0.995;
  }, [wrapSize, pageSize]);

  return (
    <div className="min-h-screen w-full bg-[#dfeee7]">
      <div
        ref={wrapRef}
        className="relative mx-auto h-[100svh] w-full max-w-[1100px] overflow-hidden flex items-center justify-center px-3 md:px-6"
      >
        <div className="relative z-10">
          <Document
            file="/cover.pdf"
            onLoadError={(err) =>
              setPdfError(err?.message || "No se pudo cargar el PDF.")
            }
            loading={<div className="text-gray-700">Cargando…</div>}
            error={
              <div className="text-center text-gray-800">
                <div className="mb-2">No se pudo cargar el PDF.</div>
                <div className="text-sm opacity-80">{pdfError}</div>
              </div>
            }
          >
            <Page
              pageNumber={1}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              onLoadSuccess={(page) => {
                const vp = page.getViewport({ scale: 1 });
                setPageSize({ w: vp.width, h: vp.height });
              }}
            />
          </Document>

          {/* ✅ HITBOX arriba: sobre el "INGRESAR" (texto) */}
          <button
            type="button"
            aria-label="Ingresar"
            onClick={() => navigate("/boda")}
            className="
              absolute
              left-1/2 -translate-x-1/2
              top-[38%] -translate-y-1/2
              w-[min(260px,60vw)] h-10
              opacity-0 cursor-pointer
              focus-visible:opacity-20
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70
            "
          />
        </div>
      </div>
    </div>
  );
}
