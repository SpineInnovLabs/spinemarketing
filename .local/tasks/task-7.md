---
title: Sitewide content minimization — let visuals lead
---
# Sitewide Content Minimization

## What & Why
The IntegrateWise site is copy-heavy — many pages have long paragraphs explaining concepts that should instead be conveyed through animations, infographics, and visual storytelling. The goal is to strip every page's text down to the absolute minimum needed (short headlines, punchy one-liners, no multi-sentence paragraphs) so that visuals, animations, and infographics carry the narrative weight. The attached context brief defines the messaging hierarchy: "Human API" problem → Spine unifies → Workbench shows → AI suggests, you approve → Knowledge compounds.

Additionally, the industry solution pages (SaaS, Services, Manufacturing, Retail, Professional Services, Finance) should adopt the biological metaphor system from the provided brief — each industry as a different organism type with the Spine as the nervous system — but expressed in minimal copy (headline + one-liner max per section, not the full paragraphs from the brief).

**Guiding principle:** If a concept can be shown with an animation or infographic, remove the paragraph explaining it. Every remaining word must earn its place.

## Done looks like
- **Homepage:** Hero text is 1 headline + 1 short line max. Problem section uses icon cards with 5-7 word phrases, not sentences. Solution section cards have one-line descriptions. How It Works step descriptions are 1 sentence max each. Proof section relies on animated counters and the quote — no extra paragraphs.
- **Product page:** Hero subtext is 1 sentence. Layer descriptions (Workbench, Intelligence, Spine) are 1-line each. Module cards have title + 5-8 word tagline, no paragraph. Governance principles are icon + short phrase.
- **Platform page:** Same treatment — section intros are headline + tagline only. Technical explanations replaced with visual placeholders or stripped to one line.
- **Solutions hub page:** Card descriptions are 8-12 words max. Model strip text is tighter.
- **Industry solution pages:** Headlines updated to use the biological metaphor (e.g., SaaS = "Feel adoption. Protect recurring revenue.", Services = "Sense project muscle. Protect margin."). Problem bullets shortened to 8-10 words each. Capability descriptions shortened to one line. Governance text is 1 sentence max.
- **Role solution pages** (customer-success, founders, revops, operations, finance-leaders, individual): Same treatment — minimal descriptions.
- **Function pages** (account-success, business-ops, personal-ops): Comparison tables kept but descriptions trimmed. "Day One outcomes" shortened to punchy phrases.
- **About page:** Timeline entries trimmed to title + short phrase. Hero headline tightened. Body paragraphs cut or reduced to single sentences.
- **Other pages** (Why, AI, Spine, Security, Services, Pricing, Integrations, Contact): All body copy trimmed to essentials.
- **Shared components** (FinalCTA, Footer, Header, PricingSection, LogosSection): CTA copy tightened. Footer link labels kept short.
- **No page has a paragraph longer than 2 short sentences.** Most descriptions are under 15 words.

## Out of scope
- Visual/animation changes (handled by Task #6)
- Adding new pages or routes
- Changing page structure or layout patterns
- Backend changes
- Creating the actual infographic or animation components (this task only trims copy; visual replacements are Task #6's domain)

## Tasks
1. **Homepage components** — Trim all copy in hero-section, problem-section, solution-section, how-it-works-section, proof-section, and final-cta to minimal form. Headlines stay punchy, descriptions become one-liners or short phrases.

2. **Product pages** — Trim product/content.tsx and all product sub-pages (workbench, twin, twin-insights, twin-operations, intelligence-layer, entity-360, connectors, truth-boundary, human-in-the-loop, security). Each feature card gets title + short tagline only.

3. **Platform pages** — Trim platform/content.tsx and all sub-pages (spine, the-spine, flows, connectors, connectors-ecosystem, identities, knowledge-base, infrastructure, execution-path, security). Strip multi-sentence explanations to one-liners.

4. **Industry solution pages** — Update all 6 industry content files (saas, services, manufacturing, retail, professional-services, finance) with biological metaphor headlines from the provided brief and trim all bullets, capability descriptions, and governance text to minimal form. Update the shared IndustrySolutionLayout if section headers need adjusting.

5. **Role and function pages** — Trim all 6 role pages (customer-success, founders, revops, operations, finance-leaders, individual) and 3 function pages (account-success, business-ops, personal-ops). Shorten comparisons, outcomes, and descriptions to punchy phrases.

6. **Solutions hub and remaining pages** — Trim solutions/content.tsx card descriptions, about/content.tsx timeline and body, why/content.tsx, ai/content.tsx, spine/content.tsx, security/content.tsx, services/content.tsx, integrations/content.tsx, and contact/content.tsx. Also trim pricing-section.tsx tier descriptions.

7. **Metadata descriptions** — Update all page.tsx meta description strings to match the new minimal copy tone — short, outcome-focused, no jargon.

## Relevant files
- `components/hero-section.tsx`
- `components/problem-section.tsx`
- `components/solution-section.tsx`
- `components/how-it-works-section.tsx`
- `components/proof-section.tsx`
- `components/final-cta.tsx`
- `components/pricing-section.tsx`
- `components/logos-section.tsx`
- `components/footer.tsx`
- `app/page.tsx`
- `app/product/content.tsx`
- `app/product/workbench/content.tsx`
- `app/product/twin/content.tsx`
- `app/product/twin-insights/content.tsx`
- `app/product/twin-operations/content.tsx`
- `app/product/intelligence-layer/content.tsx`
- `app/product/entity-360/content.tsx`
- `app/product/connectors/content.tsx`
- `app/product/truth-boundary/content.tsx`
- `app/product/human-in-the-loop/content.tsx`
- `app/product/security/content.tsx`
- `app/platform/content.tsx`
- `app/platform/spine/content.tsx`
- `app/platform/the-spine/content.tsx`
- `app/platform/flows/content.tsx`
- `app/platform/connectors/content.tsx`
- `app/platform/connectors-ecosystem/content.tsx`
- `app/platform/identities/content.tsx`
- `app/platform/knowledge-base/content.tsx`
- `app/platform/infrastructure/content.tsx`
- `app/platform/execution-path/content.tsx`
- `app/platform/security/content.tsx`
- `app/solutions/content.tsx`
- `app/solutions/_shared/IndustrySolutionLayout.tsx`
- `app/solutions/saas/content.tsx`
- `app/solutions/services/content.tsx`
- `app/solutions/manufacturing/content.tsx`
- `app/solutions/retail/content.tsx`
- `app/solutions/professional-services/content.tsx`
- `app/solutions/finance/content.tsx`
- `app/solutions/customer-success/content.tsx`
- `app/solutions/founders/content.tsx`
- `app/solutions/revops/content.tsx`
- `app/solutions/operations/content.tsx`
- `app/solutions/finance-leaders/content.tsx`
- `app/solutions/individual/content.tsx`
- `app/account-success/content.tsx`
- `app/business-ops/content.tsx`
- `app/personal-ops/content.tsx`
- `app/about/content.tsx`
- `app/why/content.tsx`
- `app/ai/content.tsx`
- `app/spine/content.tsx`
- `app/security/content.tsx`
- `app/services/content.tsx`
- `app/integrations/content.tsx`
- `app/contact/content.tsx`
- `app/pricing/page.tsx`
- `app/about/page.tsx`
- `app/product/page.tsx`
- `app/platform/page.tsx`
- `app/solutions/page.tsx`