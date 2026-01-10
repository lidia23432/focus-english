import Link from "next/link";

export const metadata = {
  title: "Prueba de nivel (3–5 min)",
  description:
    "Haz una prueba rápida para estimar tu nivel y empezar una ruta de inglés profesional para trabajar.",
};

export default function DiagnosticoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">Prueba de nivel (3–5 min)</h1>
      <p className="mt-3 text-slate-600">
        Página pública. Aquí irá el test (MVP). De momento, úsalo como CTA para captación.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/cursos/emailing/b1"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          Empezar con Emailing B1 →
        </Link>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
        >
          ← Volver
        </Link>
      </div>
    </main>
  );
}
