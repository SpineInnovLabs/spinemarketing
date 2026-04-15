# Product Page Redesign

## What & Why
Redesign the main Product page (`/product`) to better convert skeptical B2B buyers. The current page is text-dense, uses insider jargon in the hero, has no visual proof of the product, and lacks social proof. The redesign should help a first-time visitor understand what Arvio does, believe it works, and take one clear next step — in under 90 seconds.

## Design Thinking Brief

**Framework:** Double Diamond
**HMW Statement:** How might we help a skeptical B2B buyer quickly understand what Arvio does, believe it works, and take one clear next step — in under 90 seconds?

**Key problems with the current page:**
1. Hero headline ("The Knowledge Workspace over the Spine") uses insider jargon — unclear to first-time visitors
2. No visual proof of the product — no screenshots, UI previews, or diagrams
3. Three long sections of similar-looking text cards create information overload
4. Both CTAs link to `/contact`, creating a trust disconnect ("Watch 3-min overview" should go somewhere meaningful)
5. No social proof: no customer logos, testimonials, or impact metrics
6. The page reads like internal documentation rather than a persuasive buyer-facing page

**Riskiest assumption to solve for:** A visitor who doesn't already know Arvio can understand the core value proposition within the first screenful.

## Done looks like
- Hero communicates the core value proposition in plain language (what Arvio does and for whom), without relying on product-specific terms like "Spine" or "Knowledge Workspace" as the primary hook
- At least one section uses a visual element (UI mockup illustration, diagram, or screenshot-style card) rather than pure text
- The Three Layers section is visually differentiated — each layer feels distinct, not like three identical card groups
- A social proof element appears above the fold or immediately below the hero (logos, a testimonial, or a key metric)
- The page has a single dominant CTA hierarchy — one primary action is clearly more prominent
- The Governance section is preserved but can be condensed or visually elevated
- All Framer Motion animations are retained

## Out of scope
- Changes to product sub-pages (`/product/connectors`, `/product/workbench`, etc.)
- Backend changes or new routing
- Real screenshot assets (use placeholder/illustration-style UI previews unless assets are available)
- Changes to the Header, Footer, or FinalCTA components

## Tasks
1. **Rewrite hero copy** — Replace the headline with plain-language copy that names the user's problem and Arvio's solution without requiring prior product knowledge. Keep the sub-headline concise (1-2 lines).

2. **Add social proof element** — Insert a logo bar or a single high-impact metric strip (e.g., "X accounts managed · $XM in risk surfaced · trusted by B2B revenue teams") directly below the hero CTA row.

3. **Visually differentiate the Three Layers** — Give each layer (Workbench, Intelligence Layer, Spine Foundation) a distinct visual treatment: different background tones, an icon or illustration, or an alternating layout. Avoid identical card grids for all three.

4. **Introduce a product visual section** — Add a section between the hero and Three Layers (or within the hero) that shows what using Arvio looks like. Use a styled illustration-style card, a terminal/UI mockup, or a numbered workflow diagram. No real screenshots are needed — a well-designed visual card that implies the interface is sufficient.

5. **Streamline Core Modules and Governance** — Condense these two sections so they feel like reinforcement, not additional heavyweight reading. Consider combining them or reducing card copy to one line each with a "Learn more →" link.

6. **CTA cleanup** — Ensure there is one dominant primary CTA and one secondary CTA. If "Watch 3-min overview" links to `/contact`, rename it to something accurate ("Book a walkthrough" or similar).

## Relevant files
- `app/product/page.tsx`
- `app/product/content.tsx`
- `components/header.tsx`
- `components/footer.tsx`
- `components/final-cta.tsx`
