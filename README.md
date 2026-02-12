# Rachel Siegel, MSW -- Therapist & Coach

A professional website for Rachel Siegel, MSW -- a therapist and coach specializing in high achievers and performing artists. Built with Next.js, React, and Tailwind CSS.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Brand Guidelines](#brand-guidelines)
- [Key Architecture Decisions](#key-architecture-decisions)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [License & Credits](#license--credits)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.6 | App Router framework with Turbopack dev server |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | CSS-first utility framework (no `tailwind.config.ts`) |
| [shadcn/ui](https://ui.shadcn.com/) | new-york style | Accessible UI components (Button, Sheet, NavigationMenu, Input, Textarea, Label) |
| [Radix UI](https://www.radix-ui.com/) | 1.4.3 | Headless primitives powering shadcn/ui |
| [Lucide React](https://lucide.dev/) | 0.563.0 | Icon library |
| [class-variance-authority](https://cva.style/) | 0.7.1 | Component variant management |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.0.2 | Merge Tailwind classes without conflicts |

## Getting Started

### Prerequisites

- **Node.js** 20 or later (tested with v20.18.0)
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rachel-website

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server (uses Turbopack for fast refresh)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

## Project Structure

```
rachel-website/
├── app/                          # Next.js App Router pages & API
│   ├── layout.tsx                # Root layout (fonts, Header, Footer)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Tailwind v4 theme config & custom utilities
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── rates/
│   │   └── page.tsx              # Rates & insurance page
│   ├── contact/
│   │   ├── layout.tsx            # Contact metadata (separate from client page)
│   │   └── page.tsx              # Contact form ("use client")
│   └── api/
│       └── contact/
│           └── route.ts          # Contact form API endpoint
├── components/
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── sheet.tsx
│   │   └── textarea.tsx
│   ├── layout/                   # Site-wide layout components
│   │   ├── header.tsx            # Navigation header (desktop + mobile)
│   │   └── footer.tsx            # Site footer
│   └── decorative/               # Decorative SVG motif components
│       ├── leaf-motif.tsx        # Nature-themed SVGs (leaf, branch, fern, etc.)
│       └── instrument-motif.tsx  # Musical instrument SVGs (clarinet, etc.)
├── lib/
│   ├── navigation.ts             # Centralized navigation config
│   └── utils.ts                  # Utility functions (cn helper)
├── public/                       # Static assets
├── docs/                         # Project documentation & epics
├── components.json               # shadcn/ui configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS with Tailwind v4
├── eslint.config.mjs             # ESLint flat config (Next.js + TypeScript)
├── .prettierrc                   # Prettier formatting rules
└── CLAUDE.md                     # AI assistant guidance
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack (fast refresh) |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server (run `build` first) |
| `npm run lint` | Run ESLint with flat config (no additional arguments needed) |
| `npm run format` | Format all files with Prettier |

## Brand Guidelines

### Color Palette

| Color | Hex | Tailwind Token | Usage |
|-------|-----|----------------|-------|
| Purple | `#4a2060` | `brand-purple` | Primary -- CTAs, headings, key actions |
| Purple Light | `#6b3a8a` | `brand-purple-light` | Hover states, lighter accents |
| Purple Dark | `#361848` | `brand-purple-dark` | Active states, darker variants |
| Blue | `#2c5282` | `brand-blue` | Secondary -- links, supporting elements |
| Blue Light | `#4a7ab5` | `brand-blue-light` | Hover states, lighter accents |
| Blue Dark | `#1e3a5f` | `brand-blue-dark` | Active states, darker variants |
| Teal | `#1a535c` | `brand-teal` | Nature accent -- bullet dots, decorative elements |
| Teal Light | `#2d7a86` | `brand-teal-light` | Hover states, lighter accents |
| Teal Dark | `#0f3339` | `brand-teal-dark` | Active states, darker variants |

Usage in Tailwind classes: `text-brand-purple`, `bg-brand-teal`, `border-brand-blue`, etc.

### Typography

| Font | Type | Tailwind Class | Usage |
|------|------|----------------|-------|
| [Lora](https://fonts.google.com/specimen/Lora) | Serif | `font-heading` | Headings (h1, h2, h3) -- applied globally in `globals.css` |
| [Geist Sans](https://vercel.com/font) | Sans-serif | `font-sans` | Body text -- loaded via `next/font/google` in root layout |

### Design Principles

- **Calm and professional**: Muted purple/blue/teal palette evokes trust and tranquility
- **Nature-inspired**: Subtle decorative SVGs (leaves, ferns, branches) at low opacity
- **Musical heritage**: Instrument silhouettes (clarinet) honor Rachel's Marine Band background
- **Accessible**: Semantic HTML, proper heading hierarchy, ARIA attributes on decorative elements
- **Responsive**: Mobile-first design with responsive breakpoints (sm, md, lg)

## Key Architecture Decisions

### Tailwind v4 CSS-First Configuration

This project uses Tailwind CSS v4's CSS-first configuration approach. There is **no `tailwind.config.ts` file**. All theme configuration lives in `app/globals.css`:

- **`:root`** block defines CSS custom properties for brand colors and semantic tokens
- **`@theme inline`** block maps CSS variables to Tailwind utility classes
- **`@utility`** directives define custom single-purpose utilities (e.g., `section-spacing`, `bullet-dot`)
- **`@layer components`** defines multi-property component classes (e.g., `section-container-4xl`, `page-title`, `card`)

To add a new brand color, add the CSS variable in `:root` and map it in `@theme inline`:

```css
:root {
  --brand-gold: #b8860b;
}

@theme inline {
  --color-brand-gold: var(--brand-gold);
}
```

### Custom Utility Classes

Repeated Tailwind class patterns have been extracted into reusable utilities in `globals.css`:

| Utility | Replaces | Purpose |
|---------|----------|---------|
| `section-spacing` | `mt-16 sm:mt-20 lg:mt-24` | Responsive section top margin |
| `bullet-dot` | `mt-1.5 block h-1.5 w-1.5 ...` | Teal bullet marker |
| `section-container-4xl` | `mx-auto max-w-4xl px-4 py-16 ...` | Full-padding section container |
| `section-container-6xl` | `mx-auto max-w-6xl px-4 ...` | Horizontal-padding wide container |
| `section-container-3xl-center` | `mx-auto max-w-3xl text-center` | Centered narrow container |
| `page-title` | `text-4xl font-bold tracking-tight ...` | Page h1 heading style |
| `section-heading-3xl` | `text-3xl font-semibold ...` | Major section heading |
| `section-heading-2xl` | `text-2xl font-semibold ...` | Minor section heading |
| `body-text` | `text-base leading-relaxed text-neutral-600 ...` | Standard body paragraph |
| `body-text-dark` | `text-base leading-relaxed text-neutral-700 ...` | Darker body paragraph |
| `list-item-hover` | `flex items-center gap-2 ...` | Interactive list item with hover |
| `card` | `rounded-lg border ... hover:shadow-md` | Card with border and hover shadow |

### Centralized Navigation

All navigation items are defined in `lib/navigation.ts`. The Header, Footer, and mobile menu all read from this single source of truth. To add or reorder pages, edit only this file.

### Contact Page Metadata Pattern

The contact page (`app/contact/page.tsx`) uses `"use client"` for form interactivity. Since client components cannot export `metadata`, the page metadata is exported from a separate `app/contact/layout.tsx` file.

### Decorative SVG System

Reusable decorative components live in `components/decorative/`:

- **`leaf-motif.tsx`** -- Nature-themed SVGs with multiple variants (leaf, branch, fern, circle, wave, etc.)
- **`instrument-motif.tsx`** -- Musical instrument silhouettes (clarinet, French horn, etc.)

All decorative elements use `aria-hidden="true"`, `pointer-events-none`, and low opacity to remain subtle background accents.

### shadcn/ui Components

Components are installed via the shadcn CLI and live in `components/ui/`. Configuration is in `components.json` (new-york style, RSC mode, Lucide icons).

**Important**: When installing new shadcn components, verify that Radix imports use `@radix-ui/react-*` format (not bare `radix-ui`). The CLI sometimes generates incorrect imports with Next.js 16.

## Content Management

### Updating Page Content

Each page is a React Server Component (except Contact) in the `app/` directory:

- **Home**: `app/page.tsx`
- **About**: `app/about/page.tsx`
- **Services**: `app/services/page.tsx`
- **Rates**: `app/rates/page.tsx`
- **Contact**: `app/contact/page.tsx` (client component)

Edit the JSX directly in the relevant page file. Content is authored inline -- there is no CMS.

### Adding a Navigation Item

Edit `lib/navigation.ts` to add a new entry. All navigation components (header, footer, mobile menu) will update automatically:

```typescript
// lib/navigation.ts
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Rates", href: "/rates" },
  { label: "Contact", href: "/contact" },
  // Add new pages here:
  { label: "Blog", href: "/blog" },
];
```

### Adding a New Page

1. Create a new directory under `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file with a default export component
3. Export `metadata` from the page for SEO (title, description)
4. Add the route to `lib/navigation.ts` (see above)
5. Add the route to `app/sitemap.ts` for search engine indexing

```typescript
// app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rachel Siegel, MSW",
  description: "Articles and insights from Rachel Siegel, MSW.",
};

export default function BlogPage() {
  return (
    <section className="section-container-4xl">
      <h1 className="page-title">Blog</h1>
      {/* Page content */}
    </section>
  );
}
```

### Using Decorative Components

```tsx
import { LeafMotif } from "@/components/decorative/leaf-motif";
import { InstrumentMotif } from "@/components/decorative/instrument-motif";

// In your JSX (inside a relative-positioned parent):
<div className="relative">
  <LeafMotif variant="fern" className="absolute right-0 top-0 opacity-5" />
  <InstrumentMotif variant="clarinet" className="absolute left-0 bottom-0 opacity-5" />
  {/* Section content */}
</div>
```

## Deployment

This project is designed for deployment on [Vercel](https://vercel.com/), the platform built by the creators of Next.js.

### Deploy to Vercel

1. Push the repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel will auto-detect Next.js and configure the build settings
4. Click **Deploy**

No environment variables are required for the current configuration. If email integration is added in the future (e.g., Resend for the contact form), the API key will need to be added as an environment variable.

### Other Platforms

The site can also be deployed to any platform that supports Next.js:

- **Netlify**: Use the `@netlify/plugin-nextjs` adapter
- **Self-hosted**: Run `npm run build` then `npm run start` behind a reverse proxy

## License & Credits

### Libraries & Frameworks

- [Next.js](https://nextjs.org/) by Vercel -- MIT License
- [React](https://react.dev/) by Meta -- MIT License
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs -- MIT License
- [shadcn/ui](https://ui.shadcn.com/) by shadcn -- MIT License
- [Radix UI](https://www.radix-ui.com/) by WorkOS -- MIT License
- [Lucide](https://lucide.dev/) -- ISC License
- [Lora Font](https://fonts.google.com/specimen/Lora) by Cyreal -- SIL Open Font License
- [Geist Font](https://vercel.com/font) by Vercel -- SIL Open Font License
