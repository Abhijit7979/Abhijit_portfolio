import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const SectionContainer = ({
  children,
  id,
  className,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-4 py-20 md:px-8 md:py-32',
        'mx-auto max-w-7xl',
        className
      )}
    >
      {children}
    </section>
  );
};
