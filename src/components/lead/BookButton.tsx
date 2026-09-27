import { cn } from '@/lib/utils';
import { bookingUrl, contactLinks } from '@/data/services';

/**
 * Resolves where a "Book a call" click should actually go.
 * If no booking URL is configured yet, fall back to WhatsApp and email
 * so the CTA is never a dead link.
 */
export function resolveBookingHref(): string {
  if (bookingUrl) return bookingUrl;
  return contactLinks.whatsapp;
}

interface BookButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  /** Force a specific target even if a booking URL exists */
  href?: string;
  showExternalIcon?: boolean;
}

export function BookButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
}: BookButtonProps) {
  const target = href ?? resolveBookingHref();
  const isExternal = target.startsWith('http');

  return (
    <a
      href={target}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'active:scale-[0.98]',
        size === 'lg' ? 'h-12 px-7 text-base' : 'h-10 px-5 text-sm',
        variant === 'primary' &&
          'bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30',
        variant === 'outline' &&
          'border border-border bg-card/60 text-foreground hover:border-primary/40 hover:bg-primary/5',
        variant === 'ghost' && 'text-primary hover:bg-primary/10',
        className
      )}
    >
      {children}
    </a>
  );
}
