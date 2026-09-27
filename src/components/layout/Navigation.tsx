'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import { BookButton } from '@/components/lead/BookButton';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#proof', label: 'Proof' },
  { href: '#process', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border/50 bg-background/85 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="#"
            className="shrink-0 font-heading text-base font-semibold text-foreground transition-colors hover:text-primary sm:text-lg"
          >
            {personalInfo.name}
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 rounded-full bg-primary/50 transition-transform group-hover:scale-x-100"
                  aria-hidden
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <BookButton className="hidden sm:inline-flex" href="#book">
              Book a call
            </BookButton>
            <button
              className="rounded-md p-2.5 text-foreground transition-colors hover:bg-primary/10 hover:text-primary lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 sm:hidden">
                <BookButton
                  href="#book"
                  className="w-full"
                >
                  Book a call
                </BookButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
