'use client';

import { motion } from 'framer-motion';
import { CalendarClock, ArrowDown } from 'lucide-react';
import { BookButton } from '@/components/lead/BookButton';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { Github, Globe, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--primary) / 0.14) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            Accepting consulting calls
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your AI project needs an architect, not another demo
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl"
          >
            I am {personalInfo.name}, a freelance AI engineer. I have shipped
            production RAG systems, agentic chatbots, and OCR pipelines for
            energy and petroleum companies — and I now take a limited number of
            consulting calls to tell you what to build, what to cut, and what it
            will cost.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-stretch"
          >
            <BookButton size="lg" className="sm:min-w-[240px]">
              <CalendarClock className="h-4 w-4 shrink-0" />
              Book a free 30-min call
            </BookButton>
            <BookButton size="lg" variant="outline" href="#pricing" className="sm:min-w-[200px]">
              See pricing
            </BookButton>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm text-muted-foreground/80"
          >
            No pitch deck. No sales sequence. Just an honest answer.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/60">
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
