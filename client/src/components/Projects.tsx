import { ProjectType } from '@shared/schema';
import { ProjectCard } from './ProjectCard';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A fully responsive e-commerce website with shopping cart functionality, user authentication, and payment integration. Built with modern web technologies for optimal performance.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application featuring real-time updates, drag-and-drop interface, and team collaboration tools. Designed for productivity and ease of use.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Interactive weather dashboard displaying real-time weather data, forecasts, and beautiful visualizations. Integrates with multiple weather APIs for accurate information.',
    technologies: ['React', 'Chart.js', 'Weather API'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode support, and optimized performance for all devices.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-description">
            Explore some of my recent work showcasing innovative solutions and creative problem-solving
          </p>
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
