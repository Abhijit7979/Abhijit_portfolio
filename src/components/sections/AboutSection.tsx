import { Card, CardContent } from '@/components/ui/card';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { personalInfo } from '@/data/portfolio';

export const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <FadeInView>
        <div className="flex flex-col items-center">
          <SectionHeading
            label="About"
            title="About Me"
          />
          <div className="w-full max-w-4xl">
            <Card className="border border-border/80 bg-card/50 shadow-lg shadow-black/10">
              <CardContent className="p-8 md:p-10">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {personalInfo.bio}
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/90">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/90">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/90">
                      Location
                    </span>
                    <span className="text-muted-foreground">{personalInfo.location}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/90">
                      Education
                    </span>
                    <span className="text-muted-foreground">B.Tech AI, Mahindra University</span>
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
