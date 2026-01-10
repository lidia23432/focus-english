import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

const GOALS = ["emailing", "llamadas", "reuniones"] as const;
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"] as const;

type Goal = (typeof GOALS)[number];
type Level = (typeof LEVELS)[number];

type CurriculumWeek = {
  week: number;
  id: string;
  title: string;
  status?: "pending" | "draft" | "done";
};

type Curriculum = {
  course?: { title?: string };
  tracking?: { currentWeek?: number; lastUpdated?: string };
  weeks?: CurriculumWeek[];
};

type PageProps = {
  params: Promise<{ goal: string; level: string }>;
};

function badgeClass(status?: string) {
  if (status === "done") return "bg-emerald-100 text-emerald-800 border-emerald-200";
  if (status === "draft") return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

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

  const curriculumPath = path.join(
    process.cwd(),
    "src",
    "content",
    "cursos",
    goal,
    level,
    "curriculum.json"
  );

  let curriculum: Curriculum | null = null;
  try {
    const raw = await fs.readFile(curriculumPath, "utf8");
    curriculum = JSON.parse(raw) as Curriculum;
  } catch {
    curriculum = null;
  }

  return (
    <main className="mx-auto max-w-[900px] px-4 py-12">
      <div className="text-[12px] font-extrabold text-slate-500">App / Curso</div>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
        {goal.toUpperCase()} — {level.toUpperCase()}
      </h1>

      <p className="mt-3 text-slate-600">
        Plan completo por semanas (leído desde <code className="font-mono">curriculum.json</code>).
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/cursos/${goal}/${level}`}
          className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 hover:bg-slate-50"
        >
          ← Volver a landing
        </Link>
      </div>

      {!curriculum ? (
        <section className="mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h2 className="text-lg font-black text-rose-900">No se pudo cargar el curriculum</h2>
          <p className="mt-2 text-rose-800">
            Falta el archivo: <code className="font-mono">{curriculumPath}</code>
          </p>
        </section>
      ) : (
        <>
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-black text-slate-900">
                {curriculum.course?.title || "Curriculum"}
              </h2>
              <div className="text-sm text-slate-500">
                currentWeek: {curriculum.tracking?.currentWeek ?? "-"} · lastUpdated:{" "}
                {curriculum.tracking?.lastUpdated ?? "-"}
              </div>
            </div>

            <ol className="mt-4 space-y-2">
              {(curriculum.weeks || []).map((w) => (
                <li
                  key={w.week}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 p-3"
                >
                  <div className="min-w-[240px]">
                    <div className="text-xs font-extrabold text-slate-500">
                      Week {String(w.week).padStart(2, "0")}
                    </div>
                    <div className="font-black text-slate-900">{w.title}</div>
                    <div className="text-xs text-slate-500">{w.id}</div>
                  </div>

                  <span
                    className={
                      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold " +
                      badgeClass(w.status)
                    }
                  >
                    {w.status || "pending"}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
    </main>
  );
}
