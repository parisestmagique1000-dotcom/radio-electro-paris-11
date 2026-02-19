
import React from 'react';
import InteractiveCover from '../components/InteractiveCover';

const Club: React.FC<{ openInApp: any }> = () => {
  const lustEntry = { 
    name: "Lust", 
    type: "Industrial", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lust-paris", 
    image: "https://i.postimg.cc/rpYWz0Xv/369275323-819785986191933-8275762988925829446-n.jpg", 
    insta: "https://www.instagram.com/lust.paris/" 
  };

  const cafeCroissantEntry = { 
    name: "Cafe Croissant", 
    type: "Increase The Groove", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/increasethegrooverecords/cafe-croissant-series-alyhas-mix-001", 
    image: "https://i.postimg.cc/63k27PGX/434121830-387204724094973-3130624683576255906-n.jpg", 
    insta: "https://www.instagram.com/cafecroissantparis/" 
  };

  const fluctuartEntry = { 
    name: "Fluctuart", 
    type: "Street Art & Electro", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/azcabaria/afro-house-opening-street-art-expo-fluctuart", 
    image: "https://i.postimg.cc/ydVbZ72d/vernissage-mecredi-rap-djs-music-event-graffiti-fl-1-2000.jpg", 
    insta: "https://www.instagram.com/fluctuart/" 
  };

  const histoiresEntry = {
    name: "Histoires Électroniques",
    type: "YouTube Channel",
    image: "https://i.postimg.cc/9QkxfGYB/channels4-banner.jpg",
    insta: "https://www.instagram.com/djlittlenemo/",
    youtubeUrl: "https://www.youtube.com/@histoireselectroniques"
  };

  const theQFEntry = {
    name: "The Q.F",
    type: "Les Bains", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/baudml",
    image: "https://i.postimg.cc/Bbfknxsy/477228828-553023524420752-304065733701654494-n-2.jpg",
    insta: "https://www.instagram.com/theqfestival/"
  };

  const quetzalEntry = {
    name: "Le Quetzal",
    type: "DJ Bar Gay", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djrafanunes",
    image: "https://i.postimg.cc/JhzLwwQ1/images.png",
    insta: "https://www.instagram.com/quetzalparis/"
  };

  const bristolAfterDarkEntry = {
    name: "Le Bristol Paris",
    type: "After Dark", 
    image: "https://i.postimg.cc/RZYwntZH/Where-fashion-meets-the-night.jpg",
    insta: "https://www.instagram.com/bristolafterdark/",
    spotifyUrl: "https://open.spotify.com/playlist/1Nl5xI2vowxeNYv79Kqr7R"
  };

  const tabooEntry = {
    name: "Le Taboo",
    type: "Parisian Living Room", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/taboo-paris",
    image: "https://i.postimg.cc/8C3Z979g/Taboo_nightclub_Paris_theworldkeys_1_1.webp",
    insta: "https://www.instagram.com/taboo.paris/"
  };

  const clubs = [
    { name: "Bonnie", type: "Skyline", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/osmxmusic/warm-up-at-bonnie-club-x-palaisvertmusic-paris", image: "https://i.postimg.cc/vHBDCSw2/Sans-titre.jpg", insta: "https://www.instagram.com/bonnie_club_paris/" },
    { name: "Rexy", type: "Secret After", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/adibumusic/adibu-dj-set-closing-after-party-rexy-paris", image: "https://i.postimg.cc/1XT9LFMr/le-rexy-paris-15212013378.jpg", insta: "https://www.instagram.com/lerexyparisofficiel75/" },
    { name: "MAÑANA", type: "Secret After", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yalssdj", image: "https://i.postimg.cc/m2b64Cmt/629399479-17939582937130690-2345871936100318541-n.jpg", insta: "https://www.instagram.com/after.manana/" },
    { name: "Silencio", type: "Private", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/edouard_paris/moon-moovin-belle-epoque-nye-2026-silencio-paris", image: "https://i.postimg.cc/wMpg9FHf/CGN-PAR-SILENCIO-1.jpg", insta: "https://www.instagram.com/silencioparis/" },
    { name: "Le Yono", type: "Cocktail Club", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yonoparis", image: "https://i.postimg.cc/pTGD94QG/cache-41458542.jpg", insta: "https://www.instagram.com/le_yono/" },
    { name: "Djoon", type: "Soulful", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djoon/djoon-radio-basile-de-suresne", image: "https://i.postimg.cc/zGTH8t0G/djoon-club-paris-xceed-2-jpg.webp", insta: "https://www.instagram.com/djoonclub/" },
    { name: "Mia Mao", type: "Underground", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/miamaomusic", image: "https://i.postimg.cc/k555Z7vx/MIA_MAO_2.jpg", insta: "https://www.instagram.com/miamao_paris/" },
    { name: "Morning Deviance", type: "Gay Vibe", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kryn-bustamante/glamurosa-by-karin-basst", image: "https://i.postimg.cc/sgv1XVts/580736909_18011161979803829_1072699978623570720_n.jpg", insta: "https://www.instagram.com/morning.deviance/" },
    { name: "L'Aventure", type: "L'inaccessible", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lumijay", image: "https://i.postimg.cc/tJnpbTsv/L_aventure.jpg", insta: "https://www.instagram.com/laventurehotel/" },
    { name: "Giulia", type: "Parisian Chic", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yohann-azoulay-53251320/set-giulia-club-paris-01022025", image: "https://i.postimg.cc/dQT4KnRy/025586f598a2a4a23ca0540196b3cb60.jpg", insta: "https://www.instagram.com/giuliaclubparis/" },
    { name: "Horde Paris", type: "Melodic", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hordeparis", image: "https://i.postimg.cc/8c5Gj9T9/240660230-3010842855870456-2506664149531563721-n.jpg", insta: "https://www.instagram.com/horde.paris/" },
    { name: "Medellin", type: "Latino House", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nat_low/miss-fatty-nat-low-edit%3Fin%3Dnat_low/sets/edit-vol-3", image: "https://i.postimg.cc/9XRCH3Ny/Medellin.jpg", insta: "https://www.instagram.com/medellin.paris/" },
    { name: "Synestezia", type: "Melodic House", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/frederika-beautykiller", image: "https://i.postimg.cc/Lsn0gSP1/399314392-346079648105042-7589989907956125905-n.jpg", insta: "https://www.instagram.com/synestezia.events/" },
    { name: "Matignon", type: "Prestigious", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/matignonparisofficial", image: "https://i.postimg.cc/xdn19sbm/Matignon-Paris-1-800.jpg", insta: "https://www.instagram.com/matignonparisofficiel/" },
    { name: "Badaboum", type: "Electronic", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/badaboum_paris", image: "https://i.postimg.cc/gj80Y14V/matignon-paris-drinks.jpg", insta: "https://www.instagram.com/badaboum.paris/" },
    { name: "La Station", type: "Underground", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/spncr_music/live-station-paris", image: "https://i.postimg.cc/SNnrGdRF/la-station-gare-des-mines-club-paris-xceed-logo.png", insta: "https://www.instagram.com/stationgaredesmines/" },
    { name: "L'Arc", type: "Place to be", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/idbyrivoliradioshow/thomas-lerian-live-from-larc-paris-radio-show", image: "https://i.postimg.cc/8C4MGfsN/Design-sans-titre-2025-04-22T112510-781-ujwz0b-png.avif", insta: "https://www.instagram.com/larcparis/" },
    { name: "Panic Room", type: "Collectifs", sc: "", image: "https://i.postimg.cc/Z0zCpJ0x/panic-room-2172-003-01788-006.webp", insta: "https://www.instagram.com/panicroom.paris/" },
    { name: "Le Discobowl", type: "Disco House", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sebastienleger/lost-miracle-radio-085", image: "https://i.postimg.cc/B6ypK7Dt/438852555-442771938296312-4861277957795678772-n.jpg", insta: "https://www.instagram.com/lediscobowl/" },
    { name: "Essaim", type: "Underground", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/essaimparis/extended-jane-fitz-full-recording-essaim-paris-19january2025", image: "https://i.postimg.cc/YCkmCd6D/images-2.jpg", insta: "https://www.instagram.com/essaimparis/" },
    { name: "House O'Drome", type: "Soulful", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/abarrau-pro", image: "https://i.postimg.cc/Gm56QKkh/C-est-la-rentree-On-vous-prepare-de-belles-surprises-pour-2025-Stay-Tuned-1er-RDV-de-l-annee.jpg", insta: "https://www.instagram.com/house_o_drome/" },
    { name: "Croissant Room", type: "Vidéo set", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/croissant-room", image: "https://i.postimg.cc/KjZV0H4b/491441150-1227973408952048-3630596466882744789-n.jpg", insta: "https://www.instagram.com/croissant_room/" },
    { name: "Sacré", type: "Disco & House", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ralfazar/ralf-azar-bon-voyage-2310-club-sacre-paris", image: "https://i.postimg.cc/7ZRgK3vj/1701171040-6565cf6005d44.jpg", insta: "https://www.instagram.com/sacre142/" },
    { name: "Cox", type: "Legendary Bar", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cafecox", image: "https://i.postimg.cc/L6n5NrHn/87197255_10157588057829504_4190647367923400704_o.jpg", insta: "https://www.instagram.com/cox_paris/" },
    { name: "Raspoutine", type: "Chic & Electro", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nanorsevajian/nanor-raspoutine-paris-x-pfw", image: "https://i.postimg.cc/15shzFdP/67183267-2374330985946989-3628675168101990400-n.webp", insta: "https://www.instagram.com/raspoutine.official/" },
    { name: "Anette K", type: "Pool & Club", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-bulitt/nouveau-mix-100-deep-house", image: "https://i.postimg.cc/nV6KKYxf/image-0325755-20250120-ob-63a4ae-20241216-191204.jpg", insta: "https://www.instagram.com/annettek_paris/" },
    { name: "Plaza Athénée", type: "Palace & Music", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thinsquare/plaza-athenee-acte-vii", image: "https://i.postimg.cc/fTvRBDXh/128-photo6.jpg", insta: "https://www.instagram.com/plaza_athenee/" },
    lustEntry,
    { name: "After o'clock", type: "After du Glazart", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/glazart/sets/after-oclock-records-013-autumn-2025-va", image: "https://i.postimg.cc/NjXHtByr/0041978727-25.jpg", insta: "https://www.instagram.com/glazartparis/" },
    { name: "Chez Moune", type: "Pigalle Underground", sc: "", image: "https://i.postimg.cc/XY2pL45g/54c492d61a39ccda57cfaf00b7ee0ad3e1020e21.jpg", insta: "https://www.instagram.com/chezmouneparis/" },
    { name: "Chez Castel", type: "Saint-Germain Chic", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/g-wen72/fg-voyage-castel-paris-2906-by", image: "https://i.postimg.cc/90Whsq5w/68889e52f216f85510152a45-Castel-Club-paysage-1024x658.jpg", insta: "https://www.instagram.com/castelparis/" },
    tabooEntry,
    { name: "Le Cud", type: "Gay Club", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-al1/sets/10-years-without-you-f-k", image: "https://i.postimg.cc/d0D51QvF/616232145-18351737953203666-8363854854367758999-n.jpg", insta: "https://www.instagram.com/cud_paris/" },
    bristolAfterDarkEntry, 
    { name: "Cafe de l'homme", type: "Parisian View", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cafedelhomme", image: "https://i.postimg.cc/43KpmVFn/2S7A0726-jpg.webp", insta: "https://www.instagram.com/cafedelhomme/" },
    { name: "Rosa Bonheur", type: "Parisian Vibe", sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nathalie-benechet-salson/lamarquise-live-mix-podcast-20-paris-at-rosa-bonheur-melodic-progressive-house-dj-mix", image: "https://i.postimg.cc/5y53r5f7/rosa.jpg", insta: "https://www.instagram.com/rosa_bonheur_sur_seine_/" },
    { 
      name: "La Monarch", 
      type: "Hard Techno", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sounds-of-earth/soe-podcast-160-vazik-luz", 
      image: "https://i.postimg.cc/KYL1M2t4/309243575-784988079408240-8238161408264319380-n.jpg", 
      insta: "https://www.instagram.com/monarch.techno/" 
    },
    { 
      name: "Raleigh Club", 
      type: "Les Bains", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/guillaume-bouin-1", 
      image: "https://i.postimg.cc/wM3HDXnk/460772553-815350223824142-3044881570776683621-n.jpg", 
      insta: "https://www.instagram.com/raleigh_club/" 
    },
    cafeCroissantEntry,
    theQFEntry, 
    quetzalEntry, 
    fluctuartEntry,
    histoiresEntry, 
  ];

  return (
    <div className="px-8 py-20 max-w-7xl mx-auto space-y-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-unbounded font-black uppercase tracking-tighter text-white mb-6">LES CLUBS</h1>
        <div className="bg-black py-4 px-10 rounded-[32px] border border-white/5 inline-flex flex-col items-center gap-1 mb-4 shadow-xl">
          <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px]">DIFFÉRENTS STYLES</span>
          <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] md:text-[12px]">UNE SCÈNE: PARIS</span>
        </div>
        <div className="h-[2px] w-24 bg-blue-600 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((c: any, idx) => <InteractiveCover key={`${c.name}-${idx}`} title={c.name} subtitle={c.type} image={c.image} scUrl={c.sc} instaUrl={c.insta} youtubeUrl={c.youtubeUrl} externalUrl={c.externalUrl} spotifyUrl={c.spotifyUrl} />)}
      </div>

      <div className="pt-20 text-center pb-10 flex flex-col items-center gap-12">
        <div className="bg-black py-6 px-10 rounded-[32px] border border-white/10 shadow-2xl">
          <p className="text-white font-unbounded font-black uppercase text-[12px] md:text-[14px] tracking-widest animate-pulse">bientôt plus de clubs, bars, soirées...</p>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-all hover:scale-110 shadow-2xl border border-white/10">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Club;
