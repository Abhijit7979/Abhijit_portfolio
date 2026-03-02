'use client';

import { useState, useEffect } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { githubUsername, socialLinks } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const GITHUB_HEAT_BASE = 'https://gh-heat.anishroy.com/api';

/** GitHub Heat API response for contribution count */
interface ContributionsResponse {
  total: number;
  range: { start: string; end: string };
  contributions: Array<{ date: string; count: number; intensity: number }>;
}

/** Build heatmap SVG URL – green theme, last year, matches GitHub style */
function getHeatmapSvgUrl(username: string): string {
  const params = new URLSearchParams({
    theme: 'green',
    showMonthLabels: 'true',
    showDayLabels: 'true',
    showLegend: 'true',
    legendPos: 'bottom',
  });
  return `${GITHUB_HEAT_BASE}/${username}/svg?${params.toString()}`;
}

export const GitHubContributionsSection = () => {
  const githubUrl =
    socialLinks.find((l) => l.platform === 'github')?.url ?? `https://github.com/${githubUsername}`;
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${GITHUB_HEAT_BASE}/${githubUsername}`)
      .then((res) => res.json())
      .then((data: ContributionsResponse) => setTotalContributions(data.total))
      .catch(() => setTotalContributions(null));
  }, []);

  return (
    <SectionContainer id="github" className="pt-12 md:pt-20">
      <FadeInView>
        <div className="flex flex-col items-center">
          <SectionHeading
            title="GitHub"
            description="Contribution activity from my GitHub profile"
          />
          <Card className="w-full max-w-4xl border border-border/80 bg-card/50 overflow-hidden hover:border-primary/30 transition-colors duration-300">
            <CardContent className="p-0">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                aria-label="View GitHub profile"
              >
                <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-border/60">
                  <p className="text-sm text-muted-foreground">
                    {totalContributions != null ? (
                      <strong className="text-foreground font-semibold">
                        {totalContributions.toLocaleString()} contributions
                      </strong>
                    ) : (
                      <span className="text-muted-foreground">Contributions</span>
                    )}{' '}
                    in the last year
                  </p>
                </div>
                <img
                  src={getHeatmapSvgUrl(githubUsername)}
                  alt={`GitHub contribution heatmap for ${githubUsername} (last year)`}
                  className="w-full h-auto rounded-b-lg"
                  width={896}
                  height={320}
                />
              </a>
              <div className="flex items-center justify-between px-4 py-3 border-t border-border/60 bg-muted/30">
                <span className="text-sm text-muted-foreground">
                  Data from public contributions · updates automatically
                </span>
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Github className="h-4 w-4" />
                  View profile
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
