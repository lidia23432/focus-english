import Link from "next/link";

export const metadata = {
  title: "Lección de muestra",
  description:
    "Prueba una lección de Focus English: inglés profesional para emails, reuniones y presentaciones.",
};

export default function LeccionMuestraPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">Lección de muestra</h1>
      <p className="mt-3 text-slate-600">
        Página pública. Aquí irá una mini-lección con ejercicios (MVP).
      </p>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-black">Tema: Confirmar acuerdos por email</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Frases clave para resumir decisiones.</li>
          <li>Cómo pedir confirmación (polite + directo).</li>
          <li>Next steps + responsables + fechas.</li>
        </ul>
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/cursos/emailing/b1"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          Ver curso de Emailing →
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

