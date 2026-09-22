import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-mono font-bold text-text">
            MHM.
          </Link>
          <p className="text-sm text-muted text-center md:text-left">
            Software Engineer • ML & Full Stack
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Mostofa-Hasin-Mahdi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mhmrmahdi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:hasinmahdi.hmr@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted">
          <div className="text-center md:text-left">
            &copy; {currentYear} Mostofa Hasin Mahdi. <br className="hidden md:block" /> All rights reserved.
          </div>
          
          <a 
            href="#"
            className="md:ml-auto inline-flex items-center gap-1 hover:text-accent transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
