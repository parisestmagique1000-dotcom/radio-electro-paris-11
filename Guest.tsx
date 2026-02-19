import React from 'react';
import InteractiveCover from '../components/InteractiveCover';

const Guest: React.FC<{ openInApp: any }> = () => {
  const yalssEntry = { 
    name: "Yalss", 
    type: "Mañana", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yalssdj", 
    image: "https://i.postimg.cc/c4X5ThQx/458442822-876776807183595-200882421603742996-n.jpg", 
    insta: "https://www.instagram.com/yalss_patrik/" 
  };

  const frederikaEntry = { 
    name: "Frederika", 
    type: "Synestesia", 
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/frederika-beautykiller", 
    image: "https://i.postimg.cc/Dw9s3JmQ/frederika-beautykiller.jpg", 
    insta: "https://www.instagram.com/frederika_beautykiller/" 
  };

  const cecileCdgEntry = {
    name: "Cecile cdg",
    type: "Chouchou Hotel - Rosa Bonheur",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cecilecdg",
    image: "https://i.postimg.cc/285HQzTQ/489368575-1211228487244299-1569541174103731290-n.jpg",
    insta: "https://www.instagram.com/cecilecdg/"
  };

  const elyEntry = {
    name: "Mademoiselle Ely",
    type: "Guest DJ",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/mademoiselleely",
    image: "https://i.postimg.cc/rw22Q0HJ/335936058-3512368059088926-858305665425827767-n.jpg",
    insta: "https://www.instagram.com/mademoiselleely/"
  };

  const benmasterEntry = {
    name: "benmaster",
    type: "les apaches",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ben-sarl",
    image: "https://i.postimg.cc/QCDcfqp1/images-3.jpg",
    insta: "https://www.instagram.com/benmaster93/"
  };

  const rafaNunesEntry = {
    name: "DJ Rafa Nunes",
    type: "Duplex Bar",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djrafanunes/45-years-duplex-birthday-party-1st-hour-dj-set",
    image: "https://i.postimg.cc/Y2bgztLb/avatars-Eg3h-WLywl-T4D3w-XS-C8X2og-t1080x1080.jpg",
    insta: "https://www.instagram.com/djrafanunes/"
  };

  const karolKolombEntry = {
    name: "Karol Kolomb",
    type: "le mañana",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/karolcolomb",
    image: "https://i.postimg.cc/bNPY6B4J/434560668-438606211887101-8328428229194857992-n-2.jpg",
    insta: "https://www.instagram.com/karolcolomb/"
  };

  const malrowEntry = {
    name: "DJ Malrow",
    type: "Hoxton - Bonnie",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/whoismalrow",
    image: "https://i.postimg.cc/rw1QcKwv/We-back-tonight-misskorestaurant-Starts-at-8-30pm-deephouse-electro-nudisco-covid19-d.jpg",
    insta: "https://www.instagram.com/whoismalrow/"
  };

  const ekyllEntry = {
    name: "DJ Ekyll",
    type: "Coya",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djekyll_official",
    image: "https://i.postimg.cc/Fz9z8C1r/Sans-titre.jpg",
    insta: "https://www.instagram.com/ekyll_official/"
  };

  const gymboDoumdamEntry = {
    name: "GYMBODOUMDAM",
    type: "House O'Drome",
    sc: "https://www.mixcloud.com/GYMBODOUMDAM/",
    image: "https://i.postimg.cc/BvhGJqS7/605292003-18303752392282998-1712272865175536224-n.jpg",
    insta: "https://www.instagram.com/gymbodoumdam/"
  };

  const djKatzEntry = {
    name: "DJ Katz",
    type: "mirage - silencio",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djkatzmusic",
    image: "https://i.postimg.cc/CMXsBMjx/Sans-titre.jpg",
    insta: "https://www.instagram.com/djkatzmusic/"
  };

  const liliMeddEntry = {
    name: "LILI MEDD",
    type: "Le Flirt Paris",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lili-medina-413813662",
    image: "https://i.postimg.cc/52WDgT04/639481866-18562190872043527-3220177896597257642-n.jpg",
    insta: "https://www.instagram.com/lili_medd/"
  };

  const lylouEntry = {
    name: "Lylou",
    type: "plaza athénée - Matignon",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-813447046",
    image: "https://i.postimg.cc/t4pMmL3P/576108168-18084214448060197-399766019349802102-n.jpg",
    insta: "https://www.instagram.com/lylou_musik/"
  };

  const candiceEntry = {
    name: "Candice",
    type: "terraza mikuna - drugstore Publicis",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djcandicemusic",
    image: "https://i.postimg.cc/wjh5mvnY/549191357-18317174428245668-3381250084090093806-n.jpg",
    insta: "https://www.instagram.com/djcandicemusic/"
  };

  const ferielEntry = {
    name: "Fériel",
    type: "Arc - Mirage",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/feriel-aouida",
    image: "https://i.postimg.cc/fLJkNqNS/631200539-18435751348115886-874500619168206831-n.jpg",
    insta: "https://www.instagram.com/ferielmusic/"
  };

  const keagerEntry = {
    name: "keager",
    type: "mikado - hotel particulier Montmartre",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/keagerkicks",
    image: "https://i.postimg.cc/qRK7Zh0r/NOVEMBER-GIGS-mikadodancing-Jeudi-3-Samedi-5-Novembre-Jeudi-10-Vendred.jpg",
    insta: "https://www.instagram.com/keagerkicks/"
  };

  const magnoliaEntry = {
    name: "Magnolia",
    type: "Sacré 142",
    sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/magnolia237912744",
    image: "https://i.postimg.cc/bvh27Sqq/489819516-577911327969033-6825725688232248717-n.jpg",
    insta: "https://www.instagram.com/magnolia_hotstuff/"
  };

  const guests = [
    { 
      name: "Baud", 
      type: "Les Bains", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/baudml", 
      image: "https://i.postimg.cc/CMs4CNdd/baudml.jpg", 
      insta: "https://www.instagram.com/baudml/" 
    },
    { 
      name: "Trotty Velasco", 
      type: "Cox - Deviance", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/trotty-velasco", 
      image: "https://i.postimg.cc/NFdT3dr1/Trotty_Velasco_jpg.avif", 
      insta: "https://www.instagram.com/trotty_velasco/" 
    },
    { 
      name: "Metaflore", 
      type: "Mikado", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/metaflore_music", 
      image: "https://i.postimg.cc/gjFRpC81/573640744-18538863061003681-5054671568130985268-n.jpg", 
      insta: "https://www.instagram.com/metaflore_music/" 
    },
    { 
      name: "Soupafly", 
      type: "Anette K - Rosa Bonheur", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-bulitt/mix-100-afrobeat", 
      image: "https://i.postimg.cc/gJPv8XWd/625942414-18558247855010330-6575679686614670104-n.jpg", 
      insta: "https://www.instagram.com/soupafly.dj/" 
    },
    { 
      name: "Nat Low", 
      type: "Médellin", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nat_low/sets/edit-vol-3", 
      image: "https://i.postimg.cc/5NWGKjY9/462420512-1094286995434673-736283641469386083-n.jpg", 
      insta: "https://www.instagram.com/nat_low_/" 
    },
    { 
      name: "DJ Duke F", 
      type: "Ouistiti - Take My House", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-781415841", 
      image: "https://i.postimg.cc/SsCvrprq/463779260-1872652029927458-4791574589435946822-n.jpg", 
      insta: "https://www.instagram.com/djdukef/" 
    },
    cecileCdgEntry,
    { 
      name: "Isaac Gueye", 
      type: "Guest DJ", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-gueye", 
      image: "https://i.postimg.cc/28V4R7sB/hauteepicure_Photographer_olga_gasnier_picture_photography_beautiful_pic_photo_instagood.webp", 
      insta: "https://www.instagram.com/isaacgueye/" 
    },
    { 
      name: "La Marquise", 
      type: "Cox - Rosa Bonheur", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nathalie-benechet-salson", 
      image: "https://i.postimg.cc/s2Gv2njg/589899669-18074665106594051-8913659271663201925-n.jpg", 
      insta: "https://www.instagram.com/lamarquisedj/" 
    },
    { 
      name: "Emmanuel C", 
      type: "Guest DJ", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/emmanuel-caurel", 
      image: "https://i.postimg.cc/wMyXqKP5/ABOUT-LAST-NIGHT-IN-THE-MIX-fondationcarmignac-PRIVATE-PARTY.jpg", 
      insta: "https://www.instagram.com/emmanuelcaurel/" 
    },
    { 
      name: "Little Némo", 
      type: "FreeDJ - Quetzal", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djlittlenemo", 
      image: "https://i.postimg.cc/4x9R1Ny6/556650900-18530223904024216-796942936217470648-n.jpg", 
      insta: "https://www.instagram.com/djlittlenemo/" 
    },
    candiceEntry, 
    yalssEntry,
    { 
      name: "Alexandra T", 
      type: "Bambou - Alcazar", 
      image: "https://i.postimg.cc/qqV3z7Nb/121083989-986624508477568-671776731414512421-n.jpg", 
      insta: "https://www.instagram.com/djalexandrat/" 
    }, 
    { 
      name: "DJ Buda", 
      type: "Kinky", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/buda-paris", 
      image: "https://i.postimg.cc/DwpZDzP7/475341490-1150368046688390-8807722985327881590-n.jpg", 
      insta: "https://www.instagram.com/buda.dj.paris/" 
    },
    { 
      name: "Ronysool & Yomi", 
      type: "Club 72 - Mirage", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ronysool/ronyomi-the-mack-edit", 
      image: "https://i.postimg.cc/MHHXQqvZ/avatars-UIvt1Qj-Bk-JABv-TD6-YRzcj-A-t1080x1080.jpg", 
      insta: "https://www.instagram.com/ronysool/" 
    },
    { 
      name: "Louie Gauss", 
      type: "Discobowl", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sebastienleger/lost-miracle-radio-085", 
      image: "https://i.postimg.cc/FHBZfsS1/521873241-18522935929061728-8305947863072087357-n.jpg", 
      insta: "https://www.instagram.com/louie.gauss/" 
    },
    frederikaEntry, 
    liliMeddEntry,
    { 
      name: "Saudad", 
      type: "La Horde", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/saudadmusic", 
      image: "https://i.postimg.cc/QNfTxnHQ/images.jpg", 
      insta: "https://www.instagram.com/saudad_music/" 
    },
    { 
      name: "DJ AL1", 
      type: "Le Cud - Le Labo", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-al1", 
      image: "https://i.postimg.cc/wjn2bG36/495518344-18403758658100169-5175415086851259613-n.jpg", 
      insta: "https://www.instagram.com/dj.al1/" 
    },
    { 
      name: "Basile de Suresne", 
      type: "Frappé Label", 
      sc: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djoon/djoon-radio-basile-de-suresne", 
      image: "https://i.postimg.cc/tgxzWNqW/539557940-18395541511184857-3186685821355947142-n-2.jpg", 
      insta: "https://www.instagram.com/basiledesuresne/" 
    },
    elyEntry, 
    benmasterEntry, 
    karolKolombEntry, 
    lylouEntry, 
    rafaNunesEntry,
    gymboDoumdamEntry, 
    magnoliaEntry, 
    keagerEntry, 
    ekyllEntry, 
    malrowEntry,
    ferielEntry, 
    djKatzEntry,
  ];

  return (
    <div className="px-8 py-20 max-w-7xl mx-auto space-y-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-unbounded font-black uppercase tracking-tighter text-white mb-6">DJ'S GUESTS</h1>
        <div className="bg-black py-4 px-10 rounded-[32px] border border-white/5 inline-flex flex-col items-center gap-1 mb-4 shadow-xl">
          <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px]">DIFFÉRENTS STYLES</span>
          <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] md:text-[12px]">UNE SCÈNE: PARIS</span>
        </div>
        <div className="h-[2px] w-24 bg-blue-600 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guests.map((g: any, idx) => <InteractiveCover key={`${g.name}-${idx}`} title={g.name} subtitle={g.type} image={g.image} scUrl={g.sc} instaUrl={g.insta} />)}
      </div>

      <div className="flex flex-col items-center pt-20 pb-10 gap-12">
        <div className="bg-black py-6 px-10 rounded-[32px] border border-white/10 shadow-2xl">
          <p className="text-white font-unbounded font-black uppercase text-[10px] md:text-[12px] tracking-widest text-center animate-pulse">ET PLEINS D'AUTRES...</p>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-all hover:scale-110 shadow-2xl border border-white/10">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Guest;