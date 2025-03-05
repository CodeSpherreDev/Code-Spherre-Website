export interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  isHighlighted?: boolean;
}