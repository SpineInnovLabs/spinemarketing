# Homepage Cinematic Visual Overhaul

## What & Why
Rebuild the IntegrateWise homepage from its current "clean developer landing page" into a cinematic, world-class $100M SaaS product experience. The site already has strong foundations (dark theme, emerald accent, structured sections) but needs to shift from "clean + functional" to "cinematic + intentional + high-authority" — inspired by Stripe, Linear, and Vercel.

This covers both the visual/motion upgrade AND the structural/copy reorganization described in the two attached spec documents.

## Done looks like
- Full-screen hero with massive typography, animated "Spine" visualization as the visual signature (glowing central node with data lines flowing from tool icons)
- Deep black (#05070A) background with subtle gradient noise texture
- Glassmorphism cards with gradient border glow, hover lift + scale effects
- Scroll-triggered fade + upward reveal animations on every section
- Gradient-based section transitions instead of hard cuts
- Problem section with strong visual before/after storytelling
- Solution section presenting two layers: Knowledge Workspace and Cognitive Overlay (Digital Twin)
- Spine section as the dominant visual anchor with continuous animated data pulses
- Trust/Governance section with visual approve/reject UI mock instead of text-heavy explanation
- Integration Services architecture cards (Loader Service, Adapter Pattern, Schema Registry)
- Use Cases/Personas section (Account Success, RevOps, BizOps)
- Credibility section (Cloudflare Workers, enterprise-ready, founder-led)
- Final CTA: "Move from integration to intelligence"
- Typography upgraded: 64-80px headlines with tight tracking, muted gray body text, 2-level hierarchy only
- Significantly more whitespace — less content per screen, every section "breathes"
- Strategic color usage: emerald accent as gradient glow on key words, not flat everywhere
- Smooth scroll navigation throughout
- Responsive and fast

## Out of scope
- Inner pages (platform, product, solutions, pricing, about, etc.)
- Blog and changelog content
- Contact form or lead capture changes
- Backend/API changes
- Mobile app or native features
- The mockup-sandbox artifact

## Tasks
1. **Global design tokens & background** — Update globals.css with deeper black background (#05070A), gradient noise texture, updated typography scale (64-80px headlines), tighter letter spacing, and strategic emerald glow/gradient color utilities.
2. **Hero section rebuild** — Full-screen hero with no visible boundaries. Massive centered headline ("Stop being the human API between your tools"), animated Spine visualization as the signature visual — central glowing core with tool logos connected by pulsing data lines. Two CTAs: "Book a Demo" (primary) and "See How It Works" (secondary).
3. **Section transition system** — Replace hard section cuts with gradient fades, subtle glow edges, and visual continuity. Add scroll-triggered fade+upward-reveal animations to all homepage sections using Framer Motion.
4. **Problem section** — Visual before/after storytelling about 10-30+ SaaS tools with no native communication. Reduce text, let visuals lead.
5. **Solution section** — Two-layer presentation: (1) Knowledge Workspace with domain-specific views, (2) Cognitive Overlay / Digital Twin that detects risks, generates insights, and recommends (does NOT execute). Clean pillar cards with glassmorphism treatment.
6. **Spine section as visual anchor** — Redesign as the site's dominant visual identity. Central glowing core node with lines from tool logos, animated data pulses flowing inward and output signals flowing outward. Continuous subtle motion.
7. **Trust/Governance section** — "AI that cannot act without you." Replace text-heavy approach with visual/symbolic treatment: shield icon, mock approve/reject UI, visual flow diagram (AI → Suggestion → Human → Execution). Evidence, confidence score, and impact preview callouts.
8. **Integration architecture cards** — Glassmorphism cards for Loader Service, Adapter Pattern, and Schema Registry. Hover effects: lift + glow + slight scale. Background rgba(255,255,255,0.02), faint gradient border stroke, soft spread shadow.
9. **Use cases, credibility & final CTA** — Persona cards (Account Success → churn detection, RevOps → pipeline clarity, BizOps → system-wide visibility). Credibility strip (Cloudflare Workers, enterprise-ready). Final full-width CTA: "Move from integration to intelligence" with Book a Demo button.
10. **Spacing, polish & performance** — Increase vertical spacing significantly across all sections. Remove over-explanation and repeated messaging. Ensure responsive behavior, fast load, and SEO-friendly structure.

## Relevant files
- `app/page.tsx`
- `app/globals.css`
- `components/hero-section.tsx`
- `components/home-sections.tsx`
- `components/home-sections-client.tsx`
- `components/spine-section.tsx`
- `components/spine-section-client.tsx`
- `components/solution-section.tsx`
- `components/solution-section-client.tsx`
- `components/problem-section.tsx`
- `components/proof-section.tsx`
- `components/data-flow-animation.tsx`
- `components/final-cta.tsx`
- `components/parallax-section.tsx`
- `components/logos-section.tsx`
- `components/use-cases-section.tsx`
- `components/industries-showcase.tsx`
- `components/comparison-section.tsx`
- `components/ui/button.tsx`
- `components/ui/badge.tsx`
- `components/ui/card.tsx`
- `components/footer.tsx`
- `components/header.tsx`
- `components/header-client.tsx`
