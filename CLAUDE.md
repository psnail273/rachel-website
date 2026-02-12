# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config, no args needed)
- `npm run format` — Prettier (formats entire project)

No test framework is configured.

## Architecture

Next.js 16 App Router site for Rachel Siegel, MSW — a therapist for high achievers and performing artists. React 19, TypeScript, Tailwind v4, shadcn/ui (new-york style).

### Tailwind v4 (CSS-first config)

All theme configuration lives in `app/globals.css` using `@theme inline` — there is no `tailwind.config.ts`. Brand colors are defined as CSS custom properties in `:root`, then mapped to Tailwind utilities inside `@theme inline`. Stick to standard Tailwind spacing scale (no arbitrary values like `mt-18`).

### Brand Colors

- Purple `#4a2060` — primary (CTAs, headings) → `brand-purple`
- Blue `#2c5282` — secondary (links, accents) → `brand-blue`
- Teal `#1a535c` — nature accent → `brand-teal`

Each has `-light` and `-dark` variants. Semantic tokens (`--primary`, `--secondary`, `--accent`) map to these for shadcn/ui compatibility.

### Fonts

- **Lora** (serif) for headings (`font-heading`) — applied globally to h1-h3 in `globals.css`
- **Geist Sans** for body (`font-sans`) — loaded via `next/font/google` in root layout

### Key Patterns

- **Navigation config** is centralized in `lib/navigation.ts` — single source of truth for all nav items
- **Contact page** is `"use client"` — its metadata is exported from a separate `app/contact/layout.tsx` (required because client components can't export metadata)
- **Contact API** (`app/api/contact/route.ts`) — validates and console-logs submissions; structured for future Resend integration
- **Decorative SVGs** — reusable leaf motif component in `components/decorative/leaf-motif.tsx`
- **Path alias** `@/*` maps to project root

### shadcn/ui

Configured in `components.json`. Installed components live in `components/ui/`. When installing new shadcn components, verify that Radix imports use `@radix-ui/react-*` format (not bare `radix-ui`) — the CLI sometimes generates incorrect imports with Next.js 16.

### Prettier

Double quotes, semicolons, 2-space indent, trailing commas (es5), 80 char print width.
