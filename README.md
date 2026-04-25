# IntegrateWise — Marketing Site

The marketing site for [integratewise.ai](https://integratewise.ai) — built with Next.js 16, Tailwind CSS v4, and deployed to Firebase Hosting.

## Stack

- **Framework**: Next.js 16 (static export)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: Firebase Hosting (`integratewise-4a649`)
- **Package manager**: pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:5000`

## Build & Deploy

```bash
# Build static export
pnpm build

# Deploy to Firebase Hosting
pnpm deploy
```

## Design System

- **Background**: `#0a0a0a`
- **Cards**: `#111111` / `#1a1a1a`
- **Accent**: `#ffb22c` (amber/gold)
- **Font**: Inter
- **Border**: `rgba(255,255,255,0.10)`

## Redirects

- `/docs` -> https://docs.integratewise.ai
- `/changelog` -> https://changelog.integratewise.ai
