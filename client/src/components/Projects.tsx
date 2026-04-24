import { ProjectType } from '@shared/schema';
import { ProjectCard } from './ProjectCard';
import { SectionReveal } from './SectionReveal';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'tasksql 🫠',
    description:
      'Lightweight SQLite wrapper for managing tasks in a database. Includes helpers for creating tables, inserting, updating, deleting, and retrieving task data.',
    technologies: ['Go', 'SQL'],
    url: 'https://github.com/hectorsvill/tasksql',
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="snap-section min-h-screen flex items-center px-4 sm:px-6 py-20 md:py-24 bg-background"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionReveal>
          <div className="mb-8 md:mb-12 max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-primary mb-2">
              work
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              data-testid="text-projects-heading"
            >
              Featured projects
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">
              A small, growing list — more on the way.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
