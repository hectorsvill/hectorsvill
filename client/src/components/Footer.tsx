import { Github, Linkedin, Mail, Youtube, Instagram, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EMAIL = 'hectorsvill@outlook.com';

const cols = [
  {
    heading: 'Links',
    items: [
      { label: 'Home', href: '#top' },
      { label: 'Projects', href: '#projects' },
      { label: 'FPV', href: '#fpv' },
    ],
  },
  {
    heading: 'Online',
    items: [
      { label: 'GitHub', href: 'https://github.com/hectorsvill', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/hector-steven-villasano', external: true },
    ],
  },
  {
    heading: 'stoiczfpv',
    items: [
      { label: 'Builds', href: 'https://github.com/hectorsvill/stoiczfpv', external: true },
      { label: 'YouTube', href: 'https://www.youtube.com/@stoiczfpv', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/stoiczfpv/', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="snap-section min-h-screen flex flex-col justify-center border-t border-border bg-background"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Contact CTA */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-wider text-primary mb-1">
              contact
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              data-testid="text-contact-heading"
            >
              Get in touch
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Have something to build, a role to fill, or just want to say hi?
              Email is fastest.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button asChild data-testid="button-footer-email">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="truncate">{EMAIL}</span>
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-footer-resume">
                <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Résumé
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-4" data-testid="container-footer-socials">
              <a
                href="https://github.com/hectorsvill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md hover-elevate text-muted-foreground hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/hector-steven-villasano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md hover-elevate text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@stoiczfpv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube — stoiczfpv"
                className="p-2 rounded-md hover-elevate text-muted-foreground hover:text-foreground"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/stoiczfpv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — stoiczfpv"
                className="p-2 rounded-md hover-elevate text-muted-foreground hover:text-foreground"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.heading}>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  {col.heading}
                </div>
                <ul className="space-y-2">
                  {col.items.map((i) => (
                    <li key={i.label}>
                      <a
                        href={i.href}
                        {...('external' in i && i.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {i.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
          <div>&copy; {new Date().getFullYear()} Hector Steven Villasano</div>
          <div>Sterling, VA · Built with React · Tailwind · shadcn/ui</div>
        </div>
      </div>
    </footer>
  );
}
