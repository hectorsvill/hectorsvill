import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#fpv', label: 'FPV' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-background/70 border-b border-border'
          : 'bg-transparent'
      }`}
      data-testid="nav-header"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 h-16">
        <a
          href="#top"
          className="font-bold tracking-tight text-foreground"
          data-testid="link-nav-home"
        >
          @hectorsvill
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover-elevate transition-colors"
              data-testid={`link-nav-${l.label.toLowerCase()}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
