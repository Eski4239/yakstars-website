<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Yakstars website — agent notes

The Yakstars Display Team's website — a Spanish–Portuguese formation aerobatic team flying six Yak-52 warbirds. Next.js 16 App Router + TypeScript + Tailwind v4 + Framer Motion. Fully static (`npm run build` prerenders every route). Node lives at `/opt/homebrew/bin` — export `PATH="/opt/homebrew/bin:$PATH"` before npm/npx commands.

## Tech Stack

Next.js + TypeScript. Website projects use Next.js with TypeScript; verify builds and routes before committing.

## Local Development

Dev server: check if port 3000 is free before starting (e.g. `lsof -i :3000`); use an alternate port with `next dev -p 3001` if occupied.

## Working With Assets

Images/assets: the chat interface may not pass through attachments. When an image is referenced, ask the user for a file path in the workspace instead of waiting for an attachment.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — fully static, prerenders every route
npm run start   # serve the production build
npm run lint    # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite/framework configured in this repo.

## Git workflow

This repo has a GitHub remote (`origin`) — treat it as the durable record of progress, not just local history.

- Commit at logical checkpoints as you work (e.g. after finishing a discrete change), not just at the very end of a session — don't let work sit uncommitted for long stretches.
- Write clean, descriptive commit messages: summarize what changed and why, following the style of existing commits (`git log --oneline` to check).
- Push to `origin/main` after committing, so work is never only sitting on disk. Don't batch up many commits unpushed.
- Still follow standard git safety practice: confirm with the user before force-pushing, resetting, or any other history-rewriting/destructive operation.

## Architecture

- **`src/data/` is the single source of truth for all site content** — team, aircraft, display sequence, events, site config (`team.ts`, `aircraft.ts`, `display.ts`, `events.ts`, `site.ts`). Pages and components read from these files; **never hardcode team facts inside components** — edit or extend the data files instead. Facts must stay faithful to the real team — do not invent pilots, sponsors, events, quotes, or statistics.
  - Adding an event: append to `events.ts` — upcoming/past status is computed automatically from `endDate`.
  - Adding/editing a pilot: edit the `pilots` array in `team.ts` — pilot detail pages are generated from it via `/team/pilots/[slug]`.
  - The display-sequence explorer and formation diagrams read from `display.ts`.
- **`src/app/`** — App Router routes: home, about, team (+ `team/pilots/[slug]`, `team/support`), aircraft, display, schedule, gallery, sponsors, media, contact, privacy, legal, 404, plus generated `sitemap.xml`, `robots.txt`, and an `opengraph-image.tsx` (OG image; note it hand-codes brand colors as hex since `next/og`'s `ImageResponse`/Satori doesn't support CSS custom properties — keep these in sync manually with `globals.css` if the palette changes).
- **`src/components/motion.tsx`** — motion primitives (`Reveal`, `Stagger`, `Counter`, `Parallax`, `DrawPath`). All new animation must go through these and respect `useReducedMotion` (no ad-hoc Framer Motion usage that skips reduced-motion handling).
- **`src/components/ui.tsx`** — design system primitives (`Button`, `SectionHeading`, `Eyebrow`, `PageHero`).
- **`src/components/art/`** — SVG artwork: plane silhouette, formation diagrams, hero flight paths, and `SkyPoster.tsx` (branded gallery placeholder art, used until real show photography is added — see "Photography" below).
- Per-page interactive widgets live alongside their route's concern, e.g. `components/aircraft/AircraftExplorer.tsx`, `components/display/SequenceExplorer.tsx`, `components/gallery/GalleryGrid.tsx`, `components/schedule/ScheduleList.tsx`, `components/contact/ContactForm.tsx`, `components/home/FormationCycler.tsx`.

### Design tokens

Colors, type scale, and container width live in `src/app/globals.css` under `@theme` (Tailwind v4 — utilities are defined with `@utility`, theme values with `@theme`; **there is no `tailwind.config`**). Always use the existing tokens instead of ad-hoc colors/hex.

The palette is sourced from the team's real trailer livery (RAL 5011/9006/3020/1021/9016): pure white base, navy blue `--color-blue` (`#0b1e37`), racing red `--color-red` (`#b9120e`), racing yellow `--color-gold` (`#fdb402`), silver grey `--color-silver` (`#a1a1a2`) as a secondary neutral, plus neutral text/surface tokens (`ink`, `slate`, `faint`, `mist`, `line`, `sky`). Navy/red/yellow are meant to read as **accents** (nav, buttons, the star mark, stripes, underlines) rather than large fills — keep the overall page feel light/airy (white base, generous whitespace), matching how the colors appear as a stripe rather than a solid fill on the real trailer.

A few files hand-code hex instead of using theme tokens (because they run outside CSS — `next/og` image generation, inline SVG color arrays) and must be updated manually if the palette changes: `src/app/opengraph-image.tsx`, `src/components/art/SkyPoster.tsx`. Everything else consumes the tokens via Tailwind classes (`bg-blue`, `text-red`, `border-line`, etc.) or `var(--color-*)` and updates automatically from `globals.css`.

### Lint gotchas enforced here

- No raw apostrophes in JSX text — use `’`.
- No synchronous `setState` inside effects — wrap in `requestAnimationFrame` or adjust state during render.

### Photography

The gallery and preview tiles currently render branded SVG artwork (`SkyPoster.tsx`) as intentional placeholders, not real photos. To switch to real photography: put images in `public/gallery/`, replace `SkyPoster` usages with `next/image`, and update the `ITEMS` list in `src/app/gallery/page.tsx` (titles/captions are already structured for it).

### SEO & accessibility

Per-page metadata, OpenGraph + Twitter cards, a generated OG image (`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, and Schema.org JSON-LD (PerformingGroup + Event list, via `src/components/JsonLd.tsx`). WCAG AA contrast, keyboard-navigable menus/lightbox, skip-link, semantic landmarks, and full reduced-motion support are expected to be maintained.

All factual content (pilot biographies, aircraft specifications, display sequence, events) should be sourced from the team and verified before publishing — do not invent or embellish facts.
