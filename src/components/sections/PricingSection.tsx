'use client';

import { Check } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { BookButton } from '@/components/lead/BookButton';
import { pricingTiers, contactLinks } from '@/data/services';
import { cn } from '@/lib/utils';

/**
 * Compare surface: aligned columns, identical internal structure,
 * exactly one column elevated. The featured tier is visually dominant
 * and its CTA is the filled button.
 */
export const PricingSection = () => {
  return (
    <SectionContainer id="pricing">
      <SectionHeading
        label="Pricing"
        title="Published rates, because guessing wastes both our time"
        description="Every engagement is fixed-price and agreed in writing before any work starts."
      />

      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        {pricingTiers.map((tier, i) => (
          <FadeInView key={tier.id} delay={i * 0.08}>
            <div
              className={cn(
                'relative flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300',
                tier.featured
                  ? 'border-primary/45 bg-card shadow-xl shadow-primary/10 md:-mt-4 md:pb-9 md:pt-9'
                  : 'border-border/80 bg-card/50 hover:border-primary/25'
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary-foreground">
                  Most booked
                </span>
              )}

              <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground/80">{tier.duration}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
                  {tier.priceInr}
                </span>
                {tier.priceUsd && (
                  <span className="text-base text-muted-foreground">{tier.priceUsd}</span>
                )}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground/80">{tier.priceNote}</p>

              <p className="mt-5 border-t border-border/60 pt-5 text-sm leading-relaxed text-foreground/85">
                {tier.bestFor}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {tier.id === 'build' ? (
                  <BookButton
                    href={contactLinks.email}
                    variant="outline"
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </BookButton>
                ) : (
                  <BookButton
                    variant={tier.featured ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </BookButton>
                )}
              </div>
            </div>
          </FadeInView>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground/80">
        Prices in INR. USD shown for reference at current rates. Need something
        else?{' '}
        <a
          href={contactLinks.email}
          className="text-primary underline-offset-4 hover:underline"
        >
          Ask about a custom scope
        </a>
        .
      </p>
    </SectionContainer>
  );
};
