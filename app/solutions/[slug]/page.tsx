import { notFound } from "next/navigation";
import {
  PUBLIC_SOLUTIONS,
  getPublicSolutionBySlug,
} from "@/lib/solution-taxonomy";
import { createFunctionalSolutionRoute } from "@/lib/create-functional-solution-route";

/** Slugs with a dedicated page.tsx. generateStaticParams covers the rest of PUBLIC_SOLUTIONS so each catalogue path is built once. */
const CUSTOM_PAGE_SLUGS = new Set([
  "customer-success",
  "finance",
  "founders",
  "individual",
  "operations",
  "revops",
  "saas",
  "services",
  "manufacturing",
  "retail",
  "professional-services",
  "finance-leaders",
]);

export function generateStaticParams() {
  return PUBLIC_SOLUTIONS
    .filter((s) => !CUSTOM_PAGE_SLUGS.has(s.slug))
    .map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = getPublicSolutionBySlug(slug);
  if (!solution || CUSTOM_PAGE_SLUGS.has(slug)) return {};
  const { metadata } = createFunctionalSolutionRoute(solution);
  return metadata;
}

export default async function DynamicSolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getPublicSolutionBySlug(slug);
  if (!solution || CUSTOM_PAGE_SLUGS.has(slug)) notFound();
  const { Page } = createFunctionalSolutionRoute(solution);
  return <Page />;
}
