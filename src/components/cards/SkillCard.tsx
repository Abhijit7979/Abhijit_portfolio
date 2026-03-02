'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { SkillCategory } from '@/types/portfolio';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  skillCategory: SkillCategory;
  /** When true, card spans 2 columns and shows skills in a two-column layout */
  wide?: boolean;
}

const proficiencyStyles: Record<string, string> = {
  expert: 'bg-primary/25 text-primary font-semibold border-primary/30',
  advanced: 'bg-primary/15 text-primary/90 font-medium border-primary/20',
  intermediate: 'bg-muted/80 text-muted-foreground border-border',
  beginner: 'bg-muted/50 text-muted-foreground/80 border-border',
};

export const SkillCard = ({ skillCategory, wide = false }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn('h-full', wide && 'md:col-span-2')}
    >
      <CardSpotlight
        className={cn(
          'relative flex flex-col overflow-hidden',
          'min-h-[300px]',
          wide && 'min-h-[320px]'
        )}
      >
        {/* Left accent bar — editorial bookmark */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/20 z-10 rounded-l-md"
          aria-hidden
        />

        <div className="pl-5 relative z-20 flex flex-col h-full">
          {/* Category: strong display typography */}
          <p className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground mt-1">
            {skillCategory.category}
          </p>
          <div className="mt-2 h-0.5 w-10 bg-primary/50 rounded-full" aria-hidden />

          {/* Skills: proficiency-weighted badges with staggered feel */}
          <div
            className={cn(
              'flex flex-wrap gap-2 mt-5',
              wide && 'md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:content-start'
            )}
          >
            {skillCategory.skills.map((skill, index) => {
              const prof = skill.proficiency ?? 'intermediate';
              return (
                <span
                  key={`${skill.name}-${index}`}
                  className={cn(
                    'inline-flex items-center rounded-md border px-2.5 py-1 text-xs tracking-wide',
                    proficiencyStyles[prof] ?? proficiencyStyles.intermediate
                  )}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};
