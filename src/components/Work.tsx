"use client";

import metadata from "@/data/metadata.json";
import { WorkItem } from "./WorkItem";
import { WorkHeader } from "./WorkHeader";
import { WorkFooter } from "./WorkFooter";

export function Work() {
  const { work, personal } = metadata;

  return (
    <section id="work" className="py-5 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pb-2">
        <WorkHeader />
        <div className="space-y-6">
          {work.map((job) => (
            <WorkItem
              key={job.company}
              company={job.company}
              title={job.title}
              period={job.period}
              logo={job.logo}
            />
          ))}
        </div>
        <WorkFooter cvUrl={personal.cv} />
      </div>
    </section>
  );
} 