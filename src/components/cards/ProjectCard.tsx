'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { Badge } from '@/components/ui/badge';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const Step = ({ index, title }: { index: number; title: string }) => (
  <li className="flex gap-2 items-start">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-semibold mt-0.5">
      {index}
    </span>
    <p className="text-foreground">{title}</p>
  </li>
);

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full"
    >
      <CardSpotlight className="relative h-full min-h-[320px] flex flex-col">
        <p className="text-xl font-bold relative z-20 mt-2 text-foreground">
          {project.title}
        </p>
        <p className="text-muted-foreground mt-2 relative z-20 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3 relative z-20">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-medium bg-primary/20 text-primary border-0"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
        {project.highlights.length > 0 && (
          <ul className="list-none mt-3 relative z-20 space-y-1">
            {project.highlights.map((highlight, index) => (
              <Step key={index} index={index + 1} title={highlight} />
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-3 mt-4 pt-2 items-center relative z-20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/code inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/80 px-3.5 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_14px_-2px_hsl(var(--primary)/0.22)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-200 group-hover/code:text-primary" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <MovingBorderButton
              as="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="1.25rem"
              containerClassName="!h-auto min-w-[100px]"
              className="gap-2 px-4 py-2 text-sm font-medium bg-primary/90 text-primary-foreground border-primary/80 hover:bg-primary"
            >
              <ExternalLink className="h-4 w-4 shrink-0" />
              Demo
            </MovingBorderButton>
          )}
        </div>
      </CardSpotlight>
    </motion.div>
  );
};
