# IntegrateWise Marketing Site

A Next.js marketing website for IntegrateWise, migrated from Vercel/Firebase Hosting to Replit.

## Architecture

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + custom components
- **Animations**: Framer Motion
- **Analytics**: Firebase Analytics (client-side only, loaded lazily)
- **Package Manager**: pnpm

## Site Positioning

IntegrateWise is a **Knowledge Workspace over the Spine** — three core concepts:
- **Spine**: Adaptive, vendor-neutral intelligence layer. Unifies Truth (structured records), Context (conversations), and Session Summaries (governed AI outputs)
- **L1 — Daily Workbench**: Where users work every day
- **L2 — Intelligence Layer**: Where The Twin surfaces signals and proposes actions; nothing executes without human approval (Govern Gate)

## Full Sitemap

### Top-level pages
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/why` | Why IntegrateWise |
| `/platform` | Product — How It Works |
| `/integrations` | Integrations |
| `/ai` | The Twin (AI) |
| `/security` | Security |
| `/spine` | Spine & Intelligence |
| `/solutions` | Solutions hub/overview |
| `/pricing` | Pricing |
| `/resources` | Resources |
| `/about` | About |
| `/contact` | Contact |
| `/blog` | Blog |
| `/docs` | Docs |
| `/changelog` | Changelog |
| `/privacy` | Privacy |
| `/terms` | Terms |

### Solutions by Function
| Route | Page |
|-------|------|
| `/account-success` | Account Success |
| `/business-ops` | Business Ops |
| `/personal-ops` | Personal Ops |

### Solutions by Industry
| Route | Page |
|-------|------|
| `/solutions/saas` | SaaS |
| `/solutions/services` | Services & Agencies |
| `/solutions/manufacturing` | Manufacturing & Trade |
| `/solutions/retail` | Retail & Ecommerce |
| `/solutions/professional-services` | Professional Services |
| `/solutions/finance` | Finance |

### Solutions by Role
| Route | Page |
|-------|------|
| `/solutions/customer-success` | Customer Success & Account Managers |
| `/solutions/founders` | Founders & CXOs |
| `/solutions/revops` | RevOps & Business Operations |
| `/solutions/operations` | Operations & Delivery Leaders |
| `/solutions/finance-leaders` | Finance Leaders |
| `/solutions/individual` | Individual Professionals |

## Navigation Structure

The header (`components/header.tsx`) uses a grouped mega-dropdown for Solutions:
- **Why** → `/why` (direct link)
- **Product** → dropdown: How It Works, Integrations, The Twin, Security
- **Solutions** → grouped mega dropdown (By Function / By Industry / By Role)
- **Spine & Intelligence** → `/spine` (direct link)
- **Pricing** → `/pricing` (direct link)
- **Resources** → `/resources` (direct link)
- **Company** → dropdown: About, Contact

## Design System

The entire site uses a **fully dark design** with the following conventions:
- **Section backgrounds**: `rgb(8, 7, 14)` (near-black)
- **Text**: `text-white` (headings), `text-white/45` (body), `text-white/40` (muted)
- **Cards**: `border-white/[0.08] bg-white/[0.03]`, hover `border-white/[0.15]`
- **Accent**: `text-primary` (teal) for highlighted text, badges, icons
- **Ambient glows**: Radial gradients with teal/purple/red at low opacity + blur
- **Headline pattern**: Two-part split on `. ` — white `headText` + teal `accentText`
- **Animations**: Framer Motion `whileInView` with spring transitions, stagger variants, `useScroll`/`useTransform` parallax, `AnimatedCounter` (intersection observer + rAF), `FloatingParticles` (seeded random positions)
- **Product UI mockups** (inside how-it-works/solutions-doors sections) intentionally use light backgrounds to demo the actual product interface

## Shared Layout Components

- `app/solutions/_shared/IndustrySolutionLayout.tsx` — shared layout for all 6 industry pages
- `app/solutions/_shared/RoleSolutionLayout.tsx` — shared layout for all 6 role pages

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

Runs on port 5000, bound to all hosts (`0.0.0.0`) for Replit preview pane compatibility.

## Environment Variables

See `.env.example` for available environment variables:

- `NEXT_PUBLIC_CONTACT_FORM_ACTION` — Optional contact form endpoint (Formspree, etc.)

## Migration Notes

- Removed `output: "export"` from `next.config.mjs` (was a static export for Firebase Hosting; now runs as a standard Next.js server on Replit)
- Updated dev/start scripts to use `-p 5000 -H 0.0.0.0` for Replit preview pane compatibility
- Firebase Analytics config is hardcoded (public-facing keys, safe for client-side use)
