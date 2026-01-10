"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Mode = "profesionales" | "equipos";

const NAV = [
  { label: "Objetivos", href: "#objetivos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Recursos", href: "#recursos" },
];

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="font-black tracking-tight">
            Focus English
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/acceder"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Acceder
            </Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => setMode("profesionales")}
              className={`h-9 rounded-full px-3 text-sm font-black ${
                mode === "profesionales"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
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
            >
              Para equipos
            </button>
          </div>

          <button
            className="md:hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-black"
            onClick={() =>
              setMode((m) => (m === "profesionales" ? "equipos" : "profesionales"))
            }
          >
            {mode === "profesionales" ? "Profesionales" : "Equipos"}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700">
              {copy.kicker}
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              Progreso medible
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              {copy.h1}
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              {copy.p}
            </p>

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

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">4.9/5</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">2,500+ profesionales</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Mejora en 3 meses</span>
            </div>
          </div>

          {/* BLOQUE VISUAL (simple, claro) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-black text-slate-500">
              {mode === "equipos" ? "Panel de administración" : "Tu progreso personal"}
            </div>

            <div className="mt-3 grid gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black">Nivel actual</div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                    B2+
                  </div>
                </div>
                <div className="mt-3 space-y-3">
                  <Bar label="Fluidez en reuniones" value={85} />
                  <Bar label="Escritura de emails" value={90} />
                  <Bar label="Presentaciones" value={72} />
                </div>
              </div>

              {mode === "equipos" && (
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-black">Cohorte</div>
                    <div className="text-xs font-black text-slate-600">78% completado</div>
                  </div>
                  <div className="mt-3 space-y-3">
                    <Bar label="Participación activa" value={81} />
                    <Bar label="Horas de formación" value={66} />
                    <Bar label="Progreso medio" value={78} />
                  </div>

                  <Link
                    href="/contacto"
                    className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-slate-900 px-4 text-sm font-black text-white hover:brightness-95"
                  >
                    Ver informe detallado
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* OBJETIVOS */}
        <section id="objetivos" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Objetivos</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Entrena lo que realmente usas en el trabajo, con ejercicios prácticos y feedback.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Emailing eficaz"
              desc="Claridad, tono profesional y velocidad con plantillas y prácticas guiadas."
              href="/cursos/emailing/b1"
              cta="Ver curso"
            />
            <Card
              title="Reuniones con confianza"
              desc="Aperturas, alineamiento, acuerdos y next steps sin perder el hilo."
              href="/cursos/reuniones/b1"
              cta="Ver curso"
            />
            <Card
              title="Presentaciones de impacto"
              desc="Estructura, storytelling y delivery para comunicar con autoridad."
              href="/cursos/reuniones/b2"
              cta="Ver curso"
            />
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Cómo funciona</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step n="1" title="Evaluación inicial" desc="Identificamos tu nivel y tus objetivos reales." />
            <Step n="2" title="Plan personalizado" desc="Ruta por semanas con foco en tu trabajo." />
            <Step n="3" title="Práctica interactiva" desc="Ejercicios cortos, repetibles y medibles." />
            <Step n="4" title="Seguimiento" desc="Progreso, hitos y (para equipos) reporting." />
          </div>
        </section>

        {/* PRECIOS (placeholder) */}
        <section id="precios" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Precios</h2>
          <p className="mt-2 text-slate-600">
            Próximamente. Si necesitas equipo, puedes pedir demo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-black text-white hover:brightness-95"
            >
              Solicitar demo
            </Link>
            <Link
              href="/diagnostico"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
            >
              Prueba de nivel
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} Focus English</span>
            <span>
              Dominio:{" "}
              <a className="font-semibold text-slate-900" href="https://workingenglishlab.com">
                workingenglishlab.com
              </a>
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className="font-black text-slate-900">{value}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-indigo-600"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-lg font-black text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
      <Link
        href={href}
        className="mt-4 inline-flex text-sm font-black text-indigo-600 hover:underline"
      >
        {cta} →
      </Link>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-900">
        {n}
      </div>
      <div className="mt-3 text-sm font-black text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

