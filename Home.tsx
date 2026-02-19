
import React from 'react';
import DynamicRenderer from '../components/DynamicRenderer';

interface HomeProps {
  siteData: any;
  setActiveTab: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ siteData, setActiveTab }) => {
  return (
    <div className="pb-20 px-4 md:px-8 space-y-16">
      <DynamicRenderer 
        sections={siteData.sections} 
        setActiveTab={setActiveTab} 
        settings={siteData.settings}
      />

      <section className="max-w-4xl mx-auto text-center py-12 bg-black rounded-[40px] border border-white/5 flex flex-col items-center gap-8 px-8 shadow-2xl">
         <h2 className="text-white font-unbounded font-black uppercase text-[12px] md:text-[15px]">REJOINDRE LA SCÈNE</h2>
         <button 
           onClick={() => window.open(siteData.settings.socials.contact, '_blank')} 
           className="px-6 py-3 border-2 border-zinc-800 text-zinc-400 font-unbounded font-black uppercase text-[8px] tracking-[0.3em] rounded-full hover:border-zinc-500 hover:text-white transition-all bg-black/20 active:scale-95"
         >
           CONTACT
         </button>

         <div className="flex items-center gap-8 pt-4 border-t border-white/5 w-full justify-center">
           <a href={siteData.settings.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-500 transition-all hover:scale-110">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
           </a>
           <a href={siteData.settings.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-600 transition-all hover:scale-110">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
           </a>
           <a href={siteData.settings.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.34 6.34 0 01-1.87-1.48v8.64a7.92 7.92 0 11-12.82-6.27 7.9 7.9 0 012.39-1.4V9.65a12.03 12.03 0 00-1.59.88 11.97 11.97 0 00-6.12 10.43c0 6.64 5.37 12 12 12s12-5.36 12-12v-6.62c-1.64.44-3.35.41-4.99-.08-1.55-.47-2.95-1.47-3.95-2.75-.9-1.15-1.43-2.58-1.51-4.04z"/></svg>
           </a>
         </div>
      </section>

      <div className="flex justify-center pt-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-all hover:scale-110 shadow-2xl border border-white/10 active:scale-90">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
