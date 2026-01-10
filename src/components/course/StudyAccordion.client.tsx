"use client";

import Accordion from "@/components/course/ui/Accordion.client";
import Markdown from "@/components/course/Markdown";

export default function StudyAccordion({
  grammar,
  vocabulary,
  reading,
  writing,
}: {
  grammar: string;
  vocabulary: string;
  reading: string;
  writing: string;
}) {
  return (
    <section className="mt-8">
      <div className="text-[12px] font-extrabold text-slate-500">Study</div>
      <h2 className="mt-1 text-2xl font-black text-slate-900">Material</h2>

      <div className="mt-4 grid gap-4">
        <Accordion title="Grammar">
          <Markdown content={grammar} />
        </Accordion>

        <Accordion title="Vocabulary">
          <Markdown content={vocabulary} />
        </Accordion>

        <Accordion title="Reading">
          <Markdown content={reading} />
        </Accordion>

        <Accordion title="Writing">
          <Markdown content={writing} />
        </Accordion>
      </div>
    </section>
  );
}
