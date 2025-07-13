import { Work } from "./Work";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
      <Projects />
      <div className="flex flex-col gap-8">
        <Work />
        <Skills />
      </div>
    </div>
  );
} 