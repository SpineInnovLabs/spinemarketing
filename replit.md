# IntegrateWise Marketing Site

## Overview

IntegrateWise is a Knowledge Workspace leveraging AI and a proprietary "Spine" to unify disconnected business data. It aims to solve the complexity of modern work by providing a single, intelligent layer that connects all applications and data flows. The platform offers a multi-layered architecture: a Workspace (L1) for daily operations with 12 domain-specific views, and a Cognitive Layer (L2) providing AI-powered assistance via 14 components accessible on demand.

The project's vision is to position IntegrateWise as a transformative knowledge workspace, not just another tool or platform. It streamlines business processes, enhances decision-making through cognitive intelligence, and ensures data governance via the "TruthLayer." The marketing site serves to articulate this vision, showcase the product's capabilities, and drive user engagement.

## User Preferences

I prefer clear and direct communication. When making changes, please explain the rationale and the impact on the overall system. I appreciate iterative development and prefer to review major architectural or design changes before implementation. Do not make changes to the `artifacts/mockup-sandbox/` folder.

## System Architecture

The IntegrateWise marketing site is built with **Next.js 16** using the App Router, styled with **Tailwind CSS v4**. It incorporates **Radix UI** for foundational components and **Framer Motion** for animations, providing a dynamic and engaging user experience. The site follows a **fully dark design** aesthetic, utilizing specific Tailwind tokens for consistent branding (e.g., `bg-dark-section`, `text-primary` teal accent).

**Core Architectural Concepts:**
-   **Spine (Adaptive Layer):** The intelligent data layer that unifies all connected data.
-   **Workspace (L1):** User-facing interface for daily work, featuring 12 domain-specific views and Entity 360.
-   **Cognitive Layer (L2):** AI-powered overlay accessible via Cmd+J, offering intelligent assistance.
-   **Cognitive Loop:** A 5-step process (Think → Act → Govern → Repeat → Adjust) guiding AI operations.
-   **Three Data Flows:**
    -   **Flow A (Truth/Structured):** SaaS connectors to Spine, includes a repeat loop.
    -   **Flow B (Context/Unstructured):** Docs, emails to Context Store, no repeat loop.
    -   **Flow C (AI Knowledge/Memory):** AI sessions to Memory Store via Triage Bot, no repeat loop, requires human-in-the-loop (HITL) approval for Spine writes.

**UI/UX Design Patterns:**
-   **Dark Theme:** Primary design choice with specific color palette and CSS variables for gradients and shadows.
-   **Component Library:** Utilizes shadcn/ui components (`Card`, `Button`, `Badge`, `Accordion`, etc.).
-   **Animations:** Extensive use of Framer Motion for `whileInView` effects, parallax scrolling (`useScroll`/`useTransform`), and staggered transitions.
-   **Narrative Arc on Homepage:** Sections are ordered to tell a story: Hero, Logos, Problem, Spine, Workspace, Proof, Pricing, CTA.
-   **Rich Shared Components:** Reusable components like `ComparisonSection`, `TestimonialsSection`, `BentoShowcase`, and `FeatureShowcase` ensure visual consistency and expedited content creation across various pages.
-   **Sticky Scroll/Gather:** Interactive patterns used on platform and product pages for engaging content presentation, where elements either stay pinned or converge on scroll.
-   **Dedicated Layouts:** Shared layouts for industry and role-specific solutions pages.

**Key Feature Specifications:**
-   **Comprehensive Sitemap:** Covers main pages, solutions categorized by function, industry, and role, and detailed platform/product child pages.
-   **Navigation Structure:** Uses nested dropdowns for "Platform," "Product," "Solutions," and "Company" in the header.
-   **Campaign Gallery:** Features 36 campaign creatives used for OG images and a dedicated gallery page, following a strict naming convention.
-   **Ad Creative System (Mockup Sandbox):** An internal tool for previewing 42 campaign creatives with predefined brand tokens and logo assets, proxied via `/__mockup/*`.

## External Dependencies

-   **Firebase Analytics:** Used for client-side analytics tracking (configured directly in the application).
-   **Formspree (Optional):** Placeholder for a contact form endpoint, configurable via `NEXT_PUBLIC_CONTACT_FORM_ACTION`.