'use client';

import { motion } from 'framer-motion';
import { CalendarClock, MessageCircle, Mail, Phone } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { BookButton } from '@/components/lead/BookButton';
import { FadeInView } from '@/components/animations/FadeInView';
import { personalInfo } from '@/data/portfolio';
import { contactLinks } from '@/data/services';

const availability = [
  { label: 'Calls booked this month', value: 'Limited' },
  { label: 'Response time', value: 'Within 24 hours' },
  { label: 'Timezone', value: 'IST — flexible worldwide' },
];

/**
 * Primary conversion block. Sits directly under the hero so the
 * highest-value action is reachable without scrolling.
 */
export const BookingSection = () => {
  return (
    <SectionContainer id="book" className="pt-16 md:pt-24">
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card/70 p-8 md:p-12 shadow-xl shadow-primary/5">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 0%, hsl(var(--primary) / 0.12) 0%, transparent 60%)',
              }}
            />

            <div className="relative text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                Book a call
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground text-balance">
                Find out if AI is right for your problem — in 30 minutes
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                No pitch deck, no discovery invoice. Tell me what you are trying to
                build and I will tell you whether it is worth building.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-stretch justify-center gap-4">
                <BookButton size="lg" className="sm:min-w-[220px]">
                  <CalendarClock className="h-4 w-4 shrink-0" />
                  Book a free call
                </BookButton>
                <BookButton
                  size="lg"
                  variant="outline"
                  href={contactLinks.whatsapp}
                  className="sm:min-w-[220px]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp me
                </BookButton>
              </div>

              <div className="mt-10 pt-8 border-t border-border/70 grid gap-6 sm:grid-cols-3 text-left">
                {availability.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/80">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 grid gap-4 sm:grid-cols-3"
        >
          <FallbackLink href={contactLinks.email} icon={Mail} label="Email" value={personalInfo.email} />
          <FallbackLink href={`tel:${personalInfo.phone}`} icon={Phone} label="Phone" value={personalInfo.phone} />
          <FallbackLink href={contactLinks.whatsapp} icon={MessageCircle} label="WhatsApp" value="Fastest reply" />
        </motion.div>
      </div>
    </SectionContainer>
  );
};

function FallbackLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-xl border border-border/80 bg-card/40 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground/80">
          {label}
        </span>
        <span className="truncate text-sm text-foreground">{value}</span>
      </span>
    </a>
  );
}
