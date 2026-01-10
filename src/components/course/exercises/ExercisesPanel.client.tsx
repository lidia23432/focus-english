"use client";

import { useEffect, useMemo, useState } from "react";
import type { ExercisesFile, ProgressState } from "./types";
import ExerciseRenderer from "./ExerciseRenderer";
import { loadProgress, saveProgress } from "./storage";

export default function ExercisesPanel({ data }: { data: ExercisesFile }) {
  const { goal, level, weekId } = data;

  const [progress, setProgress] = useState<ProgressState | null>(null);
  const [showPendingOnly, setShowPendingOnly] = useState(false);

  useEffect(() => {
    loadProgress(goal, level, weekId).then(setProgress);
  }, [goal, level, weekId]);

  const completedCount = useMemo(() => {
    if (!progress) return 0;
    return Object.keys(progress.completed || {}).length;
  }, [progress]);

  const percent = useMemo(() => {
    if (!data.items.length) return 0;
    return Math.round((completedCount / data.items.length) * 100);
  }, [completedCount, data.items.length]);

  const visibleItems = useMemo(() => {
    if (!progress) return data.items;
    if (!showPendingOnly) return data.items;
    return data.items.filter((ex) => !progress.completed?.[ex.id]);
  }, [data.items, progress, showPendingOnly]);

  async function markDone(itemId: string) {
    if (!progress) return;
    if (progress.completed?.[itemId]) return;

    const next: ProgressState = {
      ...progress,
      completed: { ...(progress.completed || {}), [itemId]: true },
    };

    setProgress(next);
    await saveProgress(goal, level, weekId, next);
  }

  async function resetProgress() {
    const next: ProgressState = { completed: {}, updatedAt: Date.now(), answers: {} };
    setProgress(next);
    await saveProgress(goal, level, weekId, next);
  }

  if (!progress) {
    return (
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-[12px] font-extrabold tracking-wide text-slate-500">PRACTICE</div>
        <h2 className="mt-1 text-2xl font-black text-slate-900">Practice</h2>
        <p className="mt-2 text-sm text-slate-600">Loading progress…</p>
      </section>
    );
  }

  return (
    <section className="mt-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[12px] font-extrabold tracking-wide text-slate-500">PRACTICE</div>
            <h2 className="mt-1 text-2xl font-black text-slate-900">Practice</h2>
            {data.title ? <p className="mt-1 text-sm text-slate-600">{data.title}</p> : null}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPendingOnly((v) => !v)}
              className={[
                "inline-flex h-10 items-center justify-center rounded-2xl border px-4 text-sm font-black",
                showPendingOnly
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
              ].join(" ")}
            >
              {showPendingOnly ? "Showing: pending" : "Filter: pending only"}
            </button>

            <button
              type="button"
              onClick={resetProgress}
              className="inline-flex h-10 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 px-4 text-sm font-black text-rose-700 hover:bg-rose-100"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-sm">
            <div className="font-black text-slate-900">
              Completed: {completedCount}/{data.items.length}
            </div>
            <div className="font-black text-slate-700">{percent}%</div>
          </div>

          <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
            <div
              className="h-3 rounded-full bg-violet-600 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="mt-2 text-xs text-slate-500">
            Guardado en este dispositivo (localStorage)
          </div>
        </div>
      </div>

      {/* Exercises list */}
      <div className="mt-6 grid gap-5">
        {visibleItems.map((ex, idx) => {
          const done = !!progress.completed?.[ex.id];

          return (
            <div key={ex.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900 text-xs font-black text-white">
                    {idx + 1}
                  </div>
                  <div className="text-xs font-extrabold text-slate-500">{ex.type}</div>
                </div>

                {done ? (
                  <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-800">
                    done
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-700">
                    pending
                  </span>
                )}
              </div>

              <div className="mt-4">
                <ExerciseRenderer ex={ex} onCorrect={() => markDone(ex.id)} />
              </div>
            </div>
          );
        })}

        {visibleItems.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No pending exercises 🎯
          </div>
        ) : null}
      </div>
    </section>
  );
}
