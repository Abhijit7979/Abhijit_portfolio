import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { SkillCard } from '@/components/cards/SkillCard';
import { skillCategories } from '@/data/skills';

export const SkillsSection = () => {
  return (
    <SectionContainer id="skills" className="bg-muted/30">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-12" />

          <StaggerContainer className="grid gap-6 md:grid-cols-2 w-full max-w-6xl">
            {skillCategories.map((category, index) => (
              <StaggerItem key={index}>
                <SkillCard skillCategory={category} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
