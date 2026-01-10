import Link from "next/link";

export const metadata = {
  title: "Contacto / Demo para equipos",
  description:
    "Solicita una demo o contacta con Focus English. Inglés profesional para equipos con progreso medible.",
};

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">Contacto / Demo</h1>
      <p className="mt-3 text-slate-600">
        Página pública (MVP). Aquí irá el formulario para solicitar demo para equipos.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
        >
          ← Volver
        </Link>
        <Link
          href="/diagnostico"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          Prueba de nivel →
        </Link>
      </div>
    </main>
  );
}
