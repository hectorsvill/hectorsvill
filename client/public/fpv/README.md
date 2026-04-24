# FPV media

Drop build photos and flight clips here. Files in this folder are served
from the site root, so `/fpv/myclip.mp4` points at `fpv/myclip.mp4`.

## Supported

- **Images:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- **Videos:** `.mp4`, `.webm`, `.mov` (the grid auto-detects by extension
  and shows a muted preview; the lightbox plays with controls)

## After adding files

Open `client/src/components/Fpv.tsx` and add entries to the `media`
array:

```ts
const media: FpvMedia[] = [
  { src: '/fpv/5in-freestyle.jpg', alt: '5-inch freestyle build' },
  { src: '/fpv/park-session.mp4', alt: 'Park session reel', caption: 'July 2024' },
];
```

See `hectorsvill.wiki/Maintenance.md` for the full step-by-step.

## Recommended sizes

- Photos: export ≤ 2000px on the long edge, JPG quality ~85 (≤ 500KB)
- Videos: encode at 1080p, H.264 MP4 or WebM. Keep individual clips
  under ~10MB — longer reels belong on YouTube.
