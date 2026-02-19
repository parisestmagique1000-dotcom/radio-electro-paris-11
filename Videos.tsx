
import React from 'react';

const Videos: React.FC = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-unbounded font-black uppercase tracking-tighter text-white leading-none mb-6">DJ'S VIDÉOS</h1>
      <div className="flex items-center justify-center gap-6 mb-12">
           <div className="h-[2px] w-12 bg-red-600"></div>
           <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">paris la scène DJ parisienne.</p>
           <div className="h-[2px] w-12 bg-red-600"></div>
      </div>
      <p className="text-red-500 font-unbounded font-bold text-xl md:text-2xl uppercase tracking-[0.2em] animate-pulse">
        Bientôt disponible
      </p>
    </div>
  );
};

export default Videos;
