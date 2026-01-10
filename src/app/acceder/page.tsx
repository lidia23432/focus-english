import Link from "next/link";

export const metadata = {
  title: "Acceder",
  description:
    "Acceso a Focus English. Zona premium para cursos y contenido.",
  robots: { index: false, follow: false },
};

export default function AccederPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">Acceder</h1>
      <p className="mt-3 text-slate-600">
        Página (MVP). Aquí irá el login.
      </p>

      <div className="mt-6">
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

