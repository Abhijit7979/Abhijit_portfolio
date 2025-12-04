'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="default" className="gap-1">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </Badge>
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-xl flex items-start justify-between gap-2">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>

          {project.highlights.length > 0 && (
            <ul className="space-y-1 text-sm text-muted-foreground">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-3 pt-4">
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild variant="default" size="sm" className="gap-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
