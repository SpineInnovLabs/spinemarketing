# Solutions Section Content & Structure Edit

## What & Why
The Solutions section is too wordy — card descriptions on the main page try to do too much, and individual solution pages follow a 6-section layout that buries the value under long paragraphs before visitors have decided they care. The fix is a content and structure tighten across the whole section: shorter copy, a leaner page flow, and descriptions that lead with outcome rather than feature lists.

## Done looks like
- Every card on the main `/solutions` page has a single punchy line — the outcome, not a feature list
- Individual solution pages follow a tighter 4-section flow: Hero → Problem (3 bullets max, no intro paragraph) → What You Get (capability titles + 1-line descriptions) → Proof strip (connectors + KPIs inline, no full section heading)
- The standalone "The Solution" section is removed from both shared layouts — the hero already covers it
- The Governance section becomes a compact inline callout rather than its own full-width section
- All 6 industry pages and 6 role pages reflect the updated layout
- The overall page length for each solution page is noticeably shorter

## Out of scope
- Visual/brand changes — colours, typography, spacing, and component styles stay the same
- Adding new solution pages or removing existing ones
- Changing any URLs or routing

## Tasks
1. **Rewrite main solutions page card copy** — Shorten every `byFunction`, `byIndustry`, and `byRole` card description in `content.tsx` to one tight outcome-led line. Remove the model explainer section or condense it to a single sentence strip rather than 3 full cards.

2. **Slim down `IndustrySolutionLayout`** — Remove the standalone "The Solution" section. Collapse the Governance block into a 2-line callout inside the capabilities section (e.g. a bordered note at the bottom of the grid). Move connectors and KPIs into a compact inline strip rather than a two-column section. Result: Hero → Problem → Capabilities + Governance note → Connectors/KPIs strip.

3. **Slim down `RoleSolutionLayout`** — Same treatment: remove any section that duplicates the hero. Collapse governance into a short inline note. Tighten the focus items to title + max 1 line. Result: Hero → Focus areas + governance note → Connects/KPIs strip.

4. **Rewrite all industry page content** — For all 6 industry `content.tsx` files (SaaS, Services, Manufacturing, Retail, Professional Services, Finance): cut problem intro paragraphs, trim bullets to 3 max, shorten capability descriptions to 1 line each.

5. **Rewrite all role page content** — For all 6 role `content.tsx` files (Customer Success, Founders, RevOps, Operations, Finance Leaders, Individual): trim focus items to 1-line descriptions, shorten subheadlines if they run over 15 words.

## Relevant files
- `app/solutions/content.tsx`
- `app/solutions/_shared/IndustrySolutionLayout.tsx`
- `app/solutions/_shared/RoleSolutionLayout.tsx`
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
