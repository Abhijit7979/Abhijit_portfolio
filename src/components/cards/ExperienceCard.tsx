import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="border border-border/80 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-xl font-semibold">{experience.company}</CardTitle>
          <p className="text-lg font-medium text-primary">{experience.role}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 shrink-0" />
              {experience.duration.start} – {experience.duration.end}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              {experience.location}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-2">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5 shrink-0">·</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {experience.productionLinks && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-2">
              Production
            </h4>
            <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
              <a
                href={experience.productionLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Website
              </a>
              {experience.productionLinks.app && (
                <>
                  <span className="text-muted-foreground">·</span>
                  <a
                    href={experience.productionLinks.app}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    App
                  </a>
                </>
              )}
            </p>
          </div>
        )}

        {experience.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-2 flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 shrink-0">★</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="font-medium bg-primary/10 text-primary border-0">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
