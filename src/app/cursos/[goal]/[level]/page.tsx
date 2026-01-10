import Link from "next/link";

const GOALS = ["emailing", "llamadas", "reuniones"] as const;
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"] as const;

type Goal = (typeof GOALS)[number];
type Level = (typeof LEVELS)[number];

const GOAL_LABEL: Record<Goal, string> = {
  emailing: "Emailing",
  llamadas: "Llamadas",
  reuniones: "Reuniones",
};

const LEVEL_LABEL: Record<Level, string> = {
  a1: "A1",
  a2: "A2",
  b1: "B1",
  b2: "B2",
  c1: "C1",
  c2: "C2",
};

type PageProps = {
  params: Promise<{ goal: string; level: string }>;
};

export default async function CursoLandingPage({ params }: PageProps) {
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

  const courseHref = `/app/cursos/${goal}/${level}`;

  return (
    <main className="mx-auto max-w-[900px] px-4 py-12">
      <div className="text-[12px] font-extrabold text-slate-500">Curso</div>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
        {GOAL_LABEL[goal]} para {LEVEL_LABEL[level]}
      </h1>

      <p className="mt-3 text-slate-600">
        Curso guiado por semanas (MVP). Empieza con el plan de 3 semanas y progresa con ejercicios prácticos.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={courseHref}
          className="inline-flex h-11 items-center justify-center rounded-[14px] bg-violet-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          Empezar curso →
        </Link>

        <Link
          href="/diagnostico"
          className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 hover:bg-slate-50"
        >
          Repetir test →
        </Link>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-black text-slate-900">Plan (3 semanas)</h2>
        <ol className="mt-3 list-decimal pl-5 text-slate-700">
          <li>Semana 1: fundamentos y claridad (adaptado a tu nivel).</li>
          <li>Semana 2: seguimiento, confirmaciones y next steps.</li>
          <li>Semana 3: plantillas y personalización rápida.</li>
        </ol>
      </section>
    </main>
  );
}

