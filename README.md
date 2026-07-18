# Yakstars — Official Website

The next-generation website for the **Yakstars Display Team**: a Spanish–Portuguese
formation aerobatic team flying six Yak-52 warbirds, the largest civilian aerobatic
display team in Southern Europe.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.
Every page is statically prerendered.

## Development

```bash
npm install
npm run dev     # http://localhost:3000 (port busy? use: npx next dev -p 3001)
npm run build   # production build (fully static)
npm run start   # serve the production build
npm run lint
```

There is no test suite configured in this repo — rely on `npm run build` and `npm run lint` to catch regressions.

## Git workflow

This repo has a GitHub remote (`origin`). Commit at logical checkpoints, write descriptive messages (see `git log --oneline` for style), and push to `origin/main` regularly rather than batching up unpushed commits.

## Architecture

| Path | Purpose |
| --- | --- |
| `src/data/` | **All site content** — team, aircraft, display sequence, events, site config (`team.ts`, `aircraft.ts`, `display.ts`, `events.ts`, `site.ts`). Edit these files to update the site; no component changes needed. |
| `src/components/motion.tsx` | Motion primitives: `Reveal`, `Stagger`, `StaggerItem`, `Counter`, `Parallax`, `DrawPath`. All respect `prefers-reduced-motion`. |
| `src/components/ui.tsx` | Design system: `Button`, `SectionHeading`, `Eyebrow`, `PageHero`. |
| `src/components/art/` | SVG artwork: plane silhouette, formation diagrams, hero flight paths, gallery posters. |
| `src/components/Nav.tsx`, `Footer.tsx`, `Logo.tsx`, `JsonLd.tsx` | Site chrome and Schema.org structured data, shared across all routes. |
| `src/app/` | Routes: home, about, team (+ pilots/[slug], support), aircraft, display, schedule, gallery, sponsors, media, contact, privacy, legal, 404. |

### Lint gotchas

- No raw apostrophes in JSX text — use `’`.
- No synchronous `setState` inside effects — wrap in `requestAnimationFrame` or adjust state during render.

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

**Note:** `src/app/opengraph-image.tsx` and `src/components/art/SkyPoster.tsx`
hand-code the brand palette as hex (they run outside CSS, so they can't read
the `@theme` tokens) — if the palette in `globals.css` ever changes, update
these two files manually to match.

## SEO & accessibility

Per-page metadata, OpenGraph + Twitter cards, a generated OG image
(`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, and Schema.org
JSON-LD (PerformingGroup + Event list). WCAG AA contrast, keyboard-navigable
menus/lightbox, skip-link, semantic landmarks, and full reduced-motion support.

All factual content (pilot biographies, aircraft specifications, display
sequence, events) must be sourced from the team and verified before
publishing — never invent or embellish pilots, sponsors, events, quotes, or
statistics.
