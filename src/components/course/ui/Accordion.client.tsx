"use client";

import { useState } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 p-5 text-left"
      >
        <span className="text-lg font-black text-slate-900">{title}</span>
        <span className="text-sm font-black text-slate-500">{open ? "−" : "+"}</span>
      </button>

      {open ? <div className="border-t border-slate-200 p-5">{children}</div> : null}
    </div>
  );
}
