# Bug Fixes, Sticky Scroll Stability & SEO

## What & Why
The site has several runtime errors and SEO gaps that need fixing together. The `/platform/how-it-works` page intermittently crashes with a 500 error ("Element type is invalid: expected a string but got undefined"), multiple pages show hydration mismatch warnings, and the static sitemap is stale and missing 25+ actual routes. SEO metadata is inconsistent — many pages lack canonical URLs, structured data is limited to a single Organization block, and the sitemap doesn't reflect the real site structure.

## Done looks like
- Zero 500 errors across all pages — every route renders without crashing
- No hydration mismatch warnings in the browser console
- `data-scroll-behavior="smooth"` attribute on `<html>` element to eliminate the Next.js scroll warning
- Scroll-container positioning warnings resolved
- Dynamic sitemap generated from the actual app routes (not a manually maintained XML file), including `lastmod` dates
- Every page has its own canonical URL via `alternates.canonical` in its metadata export
- Page-specific structured data (JSON-LD) added where appropriate — SoftwareApplication on the product/platform pages, FAQPage on pricing, WebPage with breadcrumbs on sub-pages
- Open Graph title/description/image set explicitly on every page that currently relies on the layout default
- `robots.txt` points to the new dynamic sitemap URL

## Out of scope
- Programmatic SEO / template-based page generation at scale
- Internationalization / hreflang
- Google Search Console setup or verification
- Core Web Vitals optimization beyond the fixes listed above
- Blog SEO (dynamic `generateMetadata` already exists for blog posts)

## Tasks
1. **Fix the /platform/how-it-works crash** — Debug the intermittent 500 error. Verify all Lucide icon imports resolve correctly, ensure the `StickyGather` and `StickyScroll` components handle edge cases (empty items, undefined icons) gracefully with runtime guards, and confirm the page renders consistently on both server and client.

2. **Fix hydration mismatches** — Audit components that use browser-only APIs (`window`, `Date.now()`, `Math.random()`, `matchMedia`) during server rendering. Wrap them in `useEffect` or use `suppressHydrationWarning` only where appropriate. Fix any dynamic class or style generation that differs between server and client.

3. **Fix scroll-related warnings** — Add `data-scroll-behavior="smooth"` to the `<html>` element in the root layout. Ensure all scroll-tracking containers (used by `StickyScroll`, `StickyGather`, `StickyScrollReveal`) have `position: relative` on their parent containers to resolve the scroll offset warning.

4. **Generate dynamic sitemap** — Replace the static `public/sitemap.xml` with a Next.js App Router `app/sitemap.ts` that auto-discovers all routes and includes `lastmod` timestamps. Update `robots.txt` to reference the new sitemap path.

5. **Add canonical URLs to every page** — Add `alternates: { canonical: "/path" }` to the metadata export of every page that doesn't already have one. Ensure sub-pages like `/platform/how-it-works`, `/product/approval-gate-twin`, all `/solutions/*` pages, etc. each declare their own canonical.

6. **Expand structured data** — Add page-specific JSON-LD beyond the global Organization block: SoftwareApplication on the main product page, FAQPage schema on the pricing page if FAQ content exists, and BreadcrumbList schema on all inner pages so Google shows breadcrumb trails in search results.

7. **Ensure all pages have explicit OG metadata** — Review every page's metadata export. Any page that only has `title` and `description` (relying on the layout fallback for OG image) should get explicit `openGraph` with a page-specific title and description at minimum.

## Relevant files
- `app/layout.tsx`
- `app/platform/how-it-works/page.tsx`
- `app/platform/how-it-works/sticky-sections.tsx`
- `app/platform/how-it-works/content.tsx`
- `components/sticky-scroll.tsx`
- `components/sticky-gather.tsx`
- `components/ui/sticky-scroll-reveal.tsx`
- `public/sitemap.xml`
- `public/robots.txt`
- `app/page.tsx`
- `app/product/page.tsx`
- `app/platform/page.tsx`
- `app/pricing/page.tsx`
- `app/solutions/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/why/page.tsx`
- `app/security/page.tsx`
- `app/services/page.tsx`
- `app/solutions/founders/page.tsx`
- `app/solutions/customer-success/page.tsx`
- `app/solutions/saas/page.tsx`
- `app/solutions/revops/page.tsx`
- `app/solutions/finance-leaders/page.tsx`
- `app/solutions/operations/page.tsx`
- `app/solutions/manufacturing/page.tsx`
- `app/solutions/retail/page.tsx`
- `app/solutions/professional-services/page.tsx`
- `app/solutions/services/page.tsx`
- `app/solutions/individual/page.tsx`
- `app/solutions/finance/page.tsx`
- `app/product/how-it-works/page.tsx`
- `app/product/approval-gate-twin/page.tsx`
- `app/product/the-adaptive-workspace/page.tsx`
- `app/product/security/page.tsx`
- `app/platform/integrations/page.tsx`
- `app/platform/the-adaptive-spine/page.tsx`
- `app/platform/infrastructure/page.tsx`
- `app/platform/security/page.tsx`
