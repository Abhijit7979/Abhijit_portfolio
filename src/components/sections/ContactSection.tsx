'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Globe,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const iconMap = {
  Github,
  Linkedin,
  Globe,
  Mail,
} as const;

export const ContactSection = () => {
  return (
    <SectionContainer id="contact" className="relative overflow-hidden pt-12 md:pt-20 pb-4 md:pb-6">
      {/* Subtle ambient gradient — sits behind content */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        aria-hidden
      >
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[80%] h-[80%] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 55%)`,
          }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Heading — editorial, bold */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/90 mb-4">
            Contact
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Get In Touch
          </h2>
          <div
            className="mt-5 h-1 w-20 rounded-full mx-auto opacity-90"
            style={{ background: `linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)` }}
            aria-hidden
          />
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg max-w-xl mx-auto">
            Interested in collaborating on AI projects or discussing opportunities? I’d love to hear from you.
          </p>
        </motion.div>

        {/* Asymmetric layout: hero email card + grid of others — stagger applied to direct children */}
        <StaggerContainer
          staggerDelay={0.08}
          className="w-full max-w-4xl grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-14"
        >
          {/* Email — hero card, spans 2 cols on lg */}
          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <ContactCard
              href={`mailto:${personalInfo.email}`}
              icon={Mail}
              label="Email"
              value={personalInfo.email}
              isHero
            />
          </StaggerItem>

          <StaggerItem>
            <ContactCard
              href={`tel:${personalInfo.phone}`}
              icon={Phone}
              label="Phone"
              value={personalInfo.phone}
            />
          </StaggerItem>

          <StaggerItem>
            <ContactCard
              icon={MapPin}
              label="Location"
              value={personalInfo.location}
            />
          </StaggerItem>

          {/* Social links — full width row, staggered */}
          <StaggerItem className="sm:col-span-2 lg:col-span-4 mb-8">
            <Card className="contact-card border border-border/80 bg-card/60 backdrop-blur-sm overflow-hidden group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <span className="contact-card-icon-wrapper flex items-center justify-center rounded-lg bg-primary/10 text-primary p-2 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Globe className="h-4 w-4" />
                  </span>
                  Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'group/link inline-flex items-center gap-2 px-4 py-2.5 rounded-xl',
                          'text-muted-foreground hover:text-primary hover:bg-primary/10',
                          'border border-transparent hover:border-primary/30',
                          'transition-all duration-300 ease-out',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2'
                        )}
                        aria-label={link.platform}
                      >
                        {Icon && <Icon className="h-4 w-4 shrink-0" />}
                        <span className="text-sm font-medium capitalize">{link.platform}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover/link:opacity-100 transition-all duration-200" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SectionContainer>
  );
};

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  isHero?: boolean;
}

function ContactCard({ icon: Icon, label, value, href, isHero }: ContactCardProps) {
  const content = (
    <>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-base font-semibold text-foreground">
          <span
            className={cn(
              'contact-card-icon-wrapper flex items-center justify-center rounded-xl p-2.5 transition-all duration-300',
              isHero
                ? 'bg-primary/15 text-primary'
                : 'bg-primary/10 text-primary'
            )}
          >
            <Icon className={isHero ? 'h-5 w-5' : 'h-4 w-4'} />
          </span>
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {href ? (
          // When card is wrapped in outer <a>, use span to avoid nested <a> (hydration error)
          <span
            className={cn(
              'text-muted-foreground hover:text-primary transition-colors duration-200 break-all',
              isHero && 'text-base font-medium'
            )}
          >
            {value}
          </span>
        ) : (
          <p
            className={cn(
              'text-muted-foreground',
              isHero && 'text-base font-medium'
            )}
          >
            {value}
          </p>
        )}
      </CardContent>
    </>
  );

  const cardClass = cn(
    'contact-card border border-border/80 bg-card/60 backdrop-blur-sm overflow-hidden group h-full transition-all duration-300 ease-out',
    'hover:border-primary/40 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.15)] hover:shadow-primary/5',
    isHero && 'hover:shadow-lg hover:shadow-primary/10 md:py-1'
  );

  if (href) {
    return (
      <a href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-xl">
        <Card className={cardClass}>{content}</Card>
      </a>
    );
  }

  return <Card className={cardClass}>{content}</Card>;
}
