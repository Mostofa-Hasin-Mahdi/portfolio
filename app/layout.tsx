import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
        url: "/assets/PXL_20260816_09094153.jpg",
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
    images: ["/assets/PXL_20260816_09094153.jpg"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-accent selection:text-white pt-16">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
