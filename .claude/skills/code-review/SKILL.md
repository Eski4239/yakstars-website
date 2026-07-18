---
name: code-review
description: Use when the user asks to review code, review a PR, check a diff, or do a code review in this repo. Runs a structured review against this project's real conventions (data-source-of-truth rules, design tokens, motion/reduced-motion, lint gotchas), rates findings by severity, fixes them inline, and logs recurring mistakes to lessons.md so they aren't repeated.
---

# Yakstars code review

Structured review for this repo. Overrides generic code review for any "review this code / review my PR / check this diff" request made here.

## Workflow

1. **Read `.claude/skills/code-review/lessons.md` first.** Fold any recurring patterns listed there into what you look for this run.
2. **Get the diff.** Default to `git diff` (working tree) or `git diff main...HEAD` for a branch/PR; if the user names specific files or a PR, use those instead.
3. **Walk the diff and list findings** — each with file:line, severity, and a one-sentence explanation of the concrete failure (not just "this is bad practice").
4. **Fix every finding directly in the working tree** (don't just report — apply the fix), then re-check the diff make sense together.
5. **Update `lessons.md`** — append an entry only if a fix reveals a genuinely new recurring-pattern risk not already logged. Skip one-off typos.
6. **Summarize**: findings by severity, what was fixed, and whether anything new went into `lessons.md`.

## Severity levels

- **Critical** — breaks the build/lint, fabricates or corrupts team facts (invented pilot/sponsor/event/stat), or ships a real bug (crash, wrong data shown).
- **High** — violates a hard repo rule with real user-facing or maintainability impact (hardcoded team facts in a component instead of `src/data/`, animation bypassing reduced-motion handling, ad-hoc colors instead of design tokens).
- **Medium** — correctness/accessibility/security concerns that don't break things today but are latent risks (missing edge-case handling, weak a11y semantics, minor OWASP-style issues).
- **Low** — style/lint nits (raw apostrophe in JSX, sync `setState` in an effect, formatting).

## Standards checklist (from AGENTS.md / CLAUDE.md)

Content/data:
- No team facts hardcoded inside components — must live in `src/data/` (`team.ts`, `aircraft.ts`, `display.ts`, `events.ts`, `site.ts`) and be read from there.
- No invented pilots, sponsors, events, quotes, or statistics — everything must be real and verifiable.

Design system:
- Colors/type/spacing must use existing tokens from `src/app/globals.css` `@theme` — no ad-hoc hex, except the two documented exceptions (`src/app/opengraph-image.tsx`, `src/components/art/SkyPoster.tsx`), and even those must match the current palette.
- Navy/red/yellow/silver used as accents, not large fills — flag anything that turns them into dominant backgrounds contrary to the "stripe not solid fill" intent.

Motion & accessibility:
- All animation goes through `src/components/motion.tsx` primitives (`Reveal`, `Stagger`, `Counter`, `Parallax`, `DrawPath`) — flag raw/ad-hoc Framer Motion usage.
- Reduced-motion (`useReducedMotion`) must be respected by any new animation.
- WCAG AA contrast, keyboard navigation, semantic landmarks expected to be maintained — flag regressions.

Lint gotchas specific to this repo:
- No raw apostrophes in JSX text — must use `’`.
- No synchronous `setState` inside `useEffect` — wrap in `requestAnimationFrame` or move to render.

Build sanity:
- Would `npm run build` or `npm run lint` actually catch this? If yes, treat as at least Medium since it'll block CI/deploy.

Generic layer (secondary, after the above):
- Standard correctness bugs, edge cases, and OWASP-top-10-style security issues (XSS, injection, etc.) even though this is a static site with limited attack surface.

## Notes

- This is a fully static Next.js site — there's no backend/DB, so most "security" findings will be about safe rendering of user-supplied content (e.g. `ContactForm.tsx`) rather than server-side concerns.
- Don't invent violations — if a diff is clean against this checklist, say so plainly rather than manufacturing Low-severity nits.
