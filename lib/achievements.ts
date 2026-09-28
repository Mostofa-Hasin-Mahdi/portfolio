export interface Achievement {
  id: string;
  title: string;
  description?: string;
  year: string;
  icon: string;
  mediaType?: "video" | "image";
  mediaUrl?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "infinity-ai",
    title: "Finalist • CloudcampBD Infinity AI BuildFest",
    year: "2026",
    icon: "🏆",
    mediaType: "video",
    mediaUrl: "/assets/achievements/nabpreg.mp4"
  },
  {
    id: "smuct-champion",
    title: "Champion • SMUCT Software Project Showcase",
    year: "2026",
    icon: "🥇",
    mediaType: "image",
    mediaUrl: "/assets/achievements/champion.jpg"
  },
  {
    id: "smuct-runner-up",
    title: "2nd Runner-up • SMUCT CSE FEST V2.0 Programming Contest",
    year: "2023",
    icon: "🥈",
    mediaType: "image",
    mediaUrl: "/assets/achievements/runnerup.jpg"
  },
  {
    id: "leetcode",
    title: "135+ LeetCode problems solved",
    year: "Present",
    icon: "💻",
  },
  {
    id: "cgpa",
    title: "CGPA 3.96 / 4.00",
    description: "BSc in Computer Science and Engineering",
    year: "Nov 2026",
    icon: "🎓",
  },
];
