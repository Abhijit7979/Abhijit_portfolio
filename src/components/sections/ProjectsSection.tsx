'use client';

import { useState } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

type CategoryType = 'all' | 'AI/ML' | 'Web' | 'Data';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories: CategoryType[] = ['all', 'AI/ML', 'Web', 'Data'];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <SectionContainer id="projects">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
          <p className="text-center text-muted-foreground max-w-2xl mb-12">
            A showcase of my work in AI/ML, data science, and software development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                size="sm"
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">
              No projects found in this category.
            </p>
          )}
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
