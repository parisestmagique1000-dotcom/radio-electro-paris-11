
import React from 'react';

interface PlaylistTrack {
  artist: string;
  track: string;
}

interface EmissionPageProps {
  title: string;
  image: string;
  onBack: () => void;
  playlist?: PlaylistTrack[];
}

const EmissionPage: React.FC<EmissionPageProps> = ({ title, image, onBack, playlist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center px-4 py-12 md:py-20 animate-fade">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-white/5 rounded-full text-zinc-400 font-bold uppercase text-[10px] tracking-widest hover:text-white transition-all active:scale-95 shadow-xl"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour
      </button>

      <div className="max-w-5xl w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-unbounded font-black uppercase text-center text-white mb-12 tracking-tighter">
          {title}
        </h1>
        
        <div className="w-full rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 mb-16">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto block object-contain"
          />
        </div>

        {playlist && playlist.length > 0 && (
          <div className="w-full max-w-2xl bg-black/40 border border-white/5 rounded-[40px] p-8 md:p-12 mb-16">
            <h2 className="text-blue-500 font-unbounded font-black uppercase text-[12px] md:text-[14px] tracking-[0.3em] mb-8 text-center">PLAYLIST</h2>
            <div className="space-y-4">
              {playlist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                  <span className="text-zinc-700 font-unbounded font-black text-[12px] w-6 pr-2">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-unbounded font-black uppercase text-[10px] md:text-[12px] truncate">{item.track}</p>
                    <p className="text-blue-400 font-bold uppercase text-[8px] md:text-[9px] tracking-widest mt-1">{item.artist}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-blue-600/5 border border-blue-500/10 group transition-all mt-4 italic">
                  <span className="text-zinc-800 font-unbounded font-black text-[12px] w-6 pr-2">++</span>
                  <div className="flex-1 min-w-0 flex items-center justify-between">
                    <p className="text-zinc-500 font-unbounded font-black uppercase text-[9px] md:text-[11px] tracking-widest">et pleins d'autres...</p>
                  </div>
              </div>
            </div>
            
            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
              <p className="text-white font-unbounded font-black uppercase text-[11px] md:text-[13px] tracking-widest text-center">
                Toi aussi rejoins la scène
              </p>
              <a 
                href="https://www.instagram.com/radioelectroparis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-110 transition-transform active:scale-95"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        )}

        <div className="mt-8 text-center max-w-2xl space-y-12">
          <div>
            <p className="text-blue-500 font-unbounded font-black uppercase text-[12px] md:text-[14px] tracking-widest animate-pulse mb-4">
              Prochainement en diffusion Live
            </p>
            <div className="h-[2px] w-24 bg-blue-600 mx-auto" />
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3 mx-auto transition-all"
          >
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <svg className="w-4 h-4 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmissionPage;
