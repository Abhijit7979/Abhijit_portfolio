import { Card, CardContent } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { personalInfo } from '@/data/portfolio';

export const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {personalInfo.bio}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary mb-1">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary mb-1">
                      Location
                    </span>
                    <span className="text-muted-foreground">
                      {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary mb-1">
                      Education
                    </span>
                    <span className="text-muted-foreground">
                      B.Tech AI, Mahindra University
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
