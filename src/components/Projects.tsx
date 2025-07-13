"use client";

import metadata from "@/data/metadata.json";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { projects } = metadata;
  
  return (
    <section id="projects" className="bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 