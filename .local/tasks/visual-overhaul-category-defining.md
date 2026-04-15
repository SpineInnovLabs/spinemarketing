# Visual Overhaul — Category-Defining Site

## What & Why
The IntegrateWise site is visually monotone and document-heavy. Every page follows the exact same pattern: dark background → big centered headline → gray paragraph → grid of text cards. There are no product visuals, no architecture diagrams, no interactive storytelling, no layout variation between sections. The result reads like a technical specification in dark mode, not a category-defining SaaS product site.

This overhaul adds visual depth, variety, and storytelling across the homepage and key inner pages so the site feels alive and competitive with best-in-class B2B SaaS sites (Linear, Notion, Vercel, Stripe).

## Done looks like
- **Homepage hero** feels cinematic — the chaos-to-clarity animation is polished, and the reveal lands on a product mockup or visual payoff instead of fading to an empty dark void
- **Section variety on homepage** — no two consecutive sections use the same layout pattern. Alternating between bento grids, asymmetric two-column layouts, full-bleed visuals, and card grids
- **Product mockups/screenshots** — the Solution Section, How It Works, and Platform pages show visual representations of the product UI (mockup illustrations built in code using styled components, not placeholder images) so visitors can picture the workspace
- **Architecture diagrams** — the Spine concept, data flow (Truth / Context / AI Sessions), and the L1/L2 layers are visualized with animated diagrams instead of only described in text
- **Visual breathing room** — sections have more generous spacing, background variation (subtle gradients, grain textures, section dividers), and visual anchors so the eye has resting points
- **Bento grid feature sections** — key feature areas use asymmetric bento-style grids with mixed-size cards, subtle background accents, and micro-animations instead of uniform 3-column text grids
- **Social proof section** — metrics use large animated counters with visual weight, and the testimonial quote feels prominent with a real design treatment (not just a plain card with a quote SVG)
- **Inner pages (Platform, Product/Workbench, Pricing)** — break out of the heading-paragraph-table pattern with visual storytelling: step diagrams, layered card compositions, comparison visuals, and interactive tabs or accordions
- **CTA sections** feel distinct and premium — not just another dark section with centered text
- **Overall impression**: scrolling the site feels dynamic, each section reveals something visually new, and the product concept is understood through visuals before the copy is even read

## Out of scope
- Copy/content rewriting (keep existing text)
- Adding real product screenshots (use code-built mockup components)
- New pages or routes
- Backend changes
- Mobile-first responsive redesign (keep existing responsive behavior, just enhance desktop visual experience)

## Tasks
1. **Hero section visual payoff** — After the chaos animation resolves, reveal a polished product mockup (built as a styled component showing a simplified Workbench UI) with a glowing gradient backdrop. The hero should end on a visual, not empty dark space.

2. **Homepage section layout variety** — Redesign the Problem, Solution, How It Works, Day One, and Proof sections to use distinct layout patterns: bento grids for features, asymmetric two-column with visual on one side for Solution, full-width animated diagram for How It Works, and a visually rich metrics/testimonial layout for Proof. No two adjacent sections should share the same grid pattern.

3. **Architecture and data flow visualizations** — Build animated visual components for: (a) the Spine data flow (tools → normalization → Spine → context → Entity 360), (b) the L1/L2 layer concept as a layered diagram, and (c) the Three Data Paths (Truth/Context/AI Sessions) as a visual triptych. Use these in both the homepage and the Platform page.

4. **Platform page visual storytelling** — Replace the wall of text-cards on the Platform page with step-by-step visual sections. Each step (Connect, Three Data Paths, L1+L2, Twin, Canonical Loop) gets its own distinct visual treatment with diagrams, layered cards, or interactive tabs instead of uniform card grids.

5. **Product/Workbench page visual upgrade** — Replace the plain data table of 12 domain views with visual cards or an interactive tab/accordion component. Add a product mockup showing the Workbench UI concept. Give the Core Interface Components section a bento grid treatment instead of a uniform 2×2.

6. **Pricing page visual enhancement** — Add visual depth to the pricing tiers with gradient borders, feature highlights, a recommended tier glow effect, and a comparison visual. The page currently shows heading + paragraph over empty dark space.

7. **Global visual enhancements** — Add subtle background textures (dot grids, grain overlays), section transition elements (gradient dividers, curved separators), and micro-interactions (hover transforms, scroll-triggered reveals) across all pages. Upgrade the FinalCTA component with a more premium treatment (gradient border, floating elements, or a subtle pattern).

8. **Polish and consistency pass** — Ensure all new visual elements use the existing design system colors (emerald primary, violet accent, dark section backgrounds). Verify animations perform well, reduce motion is respected, and the site feels cohesive rather than a patchwork of different visual ideas.

## Relevant files
- `app/page.tsx`
- `app/globals.css`
- `components/hero-section.tsx`
- `components/problem-section.tsx`
- `components/solution-section.tsx`
- `components/how-it-works-section.tsx`
- `components/home-sections.tsx`
- `components/proof-section.tsx`
- `components/day-one-section.tsx`
- `components/pricing-section.tsx`
- `components/final-cta.tsx`
- `components/dashboard-mockup.tsx`
- `components/data-flow-animation.tsx`
- `components/ui/sticky-scroll-reveal.tsx`
- `components/ui/orbiting-circles.tsx`
- `components/ui/animated-list.tsx`
- `components/ui/animated-beam.tsx`
- `app/platform/content.tsx`
- `app/product/workbench/content.tsx`
- `app/pricing/page.tsx`
- `app/solutions/_shared/IndustrySolutionLayout.tsx`
- `app/solutions/_shared/RoleSolutionLayout.tsx`
- `components/logos-section.tsx`
- `components/solutions-doors-section.tsx`
