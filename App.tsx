
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation.tsx';
import Player from './components/Player.tsx';



const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isPlayerMode, setIsPlayerMode] = useState(false);
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'player') {
      setIsPlayerMode(true);
    }

    fetch('./content/site.json', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setSiteData(data);
        setLoading(false);
      }).then(data => {
  console.log("SITE JSON:", data);
  setSiteData(data);
  setLoading(false);
})
.catch(err => {
  console.error("FETCH ERROR:", err);
  setLoading(false);
});

      .catch(err => {
        console.error("JSON Error", err);
        setLoading(false);
      });
  }, []);

  if (isPlayerMode) return <StandalonePlayer />;

  if (loading || !siteData) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-6">
        <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="font-unbounded font-black text-blue-500 text-[10px] tracking-widest">RADIO ELECTRO PARIS</div>
      </div>
    );
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home siteData={siteData} setActiveTab={setActiveTab} />;
      case 'club': return <Club openInApp={undefined} />;
      case 'guest': return <Guest openInApp={undefined} />;
      case '100paris': 
        return (
          <EmissionPage 
            title="100% PARIS" 
            image="https://i.postimg.cc/YC3Mf35w/Chat-GPT-Image-18-fevr-2026-a-00-20-55.png" 
            onBack={() => setActiveTab('home')} 
            playlist={[
              { artist: "Baud", track: "eyes on the dance floor" },
              { artist: "Basile de suresne", track: "make a believe" },
              { artist: "La Marquise & OIO", track: "Alto" },
              { artist: "Adibu", track: "Another Bitch" },
              { artist: "Frederika & E-Klozion", track: "Sueños" },
              { artist: "Isaac gueye", track: "papi" },
              { artist: "John Bogota", track: "Aminata" },
              { artist: "nat low edit", track: "in my feelings" }
            ]}
          />
        );
      case 'playground':
        return (
          <EmissionPage 
            title="PLAYGROUND" 
            image="https://i.postimg.cc/htCNt3k6/Chat-GPT-Image-18-fevr-2026-a-00-31-02.png" 
            onBack={() => setActiveTab('home')} 
          />
        );
      default: return <Home siteData={siteData} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen text-zinc-100 flex flex-col relative">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        appName={siteData.settings.appName}
      />
      
      <Player appName={siteData.settings.appName} />

      <main className="flex-1 animate-fade">
        <div className="max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>

      <footer className="py-16 px-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
             <h2 className="font-unbounded font-black text-[12px] uppercase tracking-tighter text-blue-500">RADIO ELECTRO PARIS</h2>
             <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.4em] mt-2 mb-6">Le son des dj's de Paris.</p>
             <div className="flex items-center gap-6">
               <a href={siteData.settings.socials.instagram} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                 <span className="text-[10px] font-black uppercase tracking-widest">Instagram</span>
               </a>
               <a href={siteData.settings.socials.facebook} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                 <span className="text-[10px] font-black uppercase tracking-widest">Facebook</span>
               </a>
               <a href={siteData.settings.socials.tiktok} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                 <span className="text-[10px] font-black uppercase tracking-widest">TikTok</span>
               </a>
             </div>
          </div>
          <div className="text-zinc-800 text-[10px] font-bold uppercase tracking-widest font-unbounded">
            © {new Date().getFullYear()} {siteData.settings.appName}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
