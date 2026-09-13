export interface Achievement {
  id: string;
  title: string;
  description?: string;
  year: string;
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "infinity-ai",
    title: "Finalist • CloudcampBD Infinity AI BuildFest",
    year: "2026",
    icon: "🏆",
  },
  {
    id: "smuct-champion",
    title: "Champion • SMUCT Project Showcase",
    year: "2026",
    icon: "🥇",
  },
  {
    id: "smuct-runner-up",
    title: "2nd Runner-up • SMUCT CSE FEST V2.0 Programming Contest",
    year: "2025",
    icon: "🥈",
  },
];
