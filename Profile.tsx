
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="px-6 py-12 md:px-12 md:py-20 animate-fade">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-32 h-32 rounded-[40px] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-unbounded font-black text-white mb-6 border-4 border-white/10 shadow-2xl">
            C
          </div>
          <h1 className="text-4xl md:text-5xl font-unbounded font-black uppercase text-white mb-2">CLUBBER</h1>
          <p className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px]">Membre depuis 2025</p>
        </div>

        <div className="grid gap-10">
          <div className="glass p-10 rounded-[48px] border-white/5">
             <h3 className="text-white font-unbounded font-black uppercase text-[12px] mb-8 tracking-widest">INFORMATIONS</h3>
             <div className="space-y-6">
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase">Rôle</span>
                  <span className="text-blue-400 text-[10px] font-black uppercase">CLUBBER</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase">Clubs Favoris</span>
                  <span className="text-white text-[10px] font-black uppercase">Rexy, Silencio</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase">Instagram</span>
                  <span className="text-zinc-400 text-[10px] font-black uppercase">Non connecté</span>
                </div>
             </div>
             <button className="w-full mt-10 py-5 bg-zinc-900 border border-white/5 rounded-3xl text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Modifier le profil</button>
          </div>

          <div className="glass p-10 rounded-[48px] border-white/5 text-center opacity-50">
             <h3 className="text-white font-unbounded font-black uppercase text-[12px] mb-4 tracking-widest">VOS CONTRIBUTIONS</h3>
             <p className="text-zinc-500 text-[10px] font-bold uppercase leading-relaxed">Devenez DJ ou Habitué pour commencer à poster vos propres contenus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
