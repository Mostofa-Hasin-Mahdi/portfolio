import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NewNavbar } from "@/components/layout/NewNavbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BootSequence } from "@/components/ui/BootSequence";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const cursiveFont = Playfair_Display({
  style: "italic",
  variable: "--font-cursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mostofa Hasin Mahdi | Software Engineer",
    template: "%s | Mostofa Hasin Mahdi",
  },
  description: "Portfolio of Mostofa Hasin Mahdi, an ML & Full Stack Software Engineer specializing in scalable web apps and machine learning pipelines.",
  keywords: ["Software Engineer", "Full Stack Developer", "ML Engineer", "Next.js", "React", "Python", "Bangladesh", "Portfolio"],
  authors: [{ name: "Mostofa Hasin Mahdi" }],
  creator: "Mostofa Hasin Mahdi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Mostofa Hasin Mahdi | Software Engineer",
    description: "Portfolio of Mostofa Hasin Mahdi, an ML & Full Stack Software Engineer.",
    siteName: "Mostofa Hasin Mahdi Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Mostofa Hasin Mahdi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostofa Hasin Mahdi | Software Engineer",
    description: "Portfolio of Mostofa Hasin Mahdi, an ML & Full Stack Software Engineer.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${cursiveFont.variable} h-full antialiased scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-bg text-text selection:bg-accent selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <BootSequence>
            <NewNavbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </BootSequence>
        </ThemeProvider>
      </body>
    </html>
  );
}
