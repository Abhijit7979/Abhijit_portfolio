import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl">{experience.company}</CardTitle>
          <p className="text-xl text-primary font-semibold">{experience.role}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {experience.duration.start} - {experience.duration.end}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{experience.description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {experience.achievements.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary mt-1">★</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
