import { Briefcase } from "lucide-react";

export function WorkHeader() {
  return (
    <div className="flex items-center mb-6">
      <Briefcase className="w-6 h-6 text-gray-500 dark:text-gray-300" />
      <span className="text-sm font-semibold ml-3 text-zinc-900 dark:text-zinc-100">Work</span>
    </div>
  );
} 