# Enrich Homepage & Shared Components

## What & Why
Extract UI patterns and visual richness from two Framer reference sites — **arvio.framer.website** (light SaaS dashboard style) and **agent.framer.wiki** (dark AI agent style) — and apply them to the IntegrateWise homepage and all shared/reusable components. The current site has solid structure but the sections feel sparse; these references show how to add polish through better card treatments, richer hover states, floating dashboard mockups, bento layouts, logo marquees, and animated transitions.

**Reference screenshots saved at:**
- `attached_assets/screenshots/arvio_framer_website.png`
- `attached_assets/screenshots/agent_framer_wiki.png`

**Important:** This is design inspiration, not a literal clone. Keep IntegrateWise branding (dark theme, green primary accent `#34D399`, existing logos and copy). Adapt the *patterns* — card styles, layout density, animation polish, section rhythm — not the branding.

## Done looks like
- Homepage feels significantly more polished and visually rich — comparable to modern SaaS marketing sites like the two references
- Hero section has a cleaner dashboard mockup floating element (inspired by both sites' hero treatments with stats cards and dashboard previews)
- Logo marquee section is smoother and more visually refined
- Pricing cards, testimonials, FAQ accordion, CTA, stats bar, bento grid, benefits grid, comparison section, and feature showcase all feel richer with better card treatments, hover effects, and spacing
- Header and footer have improved polish and micro-interactions
- All animations are smooth and performant (using existing Framer Motion setup)
- No regressions — all existing pages that use these shared components still work correctly

## Out of scope
- Inner page-specific content sections (product/content, platform/content, solutions/content, pricing-specific components) — handled in a separate task
- Blog pages — handled in a separate task
- Changing any copy or branding
- Adding new pages or routes

## Tasks
1. **Use Playwright to scrape design tokens and detailed component styles from both `arvio.framer.website` and `agent.framer.wiki`** — extract colors, typography scales, spacing, border-radius values, shadow styles, gradient patterns, hover states, and animation timings. Save extracted data to `clone-data/` for reference during building.
2. **Download key visual assets** from both reference sites (dashboard mockup images, background gradients, decorative elements) to `public/images/reference/` for use in enhanced components.
3. **Enrich the hero section** — add a polished floating dashboard preview element inspired by both sites' hero treatments (Arvio's stats cards, Agentix's dark dashboard with green accents). Improve the chaos-to-clarity animation with smoother transitions.
4. **Polish the logo marquee section** — smoother infinite scroll, better card styling with subtle borders and hover states (inspired by both sites' logo bars).
5. **Upgrade shared section components** — enrich `pricing-section`, `testimonials-section`, `faq-section`, `final-cta`, `stats-bar`, `bento-showcase`, `benefits-grid`, `comparison-section`, and `feature-showcase` with richer card treatments, better shadows/borders, improved hover states, and tighter spacing inspired by the reference sites.
6. **Improve header and footer** — add subtle backdrop blur, smoother transitions, and refined styling matching the polish level of the reference sites.
7. **Verify the homepage and all pages using shared components render correctly** — check that no existing pages are broken by the shared component changes.

## Relevant files
- `app/page.tsx`
- `components/hero-section.tsx`
- `components/logos-section.tsx`
- `components/home-sections.tsx`
- `components/home-sections-client.tsx`
- `components/header.tsx`
- `components/header-client.tsx`
- `components/footer.tsx`
- `components/pricing-section.tsx`
- `components/testimonials-section.tsx`
- `components/faq-section.tsx`
- `components/final-cta.tsx`
- `components/stats-bar.tsx`
- `components/bento-showcase.tsx`
- `components/benefits-grid.tsx`
- `components/comparison-section.tsx`
- `components/feature-showcase.tsx`
- `components/spine-section.tsx`
- `components/spine-section-client.tsx`
- `components/solution-section.tsx`
- `components/solution-section-client.tsx`
- `components/problem-section.tsx`
- `components/proof-section.tsx`
- `components/dashboard-mockup.tsx`
- `components/data-flow-animation.tsx`
- `components/ui/marquee.tsx`
- `components/ui/card.tsx`
- `components/ui/accordion.tsx`
- `components/ui/button.tsx`
- `attached_assets/screenshots/arvio_framer_website.png`
- `attached_assets/screenshots/agent_framer_wiki.png`
