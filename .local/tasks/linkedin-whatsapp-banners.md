# LinkedIn & WhatsApp Banners

## What & Why
Create fresh banner designs for LinkedIn and WhatsApp that match the IntegrateWise brand theme (dark background #08070E, emerald green #34D399 accent, Inter font, premium B2B SaaS aesthetic). The existing banner components in the mockup sandbox are collapsed/broken, so these are brand-new replacements built with proper fixed-pixel dimensions for each platform.

## Done looks like
- 8 total banner mockup components rendered on the canvas, all visually correct and not collapsed:
  - **LinkedIn profile banner** — 2 variants (1584×396 aspect ratio, wide panoramic layout)
  - **LinkedIn company page cover** — 2 variants (1128×191 aspect ratio, ultra-wide strip)
  - **WhatsApp status image** — 2 variants (1080×1920 aspect ratio, vertical/portrait)
  - **WhatsApp share card** — 2 variants (1080×1080 aspect ratio, square)
- All banners use the IntegrateWise brand: dark background (#08070E), emerald green (#34D399) accent, Inter font, SVG logo mark, subtle radial gradients or grid textures
- Each variant has a distinct messaging angle from the IntegrateWise value prop (e.g., "Stop being the human API", "AI finds the risk. You make the call.", "Every customer. Every tool. One screen.", "The Spine connects your apps")
- Banners include app integration logos where appropriate (HubSpot, Slack, Jira, Zendesk, Salesforce) via the existing `/__mockup/images/logos/` path
- Components render correctly at their intended aspect ratios when embedded as canvas iframes

## Out of scope
- Updating or fixing the existing broken banner components (BannerA/B/C, CoverA/B, WAShare/WAStatus/WAPromo) — these stay as-is
- Animated or interactive elements
- Export to image files (PNG/JPG)

## Tasks
1. Create 2 LinkedIn profile banner components (`LIProfileV1`, `LIProfileV2`) in `artifacts/mockup-sandbox/src/components/mockups/banners-v2/` with a 1584×396 aspect ratio layout. Each variant should use a different headline and visual composition (e.g., one text-focused with app logos strip, one with a product UI mockup card).
2. Create 2 LinkedIn company page cover components (`LICompanyV1`, `LICompanyV2`) in the same folder with a 1128×191 ultra-wide aspect ratio. These are very narrow, so keep the design minimal — logo, tagline, and accent line.
3. Create 2 WhatsApp status components (`WAStatusV1`, `WAStatusV2`) in the same folder with a 1080×1920 vertical aspect ratio. Bold, centered text with large type, app logos, and CTA button.
4. Create 2 WhatsApp share card components (`WAShareV1`, `WAShareV2`) in the same folder with a 1080×1080 square aspect ratio. Clean, balanced layout optimized for chat previews.
5. Embed all 8 components as iframes on the canvas, grouped by platform (LinkedIn group, WhatsApp group), with labels for each variant.

## Relevant files
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-assets/BannerA.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/linkedin-assets/CoverA.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/whatsapp-ads/WAShare.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/whatsapp-ads/WAStatus.tsx`
- `artifacts/mockup-sandbox/src/components/mockups/whatsapp-ads/WAPromo.tsx`
- `artifacts/mockup-sandbox/src/.generated/mockup-components.ts`
- `artifacts/mockup-sandbox/src/index.css`
