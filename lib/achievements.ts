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
    description: "Solved problems across different patterns including Arrays, Strings, Trees, and Graphs. It helped me to strengthen my problem solving skills and data structures knowledge.",
    year: "Present",
    icon: "💻",
    mediaType: "image",
    mediaUrl: "/assets/achievements/leetcode.png"
  },
  {
    id: "cgpa",
    title: "CGPA 3.96 / 4.00",
    description: "BSc in Computer Science and Engineering. A journey of consistency and hard work. I have always tried to do the best in my academic life and I'm proud of my results.",
    year: "Nov 2026",
    icon: "🎓",
  },
];
