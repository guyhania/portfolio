import { WorkItemLogo } from "./WorkItemLogo";
import { WorkItemHeader } from "./WorkItemHeader";
import { WorkItemTitle } from "./WorkItemTitle";

interface WorkItemProps {
  company: string;
  title: string;
  period: string;
  logo?: string;
}

export function WorkItem({ company, title, period, logo }: WorkItemProps) {
  return (
    <div className="flex items-start gap-4">
      <WorkItemLogo company={company} logo={logo} />
      <div className="flex-1 min-w-0">
        <WorkItemHeader company={company} period={period} />
        <WorkItemTitle title={title} />
      </div>
    </div>
  );
} 