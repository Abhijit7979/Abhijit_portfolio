'use client';

import Image from 'next/image';
import { Linkedin, ExternalLink, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Achievement } from '@/types/portfolio';

interface LinkedInPostPreviewCardProps {
  achievement: Achievement;
  className?: string;
}

export function LinkedInPostPreviewCard({ achievement, className }: LinkedInPostPreviewCardProps) {
  const { title, issuer, date, credentialUrl, previewQuote, image } = achievement;
  if (!credentialUrl) return null;

  return (
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View post on LinkedIn: ${title}`}
      className={cn(
        'group/card block h-full text-left rounded-xl overflow-hidden',
        'border border-border/80 bg-card/50',
        'transition-all duration-300 ease-out',
        'hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      {/* Image */}
      {image && (
        <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover/card:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden />
        </div>
      )}

      {/* Left accent bar + gradient wash */}
      <div className="relative flex min-h-full">
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-primary/90 group-hover/card:bg-primary group-hover/card:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/[0.06] via-transparent to-transparent pointer-events-none"
          aria-hidden
        />

        <div className="relative flex flex-col flex-1 pl-6 pr-6 py-6 min-w-0">
          {/* Platform pill */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/80 text-muted-foreground text-xs font-medium">
              <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" aria-hidden />
              LinkedIn
            </span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>

          {/* Achievement context */}
          <p className="text-sm font-semibold text-primary mb-2">{title}</p>
          <p className="text-xs text-muted-foreground mb-4">{issuer}</p>

          {/* Quote */}
          {previewQuote && (
            <div className="relative flex-1">
              <Quote
                className="absolute -left-0.5 top-0 h-5 w-5 text-primary/25 pointer-events-none"
                aria-hidden
              />
              <p className="font-heading text-sm leading-relaxed text-foreground/90 pl-5 line-clamp-4">
                {previewQuote}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-5 pt-4 border-t border-border/60">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover/card:gap-2.5 transition-all duration-200">
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              View post on LinkedIn
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
