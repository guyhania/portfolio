import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import metadata from '@/data/metadata.json';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    link: string;
    date: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="shadow-none border border-gray-100 dark:border-gray-800">
      <CardContent className="p-6">
        <div className="mb-2 flex items-center">
          <span className="text-gray-400 text-sm border-l-2 border-gray-200 pl-3">{project.date}</span>
        </div>
        <CardTitle className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {project.title}
        </CardTitle>
        <CardDescription className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </CardDescription>
        <CardFooter className="p-0 mt-4">
          <a
            href={project.link}
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
          >
            {metadata.ui.projectCard.readArticleText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </CardFooter>
      </CardContent>
    </Card>
  );
} 