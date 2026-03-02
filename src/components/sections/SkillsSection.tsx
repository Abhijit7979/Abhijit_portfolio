'use client';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { skillCategories } from '@/data/skills';
import { SkillCategory } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const proficiencyStyles: Record<string, string> = {
  expert:
    'bg-primary/20 text-primary font-semibold border border-primary/25 shadow-[0_0_0_1px_hsl(var(--primary)/0.08)]',
  advanced: 'bg-primary/12 text-primary/90 font-medium border border-primary/15',
  intermediate: 'bg-muted/90 text-muted-foreground border border-border/80',
  beginner: 'bg-muted/70 text-muted-foreground/80 border border-border/60',
};

function SkillPills({ category }: { category: SkillCategory }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {category.skills.map((skill, index) => {
        const prof = skill.proficiency ?? 'intermediate';
        return (
          <motion.span
            key={`${skill.name}-${index}`}
            className={cn(
              'inline-flex items-center rounded-full px-3 py-1.5 text-xs tracking-wide border transition-colors cursor-default',
              proficiencyStyles[prof] ?? proficiencyStyles.intermediate
            )}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.2 },
            }}
          >
            {skill.name}
          </motion.span>
        );
      })}
    </div>
  );
}

export const SkillsSection = () => {
  const mid = Math.ceil(skillCategories.length / 2);
  const leftColumn = skillCategories.slice(0, mid);
  const rightColumn = skillCategories.slice(mid);

  return (
    <SectionContainer id="skills" className="bg-muted/20 relative overflow-hidden pt-12 md:pt-20">
      {/* Layered atmosphere: gradient band + very subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.04) 45%, hsl(var(--primary) / 0.02) 55%, transparent 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            105deg,
            transparent,
            transparent 60px,
            hsl(var(--primary) / 0.15) 60px,
            hsl(var(--primary) / 0.15) 61px
          )`,
        }}
        aria-hidden
      />

      <FadeInView>
        <div className="flex flex-col items-center relative">
          <SectionHeading label="Skills" title="Technical Skills" />

          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-x-14 lg:gap-x-20 gap-y-4">
            {[leftColumn, rightColumn].map((column, colIndex) => (
              <motion.div
                key={colIndex}
                className={cn(
                  'relative',
                  colIndex === 1 && 'lg:pt-12'
                )}
                initial={false}
              >
                {/* Vertical line — gradient with soft glow */}
                <div
                  className="absolute left-[13px] top-8 bottom-8 w-px hidden sm:block rounded-full bg-gradient-to-b from-primary/45 via-primary/22 to-transparent"
                  style={{
                    boxShadow: '0 0 8px 0 hsl(var(--primary) / 0.15)',
                  }}
                  aria-hidden
                />

                <StaggerContainer className="flex flex-col gap-0" staggerDelay={0.08}>
                  {column.map((category, index) => (
                    <StaggerItem key={category.category}>
                      <motion.div
                        className="group relative pl-11 sm:pl-14 pb-14 sm:pb-16 last:pb-0"
                        whileHover="hover"
                        initial="rest"
                        variants={{
                          rest: {},
                          hover: {},
                        }}
                      >
                        {/* Node — larger for first item, glow on block hover */}
                        <motion.div
                          className={cn(
                            'absolute left-0 rounded-full bg-primary ring-4 ring-background sm:ring-[length:4px] sm:ring-background z-10',
                            index === 0 ? 'top-0.5 w-3 h-3' : 'top-2 w-2.5 h-2.5'
                          )}
                          aria-hidden
                          variants={{
                            rest: {
                              boxShadow: '0 0 0 0 hsl(var(--primary) / 0)',
                            },
                            hover: {
                              boxShadow: '0 0 0 6px hsl(var(--primary) / 0.12)',
                              transition: { duration: 0.25 },
                            },
                          }}
                        />

                        {/* Editorial number */}
                        <span
                          className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/60 tabular-nums"
                          aria-hidden
                        >
                          {String(colIndex * mid + index + 1).padStart(2, '0')}
                        </span>

                        <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-foreground mt-0.5">
                          {category.category}
                        </h3>

                        <SkillPills category={category} />
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
