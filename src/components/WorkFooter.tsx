import { ChevronDown } from "lucide-react";

interface WorkFooterProps {
  cvUrl: string;
}

export function WorkFooter({ cvUrl }: WorkFooterProps) {
  return (
    <div className="mt-8">
      <a
        href={cvUrl}
        download="cv.pdf"
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
      >
        Download CV
        <ChevronDown className="ml-2 w-5 h-5" />
      </a>
    </div>
  );
} 