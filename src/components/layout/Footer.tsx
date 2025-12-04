import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} S. Abhijit Rao. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.platform}
              >
                {link.icon === 'Github' && <Github className="h-5 w-5" />}
                {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                {link.icon === 'Mail' && <Mail className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
