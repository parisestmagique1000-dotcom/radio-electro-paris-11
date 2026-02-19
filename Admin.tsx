
import React, { useState } from 'react';

const Admin: React.FC = () => {
  const [tab, setTab] = useState<'REQUESTS' | 'POSTS'>('REQUESTS');

  const requests = [
    { id: '1', user: 'Sissi L.', type: 'DJ', info: '@sissilaz - Parrain: Isaac G.', status: 'PENDING' },
    { id: '2', user: 'Marco P.', type: 'HABITUÉ', info: 'Actif chez Bonnie & Silencio.', status: 'PENDING' }
  ];

  return (
    <div className="px-6 py-12 md:px-12 md:py-20 animate-fade">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-unbounded font-black uppercase tracking-tighter text-white mb-2 leading-none">BACKOFFICE</h1>
        <p className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Accès restreint Super_Admin.</p>
      </div>

      <div className="flex gap-10 border-b border-white/5 mb-12">
        {['REQUESTS', 'POSTS'].map(t => (
          <button 
            key={t} onClick={() => setTab(t as any)}
            className={`pb-4 text-[11px] font-black uppercase tracking-widest transition-all ${tab === t ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-600'}`}
          >
            {t === 'REQUESTS' ? 'DEMANDES' : 'CONTENUS'}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {tab === 'REQUESTS' && requests.map(req => (
          <div key={req.id} className="glass p-8 rounded-[32px] flex items-center justify-between gap-6 border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-white font-unbounded font-black text-[12px]">{req.user}</span>
                <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${req.type === 'DJ' ? 'bg-blue-600/10 text-blue-400' : 'bg-purple-600/10 text-purple-400'}`}>{req.type}</span>
              </div>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{req.info}</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-blue-600 text-white text-[9px] font-black uppercase rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95">Approuver</button>
              <button className="px-6 py-3 bg-zinc-900 border border-white/5 text-zinc-500 text-[9px] font-black uppercase rounded-2xl hover:text-white active:scale-95">Refuser</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
