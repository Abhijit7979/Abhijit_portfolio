import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Timeline } from '@/components/ui/timeline';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import type { Experience } from '@/types/portfolio';

function experienceToTimelineData(experiences: Experience[]) {
  return experiences.map((exp) => ({
    id: exp.id,
    title: `${exp.duration.start} – ${exp.duration.end}`,
    content: (
      <div key={exp.id} className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
          <p className="text-primary font-medium">{exp.role}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 shrink-0" />
              {exp.duration.start} – {exp.duration.end}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              {exp.location}
            </span>
          </div>
        </div>

        <p className="text-xs font-normal text-muted-foreground md:text-sm">
          {exp.description}
        </p>

        <div>
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground/90">
            Key responsibilities
          </h5>
          <ul className="space-y-2">
            {exp.responsibilities.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground md:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {exp.achievements.length > 0 && (
          <div>
            <h5 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              <Award className="h-4 w-4 text-primary" />
              Achievements
            </h5>
            <ul className="space-y-2">
              {exp.achievements.map((a, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm"
                >
                  ★ {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        {exp.productionLinks && (
          <div className="flex flex-wrap items-center gap-2">
            <ExternalLink className="h-4 w-4 text-primary" />
            <a
              href={exp.productionLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Website
            </a>
            {exp.productionLinks.app && (
              <>
                <span className="text-muted-foreground">·</span>
                <a
                  href={exp.productionLinks.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  App
                </a>
              </>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-primary/10 text-primary border-0 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    ),
  }));
}

export const ExperienceSection = () => {
  const timelineData = experienceToTimelineData(experiences);

  return (
    <SectionContainer id="experience" className="relative overflow-clip">
      {/* Soft glow behind timeline so the chart feels part of the background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, hsl(var(--primary) / 0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 80% at 75% 50%, hsl(var(--primary) / 0.04) 0%, transparent 50%)',
        }}
      />
      <div className="relative w-full flex flex-col items-center">
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          description="A timeline of my roles and key contributions in AI and software engineering."
          className="mb-8 md:mb-10"
        />
        <Timeline data={timelineData} />
      </div>
    </SectionContainer>
  );
};
