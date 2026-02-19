
import React from 'react';
import { EiffelIcon } from '../constants';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  appName: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, appName }) => {
  const tabs = [
    { id: 'home', label: 'PARIS' },
    { id: 'guest', label: "DJ'S" },
    { id: 'club', label: 'CLUBS' },
  ];

  const nameParts = appName.split(' ');
  const firstLine = nameParts.slice(0, 2).join(' ');
  const secondLine = nameParts.slice(2).join(' ');

  return (
    <nav className="flex items-center justify-between px-6 py-8 md:px-10 md:py-12 bg-gradient-to-b from-black/90 via-black/40 to-transparent sticky top-0 z-[70] backdrop-blur-sm">
      <div 
        className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
        onClick={() => setActiveTab('home')}
      >
        <div className="relative">
          <EiffelIcon className="w-6 h-6 text-white group-hover:text-blue-500 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        </div>
        <div className="flex flex-col">
          <span className="font-unbounded font-black text-[11px] md:text-[12px] uppercase tracking-tighter leading-none text-blue-500">
            {firstLine}
          </span>
          <span className="font-unbounded font-black text-[8px] md:text-[9px] uppercase tracking-[0.5em] mt-1 leading-none text-white/80">
            {secondLine}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-12 ml-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? 'text-blue-500 border-b-2 border-blue-500/50 pb-1' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
