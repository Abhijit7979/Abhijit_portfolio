'use client';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { processSteps } from '@/data/services';

/**
 * Sequential timeline — a numbered spine, not four equal cards.
 * The reader should feel the steps happen in order.
 */
export const ProcessSection = () => {
  return (
    <SectionContainer id="process">
      <SectionHeading
        label="How it works"
        title="From first message to written plan in three days"
        description="You will know exactly what happens after you click book. No surprises, no mystery invoices."
      />

      <ol className="relative mx-auto max-w-3xl">
        <span
          className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        {processSteps.map((step, i) => (
          <li key={step.step} className="relative">
            <FadeInView delay={i * 0.06}>
              <div
                className={`flex gap-6 pb-10 md:gap-0 ${
                  i % 2 === 0 ? 'md:grid md:grid-cols-2' : 'md:flex md:flex-row-reverse'
                }`}
              >
                <div
                  className={`hidden md:flex md:items-center md:justify-center ${
                    i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                  }`}
                >
                  <span className="font-heading text-5xl font-extrabold text-primary/15 select-none">
                    {step.step}
                  </span>
                </div>

                <div className="flex-1 pl-14 md:pl-0">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[0.65rem] text-primary md:hidden">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground mt-1.5 md:mt-0">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            </FadeInView>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
};
