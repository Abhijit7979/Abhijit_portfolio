import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { experiences } from '@/data/experience';

export const ExperienceSection = () => {
  return (
    <SectionContainer id="experience" className="bg-muted/30">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />

          <div className="w-full max-w-4xl space-y-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
