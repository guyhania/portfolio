interface WorkItemHeaderProps {
  company: string;
  period: string;
}

export function WorkItemHeader({ company, period }: WorkItemHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </span>
      </div>
      <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
        {period}
      </span>
    </div>
  );
} 