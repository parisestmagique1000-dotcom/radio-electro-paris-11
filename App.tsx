import Home from "./Home";
import Club from "./Club";
import Guest from "./Guest";
import EmissionPage from "./EmissionPage";
import StandalonePlayer from "./StandalonePlayer";


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content/site.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("SITE JSON:", data);
        setSiteData(data);
      })
      .catch((err) => {
        console.error("FETCH/JSON ERROR:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading || !siteData) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-6">
        <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="font-unbounded font-black text-blue-500 text-[10px] tracking-widest">
          RADIO ELECTRO PARIS
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-zinc-100 flex flex-col relative">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        appName={siteData.settings?.appName || "Radio Electro Paris"}
      />

      <Player appName={siteData.settings?.appName || "Radio Electro Paris"} />

      <main className="flex-1 animate-fade">
        <div className="max-w-7xl mx-auto p-6">
          <div className="text-white/80 text-sm">
            Page active : <b>{activeTab}</b>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
