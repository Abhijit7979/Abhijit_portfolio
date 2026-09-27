'use client';

import { Check, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { serviceOfferings, pricingTiers } from '@/data/services';
import { cn } from '@/lib/utils';

/**
 * Decide surface: one idea per row. Deliberately NOT a 3-equal-card grid —
 * offerings are stacked full-width so each promise reads on its own terms
 * and the list scans like a menu, not a comparison table.
 */
export const ServicesSection = () => {
  return (
    <SectionContainer id="services">
      <SectionHeading
        label="What I do"
        title="AI consulting for teams who need it to actually work"
        description="Three ways I work with founders and engineering teams. Most engagements start with the first one."
      />

      <div className="flex flex-col gap-4">
        {serviceOfferings.map((service, i) => {
          const tier = pricingTiers.find((t) => t.id === service.tierId);

          return (
            <FadeInView key={service.id} delay={i * 0.08}>
              <article
                className={cn(
                  'group relative grid gap-6 rounded-2xl border border-border/80 bg-card/50 p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:p-9',
                  'transition-colors duration-300 hover:border-primary/35 hover:bg-card/70'
                )}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                    {service.label}
                  </span>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.promise}
                  </p>
                  {tier && (
                    <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">
                      {tier.price}
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-5 md:border-l md:border-border/60 md:pl-8">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    <span className="font-semibold text-foreground">Who it is for: </span>
                    {service.forWhom}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeInView>
          );
        })}
      </div>
    </SectionContainer>
  );
};
