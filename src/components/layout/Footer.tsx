'use client';

import { Github, Globe, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="h-px w-12 bg-primary/60 rounded-full" aria-hidden />
            <p className="text-sm text-muted-foreground mt-2">
              © {year} S. Abhijit Rao
            </p>
            <p className="text-xs text-muted-foreground/80">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                aria-label={link.platform}
              >
                {link.icon === 'Github' && <Github className="h-5 w-5" />}
                {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                {link.icon === 'Globe' && <Globe className="h-5 w-5" />}
                {link.icon === 'Mail' && <Mail className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
