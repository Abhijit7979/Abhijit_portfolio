import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export const SectionHeading = ({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn('text-center max-w-2xl mx-auto mb-14 md:mb-16', className)}>
      {label && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary/90 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
        {title}
      </h2>
      <div className="mt-4 h-px w-14 bg-primary/60 rounded-full mx-auto" aria-hidden />
      {description && (
        <p className="mt-6 text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
