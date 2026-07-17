<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Yakstars website — agent notes

Next.js 16 App Router + TypeScript + Tailwind v4 + Framer Motion. Fully static
(`npm run build` prerenders every route). Node lives at `/opt/homebrew/bin` —
export `PATH="/opt/homebrew/bin:$PATH"` before npm/npx commands.

Rules of the road:

- **Content lives in `src/data/`** (team, aircraft, display, events, site).
  Never hardcode team facts inside components; edit or extend the data files.
  Facts must stay faithful to the real team — do not invent pilots, sponsors,
  events, quotes, or statistics.
- Design tokens are in `src/app/globals.css` under `@theme` (ink/slate/mist/
  line/blue/red/gold + `text-display-*`, `container-x` utilities). Use them
  instead of ad-hoc colors.
- Motion goes through the primitives in `src/components/motion.tsx`; all new
  animation must respect `useReducedMotion`.
- Tailwind v4: utilities are defined with `@utility`, theme with `@theme` —
  there is no `tailwind.config`.
- Lint gotchas enforced here: no raw apostrophes in JSX text (use ’), no
  synchronous `setState` inside effects (wrap in `requestAnimationFrame` or
  adjust state during render).
- The gallery intentionally uses branded SVG posters (`SkyPoster`) until real
  photography is added — see README "Photography".
