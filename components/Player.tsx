
import React, { useState, useRef, useEffect } from 'react';
import { STREAM_URL, EiffelIcon, PopoutIcon } from '../constants';

const Player: React.FC<{ appName: string }> = ({ appName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [popupActive, setPopupActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const channelRef = useRef<BroadcastChannel | null>(null);
  const autoplayAttempted = useRef(false);

  const syncMediaSession = (active: boolean) => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'RADIO ELECTRO PARIS LIVE',
        artist: 'Le son des dj\'s de Paris',
        artwork: [{ src: 'https://i.postimg.cc/FKXmZXkt/cb4ad0-41d2ca721e9a46fd825dc25a4e2c8a97-mv2-png.avif', sizes: '512x512', type: 'image/avif' }]
      });
      navigator.mediaSession.setActionHandler('play', togglePlay);
      navigator.mediaSession.setActionHandler('pause', togglePlay);
      navigator.mediaSession.playbackState = active ? 'playing' : 'paused';
    }
  };

  const togglePlay = () => {
    if (popupActive) {
      channelRef.current?.postMessage({ type: 'CMD_TOGGLE_PLAY' });
      return;
    }
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      syncMediaSession(false);
    } else {
      audioRef.current.src = STREAM_URL;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        syncMediaSession(true);
      }).catch(e => {
        console.warn("Autoplay blocked or playback error:", e);
        setIsPlaying(false);
      });
    }
  };

  useEffect(() => {
    channelRef.current = new BroadcastChannel('rep_player_sync');
    channelRef.current.onmessage = (e) => {
      const { type, payload } = e.data;
      if (type === 'STATE_UPDATE') {
        setIsPlaying(payload.isPlaying);
        setVolume(payload.volume);
        setPopupActive(payload.isPopupActive);
      }
      if (type === 'POPUP_CLOSED') setPopupActive(false);
      if (type === 'CMD_TOGGLE_PLAY') togglePlay();
    };

    if (!autoplayAttempted.current) {
      autoplayAttempted.current = true;
      const timeout = setTimeout(() => {
        if (!isPlaying) togglePlay();
      }, 1500);
      return () => clearTimeout(timeout);
    }

    return () => {
      channelRef.current?.close();
    };
  }, []);

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  const openPopout = () => {
    const w = 360, h = 600;
    const l = (window.screen.width/2)-(w/2), t = (window.screen.height/2)-(h/2);
    if (audioRef.current) { audioRef.current.pause(); setIsPlaying(false); }
    window.open(window.location.origin + window.location.pathname + '?mode=player', 'REP_Player', `width=${w},height=${h},left=${l},top=${t},status=no`);
    setPopupActive(true);
  };

  return (
    <div className="w-full border-y border-white/5 bg-black/90 sticky top-0 z-[60] backdrop-blur-xl shadow-2xl">
      <audio ref={audioRef} preload="none" crossOrigin="anonymous" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 flex-1 min-w-0">
            <button 
              onClick={togglePlay}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-90 border-2 ${
                isPlaying 
                  ? 'bg-black border-blue-600 shadow-[0_0_25px_rgba(59,130,246,0.3)]' 
                  : 'bg-zinc-900 border-white/10'
              }`}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <div className="rotate-90"><EiffelIcon className="w-6 h-6 text-white" /></div>
              )}
            </button>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-unbounded font-black text-[10px] uppercase text-blue-500 tracking-tighter">RADIO ELECTRO PARIS</span>
                <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                  <span className={`h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.6)] ${isPlaying ? 'bg-red-500 animate-blink' : 'bg-zinc-800'}`}></span>
                  <span className="text-red-500 font-black text-[7px] uppercase tracking-widest">{popupActive ? 'DETACHED' : 'LIVE'}</span>
                </div>
              </div>
              <span className="text-white font-bold text-[10px] uppercase truncate">
                <span className="cc_streaminfo" data-type="song" data-username="radioelec">Loading ...</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} className="hidden md:block w-20 accent-blue-500" />
            {!popupActive && <button onClick={openPopout} className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white transition-colors"><PopoutIcon className="w-4 h-4"/></button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
