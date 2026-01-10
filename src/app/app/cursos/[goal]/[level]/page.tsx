import Link from "next/link";

const GOALS = ["emailing", "llamadas", "reuniones"] as const;
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"] as const;

type Goal = (typeof GOALS)[number];
type Level = (typeof LEVELS)[number];

type PageProps = {
  params: Promise<{ goal: string; level: string }>;
};

export default async function CursoAppPage({ params }: PageProps) {
  const { goal: goalRaw, level: levelRaw } = await params;

  const goal = goalRaw as Goal;
  const level = levelRaw as Level;

  if (!GOALS.includes(goal) || !LEVELS.includes(level)) {
    return (
      <main className="mx-auto max-w-[900px] px-4 py-12">
        <h1 className="text-2xl font-black">Curso no encontrado</h1>
        <Link className="mt-4 inline-block text-violet-700 font-black" href="/">
          Volver a Home →
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[900px] px-4 py-12">
      <div className="text-[12px] font-extrabold text-slate-500">App / Curso</div>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
        {goal.toUpperCase()} — {level.toUpperCase()}
      </h1>

      <p className="mt-3 text-slate-600">
        Placeholder de la zona premium (/app). Aquí irá el contenido del curso.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/cursos/${goal}/${level}`}
          className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 hover:bg-slate-50"
        >
          ← Volver a landing
        </Link>
      </div>
    </main>
  );
}

