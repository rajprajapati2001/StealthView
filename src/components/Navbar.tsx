import React from 'react';
import { Info, Settings2, Globe, X, Search } from 'lucide-react';
import { StealthLogo } from './StealthLogo';

interface NavbarProps {
  url: string;
  setUrl: (url: string) => void;
  handleBrowse: (e?: React.FormEvent) => void;
  handleReset: () => void;
  setIsAboutOpen: (isOpen: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  url,
  setUrl,
  handleBrowse,
  handleReset,
  setIsAboutOpen,
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  return (
    <header className="glass-panel z-20 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3">
      <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2">
        <div className="flex items-center gap-2">
          <StealthLogo className="h-7 w-7" />
          <span className="font-bold tracking-tight text-lg text-gradient xs:block">StealthView</span>
        </div>
        
        {/* Mobile Icons */}
        <div className="flex sm:hidden items-center gap-2">
          <button 
            onClick={() => setIsAboutOpen(true)}
            className="p-2 rounded-lg transition-colors hover:bg-zinc-900 text-zinc-400"
          >
            <Info className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 rounded-lg transition-colors ${isSidebarOpen ? 'bg-zinc-800 text-indigo-400' : 'text-zinc-400'}`}
          >
            <Settings2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <form onSubmit={handleBrowse} className="flex w-full flex-1 items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Globe className="h-4 w-4 text-zinc-500" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL (e.g. google.com)"
            className="w-full rounded-lg bg-zinc-900 border border-zinc-800 py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
          />
          {url && (
            <button
              type="button"
              onClick={handleReset}
              className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-gradient-primary px-3 sm:px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
        >
          <Search className="h-4 w-4" />
          <span className="hidden xs:block">Browse</span>
        </button>
      </form>

      <div className="hidden sm:flex items-center gap-3 border-l border-zinc-800 pl-4">
        <button 
          onClick={() => setIsAboutOpen(true)}
          className="p-2 rounded-lg transition-colors hover:bg-zinc-900 text-zinc-400 hover:text-indigo-400"
          title="About StealthView"
        >
          <Info className="h-5 w-5" />
        </button>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-2 rounded-lg transition-colors ${isSidebarOpen ? 'bg-zinc-800 text-indigo-400' : 'hover:bg-zinc-900 text-zinc-400'}`}
          title="Toggle Tools"
        >
          <Settings2 className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};
