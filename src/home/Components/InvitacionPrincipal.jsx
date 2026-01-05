// src/home/Components/InvitacionPrincipal.jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function InvitacionPrincipal() {
  // =============================
  // CARGAR FUENTES
  // =============================
  useEffect(() => {
    const ensureLink = (id, rel, href) => {
      if (document.getElementById(id)) return;
      const link = document.createElement("link");
      link.id = id;
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
    };

    ensureLink("gf-preconnect-1", "preconnect", "https://fonts.googleapis.com");
    ensureLink("gf-preconnect-2", "preconnect", "https://fonts.gstatic.com");
    ensureLink(
      "gf-invitacion-fonts",
      "stylesheet",
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;600&family=Playfair+Display:wght@400;500&display=swap"
    );
  }, []);

  // =============================
  // PDF
  // =============================
  const PDF_URL = useMemo(() => encodeURI("/Invitacion Boda1.pdf"), []);

  // =============================
  // DATOS DIRECCIÓN / EVENTO (TOCÁ SOLO ESTO)
  // =============================
  const ADDRESS_TEXT =
    "Salón del Reino de los Testigos de Jehová Congregación El Encinal, Entre 15 Avenida B y 12 Avenida, Colonia La Alemana, zona 7, 01057, Mixco, Guatemala";

  const EVENT_TITLE = "Boda Mario & Andrea";
  const EVENT_DETAILS = "¡Te esperamos para celebrar con nosotros!";
  const EVENT_LOCATION = ADDRESS_TEXT;

  const EVENT_START_LOCAL = "20260228T100000";
  const EVENT_END_LOCAL = "20260228T120000";

  // ✅ WAZE EXACTO
  const WAZE_EXACT_WEB_URL =
    "https://www.waze.com/live-map/meeting?token=vKyrVKJMB5oKZPfP6w-sd&locale=es-419&env=row&utm_campaign=share_drive&utm_source=waze_app&utm_medium=undefined";

  const WAZE_COORDS = null;

  // =============================
  // AJUSTES POR PORCENTAJE
  // =============================

  // -----------------------------
  // PHONE (<= 409px)
  // -----------------------------
  const NAME_MOBILE_TOP = "15%";
  const NAME_MOBILE_LEFT = "50%";
  const NAME_MOBILE_W = "70%";
  const NAME_MOBILE_MIN_H = 1;
  const NAME_MOBILE_FONT = 34;
  const NAME_MOBILE_MIN_FONT = 22;
  const NAME_MOBILE_LINE_HEIGHT = 1.02;
  const NAME_MOBILE_GAP = 6;

  const NAME_MOBILE_SHIFT_X = "0%";
  const NAME_MOBILE_SHIFT_Y = "0%";

  const PAX_MOBILE_FONT = 12;
  const PAX_SHIFT_Y_MOBILE_PX = 10;

  const MOBILE_TOP = "40%";
  const MOBILE_LEFT = "50%";
  const MOBILE_W = "40%";
  const MOBILE_H = 50;

  const MOBILE_SHIFT_X = "0%";
  const MOBILE_SHIFT_Y = "0%";

  const MOBILE_VALUE_SIZE = 18;
  const MOBILE_LABEL_SIZE = 8;

  const WAZE_MOBILE = { top: "90%", left: "40%", w: "16%", hPx: 56 };
  const CAL_MOBILE = { top: "90%", left: "63%", w: "16%", hPx: 56 };

  // -----------------------------
  // PHONE XL (410px - 639px)  ✅ iPhone 12 Pro Max / 15 / etc.
  // TOCÁ SOLO ESTO para esos teléfonos
  // -----------------------------
  const NAME_PHONE_XL_TOP = "14%";
  const NAME_PHONE_XL_LEFT = "50%";
  const NAME_PHONE_XL_W = "68%";
  const NAME_PHONE_XL_MIN_H = 1;
  const NAME_PHONE_XL_FONT = 44;
  const NAME_PHONE_XL_MIN_FONT = 24;
  const NAME_PHONE_XL_LINE_HEIGHT = 1.02;
  const NAME_PHONE_XL_GAP = 7;

  const NAME_PHONE_XL_SHIFT_X = "0%";
  const NAME_PHONE_XL_SHIFT_Y = "0%";

  const PAX_PHONE_XL_FONT = 13;
  const PAX_SHIFT_Y_PHONE_XL_PX = 8;

  const PHONE_XL_TOP = "39%";
  const PHONE_XL_LEFT = "50%";
  const PHONE_XL_W = "44%";
  const PHONE_XL_H = 56;

  const PHONE_XL_SHIFT_X = "0%";
  const PHONE_XL_SHIFT_Y = "0%";

  const PHONE_XL_VALUE_SIZE = 20;
  const PHONE_XL_LABEL_SIZE = 9;

  const WAZE_PHONE_XL = { top: "90%", left: "40%", w: "15%", hPx: 60 };
  const CAL_PHONE_XL = { top: "90%", left: "63%", w: "15%", hPx: 60 };

  // -----------------------------
  // DESKTOP (>= 640px)
  // -----------------------------
  const NAME_DESKTOP_TOP = "15%";
  const NAME_DESKTOP_LEFT = "50%";
  const NAME_DESKTOP_W = "70%";
  const NAME_DESKTOP_MIN_H = 100;
  const NAME_DESKTOP_FONT = 90;
  const NAME_DESKTOP_MIN_FONT = 28;
  const NAME_DESKTOP_LINE_HEIGHT = 1.02;
  const NAME_DESKTOP_GAP = 8;

  const NAME_DESKTOP_SHIFT_X = "0%";
  const NAME_DESKTOP_SHIFT_Y = "0%";

  const PAX_DESKTOP_FONT = 20;
  const PAX_SHIFT_Y_DESKTOP_PX = 3;

  const DESKTOP_TOP = "41%";
  const DESKTOP_LEFT = "50%";
  const DESKTOP_W = "46%";
  const DESKTOP_H = 90;

  const DESKTOP_SHIFT_X = "0%";
  const DESKTOP_SHIFT_Y = "0%";

  const DESKTOP_VALUE_SIZE = 54;
  const DESKTOP_LABEL_SIZE = 14;

  const WAZE_DESKTOP = { top: "90%", left: "38%", w: "10%", hPx: 100 };
  const CAL_DESKTOP = { top: "90%", left: "63%", w: "10%", hPx: 100 };

  // -----------------------------
  // Tape detrás del nombre
  // -----------------------------
  const NAME_TAPE_BG = "white";
  const NAME_TAPE_OPACITY = 1;
  const NAME_TAPE_RADIUS = 0;

  const NAME_TAPE_PAD_X_MOBILE = 18;
  const NAME_TAPE_PAD_Y_MOBILE = 30;

  const NAME_TAPE_PAD_X_PHONE_XL = 20;
  const NAME_TAPE_PAD_Y_PHONE_XL = 26;

  const NAME_TAPE_PAD_X_DESKTOP = 32;
  const NAME_TAPE_PAD_Y_DESKTOP = 16;

  // Tape detrás del PAX
  const PAX_GAP_PX = 3;
  const PAX_TAPE_BG = "white";
  const PAX_TAPE_OPACITY = 1;
  const PAX_TAPE_RADIUS = 0;
  const PAX_TAPE_PAD_Y = 0;
  const PAX_TAPE_PAD_X = 10;

  // =============================
  // INVITADOS + PAX (URL + localStorage)
  // =============================
  const [guests, setGuests] = useState([]);
  const [pax, setPax] = useState(null);

  useEffect(() => {
    const fixMojibake = (s) => {
      if (!s) return "";
      return String(s)
        .replace(/Â/g, "")
        .replace(/Ã±/g, "ñ")
        .replace(/Ã‘/g, "Ñ")
        .replace(/Ã¡/g, "á")
        .replace(/ÃÁ/g, "Á")
        .replace(/Ã©/g, "é")
        .replace(/Ã‰/g, "É")
        .replace(/Ã­/g, "í")
        .replace(/ÃÍ/g, "Í")
        .replace(/Ã³/g, "ó")
        .replace(/Ã“/g, "Ó")
        .replace(/Ãº/g, "ú")
        .replace(/Ãš/g, "Ú")
        .replace(/Ã¼/g, "ü")
        .replace(/Ãœ/g, "Ü");
    };

    const safeDecode = (v) => {
      if (!v) return "";
      try {
        return decodeURIComponent(String(v).replace(/\+/g, " ")).trim();
      } catch {
        return String(v).trim();
      }
    };

    const normalize = (s) =>
      fixMojibake(
        safeDecode(s)
          .replace(/\s+/g, " ")
          .trim()
      );

    const buildFullName = (obj) => {
      if (!obj) return "";
      if (typeof obj === "string") return normalize(obj);

      const full = normalize(obj?.nombreCompleto ?? obj?.fullName ?? "");
      if (full) return full;

      const n = normalize(obj?.nombre ?? "");
      const a = normalize(obj?.apellido ?? "");
      return normalize(`${n} ${a}`);
    };

    const toNum = (v) => {
      const n = parseInt(String(v ?? "").trim(), 10);
      return Number.isFinite(n) && n >= 0 ? n : null;
    };

    const decodeBase64Utf8 = (b64) => {
      let fixed = String(b64).trim().replace(/ /g, "+").replace(/-/g, "+").replace(/_/g, "/");
      while (fixed.length % 4 !== 0) fixed += "=";

      const bin = atob(fixed);
      const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
      return new TextDecoder("utf-8").decode(bytes);
    };

    const fromBase64Pack = () => {
      const params = new URLSearchParams(window.location.search);
      const pack = params.get("i");
      if (!pack) return { invitados: [], pax: null };

      try {
        const json = decodeBase64Utf8(pack);
        const parsed = JSON.parse(json);

        const invitados = Array.isArray(parsed?.invitados) ? parsed.invitados : [];

        const adultos =
          toNum(parsed?.adultos) ??
          toNum(parsed?.adulto) ??
          toNum(parsed?.cantidadAdultos) ??
          toNum(parsed?.cantAdultos);

        const ninos =
          toNum(parsed?.ninos) ??
          toNum(parsed?.["niños"]) ??
          toNum(parsed?.ninios) ??
          toNum(parsed?.cantidadNinos) ??
          toNum(parsed?.cantNinos);

        const paxOut =
          adultos === null && ninos === null
            ? null
            : { adultos: Math.max(0, adultos ?? 0), ninos: Math.max(0, ninos ?? 0) };

        const namesOut = invitados.map((x) => buildFullName(x)).map(normalize).filter(Boolean);

        return { invitados: namesOut, pax: paxOut };
      } catch {
        return { invitados: [], pax: null };
      }
    };

    const fromUrlLegacy = () => {
      const params = new URLSearchParams(window.location.search);

      const many = params
        .getAll("invitado")
        .concat(params.getAll("guest"))
        .concat(params.getAll("nombreCompleto"));

      const invitadoPack = params.get("invitados");
      const nombre = params.get("nombre");
      const apellido = params.get("apellido");

      const out = [];

      many.forEach((v) => {
        const n = normalize(v);
        if (n) out.push(n);
      });

      if (invitadoPack) {
        const raw = safeDecode(invitadoPack);
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            parsed.forEach((x) => {
              const n = buildFullName(x);
              if (n) out.push(n);
            });
          } else {
            const n = buildFullName(parsed);
            if (n) out.push(n);
          }
        } catch {
          raw
            .split(",")
            .map((x) => normalize(x))
            .filter(Boolean)
            .forEach((x) => out.push(x));
        }
      }

      if (nombre || apellido) {
        const n = normalize(`${nombre || ""} ${apellido || ""}`);
        if (n) out.push(n);
      }

      return out;
    };

    const fromStorageGuestsLegacy = () => {
      const out = [];
      try {
        const rawArr = localStorage.getItem("invitados");
        if (rawArr) {
          const parsed = JSON.parse(rawArr);

          if (Array.isArray(parsed)) {
            parsed.forEach((x) => {
              const n = buildFullName(x);
              if (n) out.push(n);
            });
          } else if (parsed?.invitados && Array.isArray(parsed.invitados)) {
            parsed.invitados.forEach((x) => {
              const n = buildFullName(x);
              if (n) out.push(n);
            });
          }
        }

        const rawOne = localStorage.getItem("invitado");
        if (rawOne) {
          try {
            const parsed = JSON.parse(rawOne);
            const n = buildFullName(parsed);
            if (n) out.push(n);
          } catch {
            const n = normalize(rawOne);
            if (n) out.push(n);
          }
        }
      } catch {}
      return out;
    };

    const paxFromAnyStorage = () => {
      const keys = ["config_invitados_v2", "config_invitados_v1", "invitados"];

      for (const k of keys) {
        try {
          const raw = localStorage.getItem(k);
          if (!raw) continue;

          const parsed = JSON.parse(raw);

          const adultos =
            toNum(parsed?.adultos) ??
            toNum(parsed?.adulto) ??
            toNum(parsed?.cantidadAdultos) ??
            toNum(parsed?.cantAdultos);

          const ninos =
            toNum(parsed?.ninos) ??
            toNum(parsed?.["niños"]) ??
            toNum(parsed?.ninios) ??
            toNum(parsed?.cantidadNinos) ??
            toNum(parsed?.cantNinos);

          if (adultos === null && ninos === null) continue;

          return { adultos: Math.max(0, adultos ?? 0), ninos: Math.max(0, ninos ?? 0) };
        } catch {}
      }

      return null;
    };

    const base64Data = fromBase64Pack();

    const list = [...base64Data.invitados, ...fromUrlLegacy(), ...fromStorageGuestsLegacy()]
      .map(normalize)
      .filter(Boolean);

    const seen = new Set();
    const uniq = [];
    for (const g of list) {
      const key = g.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        uniq.push(g);
      }
    }
    setGuests(uniq);

    const storagePax = paxFromAnyStorage();
    const mergedPax =
      base64Data.pax || storagePax
        ? {
            adultos: base64Data.pax?.adultos ?? storagePax?.adultos ?? 0,
            ninos: base64Data.pax?.ninos ?? storagePax?.ninos ?? 0,
          }
        : null;

    setPax(mergedPax);
  }, []);

  // =============================
  // COUNTDOWN
  // =============================
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00" });

  useEffect(() => {
    const target = new Date(2026, 1, 28, 0, 0, 0, 0).getTime();

    const tick = () => {
      const now = Date.now();
      const distance = Math.max(0, target - now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // =============================
  // RESPONSIVE PDF (ancho real)
  // =============================
  const wrapRef = useRef(null);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => {
      const docW = document.documentElement?.clientWidth || 0;
      const winW = window.innerWidth || 0;
      const vvW = window.visualViewport?.width || 0;

      const viewportW = Math.min(...[docW, winW, vvW].filter((x) => Number.isFinite(x) && x > 0));
      const rectW = el.getBoundingClientRect().width || 0;

      const effective = Math.min(rectW || viewportW, viewportW || rectW || 360);
      setWrapWidth(effective || 360);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    window.addEventListener("resize", update);
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", update);
      vv.addEventListener("scroll", update);
    }

    const raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", update);
      if (vv) {
        vv.removeEventListener("resize", update);
        vv.removeEventListener("scroll", update);
      }
    };
  }, []);

  const pageWidth = useMemo(() => {
    if (!wrapWidth) return 360;
    return Math.min(wrapWidth, 1100);
  }, [wrapWidth]);

  // ✅ 3 modos: phone / phoneXL / desktop
  const mode = useMemo(() => {
    if (pageWidth >= 640) return "desktop";
    if (pageWidth >= 410) return "phoneXL";
    return "phone";
  }, [pageWidth]);

  const pctToPx = useCallback(
    (pctStr) => {
      const pct = parseFloat(String(pctStr).replace("%", ""));
      if (!pageWidth || Number.isNaN(pct)) return 0;
      return Math.round((pct / 100) * pageWidth);
    },
    [pageWidth]
  );

  const preset = useMemo(() => {
    if (mode === "desktop") {
      return {
        // name
        nameTop: NAME_DESKTOP_TOP,
        nameLeft: NAME_DESKTOP_LEFT,
        nameWPct: NAME_DESKTOP_W,
        nameMinHPx: NAME_DESKTOP_MIN_H,
        nameFont: NAME_DESKTOP_FONT,
        nameMinFont: NAME_DESKTOP_MIN_FONT,
        nameLineHeight: NAME_DESKTOP_LINE_HEIGHT,
        nameGap: NAME_DESKTOP_GAP,
        nameShiftX: NAME_DESKTOP_SHIFT_X,
        nameShiftY: NAME_DESKTOP_SHIFT_Y,
        nameTapePadX: NAME_TAPE_PAD_X_DESKTOP,
        nameTapePadY: NAME_TAPE_PAD_Y_DESKTOP,
        // pax
        paxFont: PAX_DESKTOP_FONT,
        paxShiftYPx: PAX_SHIFT_Y_DESKTOP_PX,
        // countdown
        top: DESKTOP_TOP,
        left: DESKTOP_LEFT,
        wPct: DESKTOP_W,
        hPx: DESKTOP_H,
        shiftX: DESKTOP_SHIFT_X,
        shiftY: DESKTOP_SHIFT_Y,
        valueSize: DESKTOP_VALUE_SIZE,
        labelSize: DESKTOP_LABEL_SIZE,
        colonSize: 38,
        // hotspots
        waze: WAZE_DESKTOP,
        cal: CAL_DESKTOP,
      };
    }

    if (mode === "phoneXL") {
      return {
        // name
        nameTop: NAME_PHONE_XL_TOP,
        nameLeft: NAME_PHONE_XL_LEFT,
        nameWPct: NAME_PHONE_XL_W,
        nameMinHPx: NAME_PHONE_XL_MIN_H,
        nameFont: NAME_PHONE_XL_FONT,
        nameMinFont: NAME_PHONE_XL_MIN_FONT,
        nameLineHeight: NAME_PHONE_XL_LINE_HEIGHT,
        nameGap: NAME_PHONE_XL_GAP,
        nameShiftX: NAME_PHONE_XL_SHIFT_X,
        nameShiftY: NAME_PHONE_XL_SHIFT_Y,
        nameTapePadX: NAME_TAPE_PAD_X_PHONE_XL,
        nameTapePadY: NAME_TAPE_PAD_Y_PHONE_XL,
        // pax
        paxFont: PAX_PHONE_XL_FONT,
        paxShiftYPx: PAX_SHIFT_Y_PHONE_XL_PX,
        // countdown
        top: PHONE_XL_TOP,
        left: PHONE_XL_LEFT,
        wPct: PHONE_XL_W,
        hPx: PHONE_XL_H,
        shiftX: PHONE_XL_SHIFT_X,
        shiftY: PHONE_XL_SHIFT_Y,
        valueSize: PHONE_XL_VALUE_SIZE,
        labelSize: PHONE_XL_LABEL_SIZE,
        colonSize: 32,
        // hotspots
        waze: WAZE_PHONE_XL,
        cal: CAL_PHONE_XL,
      };
    }

    // phone
    return {
      // name
      nameTop: NAME_MOBILE_TOP,
      nameLeft: NAME_MOBILE_LEFT,
      nameWPct: NAME_MOBILE_W,
      nameMinHPx: NAME_MOBILE_MIN_H,
      nameFont: NAME_MOBILE_FONT,
      nameMinFont: NAME_MOBILE_MIN_FONT,
      nameLineHeight: NAME_MOBILE_LINE_HEIGHT,
      nameGap: NAME_MOBILE_GAP,
      nameShiftX: NAME_MOBILE_SHIFT_X,
      nameShiftY: NAME_MOBILE_SHIFT_Y,
      nameTapePadX: NAME_TAPE_PAD_X_MOBILE,
      nameTapePadY: NAME_TAPE_PAD_Y_MOBILE,
      // pax
      paxFont: PAX_MOBILE_FONT,
      paxShiftYPx: PAX_SHIFT_Y_MOBILE_PX,
      // countdown
      top: MOBILE_TOP,
      left: MOBILE_LEFT,
      wPct: MOBILE_W,
      hPx: MOBILE_H,
      shiftX: MOBILE_SHIFT_X,
      shiftY: MOBILE_SHIFT_Y,
      valueSize: MOBILE_VALUE_SIZE,
      labelSize: MOBILE_LABEL_SIZE,
      colonSize: 32,
      // hotspots
      waze: WAZE_MOBILE,
      cal: CAL_MOBILE,
    };
  }, [
    mode,

    NAME_DESKTOP_TOP,
    NAME_DESKTOP_LEFT,
    NAME_DESKTOP_W,
    NAME_DESKTOP_MIN_H,
    NAME_DESKTOP_FONT,
    NAME_DESKTOP_MIN_FONT,
    NAME_DESKTOP_LINE_HEIGHT,
    NAME_DESKTOP_GAP,
    NAME_DESKTOP_SHIFT_X,
    NAME_DESKTOP_SHIFT_Y,
    NAME_TAPE_PAD_X_DESKTOP,
    NAME_TAPE_PAD_Y_DESKTOP,
    PAX_DESKTOP_FONT,
    PAX_SHIFT_Y_DESKTOP_PX,
    DESKTOP_TOP,
    DESKTOP_LEFT,
    DESKTOP_W,
    DESKTOP_H,
    DESKTOP_SHIFT_X,
    DESKTOP_SHIFT_Y,
    DESKTOP_VALUE_SIZE,
    DESKTOP_LABEL_SIZE,
    WAZE_DESKTOP,
    CAL_DESKTOP,

    NAME_PHONE_XL_TOP,
    NAME_PHONE_XL_LEFT,
    NAME_PHONE_XL_W,
    NAME_PHONE_XL_MIN_H,
    NAME_PHONE_XL_FONT,
    NAME_PHONE_XL_MIN_FONT,
    NAME_PHONE_XL_LINE_HEIGHT,
    NAME_PHONE_XL_GAP,
    NAME_PHONE_XL_SHIFT_X,
    NAME_PHONE_XL_SHIFT_Y,
    NAME_TAPE_PAD_X_PHONE_XL,
    NAME_TAPE_PAD_Y_PHONE_XL,
    PAX_PHONE_XL_FONT,
    PAX_SHIFT_Y_PHONE_XL_PX,
    PHONE_XL_TOP,
    PHONE_XL_LEFT,
    PHONE_XL_W,
    PHONE_XL_H,
    PHONE_XL_SHIFT_X,
    PHONE_XL_SHIFT_Y,
    PHONE_XL_VALUE_SIZE,
    PHONE_XL_LABEL_SIZE,
    WAZE_PHONE_XL,
    CAL_PHONE_XL,

    NAME_MOBILE_TOP,
    NAME_MOBILE_LEFT,
    NAME_MOBILE_W,
    NAME_MOBILE_MIN_H,
    NAME_MOBILE_FONT,
    NAME_MOBILE_MIN_FONT,
    NAME_MOBILE_LINE_HEIGHT,
    NAME_MOBILE_GAP,
    NAME_MOBILE_SHIFT_X,
    NAME_MOBILE_SHIFT_Y,
    NAME_TAPE_PAD_X_MOBILE,
    NAME_TAPE_PAD_Y_MOBILE,
    PAX_MOBILE_FONT,
    PAX_SHIFT_Y_MOBILE_PX,
    MOBILE_TOP,
    MOBILE_LEFT,
    MOBILE_W,
    MOBILE_H,
    MOBILE_SHIFT_X,
    MOBILE_SHIFT_Y,
    MOBILE_VALUE_SIZE,
    MOBILE_LABEL_SIZE,
    WAZE_MOBILE,
    CAL_MOBILE,
  ]);

  const boxWidthPx = useMemo(() => pctToPx(preset.wPct), [pctToPx, preset.wPct]);
  const nameWidthPx = useMemo(() => pctToPx(preset.nameWPct), [pctToPx, preset.nameWPct]);

  // =============================
  // AUTO-SCALE DEL NOMBRE
  // =============================
  const nameFontPx = useMemo(() => {
    if (!guests.length) return preset.nameFont;

    const base = preset.nameFont;
    const min = preset.nameMinFont;

    const lines = guests.length;
    const maxLen = guests.reduce((m, g) => Math.max(m, g.length), 0);

    let factor = 1;
    if (lines === 2) factor *= 0.8;
    if (lines === 3) factor *= 0.7;
    if (lines >= 4) factor *= 0.62;
    if (maxLen > 18) factor *= 18 / maxLen;

    const size = Math.floor(base * factor);
    return Math.max(min, size);
  }, [guests, preset.nameFont, preset.nameMinFont]);

  const nameHeightPx = useMemo(() => {
    if (!guests.length) return preset.nameMinHPx;

    const lines = guests.length;
    const lineH = nameFontPx * preset.nameLineHeight;
    const gap = preset.nameGap;
    const needed = Math.ceil(lines * lineH + Math.max(0, lines - 1) * gap);

    return Math.max(preset.nameMinHPx, needed);
  }, [guests, preset.nameMinHPx, nameFontPx, preset.nameLineHeight, preset.nameGap]);

  // =============================
  // LINKS: WAZE + CALENDAR
  // =============================
  const wazeWebByTextUrl = useMemo(() => {
    const q = encodeURIComponent(ADDRESS_TEXT);
    return `https://waze.com/ul?q=${q}&navigate=yes`;
  }, [ADDRESS_TEXT]);

  const wazeWebUrl = useMemo(() => {
    return WAZE_EXACT_WEB_URL?.trim() ? WAZE_EXACT_WEB_URL.trim() : wazeWebByTextUrl;
  }, [WAZE_EXACT_WEB_URL, wazeWebByTextUrl]);

  const googleCalendarUrl = useMemo(() => {
    const text = encodeURIComponent(EVENT_TITLE);
    const details = encodeURIComponent(EVENT_DETAILS);
    const location = encodeURIComponent(EVENT_LOCATION);
    const dates = `${EVENT_START_LOCAL}/${EVENT_END_LOCAL}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  }, [EVENT_TITLE, EVENT_DETAILS, EVENT_LOCATION, EVENT_START_LOCAL, EVENT_END_LOCAL]);

  const openWaze = useCallback(() => {
    let deepLink = "";
    let fallback = wazeWebUrl;

    if (WAZE_COORDS && typeof WAZE_COORDS.lat === "number" && typeof WAZE_COORDS.lon === "number") {
      const ll = `${WAZE_COORDS.lat},${WAZE_COORDS.lon}`;
      deepLink = `waze://?ll=${encodeURIComponent(ll)}&navigate=yes`;
      fallback = `https://waze.com/ul?ll=${encodeURIComponent(ll)}&navigate=yes`;
    } else {
      const q = encodeURIComponent(ADDRESS_TEXT);
      deepLink = `waze://?q=${q}&navigate=yes`;
    }

    window.location.href = deepLink;
    setTimeout(() => {
      window.location.href = fallback;
    }, 700);
  }, [ADDRESS_TEXT, wazeWebUrl, WAZE_COORDS]);

  const openCalendar = useCallback(() => {
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  }, [googleCalendarUrl]);

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
                <b> Invitacion Boda1.pdf</b>
              </div>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, idx) => {
            const pageNumber = idx + 1;

            if (pageNumber === 1) {
              return (
                <div key={pageNumber} className="relative mx-auto w-fit" style={{ width: pageWidth }}>
                  <Page pageNumber={pageNumber} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />

                  {/* =========================
                      OVERLAY: NOMBRES INVITADOS
                     ========================= */}
                  {!!guests.length && (
                    <div
                      className="absolute z-20 pointer-events-none select-none"
                      style={{
                        top: preset.nameTop,
                        left: preset.nameLeft,
                        width: `${nameWidthPx}px`,
                        height: `${nameHeightPx}px`,
                        transform: `translate(calc(-50% + ${preset.nameShiftX}), ${preset.nameShiftY})`,
                      }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background: NAME_TAPE_BG,
                          opacity: NAME_TAPE_OPACITY,
                          borderRadius: `${NAME_TAPE_RADIUS}px`,
                          padding: `${preset.nameTapePadY}px ${preset.nameTapePadX}px`,
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          className="w-full text-center"
                          style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: `${nameFontPx}px`,
                            lineHeight: preset.nameLineHeight,
                            color: "#3f4b24",
                            fontWeight: 400,
                            whiteSpace: "normal",
                            overflow: "visible",
                            wordBreak: "break-word",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: `${preset.nameGap}px`,
                            }}
                          >
                            {guests.map((g, i) => (
                              <div key={`${g}-${i}`}>{g}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =========================
                      OVERLAY: ADULTOS / NIÑOS
                     ========================= */}
                  {!!guests.length && pax && (
                    <div
                      className="absolute z-20 pointer-events-none select-none"
                      style={{
                        top: preset.nameTop,
                        left: preset.nameLeft,
                        width: `${nameWidthPx}px`,
                        transform: `translate(calc(-50% + ${preset.nameShiftX}), calc(${preset.nameShiftY} + ${
                          nameHeightPx + PAX_GAP_PX + preset.paxShiftYPx
                        }px))`,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          background: PAX_TAPE_BG,
                          opacity: PAX_TAPE_OPACITY,
                          borderRadius: `${PAX_TAPE_RADIUS}px`,
                          padding: `${PAX_TAPE_PAD_Y}px ${PAX_TAPE_PAD_X}px`,
                        }}
                      >
                        <div
                          className="w-full text-center"
                          style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: `${preset.paxFont}px`,
                            letterSpacing: "0.12em",
                            color: "#3f4b24",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            lineHeight: 1.25,
                          }}
                        >
                          <div>ADULTOS: {Number.isFinite(pax.adultos) ? pax.adultos : 0}</div>
                          <div>
                            {"NI\u00D1OS"}: {Number.isFinite(pax.ninos) ? pax.ninos : 0}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =========================
                      OVERLAY: TAPE + COUNTDOWN
                     ========================= */}
                  <div
                    className="absolute z-20"
                    style={{
                      top: preset.top,
                      left: preset.left,
                      width: `${boxWidthPx}px`,
                      height: `${preset.hPx}px`,
                      transform: `translate(calc(-50% + ${preset.shiftX}), ${preset.shiftY})`,
                    }}
                  >
                    <div className="w-full h-full bg-white">
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="flex items-end justify-center gap-6 md:gap-8">
                          <TimeBox label="Días" value={timeLeft.days} valueSize={preset.valueSize} labelSize={preset.labelSize} />
                          <div style={{ fontSize: `${preset.colonSize}px`, color: "#4b3a23", lineHeight: 1, transform: "translateY(-6px)" }}>
                            :
                          </div>
                          <TimeBox label="Horas" value={timeLeft.hours} valueSize={preset.valueSize} labelSize={preset.labelSize} />
                          <div style={{ fontSize: `${preset.colonSize}px`, color: "#4b3a23", lineHeight: 1, transform: "translateY(-6px)" }}>
                            :
                          </div>
                          <TimeBox label="Minutos" value={timeLeft.minutes} valueSize={preset.valueSize} labelSize={preset.labelSize} />
                        </div>
                      </div>
                    </div>
                  </div>

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
                <Page pageNumber={pageNumber} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
              </div>
            );
          })}
        </Document>
      </div>
    </div>
  );
}

function TimeBox({ label, value, valueSize, labelSize }) {
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#4b3a23",
          fontWeight: 500,
          fontSize: `${valueSize}px`,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          color: "#4b3a23",
          fontSize: `${labelSize}px`,
          marginTop: "8px",
          letterSpacing: "0.25em",
        }}
      >
        {label}
      </div>
    </div>
  );
}
