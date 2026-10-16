# Buyer journey and verified Workbench views — October 16, 2026

## What changed

- Home and product each have seven focused sections: product introduction, three strengths, Workbench views, workflow, solutions, differentiation and paid value.
- The default visible main content is about 650 words on home and 725 on product, including the active Workbench controls and factual provenance note. Detailed architecture remains on dedicated pages.
- The existing Ice Blue/Blue/White design, native blue sidebar, header, footer and typography tokens remain in use.
- Dashboards and Canvas are peer choices. Four fresh captures show the actual registered Customer Service & Support dashboard route, native search, draft creation and draft editing. The complete native shell/sidebar explorer, domain gallery, customer journey and genuine recorded shell walkthrough remain available.

## Starting offer

The user authorized planning and publishing a starting price. `lib/pricing.ts` is the shared contract: **Starter, US$49 per user/month, billed monthly**. Home, product, pricing metadata and structured offer use it consistently.

The offer covers the core Workbench capabilities with authorized setup and an agreed workspace scope. AI/provider usage and custom setup are scoped separately. Existing application subscriptions remain separate. The CTA starts a pricing conversation; it does not imply instant checkout, automatic billing or unlimited usage. No annual discount, trial, capacity tier or savings guarantee was introduced.

## Evidence boundaries

All captures use existing QA fixtures. Figures, readiness and host badges are not verified live customer telemetry, connection proof or completed provider effects. This qualification remains discreetly visible outside application chrome; capture-specific details are expandable.

Dashboard record/draft editing and Canvas UI Library composition are distinct. A freeform dashboard layout editor and persisted Canvas layouts are not demonstrated. The fresh dashboard captures include a separately prepared local editor/status repair on application `dev` baseline `9ad34ad`; it is tested but not merged or deployed. Exact source, patch and asset hashes are in `WORKBENCH-EDITABLE-DASHBOARD-PROVENANCE.json`. The application branch guard requires its existing integration train to finish before a new feature branch; this marketing release does not promote that application train.

## Verification

- `npm run build:cloudflare`: lint/preflight, route audit, Cloudflare configuration, typecheck, static export and artifact checks passed.
- All 80 previous exported pages retained; 73 public pages reachable from home.
- 83 generated HTML pages: 2,546 internal links/anchors checked, no missing destinations or duplicate IDs.
- 88 contextual account-entry links, 20 solution routes and 80 distinct solution feature descriptions verified.
- 85 primary captures and 439 image assets checked for provenance, references and dimensions; native, dashboard and recording hashes match their emitted artifacts.
- Browser media checks: home and product at 1440×900, 1440×800, 1280×720, 768×1024, 390×844, 320×640 and 844×390; 308 media measurements, no runtime or asset errors. Dashboard/Canvas selection, all sidebar groups, fit/actual-size dialogs, keyboard scrolling, Escape/focus restoration and recording play/seek/captions/pause passed.
- Buyer clarity checks: home, product and pricing at 1440, 390 and 320 pixels; visible monthly price, scope terms, section counts and pricing CTA verified with no horizontal overflow.
- Application repair: 47 affected tests and typecheck passed; broader application suite/lint failures match the unmodified baseline. The running repaired route passed draft reload persistence while preserving the original fixture records and blocking all non-GET browser requests.

This evidence describes local checks before release. Deployment identity and live artifact/browser checks are recorded separately by the release workflow.
