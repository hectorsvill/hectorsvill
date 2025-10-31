import { ProjectType } from '@shared/schema';
import { ProjectCard } from './ProjectCard';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'tasksql 🫠',
    description:
      'The tasksql module provides a lightweight wrapper around SQLite for managing tasks in a database. It includes functionality for creating tables, inserting, updating, deleting, and retrieving task data.',
    technologies: ['Go', 'SQL'],
    url: "https://github.com/hectorsvill/tasksql"
  },
  
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-12 md:py-20 px-6 bg-background" data-testid="section-projects">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-description">
            Explore some of my recent work showcasing innovative solutions and creative problem-solving
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
