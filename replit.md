# IntegrateWise Marketing Site

A Next.js marketing website for IntegrateWise, migrated from Vercel/Firebase Hosting to Replit.

## Architecture

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + custom components
- **Animations**: Framer Motion
- **Analytics**: Firebase Analytics (client-side only, loaded lazily)
- **Package Manager**: pnpm

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — Shared React components
- `lib/` — Utility modules (Firebase config, etc.)
- `content/` — Static content/copy
- `public/` — Static assets

## Running the App

The app runs in development mode via the "Start application" workflow:

```
pnpm run dev
```

Runs on port 5000, bound to all hosts (`0.0.0.0`) for Replit compatibility.

## Environment Variables

See `.env.example` for available environment variables:

- `NEXT_PUBLIC_CONTACT_FORM_ACTION` — Optional contact form endpoint (Formspree, etc.)

## Migration Notes

- Removed `output: "export"` from `next.config.mjs` (was a static export for Firebase Hosting; now runs as a standard Next.js server on Replit)
- Updated dev/start scripts to use `-p 5000 -H 0.0.0.0` for Replit preview pane compatibility
- Firebase Analytics config is hardcoded (public-facing keys, safe for client-side use)
