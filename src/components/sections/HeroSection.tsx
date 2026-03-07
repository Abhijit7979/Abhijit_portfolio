'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Globe, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/moving-border';
import { personalInfo, socialLinks } from '@/data/portfolio';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero-specific glow overlay — global background shows through */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--primary) / 0.14) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
        }}
      />
      {/* Accent line */}
      <div
        className="absolute left-0 top-1/2 w-px h-32 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-60"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: hero identity + CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col max-w-xl"
          >
            <motion.p
              variants={itemVariants}
              className="font-mono text-xs uppercase tracking-[0.2em] text-primary/90 mb-6"
            >
              Data Engineer · B.Tech AI
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.08] whitespace-nowrap"
            >
              <span className="text-foreground">{personalInfo.name.split(' ').slice(0, -1).join(' ')} </span>
              <span className="bg-gradient-to-r from-primary via-[hsl(199,89%,55%)] to-primary bg-clip-text text-transparent">
                {personalInfo.name.split(' ').slice(-1)[0]}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed md:text-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-5"
            >
              <Button
                as="a"
                href="#projects"
                borderRadius="1.5rem"
                containerClassName="!h-auto w-full sm:w-auto sm:min-w-[220px] sm:flex-1"
                className="gap-2 px-8 py-3.5 text-base font-medium bg-primary/90 text-primary-foreground border-primary/80 hover:bg-primary"
              >
                View Projects
                <ArrowDown className="h-4 w-4 shrink-0" />
              </Button>
              <Button
                as="a"
                href={personalInfo.resumeUrl}
                download
                borderRadius="1.5rem"
                containerClassName="!h-auto w-full sm:w-auto sm:min-w-[220px] sm:flex-1"
                className="gap-2 px-8 py-3.5 text-base font-medium border-border bg-card/90 text-foreground hover:bg-card hover:border-primary/40"
              >
                <Download className="h-4 w-4 shrink-0" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-14 flex items-center gap-6"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1.5 rounded-md hover:bg-primary/10"
                  aria-label={link.platform}
                >
                  {link.icon === 'Github' && <Github className="h-5 w-5" />}
                  {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                  {link.icon === 'Globe' && <Globe className="h-5 w-5" />}
                  {link.icon === 'Mail' && <Mail className="h-5 w-5" />}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Vertical divider (visible on lg+) */}
          <div
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-border to-transparent -translate-x-px"
            aria-hidden
          />

          {/* Right column: About Me */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pl-4"
          >
            <div className="rounded-xl border border-border/80 bg-card/50 shadow-lg shadow-black/10 border-l-2 border-l-primary p-6 md:p-8 transition-colors hover:border-primary/30">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary/90 mb-4">
                About Me
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>
              <div className="mt-6 pt-6 border-t border-border/60 space-y-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{personalInfo.location}</span>
                  <span className="text-border" aria-hidden>·</span>
                  <span>B.Tech AI, Mahindra University</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary/90">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors truncate">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary/90">Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-foreground hover:text-primary transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
