// src/home/Components/InvitacionPrincipal3.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function InvitacionPrincipal3() {
  const PDF_URL = useMemo(() => encodeURI("/Invitacion Boda3.pdf"), []);

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
                <b> Invitacion Boda3.pdf</b>
              </div>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, idx) => {
            const pageNumber = idx + 1;
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
