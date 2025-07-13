interface WorkItemTitleProps {
  title: string;
}

export function WorkItemTitle({ title }: WorkItemTitleProps) {
  return (
    <div className="text-xs text-zinc-500 dark:text-zinc-400">
      {title}
    </div>
  );
} 