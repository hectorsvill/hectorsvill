import { ProjectType } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card 
      className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-testid={`card-project-${project.id}`}
    >
      <CardHeader className="space-y-0 pb-4">
        <CardTitle className="text-xl md:text-2xl font-bold" data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                data-testid={`badge-technology-${project.id}-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
          data-testid={`button-view-project-${project.id}`}
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
}
