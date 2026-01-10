"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type Mode = "profesionales" | "equipos";

export default function HomeToggle() {
  const [mode, setMode] = useState<Mode>("profesionales");

  const copy = useMemo(() => {
    if (mode === "equipos") {
      return {
        kicker: "Para equipos",
        h1: "Inglés profesional para tu equipo, con progreso medible.",
        p: "Panel de administración, cohortes, reporting y ruta de aprendizaje por roles. Menos fricción, más impacto.",
        primaryCta: { label: "Solicitar demo para equipos", href: "/contacto" },
        secondaryCta: { label: "Ver objetivos", href: "#objetivos" },
      };
    }
    return {
      kicker: "Para profesionales",
      h1: "Inglés profesional, a tu ritmo.",
      p: "Emailing, reuniones, entrevistas y presentaciones. Plan guiado y progreso medible.",
      primaryCta: { label: "Prueba de nivel (3–5 min)", href: "/diagnostico" },
      secondaryCta: { label: "Ver lección de muestra", href: "/leccion-de-muestra" },
    };
  }, [mode]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700">
          {copy.kicker}
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          Progreso medible
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode("profesionales")}
            className={`h-9 rounded-full px-3 text-sm font-black ${
              mode === "profesionales"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-pressed={mode === "profesionales"}
          >
            Para profesionales
          </button>
          <button
            onClick={() => setMode("equipos")}
            className={`h-9 rounded-full px-3 text-sm font-black ${
              mode === "equipos"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-pressed={mode === "equipos"}
          >
            Para equipos
          </button>
        </div>
      </div>

      <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        {copy.h1}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{copy.p}</p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link
          href={copy.primaryCta.href}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          {copy.primaryCta.label}
        </Link>

        <Link
          href={copy.secondaryCta.href}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
        >
          {copy.secondaryCta.label}
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-black text-slate-600">
        <span className="rounded-full bg-slate-100 px-3 py-1">4.9/5</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">2,500+ profesionales</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">Mejora en 3 meses</span>
      </div>
    </div>
  );
}

