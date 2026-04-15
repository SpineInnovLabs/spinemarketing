# LinkedIn Ad Creative — IntegrateWise

## What & Why
Create a set of LinkedIn direct-response ad creatives for IntegrateWise, built around the user's provided copy template: a headline hook, key outcome metric, CTA ("Book a Demo"), and branded hashtags. The goal is scroll-stopping, image-first LinkedIn feed ads that drive demo bookings.

## Done looks like
- 3 distinct LinkedIn ad variations (1200×1200 square format) displayed as iframes on the canvas, each using a different messaging angle from the template:
  - **Pain Point angle**: "Stop being the human API" — when a ticket spikes, you're the one pulling data from 5 tabs
  - **Outcome angle**: concrete metrics (−30% MTTR, −3 h/week per rep, +12% renewal rate)
  - **Curiosity/Identity angle**: "Governed Intelligence" — AI proposes, you approve with a single click
- Each ad uses a full-bleed AI-generated hero image with text overlaid via gradient — no flat colored panels
- IntegrateWise branding: dark theme (#08070E background tones), emerald/green accents (#34D399 / #059669), Inter font, inline SVG logo
- Each ad includes: logo (top corner), bold headline (vw-sized), short subtext, and a "Book a Demo" CTA button
- All presented on the canvas via mockup-sandbox iframes

## Out of scope
- Landing page mockups
- Other platforms (Facebook, Google, TikTok) — LinkedIn only
- Carousel or Stories format — square feed ads only
- Video or animated content

## Tasks
1. Research IntegrateWise branding (logo SVG, exact colors, fonts) via web search and existing codebase to ensure brand consistency with the main site.
2. Generate 3 distinct AI hero images — each a different visual metaphor (e.g., tangled cables vs clean spine for pain/outcome, a glowing approval button for curiosity). Save to mockup-sandbox public images.
3. Build 3 ad variation components in `artifacts/mockup-sandbox/src/components/mockups/linkedin-ads/` — full-bleed image-first layout, vw/vh sizing, gradient text overlay, CTA button, matching the existing component patterns (PainV1, OutcomeV1, etc.).
4. Register preview routes and embed each ad as an iframe on the canvas (1080×1080). Present the artifact to the user.

## Relevant files
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-ads/PainV1.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-ads/OutcomeV1.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-ads/Identity.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/banners-v2/LICompanyV1.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-assets/PostA.tsx`
