'use client';

import { ExternalLink } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { caseStudies } from '@/data/services';

/**
 * Social proof. Every claim here is a real engagement from the existing
 * portfolio data — nothing inflated, no invented percentages.
 */
export const ProofSection = () => {
  return (
    <SectionContainer id="proof">
      <SectionHeading
        label="Proof"
        title="I have done this before, for paying clients"
        description="Not a course. Not a side project. Production systems shipped for companies, several of them still running."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {caseStudies.map((study, i) => (
          <FadeInView key={study.client} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-border/80 bg-card/50 p-6 transition-colors duration-300 hover:border-primary/30 hover:bg-card/70">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                  {study.client}
                </h3>
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={study.linkLabel ?? `Visit ${study.client}`}
                    className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {study.context}
              </p>

              <div className="mt-5 border-t border-border/60 pt-5">
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-primary/90">
                  {study.role}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                  {study.outcome}
                </p>
              </div>

              {study.link && (
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {study.linkLabel ?? 'View project'}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          </FadeInView>
        ))}
      </div>
    </SectionContainer>
  );
};
