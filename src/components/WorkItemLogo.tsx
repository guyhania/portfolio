interface WorkItemLogoProps {
  company: string;
  logo?: string;
  className?: string;
}

export function WorkItemLogo({ company, logo, className }: WorkItemLogoProps) {
  return (
    <div className={`relative mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 ${className || ''}`}>
      {logo ? (
        <img 
          src={logo} 
          alt={company + ' logo'} 
          className="w-10 h-10 bg-transparent object-contain color border-zinc-100 rounded-full" 
        />
      ) : (
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company[0]}
        </span>
      )}
    </div>
  );
} 