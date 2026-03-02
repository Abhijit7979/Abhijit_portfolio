'use client';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" className="pt-0 md:pt-2">
      <FadeInView>
        <div className="flex flex-col items-center">
          <SectionHeading
            label="Work"
            title="Projects"
            description="A showcase of my work in AI/ML, data science, and software development"
          />
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
