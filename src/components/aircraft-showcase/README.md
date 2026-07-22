# Aircraft Showcase

Structure-only scaffold for a premium aircraft showcase (automotive/motorsport-site style):
`Hero → Airframe → Engine → Cockpit → Specifications → CTA`, each an alternating
sticky-image + content row. **No animation library is wired up.** This is deliberately
just architecture, typing, layout, and content wiring — see "What's left" below.

## Folder structure

```
src/components/aircraft-showcase/
  types.ts            Strongly typed contracts (CameraView, Specification, SectionContent, AircraftSection)
  constants.ts         All copy, ids, and image filenames — nothing hardcoded in components
  Hero.tsx              Opening section + the shared <AircraftImage> primitive
  Airframe.tsx           Alternating row #1 (image left)
  Engine.tsx              Alternating row #2 (image right, bg-mist band)
  Cockpit.tsx              Alternating row #3 (image left)
  Specifications.tsx        Full spec grid + the shared <SpecificationItem> primitive
  CTA.tsx                     Closing call-to-action band
  AircraftShowcase.tsx          Orchestrator — renders all six sections in order
  index.ts                       Barrel export
  README.md                       This file
```

## Component hierarchy

```
<AircraftShowcase>
  <Hero>                    exports <AircraftImage> (shared by every image section)
  <Airframe>                 uses <AircraftImage sticky>, <SpecificationItem>
  <Engine>                    uses <AircraftImage sticky>, <SpecificationItem>
  <Cockpit>                    uses <AircraftImage sticky>, <SpecificationItem>
  <Specifications>               exports <SpecificationItem> (shared by Airframe/Engine/Cockpit), uses <AircraftImage>
  <CTA>                            no image
```

`AircraftImage` (defined in `Hero.tsx`) and `SpecificationItem` (defined in
`Specifications.tsx`) are the two shared internal primitives — every other
section imports them rather than re-implementing the image container or spec
tile markup.

## Where Blender renders go

Drop the five exported stills at:

```
public/aircraft-showcase/hero.webp
public/aircraft-showcase/airframe.webp
public/aircraft-showcase/engine.webp
public/aircraft-showcase/cockpit.webp
public/aircraft-showcase/specifications.webp
```

No placeholder files exist yet — `next/image` will 404 harmlessly until these
land. This matches the rest of the codebase's convention of documenting an
expected `public/` path before the asset exists (see `src/data/events.ts`'s
`public/events/{slug}.jpg` convention, or `src/data/aircraft.ts`'s `hookImage`
field).

## Where to change image paths

Everything image-related is driven by `constants.ts` — **never edit paths
inside a component**:

- `AIRCRAFT_SHOWCASE_IMAGE_PATH` — the base public path (change this if the
  folder ever moves).
- Each section's `CameraView.imageFilename` (`HERO_CAMERA`,
  `AIRFRAME_SECTION.camera`, `ENGINE_SECTION.camera`, `COCKPIT_SECTION.camera`,
  `SPECIFICATIONS_CAMERA`) — change the filename here to point at a different
  render, add new camera angles, etc.
- `CameraView.alt` — update alongside the render so alt text stays accurate.

## Where copy/specs come from

All headline/description/CTA copy lives in `constants.ts` as `SectionContent`
objects (`HERO_CONTENT`, `AIRFRAME_SECTION.content`, `ENGINE_SECTION.content`,
`COCKPIT_SECTION.content`, `SPECIFICATIONS_CONTENT`, `CTA_CONTENT`) and is
currently placeholder copy — replace it there, not in the `.tsx` files.
Spec values (`285 HP`, `270 km/h`, `+6G`, `2 Seats`, etc.) live in
`SPECIFICATIONS` and each section's `specifications` array — same rule.

## Where GSAP hooks will later be inserted

Nothing GSAP-related exists yet. When you're ready:

1. **Image pin/crossfade target** — the wrapper `<div>` rendered by
   `AircraftImage` in `Hero.tsx` (the element with `rounded-2xl bg-mist
   {aspectClassName}`). This is the sticky panel each section's render should
   crossfade/scale/pin against. It already carries `lg:sticky lg:top-24
   lg:self-start` when `sticky` is passed — GSAP's `pin: true` can either
   replace or work alongside that, your call at implementation time.
2. **ScrollTrigger anchors** — the outer `<section id={SECTION_IDS.x}>`
   element in each of `Hero.tsx`, `Airframe.tsx`, `Engine.tsx`, `Cockpit.tsx`,
   `Specifications.tsx` is the natural `trigger` element (stable `id` already
   present via `SECTION_IDS` in `constants.ts` for `start`/`end` math or
   `ScrollTrigger.create({ trigger: "#" + SECTION_IDS.airframe, ... })`).
3. **Sequencing** — `AircraftShowcase.tsx` is the single place that renders
   the six sections in order; a top-level GSAP timeline/ScrollTrigger batch
   set-up (e.g. inside a `"use client"` wrapper or a `useEffect` in that same
   file) would live there once introduced.

None of the above is implemented — this section only marks *where* it goes.

## What's left (deliberately not done here)

1. Render the five images in Blender.
2. Replace the placeholder filenames/paths in `constants.ts` if needed, and
   drop the actual files into `public/aircraft-showcase/`.
3. Add GSAP + ScrollTrigger at the hook points documented above.

Nothing else should be required — copy, types, spacing, responsive behavior,
and accessibility are already in place.
