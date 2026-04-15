# Sitewide Content Minimization

## What & Why
The IntegrateWise site is copy-heavy. The user has provided an exact "extreme minimal copy" document that defines the precise text for every page. This task applies that copy across the entire site — replacing verbose paragraphs with short headlines, punchy phrases, and minimal descriptions so that visuals, animations, and infographics carry the narrative. The biological metaphor (each industry = a different organism type with the Spine as the nervous system) is woven into the industry pages.

**Rule:** Maximum 15 words per description. Headlines under 10 words. No paragraphs. Every remaining word earns its place.

## Done looks like

### Homepage (`/`)
- Hero: "Stop being the bridge." + "One view of every customer. AI suggests. You approve." + CTAs: "See it" / "Book demo"
- Problem section: 4 icon cards with ~8 word phrases ("12 tabs open. One brain stretched." / "Customer data scattered. You hunt." / "AI works blind. No context." / "Automation acts alone. No control.")
- Solution section: 3 cards — The Spine ("Connects tools like neural tissue"), The Workbench ("One view. Full context."), TruthBoundary ("AI waits. You decide.")
- How It Works: 6 steps (Connect/Feel/Sense/Suggest/Approve/Learn) with one-liner descriptions
- Proof: "$8M saved. One nervous system." + quote
- Final CTA: "See your customers clearly." + "Book demo"

### Platform (`/platform`) and sub-pages
- Hero: "The adaptive nervous system." / "Grows between your tools. Adapts when they change."
- Spine: "Living tissue, not rigid pipes." / "Connects applications like neural pathways. Adapts automatically."
- Identities: "Structured. Unstructured. AI Sessions." / "All data becomes unified body-awareness."
- Execution Path: "Load. Store. Think. Approve. Act. Adjust. Repeat." / "AI suggests at Think. You decide at Approve."
- Connectors: "Universal sensory inputs." / "SaaS, MCP, webhooks. Auto-upgrade when APIs change."
- Knowledge Base: "Living memory." / "Remembers without retraining. Grows daily."
- Security: "The TruthBoundary." / "Hard-coded human approval. Immutable audit."
- Infrastructure: "High-velocity nervous system." / "Firebase real-time. Sub-100ms sync."

### Product (`/product`) and sub-pages
- Hero: "Feel everything. Control every reflex." / "One workspace. Full context. Governed AI."
- Workbench: "12 domain views." / "Account Success. Business Ops. Personal. Role-aware."
- Twin: "The brain at the top." / "Reads the Spine. Suggests actions. Waits for you."
- Human in the Loop: "Conscious control." / "Drafts wait. You edit. You approve."
- Twin Insights: "Morning Brief." / "Overnight changes distilled. Three priorities. Full context."
- Twin Operations: "Execute with confidence." / "Draft email. Update field. Create task. Approved only."
- Security: "Governance by design." / "Audit everything. Own your data."

### Solutions hub (`/solutions`)
- Hero: "One nervous system. Different organisms."
- By Function cards: Account Success ("Feel churn early."), Business Ops ("Sense flow blockages."), Personal Ops ("Own your context.")
- By Industry cards: SaaS ("Fast metabolism. Protect recurring."), Services ("Project muscle. Protect margin."), Manufacturing ("Heavy skeletal. Feel supply."), Retail ("Sensory skin. Manage touchpoints."), Professional ("Brain tissue. Manage load."), Finance ("Circulatory. Cash flow.")
- By Role cards: CSMs ("Feel accounts. Save them."), Founders ("See whole body. Decide."), RevOps ("Pipeline flow. No clots."), Operations ("Project muscle. Utilization."), Finance ("Blood flow. Collections."), Individual ("Personal context. Clear mind.")

### Industry pages (6 pages)
- Each gets: biological metaphor headline, 2 short problem bullets (~8 words each), 2 short solution lines, visual direction note
- SaaS: "Feel adoption. Protect recurring revenue."
- Services: "Sense project muscle. Protect margin."
- Manufacturing: "Feel the supply chain pulse."
- Retail: "Sense every touchpoint."
- Professional: "Feel the cognitive load."
- Finance: "Feel cash circulation."

### Role pages (6 pages)
- Each gets: headline, Before/After one-liner, KPI list
- Customer Success: "Save accounts. Accelerate renewals."
- Founders: "Awake to the whole body."
- RevOps: "Pipeline flow. No clots."
- Operations: "Project muscle. Utilization."
- Finance Leaders: "Cash circulation. Collections."
- Individual: "Personal context. Clear mind."

### Function pages (3 pages)
- Account Success: "The command center." + Before/After/Day One in minimal phrases
- Business Ops: "The operating room." + Before/After/Day One
- Personal Ops: "Your context." + Before/After/Day One

### About page
- Hero: "We built the nervous system we needed."
- Story: "Manual bridges failed. $8M save. Spine born."
- Location: "Bengaluru. Global reach."

### Why page
- "Why IntegrateWise?" / "Not a CRM. Not automation. The layer above. Unifier. Governor. Memory."

### Pricing
- Starter $49: "Connect 5 tools. See unified. Basic feel."
- Growth $99 (Most Popular): "Connect 15. AI suggests. You approve. Memory."
- Command $199: "Unlimited. Full governance. Audit all."

### Contact
- "Connect." + contact details

### All page meta descriptions updated to match the minimal tone.

## Out of scope
- Visual/animation/layout changes (handled by Task #6)
- Adding new pages or routes
- Changing component structure or layout patterns
- Backend changes
- Creating infographic or animation components

## Tasks
1. **Homepage components** — Apply exact minimal copy to hero-section, problem-section, solution-section, how-it-works-section (change from 4 steps to 6: Connect/Feel/Sense/Suggest/Approve/Learn), proof-section, and final-cta.

2. **Product pages** — Apply minimal copy to product/content.tsx and all sub-pages (workbench, twin, twin-insights, twin-operations, intelligence-layer, entity-360, connectors, truth-boundary, human-in-the-loop, security).

3. **Platform pages** — Apply minimal copy to platform/content.tsx and all sub-pages (spine, the-spine, flows, connectors, connectors-ecosystem, identities, knowledge-base, infrastructure, execution-path, security).

4. **Industry solution pages** — Apply biological metaphor headlines and minimal copy to all 6 industry content files (saas, services, manufacturing, retail, professional-services, finance). Update IndustrySolutionLayout props if needed to support the shorter content structure.

5. **Role and function pages** — Apply Before/After/KPI minimal copy to all 6 role pages and 3 function pages (account-success, business-ops, personal-ops).

6. **Solutions hub and remaining pages** — Apply minimal card descriptions to solutions/content.tsx. Apply minimal copy to about/content.tsx, why/content.tsx, ai/content.tsx, spine/content.tsx, security/content.tsx, services/content.tsx, integrations/content.tsx, contact/content.tsx, and pricing-section.tsx.

7. **Metadata descriptions** — Update all page.tsx meta description strings to match minimal copy tone.

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
