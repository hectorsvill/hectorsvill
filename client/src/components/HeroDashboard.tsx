import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const GITHUB_USER = 'hectorsvill';
const RESUME_URL = '/resume.pdf';
const EMAIL = 'hectorsvill@outlook.com';
const LOCATION = 'Sterling, VA';
const CURRENT_ROLE = 'Software Integration Engineer @ Grabba';

const SKILLS = [
  'Go',
  'Python',
  'Java',
  'Kotlin',
  'Swift',
  'Objective-C',
  'React Native',
  'Flutter',
  'Docker',
  'Caddy',
  'Ollama',
];

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

function yearsSince(iso: string) {
  const then = new Date(iso).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((now - then) / (365.25 * 24 * 3600 * 1000)));
}

function Tile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <Card className="h-full" data-testid={`tile-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-3 md:p-4">
        <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-xl md:text-2xl font-bold tabular-nums text-foreground">
          {value}
        </div>
        {hint && (
          <div className="mt-0.5 text-[10px] md:text-xs text-muted-foreground truncate">
            {hint}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function HeroDashboard() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d) setUser(d);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const theme = mounted ? resolvedTheme ?? 'dark' : 'dark';
  const langsUrl =
    `https://github-readme-stats.vercel.app/api/top-langs?username=${GITHUB_USER}` +
    `&layout=compact&hide_border=true&bg_color=00000000&card_width=400` +
    `&title_color=${theme === 'dark' ? 'ffffff' : '111111'}` +
    `&text_color=${theme === 'dark' ? 'cccccc' : '333333'}` +
    `&theme=${theme === 'dark' ? 'transparent' : 'default'}`;

  return (
    <section
      id="top"
      className="snap-section relative min-h-screen flex items-center px-4 sm:px-6 pt-20 pb-10"
      data-testid="section-hero"
    >
      <div className="hero-bg" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-start"
        >
          {/* LEFT: Identity + About */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <Card>
              <CardContent className="p-5 md:p-7">
                <div className="flex items-start gap-4 md:gap-6">
                  <Avatar
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-foreground/20 shadow-lg shrink-0"
                    data-testid="img-profile"
                  >
                    <AvatarImage
                      src={`https://avatars.githubusercontent.com/u/18249395?v=4`}
                      alt="Hector Steven Villasano avatar"
                    />
                    <AvatarFallback className="text-xl md:text-2xl font-bold">HV</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight"
                      data-testid="text-name"
                    >
                      Hector Steven Villasano
                    </h1>
                    <a
                      href={`https://github.com/${GITHUB_USER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid="link-handle"
                    >
                      @{GITHUB_USER}
                    </a>
                    <p
                      className="mt-2 text-sm md:text-base text-muted-foreground"
                      data-testid="text-tagline"
                    >
                      Software Integration Engineer &middot; FPV Pilot
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span data-testid="text-role">{CURRENT_ROLE}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span data-testid="text-location">{LOCATION}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-5 flex flex-wrap gap-2"
                  data-testid="container-cta"
                >
                  <Button asChild data-testid="button-resume">
                    <a href={RESUME_URL} download target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download résumé
                    </a>
                  </Button>
                  <Button variant="outline" asChild data-testid="button-email">
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild data-testid="link-github">
                    <a
                      href={`https://github.com/${GITHUB_USER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild data-testid="link-linkedin">
                    <a
                      href="https://linkedin.com/in/hector-steven-villasano"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* About — compact */}
            <Card>
              <CardContent className="p-5 md:p-7 space-y-4">
                <h2
                  className="text-base font-semibold text-foreground"
                  data-testid="text-about-heading"
                >
                  About
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Software Integration Engineer focused on mobile platforms,
                  SDK integration, and release readiness across Android and
                  iOS. Background in manual + automated testing for device
                  operating systems. Outside of work I build and fly FPV drones
                  under{' '}
                  <a
                    href="https://github.com/hectorsvill/stoiczfpv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    @stoiczfpv
                  </a>
                  .
                </p>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5" data-testid="container-skills">
                    {SKILLS.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md border border-border bg-card text-xs text-foreground"
                        data-testid={`skill-${s.toLowerCase().replace(/\W+/g, '-')}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Stats tiles + languages widget */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            <div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mb-2 md:mb-3 px-1">
                GitHub
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <Tile
                  label="Public repos"
                  value={user?.public_repos ?? '—'}
                  hint="open source"
                />
                <Tile
                  label="Followers"
                  value={user?.followers ?? '—'}
                  hint={`on @${GITHUB_USER}`}
                />
                <Tile label="Following" value={user?.following ?? '—'} />
                <Tile
                  label="On GitHub"
                  value={user ? `${yearsSince(user.created_at)} yrs` : '—'}
                  hint={user ? new Date(user.created_at).getFullYear().toString() : undefined}
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Top languages
                </div>
                <img
                  key={`langs-${theme}`}
                  src={langsUrl}
                  alt="Top languages"
                  className="w-full h-auto"
                  loading="lazy"
                  data-testid="img-github-langs"
                />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
