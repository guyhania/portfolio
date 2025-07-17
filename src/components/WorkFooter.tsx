import { Download, Eye } from "lucide-react";

interface WorkFooterProps {
  cvUrl: string;
}

export function WorkFooter({ cvUrl }: WorkFooterProps) {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    fetch(cvUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV file not found');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Guy_Hania_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Error downloading CV:', error);
        alert('Sorry, the CV file is not available at the moment. Please contact me directly.');
      });
  };

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    fetch(cvUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV file not found');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
      })
      .catch(error => {
        console.error('Error viewing CV:', error);
        alert('Sorry, the CV file is not available at the moment. Please contact me directly.');
      });
  };

  return (
    <div className="mt-2">
      <div className="flex gap-3 mt-6">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 flex-1"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={handleView}
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 flex-1"
        >
          <Eye className="w-4 h-4" />
          View
        </button>
      </div>
    </div>
  );
} 