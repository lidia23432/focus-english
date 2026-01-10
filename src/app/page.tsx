import Link from "next/link";
import HomeToggle from "@/components/HomeToggle.client";

const NAV = [
  { label: "Objetivos", href: "#objetivos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Recursos", href: "#recursos" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
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
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO (toggle en client, pero la página es SSR) */}
        <section className="py-14 md:py-20">
          <HomeToggle />

          {/* SEO extra: bloque SSR con keywords y enlaces internos */}
          <div className="mt-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
            <div>
              <h2 className="text-lg font-black">Emailing eficaz</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Aprende a escribir emails claros, profesionales y rápidos con plantillas y práctica guiada.
              </p>
              <Link href="/cursos/emailing/b1" className="mt-3 inline-flex text-sm font-black text-indigo-600 hover:underline">
                Ver curso →
              </Link>
            </div>

            <div>
              <h2 className="text-lg font-black">Reuniones con confianza</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Aperturas, alineamiento, acuerdos y next steps para conducir reuniones sin perderte.
              </p>
              <Link href="/cursos/reuniones/b1" className="mt-3 inline-flex text-sm font-black text-indigo-600 hover:underline">
                Ver curso →
              </Link>
            </div>

            <div>
              <h2 className="text-lg font-black">Presentaciones de impacto</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estructura, storytelling y delivery para comunicar con autoridad en presentaciones.
              </p>
              <Link href="/cursos/reuniones/b2" className="mt-3 inline-flex text-sm font-black text-indigo-600 hover:underline">
                Ver curso →
              </Link>
            </div>
          </div>
        </section>

        <section id="objetivos" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Objetivos</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Entrena lo que realmente usas en el trabajo: emails, reuniones, entrevistas y presentaciones.
          </p>
        </section>

        <section id="como-funciona" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Cómo funciona</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step n="1" title="Evaluación inicial" desc="Identificamos tu nivel y tus objetivos reales." />
            <Step n="2" title="Plan guiado" desc="Ruta por semanas con foco en tu trabajo." />
            <Step n="3" title="Práctica interactiva" desc="Ejercicios cortos, repetibles y medibles." />
            <Step n="4" title="Seguimiento" desc="Progreso, hitos y (para equipos) reporting." />
          </div>
        </section>

        <section id="precios" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Precios</h2>
          <p className="mt-2 text-slate-600">
            Próximamente. Si necesitas un plan para empresa, solicita demo.
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

        <section id="recursos" className="py-14">
          <h2 className="text-2xl font-black tracking-tight">Recursos</h2>
          <p className="mt-2 text-slate-600">
            Publicaremos plantillas, guías y mini-lecciones para situaciones reales de trabajo.
          </p>
        </section>

        <footer className="border-t border-slate-200 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} Focus English</span>
            <a className="font-semibold text-slate-900" href="https://workingenglishlab.com">
              workingenglishlab.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-900">
        {n}
      </div>
      <h3 className="mt-3 text-sm font-black text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}
