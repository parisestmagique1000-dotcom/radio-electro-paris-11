
export type ProgramItem = {
  day: string;
  start: string;
  end: string;
  title: string;
  dj?: string;
};

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'tiktok';
  url: string;
}

export interface ResidentDJ {
  name: string;
  image: string;
}
