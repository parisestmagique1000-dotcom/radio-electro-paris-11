
import React, { useState, useRef, useEffect } from 'react';
import { STREAM_URL, EiffelIcon } from '../constants';

const MiniPlayerPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      togglePlay();
    }
    document.body.style.overflow = 'hidden';
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = STREAM_URL;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  return (
    <div className="h-screen w-screen bg-[#050505] flex flex-col items-center justify-center p-6 border-4 border-blue-500/10 overflow-hidden">
      <audio ref={audioRef} preload="none" />
      
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-1">
             <span className="font-unbounded font-black text-[10px] uppercase tracking-tighter text-blue-500">RADIO ELECTRO</span>
             <span className="font-unbounded font-black text-[8px] uppercase tracking-[0.4em] text-white">PARIS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-1 w-1 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1 w-1 bg-red-600"></span>
            </span>
            <span className="text-red-500 font-black text-[7px] uppercase tracking-[0.4em]">ON AIR</span>
          </div>
        </div>

        <button 
          onClick={togglePlay}
          className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all active:scale-95 group border-2 ${
            isPlaying 
              ? 'bg-blue-600 border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.4)]' 
              : 'bg-zinc-900 border-white/10 hover:border-blue-500 hover:bg-zinc-800'
          }`}
        >
          {isPlaying ? (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <div className="rotate-90">
              <EiffelIcon className="w-12 h-12 text-white group-hover:text-blue-400 transition-colors" />
            </div>
          )}
        </button>

        <div className="w-full text-center px-4">
          <p className="text-white font-unbounded font-bold text-[11px] uppercase tracking-wider truncate mb-4">
             <span className="cc_streaminfo" data-type="song" data-username="radioelec">Chargement...</span>
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <input 
              type="range" 
              min="0" max="1" step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
              className="w-full max-w-[200px] h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  );
};

export default MiniPlayerPage;
