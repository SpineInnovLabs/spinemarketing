# Requirements Document

## Introduction

Align the IntegrateWise marketing website (Next.js static site on Firebase Hosting) with the official context transfer document. The site currently contains incorrect connector counts, fabricated AI assistant claims, unconfirmed compliance claims, wrong CTAs for the M1-3 founder-led phase, and missing content sections. This spec covers 16 targeted fixes and 6 content gap fills to bring every page into alignment with the source of truth.

## Glossary

- **The_Twin**: The single AI entity in IntegrateWise that reads across all three memory layers (Truth, Context, Knowledge Memory) and proposes actions. Replaces all references to "AI assistants" or "agents."
- **TruthLayer**: The governance layer that scores AI output with confidence levels, evidence chains, and source freshness. Nothing becomes knowledge without human approval through TruthLayer.
- **Three_Layers**: The three memory foundations of IntegrateWise — Truth Memory (verified data), Context Memory (human signals), and Knowledge Memory (AI session memory that persists across providers).
- **Connector_Catalog**: The full set of 70+ pre-built integrations organized into 13 categories (CRM, Support, Billing, Communication, Project Management, Knowledge, Database, Development, E-commerce, Automation, AI, Productivity, Analytics).
- **Website**: The IntegrateWise Next.js static marketing site deployed to Firebase Hosting.
- **CTA**: Call-to-action button or link on the Website.
- **M1-3_Phase**: Months 1–3 of go-to-market, a founder-led sales phase where all CTAs route to "Book a Demo" or "Join Early Access" rather than self-serve signup.
- **Proof_Stats**: The three validated metrics displayed in the proof section: "$8M" (customer protected), "70+" (systems connected), "3 layers" (intelligence layers).

## Requirements

### Requirement 1: Connector Count Correction

**User Story:** As a site visitor, I want to see the accurate number of available integrations, so that I trust the product claims.

#### Acceptance Criteria

1. WHEN the /integrations page hero is rendered, THE Website SHALL display "70+" as the connector count in the subtitle text.
2. WHEN the /integrations page metadata is generated, THE Website SHALL include "70+" in the meta description instead of "20+".
3. WHEN the /platform page step details are rendered, THE Website SHALL display "Pre-built connectors for 70+ popular tools" instead of "Pre-built connectors for 20+ popular tools".
4. WHEN the header navigation Integrations item is rendered, THE Website SHALL display "70+ integrations for the tools you use" as the description text.

### Requirement 2: AI Page Twin Rewrite — Hero

**User Story:** As a site visitor, I want to understand that IntegrateWise has one AI (The Twin), so that I have an accurate mental model of the product.

#### Acceptance Criteria

1. WHEN the /ai page hero is rendered, THE Website SHALL present The_Twin as a single AI entity that reads across Three_Layers.
2. THE Website SHALL NOT display "7 specialized AI assistants" in the /ai hero heading or subtitle.
3. WHEN the /ai page metadata is generated, THE Website SHALL describe The_Twin concept instead of "7 specialized AI assistants" in the meta description.

### Requirement 3: AI Page Twin Rewrite — Body Content

**User Story:** As a site visitor, I want to see what The Twin does (reads 3 layers, produces 10 insight types), so that I understand the AI capability.

#### Acceptance Criteria

1. WHEN the /ai page body section is rendered, THE Website SHALL replace the 7-assistant sticky scroll section with content describing The_Twin's capabilities.
2. THE Website SHALL present The_Twin as one AI that reads Three_Layers (Truth Memory, Context Memory, Knowledge Memory).
3. THE Website SHALL reference the 10 insight types The_Twin produces (risk signals, opportunity detection, relationship mapping, health scoring, trend analysis, anomaly detection, recommendation generation, forecast modeling, pattern recognition, knowledge synthesis).
4. THE Website SHALL preserve the existing approval layer section and its 4-step process unchanged.

### Requirement 4: Platform Page Twin Reference

**User Story:** As a site visitor, I want the /platform page to reference The Twin consistently, so that terminology is uniform across the site.

#### Acceptance Criteria

1. WHEN the /platform page step 03 description is rendered, THE Website SHALL use "The Twin" instead of "AI assistants" in the description text.
2. WHEN the /platform page step 03 details list is rendered, THE Website SHALL use "The Twin" instead of "AI" where it currently says "AI with full context across all your tools".

### Requirement 5: Security Page — Remove Unconfirmed Claims

**User Story:** As a site visitor, I want to see only confirmed compliance claims, so that I can trust the security posture.

#### Acceptance Criteria

1. THE Website SHALL NOT display "HIPAA" as a confirmed compliance option on the /security page.
2. WHEN the /security compliance packages card is rendered, THE Website SHALL list "GDPR" and "industry-specific regulatory requirements" without referencing HIPAA.
3. WHEN the /security data residency card is rendered, THE Website SHALL display "Coming soon" to indicate the feature is not yet available, or THE Website SHALL remove the data residency card entirely.

### Requirement 6: Proof Section Stats Correction

**User Story:** As a site visitor, I want to see validated proof metrics, so that the social proof is credible.

#### Acceptance Criteria

1. WHEN the proof section stats row is rendered, THE Website SHALL display "$8M" as the first stat with label "Customer protected".
2. WHEN the proof section stats row is rendered, THE Website SHALL display "70+" as the second stat with label "Systems connected" instead of "99.99%" with label "Uptime reliability".
3. WHEN the proof section stats row is rendered, THE Website SHALL display "3 layers" as the third stat with label "Intelligence layers" instead of "12" with label "Systems connected".

### Requirement 7: CTA Alignment for M1-3 Phase — Account Success

**User Story:** As a site visitor on the /account-success page, I want to see "Book a Demo" CTAs, so that the page matches the founder-led sales motion.

#### Acceptance Criteria

1. WHEN the /account-success bottom CTA section is rendered, THE Website SHALL display "Book a Demo" instead of "Start free" on the secondary CTA button.

### Requirement 8: CTA Alignment for M1-3 Phase — Business Ops

**User Story:** As a site visitor on the /business-ops page, I want to see "Book a Demo" CTAs, so that the page matches the founder-led sales motion.

#### Acceptance Criteria

1. WHEN the /business-ops bottom CTA section is rendered, THE Website SHALL display "Book a Demo" instead of "Start free" on the secondary CTA button.

### Requirement 9: TruthLayer Headline Update

**User Story:** As a site visitor, I want the TruthLayer section headline to match the official messaging, so that the value proposition is consistent.

#### Acceptance Criteria

1. WHEN the TruthLayer section on the homepage is rendered, THE Website SHALL display the headline "AI thinks in context. You decide what becomes knowledge." instead of "AI proposes. You decide what's true."

### Requirement 10: Platform Page Full Rebuild

**User Story:** As a site visitor, I want the /platform page to show the user-facing flow (Connect → Workspace → Twin proposes) with the backend loop (Load→Store→Think→Act→Adjust→Loop) visualized behind the scenes, so that I understand how the platform works.

#### Acceptance Criteria

1. WHEN the /platform page is rendered, THE Website SHALL present a three-step user-facing flow: Connect your tools → Work in your workspace → The Twin proposes actions.
2. WHEN the /platform page is rendered, THE Website SHALL visualize the backend processing loop (Load → Store → Think → Act → Adjust → Loop) as a background or secondary visual element.
3. THE Website SHALL use visual, minimal-text design with animations or infographics for the platform flow, not documentation-style content.
4. THE Website SHALL preserve the existing orbiting circles hero animation.

### Requirement 11: Integrations Page — Full 70+ Connector Catalog

**User Story:** As a site visitor, I want to browse the full catalog of 70+ connectors organized by category, so that I can verify my tools are supported.

#### Acceptance Criteria

1. WHEN the /integrations catalog section is rendered, THE Website SHALL display connectors organized into 13 categories (CRM, Support, Billing, Communication, Project Management, Knowledge, Database, Development, E-commerce, Automation, AI, Productivity, Analytics).
2. WHEN the /integrations catalog section is rendered, THE Website SHALL display a minimum of 70 connectors across all categories.
3. THE Website SHALL display each connector with a name, icon or logo placeholder, and a one-line description.

### Requirement 12: Pricing Page — Three-Layer Comparison Table

**User Story:** As a site visitor, I want to see how Truth Memory, Context Memory, and Knowledge Memory differ across pricing tiers, so that I understand what I get at each level.

#### Acceptance Criteria

1. WHEN the pricing section is rendered, THE Website SHALL include a comparison table showing Truth Memory, Context Memory, and Knowledge Memory capabilities per tier (Starter, Growth, Command).
2. THE Website SHALL present the comparison as a visual table or grid, not as a text list.
3. WHEN the Starter tier row is rendered, THE Website SHALL indicate Truth Memory is included, Context Memory is limited, and Knowledge Memory is not included.
4. WHEN the Growth tier row is rendered, THE Website SHALL indicate Truth Memory and Context Memory are included, and Knowledge Memory is basic.
5. WHEN the Command tier row is rendered, THE Website SHALL indicate all three layers are fully included.

### Requirement 13: Solution Pages — Industry Examples and Intelligence Breakdown

**User Story:** As a site visitor on a solution page, I want to see industry-specific examples and a three-tier intelligence breakdown, so that I understand how IntegrateWise applies to my use case.

#### Acceptance Criteria

1. WHEN the /account-success page is rendered, THE Website SHALL include at least one industry-specific example showing how The_Twin detects risk signals.
2. WHEN the /business-ops page is rendered, THE Website SHALL include at least one industry-specific example showing how The_Twin surfaces operational insights.
3. WHEN each solution page is rendered, THE Website SHALL include a visual breakdown of the Three_Layers (Truth Memory, Context Memory, Knowledge Memory) and how each layer contributes to the solution.
4. THE Website SHALL use visual, minimal-text design with animations or infographics for the intelligence breakdown, not documentation-style content.

### Requirement 14: Global Terminology Consistency

**User Story:** As a site visitor, I want consistent terminology across all pages, so that the product messaging is coherent.

#### Acceptance Criteria

1. THE Website SHALL use "The Twin" when referring to the AI entity on all pages, and SHALL NOT use "AI assistants", "agents", or "7 specialized AI assistants".
2. THE Website SHALL use "70+" when referencing the number of integrations on all pages, and SHALL NOT use "20+", "51", or any other count.
3. THE Website SHALL use "Book a Demo" or "Join Early Access" for all primary CTAs during the M1-3_Phase, and SHALL NOT use "Start free" or "Get started" as primary action CTAs.
4. THE Website SHALL NOT display internal product names (DataSentinel, ChurnShield, or similar) on any public-facing page.

### Requirement 15: Design Principle Compliance

**User Story:** As a site visitor, I want a visual, minimal-text experience with animations, so that the site feels modern and engaging.

#### Acceptance Criteria

1. WHEN new content sections are added, THE Website SHALL use the existing component patterns (arvio-card, section-heading, motion animations from framer-motion).
2. THE Website SHALL NOT introduce documentation-style content or walls of text in any new section.
3. THE Website SHALL preserve all existing animations (hero chaos animation, dashboard mockup, data flow orbiting circles, marquee) without modification.

### Requirement 16: Pricing Starter CTA Fix

**User Story:** As a site visitor on the pricing page, I want to see "Book a Demo" on the Starter tier, so that the CTA matches the M1-3 founder-led phase.

#### Acceptance Criteria

1. WHEN the Starter tier card is rendered in the pricing section, THE Website SHALL display "Book a Demo" as the CTA button text.
