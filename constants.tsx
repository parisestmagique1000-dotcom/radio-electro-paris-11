
import React from 'react';
import { ProgramItem } from './types';

export const STREAM_URL = "https://radioelec.radioca.st/stream";
export const BACKGROUND_IMAGE_URL = "https://i.postimg.cc/FKXmZXkt/cb4ad0-41d2ca721e9a46fd825dc25a4e2c8a97-mv2-png.avif";
export const SLOGAN = "DIFFERENTS STYLES, UNE SCÈNE: PARIS";

export const DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

const LINE_UP_MAPPING: Record<string, {title: string, dj: string}> = {
  "07:00": { dj: "Overside", title: "DJ DM from Paris" },
  "08:00": { dj: "Le Rexy", title: "SISSI LAZ" },
  "09:00": { dj: "Les Bains", title: "BAUD" },
  "10:00": { dj: "Morning Deviance - Le Cox", title: "TROTTY VELASCO" },
  "11:00": { dj: "Le Mañana", title: "YALLS" },
  "12:00": { dj: "Club 72", title: "RONYSOOL" },
  "13:00": { dj: "Mikado", title: "METAFLORE" },
  "14:00": { dj: "Rosa Bonheur & Annette K", title: "Soupafly" },
  "15:00": { dj: "Rosa Bonheur - Cox", title: "LA MARQUISE" },
  "16:00": { dj: "Discobowl", title: "Louie Gauss" },
  "17:00": { dj: "otterspace", title: "KHANH" },
  "18:00": { dj: "La Bellevilloise", title: "FREDERIKA" },
  "19:00": { dj: "Overside", title: "DJ DM from Paris" },
  "20:00": { dj: "Le Rexy", title: "SISSI LAZ" },
  "21:00": { dj: "Les Bains", title: "BAUD" },
  "22:00": { dj: "Morning Deviance - Le Cox", title: "TROTTY VELASCO" },
  "23:00": { dj: "Le Mañana", title: "YALLS" },
  "00:00": { dj: "Club 72", title: "RONYSOOL" },
};

export const sortedProgram: ProgramItem[] = [];

DAYS.forEach(day => {
  Object.entries(LINE_UP_MAPPING).forEach(([start, data]) => {
    const h = parseInt(start.split(':')[0]);
    const nextH = (h + 1 === 24) ? "01" : (h + 1).toString().padStart(2, '0');
    sortedProgram.push({ day, start, end: `${nextH}:00`, title: data.title, dj: data.dj });
  });
  sortedProgram.push({ day, start: "01:00", end: "07:00", title: "Playlist & Rediffusion", dj: "Radio Electro Paris" });
});

export const EiffelIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L8 22M12 2L16 22M6 22h12M9 15h6M10 10h4" />
  </svg>
);

export const PopoutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);
