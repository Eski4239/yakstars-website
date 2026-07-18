# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
Everything tool-agnostic (architecture, conventions, git workflow) lives in AGENTS.md, imported below.
Claude-Code-specific notes that don't belong in that tool-agnostic file live here instead.

@AGENTS.md

## Claude Code specifics

- A project-local `code-review` skill lives at `.claude/skills/code-review/SKILL.md` — it runs a
  structured review against this repo's real conventions (data source-of-truth, design tokens,
  motion/reduced-motion, lint gotchas) and takes priority over the generic global code-review skill.
  It logs recurring mistakes to `.claude/skills/code-review/lessons.md`; read that file first on every review.
- No other project-local agents or hooks are configured in `.claude/` beyond the skill above.
