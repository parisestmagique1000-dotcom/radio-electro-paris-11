
import React, { useState, useRef, useEffect } from 'react';
import { STREAM_URL, EiffelIcon } from '../constants';

const StandalonePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const channelRef = useRef<BroadcastChannel | null>(null);
  const autoplayAttempted = useRef(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = STREAM_URL;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  useEffect(() => {
    channelRef.current = new BroadcastChannel('rep_player_sync');
    channelRef.current.onmessage = (e) => {
      if (e.data.type === 'CMD_TOGGLE_PLAY') togglePlay();
      if (e.data.type === 'CMD_SET_VOLUME') {
        setVolume(e.data.payload);
        if (audioRef.current) audioRef.current.volume = e.data.payload;
      }
    };
    
    if (!autoplayAttempted.current) {
      autoplayAttempted.current = true;
      if (audioRef.current) {
        audioRef.current.volume = volume;
        setTimeout(() => togglePlay(), 1000);
      }
    }

    window.onbeforeunload = () => channelRef.current?.postMessage({ type: 'POPUP_CLOSED' });

    const sync = setInterval(() => {
      channelRef.current?.postMessage({
        type: 'STATE_UPDATE',
        payload: { isPlaying, volume, isPopupActive: true }
      });
    }, 1000);

    return () => { 
      clearInterval(sync); 
      channelRef.current?.close(); 
    };
  }, [isPlaying, volume]);

  return (
    <div className="h-screen w-screen bg-[#050505] flex flex-col items-center p-8 overflow-y-auto no-scrollbar select-none">
      <audio ref={audioRef} crossOrigin="anonymous" />
      
      <div className={`fixed inset-0 transition-opacity duration-1000 ${isPlaying ? 'bg-blue-600/10' : 'bg-transparent'} blur-[100px] pointer-events-none`}></div>

      <div className="z-10 text-center mb-8">
        <h1 className="font-unbounded font-black text-[12px] uppercase tracking-tighter text-blue-500 mb-1">RADIO ELECTRO PARIS</h1>
        <div className="flex items-center justify-center gap-2">
           <span className={`h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.6)] ${isPlaying ? 'bg-red-500 animate-blink' : 'bg-zinc-800'}`}></span>
           <span className="text-red-500 font-black text-[7px] uppercase tracking-widest">ON AIR</span>
        </div>
      </div>

      <div className="z-10 relative mb-10">
        <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-2 transition-all duration-700 flex items-center justify-center ${isPlaying ? 'border-blue-500/40 shadow-2xl scale-110 bg-black/40' : 'border-white/5 scale-100'}`}>
           <EiffelIcon className={`w-12 h-12 md:w-16 md:h-16 ${isPlaying ? 'text-blue-500' : 'text-zinc-800'}`} />
        </div>
      </div>

      <div className="z-10 w-full flex flex-col items-center gap-6 mb-12">
        <div className="text-center px-4 w-full">
           <p className="text-white font-unbounded font-black text-[11px] uppercase truncate mb-1">
             <span className="cc_streaminfo" data-type="song" data-username="radioelec">Connecté...</span>
           </p>
           <p className="text-zinc-600 font-bold text-[8px] uppercase tracking-[0.5em]">Paris Scene DJ</p>
        </div>

        <button 
          onClick={togglePlay}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all active:scale-90 border-2 ${
            isPlaying 
              ? 'bg-black border-blue-600 shadow-2xl shadow-blue-500/40' 
              : 'bg-zinc-900 border-white/10'
          }`}
        >
          {isPlaying ? (
            <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
            <div className="rotate-90"><EiffelIcon className="w-8 h-8 md:w-10 md:h-10 text-white" /></div>
          )}
        </button>

        <div className="w-full flex items-center gap-4 max-w-[180px]">
           <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => {
             const v = parseFloat(e.target.value);
             setVolume(v);
             if (audioRef.current) audioRef.current.volume = v;
           }} className="w-full accent-blue-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default StandalonePlayer;
