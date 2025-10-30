import { SocialLink } from '@shared/schema';
import { Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Avatar className="w-40 h-40 md:w-52 md:h-52 border-2 border-foreground/20 shadow-xl" data-testid="img-profile">
            <AvatarImage 
              src="https://via.placeholder.com/200" 
              alt="Professional headshot portrait"
            />
            <AvatarFallback className="text-4xl md:text-5xl font-bold">YN</AvatarFallback>
          </Avatar>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight" data-testid="text-name">
              Your Name
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" data-testid="text-tagline">
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6" data-testid="container-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                className="group p-3 rounded-full transition-all duration-300 hover:scale-110 hover-elevate active-elevate-2"
                data-testid={`link-${link.icon}`}
              >
                {link.icon === 'github' ? (
                  <Github className="w-7 h-7 text-foreground transition-opacity duration-300 group-hover:opacity-80" />
                ) : (
                  <Linkedin className="w-7 h-7 text-foreground transition-opacity duration-300 group-hover:opacity-80" />
                )}
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#projects"
              className="inline-block text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Scroll to projects section"
              data-testid="link-scroll-projects"
            >
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
