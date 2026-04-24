import { useState } from 'react';
import {
  Github,
  Youtube,
  Instagram,
  ExternalLink,
  FolderOpen,
  ImageIcon,
  Video,
} from 'lucide-react';
import { SectionReveal } from './SectionReveal';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useEffect } from 'react';

interface FpvMedia {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Drop files into client/public/fpv/ (jpg/png/mp4/webm) and list them here.
 * See hectorsvill.wiki/Maintenance for step-by-step instructions.
 */
const media: FpvMedia[] = [
  // { src: '/fpv/5in-build.jpg', alt: '5" freestyle build', caption: 'Summer 2024' },
  // { src: '/fpv/flight-reel.mp4', alt: 'Flight reel', caption: 'Park session' },
];

const links = [
  {
    title: 'Builds',
    subtitle: 'github.com/hectorsvill/stoiczfpv',
    href: 'https://github.com/hectorsvill/stoiczfpv',
    icon: Github,
    testid: 'link-fpv-builds',
  },
  {
    title: 'YouTube',
    subtitle: '@stoiczfpv',
    href: 'https://www.youtube.com/@stoiczfpv',
    icon: Youtube,
    testid: 'link-fpv-youtube',
  },
  {
    title: 'Instagram',
    subtitle: '@stoiczfpv',
    href: 'https://www.instagram.com/stoiczfpv/',
    icon: Instagram,
    testid: 'link-fpv-instagram',
  },
];

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

function EmptySlide({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-card">
      <div className="text-center px-6 py-10">
        <div className="mx-auto w-12 h-12 rounded-lg bg-muted text-muted-foreground flex items-center justify-center mb-4">
          <FolderOpen className="w-5 h-5" />
        </div>
        <div className="text-lg md:text-xl font-semibold text-foreground">
          {label}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{hint}</p>
      </div>
    </div>
  );
}

export function Fpv() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setActive(api.selectedScrollSnap());
    const onSelect = () => setActive(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const hasMedia = media.length > 0;
  const slides: FpvMedia[] = hasMedia
    ? media
    : [
        { src: '__empty_1', alt: 'Flight reel coming soon', caption: 'Check back soon' },
        { src: '__empty_2', alt: 'Build photos coming soon', caption: 'Check back soon' },
        { src: '__empty_3', alt: 'More footage coming soon', caption: 'Check back soon' },
      ];

  return (
    <section
      id="fpv"
      className="snap-section min-h-screen flex items-center px-4 sm:px-6 py-20 md:py-24 bg-background"
      data-testid="section-fpv"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionReveal>
          <div className="mb-8 md:mb-12 max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-primary mb-2">
              stoiczfpv
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              data-testid="text-fpv-heading"
            >
              FPV flight
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed">
              I build and fly FPV drones — mostly flying with{' '}
              <span className="text-foreground font-medium">DJI Goggles 3</span>.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: vertical link cards */}
          <div className="lg:col-span-5 space-y-3 md:space-y-4">
            {links.map((l, i) => (
              <SectionReveal key={l.href} delay={i * 0.06}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-testid={l.testid}
                >
                  <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover-elevate active-elevate-2">
                    <CardContent className="p-5 md:p-6 flex items-center gap-4">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <l.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <div className="font-semibold text-foreground">
                            {l.title}
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                        <div className="text-sm text-muted-foreground truncate">
                          {l.subtitle}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </SectionReveal>
            ))}
          </div>

          {/* RIGHT: carousel */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <Card className="overflow-hidden">
                <div className="flex items-center justify-between px-4 md:px-5 pt-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    {hasMedia ? (
                      <ImageIcon className="w-3.5 h-3.5" />
                    ) : (
                      <Video className="w-3.5 h-3.5" />
                    )}
                    {hasMedia ? 'Flight reel' : 'Flight reel — coming soon'}
                  </div>
                  <div
                    className="text-xs text-muted-foreground tabular-nums"
                    data-testid="carousel-count"
                  >
                    {count > 0 ? `${active + 1} / ${count}` : ''}
                  </div>
                </div>

                <CardContent className="p-4 md:p-5">
                  <Carousel
                    setApi={setApi}
                    opts={{ loop: true, align: 'start' }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-0">
                      {slides.map((s, i) => {
                        const isEmpty = s.src.startsWith('__empty_');
                        return (
                          <CarouselItem
                            key={`${s.src}-${i}`}
                            className="pl-0 basis-full"
                            data-testid={`carousel-slide-${i}`}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                !isEmpty && setLightboxIndex(i)
                              }
                              disabled={isEmpty}
                              className="group relative block w-full aspect-video overflow-hidden rounded-lg bg-card disabled:cursor-default"
                              aria-label={s.alt}
                            >
                              {isEmpty ? (
                                <EmptySlide
                                  label="Flight reel coming soon"
                                  hint="Swipe for more"
                                />
                              ) : isVideo(s.src) ? (
                                <video
                                  src={s.src}
                                  muted
                                  loop
                                  playsInline
                                  preload="metadata"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <img
                                  src={s.src}
                                  alt={s.alt}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              )}
                            </button>
                            {s.caption && (
                              <div className="mt-3 text-xs md:text-sm text-muted-foreground text-center">
                                {s.caption}
                              </div>
                            )}
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    <CarouselPrevious
                      className="hidden md:flex left-2"
                      data-testid="button-carousel-prev"
                    />
                    <CarouselNext
                      className="hidden md:flex right-2"
                      data-testid="button-carousel-next"
                    />
                  </Carousel>

                  {/* Dot indicators — always visible */}
                  {count > 1 && (
                    <div
                      className="mt-4 flex justify-center items-center gap-1.5"
                      data-testid="carousel-dots"
                    >
                      {Array.from({ length: count }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => api?.scrollTo(i)}
                          aria-label={`Go to slide ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === active
                              ? 'w-6 bg-foreground'
                              : 'w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Lightbox for real media */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(o) => !o && setLightboxIndex(null)}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background/95 backdrop-blur">
          <DialogTitle className="sr-only">FPV media viewer</DialogTitle>
          {lightboxIndex !== null && media[lightboxIndex] && (
            <div className="relative">
              {isVideo(media[lightboxIndex].src) ? (
                <video
                  src={media[lightboxIndex].src}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] bg-black"
                />
              ) : (
                <img
                  src={media[lightboxIndex].src}
                  alt={media[lightboxIndex].alt}
                  className="w-full max-h-[85vh] object-contain bg-black"
                />
              )}
              {media[lightboxIndex].caption && (
                <p className="px-4 py-3 text-center text-sm text-muted-foreground">
                  {media[lightboxIndex].caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
