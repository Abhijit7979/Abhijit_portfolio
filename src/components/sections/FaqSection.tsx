'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { faqs } from '@/data/services';
import { cn } from '@/lib/utils';

/** Objection handling. Real answers, including the ones that cost money to say. */
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer id="faq">
      <SectionHeading
        label="Questions"
        title="The things everyone asks, answered straight"
      />

      <div className="mx-auto max-w-3xl divide-y divide-border/70 border-y border-border/70">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.q}>
              <h3>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                >
                  <span
                    className={cn(
                      'text-base font-semibold transition-colors sm:text-lg',
                      isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    )}
                  >
                    {faq.q}
                  </span>
                  <Plus
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300',
                      isOpen && 'rotate-45 text-primary'
                    )}
                  />
                </button>
              </h3>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <FadeInView>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still unsure?{' '}
          <button
            onClick={() => setOpenIndex(0)}
            className="text-primary underline-offset-4 hover:underline"
          >
            Book a free 30-minute call
          </button>{' '}
          and ask me directly.
        </p>
      </FadeInView>
    </SectionContainer>
  );
};
