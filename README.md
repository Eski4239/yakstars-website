# Yakstars — Official Website

The next-generation website for the **Yakstars Display Team**: a Spanish–Portuguese
formation aerobatic team flying six Yak-52 warbirds, the largest civilian aerobatic
display team in Southern Europe.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.
Every page is statically prerendered.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
npm run lint
```

## Architecture

| Path | Purpose |
| --- | --- |
| `src/data/` | **All site content** — team, aircraft, display sequence, events, site config. Edit these files to update the site; no component changes needed. |
| `src/components/motion.tsx` | Motion primitives: `Reveal`, `Stagger`, `Counter`, `Parallax`, `DrawPath`. All respect `prefers-reduced-motion`. |
| `src/components/ui.tsx` | Design system: `Button`, `SectionHeading`, `Eyebrow`, `PageHero`. |
| `src/components/art/` | SVG artwork: plane silhouette, formation diagrams, hero flight paths, gallery posters. |
| `src/app/` | Routes: home, about, team (+ pilots/[slug], support), aircraft, display, schedule, gallery, sponsors, media, contact, privacy, legal, 404. |

Design tokens (colors, type scale, container) live in `src/app/globals.css`
under `@theme`. The palette is sourced directly from the team's real trailer
livery (RAL 5011/9006/3020/1021/9016): pure white base, navy blue `#0b1e37`,
racing red `#b9120e`, racing yellow `#fdb402`, and silver grey `#a1a1a2` as a
secondary neutral. Navy/red/yellow are used as accents (nav, buttons, the
star mark, stripes) rather than large fills, to keep the site feeling airy.

## Common edits

- **Add an event:** append to `src/data/events.ts`. Upcoming/past status is
  computed automatically from `endDate`.
- **Add or edit a pilot:** edit `src/data/team.ts`. Pilot pages are generated
  from the `pilots` array (slug → `/team/pilots/[slug]`).
- **Update the display sequence:** edit `src/data/display.ts` (the interactive
  sequence explorer and formation diagrams read from it).

## Photography

The gallery and preview tiles currently render branded SVG artwork
(`src/components/art/SkyPoster.tsx`) as intentional placeholders. To switch to
real photography: put images in `public/gallery/`, replace `SkyPoster` usages
with `next/image`, and update the `ITEMS` list in `src/app/gallery/page.tsx`
(titles/captions are already structured for it).

## SEO & accessibility

Per-page metadata, OpenGraph + Twitter cards, a generated OG image
(`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, and Schema.org
JSON-LD (PerformingGroup + Event list). WCAG AA contrast, keyboard-navigable
menus/lightbox, skip-link, semantic landmarks, and full reduced-motion support.

All factual content (pilot biographies, aircraft specifications, display
sequence, events) is sourced from the team's existing site and rewritten;
verify facts with the team before publishing changes.
