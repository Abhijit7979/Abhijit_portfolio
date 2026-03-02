import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Award, Calendar } from 'lucide-react';
import { achievements } from '@/data/achievements';
import { LinkedInPostPreviewCard } from '@/components/cards/LinkedInPostPreviewCard';

export const AchievementsSection = () => {
  return (
    <SectionContainer id="achievements" className="pt-12 md:pt-20">
      <FadeInView>
        <div className="flex flex-col items-center">
          <SectionHeading
            label="Recognition"
            title="Achievements & Education"
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 w-full max-w-5xl" staggerDelay={0.08}>
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.id}>
                {achievement.credentialUrl && achievement.previewQuote ? (
                  <LinkedInPostPreviewCard achievement={achievement} />
                ) : (
                  <Card className="h-full border border-border/80 bg-card/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-primary">{achievement.issuer}</span>
                            <span className="text-muted-foreground">·</span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="h-3 w-3 shrink-0" />
                              {achievement.date}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    {achievement.description && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
