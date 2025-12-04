import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Award, Calendar } from 'lucide-react';
import { achievements } from '@/data/achievements';

export const AchievementsSection = () => {
  return (
    <SectionContainer id="achievements">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Achievements & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />

          <StaggerContainer className="grid gap-6 md:grid-cols-2 w-full max-w-5xl">
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.id}>
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-2">
                          <span className="font-semibold text-primary">{achievement.issuer}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {achievement.date}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {achievement.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
