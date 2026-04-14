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

IntegrateWise is a **Knowledge Workspace** empowered by AI and the Spine — NOT a platform, NOT an OS, NOT a tool.

### Architecture Layers
- **L1 — The Workspace**: 12 domain-specific views, schema-filtered per tenant. Where users work daily.
- **L2 — The Cognitive Layer** (Cognitive Intelligence Overlay): 14 components accessible via Cmd+J. Non-intrusive overlay — sits alongside work, extends when needed.
- **Platform Engine** (under the hood): Spine, Entity 360, Schema system, Processing pipeline, Connectors, Knowledge Memory.

### Core Terminology
- **Spine** (also: Adaptive Spine, Intelligent Spine, Unified Intelligence Layer, Adaptive Layer): The intelligent data layer connecting all data.
- **Workspace** (L1): Where users work every day — accounts, tasks, workflows, Entity 360 views.
- **Cognitive Layer** (L2): Where AI serves you — Twin, signals, approvals, pattern detection.
- **TruthLayer**: Trust/governance system — platform capability, not a product.
- **Entity 360**: Convergence point where all 3 data flows meet.

### The Cognitive Loop
**Think → Act → Govern → Repeat → Adjust** (5 steps)
- Think: Pattern detection, signal generation, situation awareness
- Act: Agent execution — Twin and other agents live here
- Govern: Rule enforcement, trust boundaries, compliance checks
- Repeat: Loop execution on structured data (Flow A only)
- Adjust: System tuning, confidence calibration, feedback loops

### Three Data Flows
- **Flow A (Truth/Structured)**: SaaS connectors → Spine. Has a repeat loop. ONLY flow with a repeat loop.
- **Flow B (Context/Unstructured)**: Docs, emails, conversations → Context Store. NO repeat loop.
- **Flow C (AI Knowledge/Memory)**: AI sessions → Triage Bot (SOLE writer) → Memory Store. NO repeat loop. NEVER writes directly to Spine — only via HITL approval.

### Key Rules
- Agents (including Twin) live ONLY in Act, not in truth formation.
- Twin has READ-ONLY access to Spine; can only write via HITL approval.
- Triage Bot is the SOLE writer to memory.
- **NAMING**: Never use "L1"/"L2", "Workbench", or "Intelligence Layer" in copy. Always use "Workspace" and "Cognitive Layer".

## Homepage Section Order (Narrative Arc)

1. **Hero** — chaos animation (floating scattered tools)
2. **Logos** — "Connect the apps you already use" (marquee)
3. **Problem** — "Modern work isn't hard. The plumbing is." (Human API pain)
4. **Spine** — "One layer connects everything." (dedicated SpineSection with DataFlowAnimation)
5. **Workspace** — "Your workspace. AI that thinks in context." (dashboard mockup + Workspace/Cognitive Layer/HITL pillars)
6. **Proof** — testimonial + animated counters
7. **Pricing** — 3 tiers (Starter/Growth/Command)
8. **Final CTA** — "Ready to see everything in one place?"

**Note**: HowItWorksSection has been removed from the homepage (component still exists but is not rendered on homepage).

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

### Platform Child Pages
| Route | Page |
|-------|------|
| `/platform/the-adaptive-spine` | The Adaptive Spine |
| `/platform/how-it-works` | How it Works (flows, identities, knowledge base) |
| `/platform/integrations` | Integrations (connectors, protocols) |
| `/platform/security` | Security |
| `/platform/infrastructure` | Infrastructure |

### Product Child Pages
| Route | Page |
|-------|------|
| `/product/the-adaptive-workspace` | The Adaptive Workspace (workbench, Entity 360) |
| `/product/how-it-works` | How it Works (Intelligence Layer, Twin insights) |
| `/product/approval-gate-twin` | Approval Gate & Twin in Action |
| `/product/security` | Security |

## Navigation Structure

The header (`components/header.tsx`) uses dropdowns:
- **Platform** → dropdown: The Adaptive Spine, How it Works, Integrations, Security, Infrastructure
- **Product** → dropdown: The Adaptive Workspace, How it Works, Approval Gate & Twin, Security
- **Solutions** → grouped mega dropdown (By Function / By Industry / By Role)
- **Pricing** → `/pricing` (direct link)
- **Company** → dropdown: About, Contact, Why IntegrateWise

## Design System

The entire site uses a **fully dark design** with shadcn/ui components and Tailwind CSS tokens:

### UI Components (shadcn/ui)
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `Badge` (variants: default, secondary, destructive, outline)
- `Button` (variants: default, destructive, outline, secondary, ghost, link)
- `Separator`
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
- `Input`, `Textarea`
- `Avatar`, `DropdownMenu`

### Tailwind Tokens
- **Section backgrounds**: `bg-dark-section` (maps to `rgb(8, 7, 14)` via CSS variable)
- **Text**: `text-white` (headings), `text-white/45` (body), `text-white/40` (muted)
- **Cards**: `border-white/[0.08] bg-white/[0.03]`, hover `border-white/[0.15]`
- **Accent**: `text-primary` (teal `#1BA784`) for highlighted text, badges, icons
- **CSS Variables**: `--gradient-primary`, `--gradient-primary-icon`, `--shadow-button`, `--shadow-card` in `app/globals.css`
- **Font**: Inter only

### Patterns
- **Ambient glows**: Radial gradients with teal/purple/red at low opacity + blur
- **Headline pattern**: Two-part split on `. ` — white `headText` + teal `accentText`
- **Animations**: Framer Motion `whileInView` with spring transitions, stagger variants, `useScroll`/`useTransform` parallax
- **Product UI mockups** (inside how-it-works/solutions-doors sections) intentionally use light backgrounds to demo the actual product interface
- **FAQ sections**: Reusable `FAQSection` component with Accordion; used on `/pricing` and `/platform`
- **Section dividers**: `.section-divider` (gradient line) and `.section-divider-subtle` between sections
- **Background textures**: `.bg-dot-grid` for subtle dot-grid pattern on alternating sections
- **Sticky Scroll** (`components/sticky-scroll.tsx`): Left panel stays pinned while right side scrolls through items (scroll-triggered navigation with active item highlighting, feature lists, and animated content panels)
- **Sticky Gather** (`components/sticky-gather.tsx`): Scattered elements converge toward a center hub as user scrolls (animated gather effect with icon nodes, center label, and detail cards grid below)
- **Parallax components** (`components/parallax-section.tsx`): ParallaxHero, ParallaxLayer, ParallaxReveal, ParallaxDivider, FloatingElement
- **Industries Showcase** (`components/industries-showcase.tsx`): 12 industries with pain/result cards, expandable grid
- **Use Cases Section** (`components/use-cases-section.tsx`): 12 Twin-scored use cases with expandable list

### Sticky Scroll / Gather Usage
All platform and product pages (parent + child) include either StickyScroll or StickyGather:
- Each page has a `sticky-sections.tsx` file with page-specific data/configuration
- Platform pages use unique Spine-focused content (data layers, governance, connectors)
- Product pages use unique Workspace-focused content (surfaces, approval, intelligence)

### Inner Page Architecture
- **Platform page** (`app/platform/content.tsx`): Visual storytelling with Spine diagram, Execution Path visualization, Connector tabs, Workbench + Intelligence Layer mockups, and Canonical Loop CTA
- **The Adaptive Spine** (`app/platform/the-adaptive-spine/content.tsx`): Core functions, capabilities, 8-stage normalization pipeline
- **The Adaptive Workspace** (`app/product/the-adaptive-workspace/content.tsx`): 9 role-based views with category tabs, Entity 360 types, workspace features
- **Approval Gate & Twin** (`app/product/approval-gate-twin/content.tsx`): Truth Boundary governance, tiered approvals, Twin Trigger Scoring, action library, safety mechanisms
- **Pricing page** (`app/pricing/page.tsx`): Enhanced hero (`pricing-hero.tsx`), shared PricingSection component (unchanged), trust bar (`trust-bar.tsx`), FAQ, FinalCTA

## Rich Shared Components (Arvio-style)

These reusable components add visual richness across all non-home pages:

| Component | File | Usage |
|-----------|------|-------|
| `ComparisonSection` | `components/comparison-section.tsx` | IntegrateWise vs Others feature comparison table |
| `TestimonialsSection` | `components/testimonials-section.tsx` | 4-card testimonial grid with star ratings |
| `BenefitsGrid` | `components/benefits-grid.tsx` | 6-item icon benefit cards with hover effects |
| `StatsBar` | `components/stats-bar.tsx` | Animated counter metrics strip |
| `BentoShowcase` | `components/bento-showcase.tsx` | Dashboard + Twin mockup bento grid |
| `FeatureShowcase` | `components/feature-showcase.tsx` | Alternating text + visual card sections |
| `PricingComparison` | `app/pricing/comparison.tsx` | Plan-by-plan feature comparison table |

All components use dark theme (`bg-dark-section`), emerald accent (`#34D399`/`text-primary`), framer-motion animations, and the established card pattern (`border-white/[0.08] bg-white/[0.03]`).

## Shared Layout Components

- `app/solutions/_shared/IndustrySolutionLayout.tsx` — shared layout for all 6 industry pages
- `app/solutions/_shared/RoleSolutionLayout.tsx` — shared layout for all 6 role pages

## Ad Creative System (Mockup Sandbox)

31 ad creative components for LinkedIn, WhatsApp, Facebook, and Google, served via the mockup sandbox at port 23636 (proxied via `/__mockup/*` rewrite in `next.config.mjs`).

### Brand Tokens (applied across all 31 components)
| Token | Value |
|-------|-------|
| Background | `#08070E` / `rgb(8,7,14)` |
| Dark card | `#121118` / `rgb(18,17,24)` |
| Primary accent | `#1BA784` / `#34D399` |
| Font | Inter only (no Sora) |
| Border (dark) | `rgb(38,38,44)` |
| Gradient | `radial-gradient(88% 75% at 50% 50%, rgb(27,167,132) 37.4%, rgb(52,211,153) 100%)` |
| Pain accent | `#EB4379` (pink — pain-point ads only) |

### Component Locations
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-ads/` — PainPoint, Outcome, Identity, V1-V3 variants
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-assets/` — BannerA/B/C, CoverA/B, PostA/B/C/D, Slide1-4
- `artifacts/mockup-sandbox/src/components/mockups/whatsapp-ads/` — WAStatus, WAShare, WAPromo
- `artifacts/mockup-sandbox/src/components/mockups/facebook-ads/` — FBFeed, FBSquare, FBStories
- `artifacts/mockup-sandbox/src/components/mockups/google-ads/` — GoogleLandscape, GoogleSquare, GoogleRect

### Logo Assets
Local tool logos in `artifacts/mockup-sandbox/public/images/logos/` — named by domain (e.g., `hubspot.com`, `slack.com`). Never use Clearbit CDN URLs.

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — Shared React components
- `lib/` — Utility modules (Firebase config, etc.)
- `content/` — Static content/copy
- `public/` — Static assets
- `artifacts/mockup-sandbox/` — Ad creative preview system

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
