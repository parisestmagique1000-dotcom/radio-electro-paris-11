
import React, { useState } from 'react';

const Community: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'VIDEO' | 'PHOTO'>('ALL');
  const [showApply, setShowApply] = useState(false);

  // Données fictives simulant le feed
  const posts = [
    { id: '1', type: 'VIDEO', author: 'DJ BAUD', title: 'Paris DJ Sessions #04', desc: 'Deep selection at Les Bains.', club: 'Les Bains', url: 'https://i.postimg.cc/CMs4CNdd/baudml.jpg', tags: ['Deep', 'Nightlife'], comments: 14 },
    { id: '2', type: 'PHOTO', author: 'Isaac G.', title: 'Ambiance Rexy', desc: 'The energy was insane.', club: 'Rexy', url: 'https://i.postimg.cc/28V4R7sB/hauteepicure-Photographer-olga-gasnier-picture-photography-beautiful-pic-photo-instagood.webp', tags: ['Clubbing', 'Vibes'], comments: 8 }
  ];

  return (
    <div className="px-6 py-12 md:px-12 md:py-20 animate-fade">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-unbounded font-black uppercase tracking-tighter text-white mb-2">COMMUNAUTÉ</h1>
          <p className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px]">Le son des dj's de Paris.</p>
        </div>
        <div className="flex gap-3">
          {['ALL', 'VIDEO', 'PHOTO'].map(t => (
            <button 
              key={t} onClick={() => setFilter(t as any)}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === t ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'bg-zinc-900 text-zinc-500 border border-white/5'}`}
            >
              {t === 'ALL' ? 'Tout' : t + 'S'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.filter(p => filter === 'ALL' || p.type === filter).map(post => (
          <div key={post.id} className="glass rounded-[40px] overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="aspect-video relative overflow-hidden bg-zinc-950">
              <img src={post.url} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              {post.type === 'VIDEO' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">{post.author}</span>
                <span className="text-zinc-600 text-[9px] font-bold uppercase">{post.comments} COMMENTAIRES</span>
              </div>
              <h3 className="text-white font-unbounded font-black uppercase text-lg mb-2">{post.title}</h3>
              <p className="text-zinc-500 text-[12px] leading-relaxed mb-6">{post.desc}</p>
              <div className="flex gap-4">
                {post.tags.map(t => <span key={t} className="text-[10px] text-zinc-700 font-bold uppercase">#{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setShowApply(true)}
        className="fixed bottom-12 right-12 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-110 active:scale-90 transition-all z-50 border-4 border-blue-400/20"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
      </button>

      {/* Modal Demande Accès */}
      {showApply && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setShowApply(false)}></div>
          <div className="relative glass w-full max-w-lg rounded-[48px] p-12 shadow-2xl border-white/10 animate-fade">
            <h2 className="text-white font-unbounded font-black uppercase text-2xl mb-4">REJOINDRE LA SCÈNE</h2>
            <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-10">Choisissez votre rôle pour commencer à poster.</p>
            <div className="grid gap-6">
              <button className="p-8 rounded-[32px] bg-zinc-900 border border-white/5 hover:border-blue-500 transition-all group text-left">
                <h4 className="text-white font-unbounded font-black uppercase text-[12px] mb-2 group-hover:text-blue-500">DEVENIR DJ VÉRIFIÉ</h4>
                <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest">Partagez vos DJ Sets et vidéos de soirées.</p>
              </button>
              <button className="p-8 rounded-[32px] bg-zinc-900 border border-white/5 hover:border-purple-500 transition-all group text-left">
                <h4 className="text-white font-unbounded font-black uppercase text-[12px] mb-2 group-hover:text-purple-500">DEVENIR HABITUÉ</h4>
                <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest">Partagez vos plus belles photos d'ambiance.</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
