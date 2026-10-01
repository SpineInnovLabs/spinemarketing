"use client";

import { getPublicSolutionBySlug } from "@/lib/solution-taxonomy";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";

export function SolutionWorkspaceFooter({ slug }: { slug: string }) {
  const solution = getPublicSolutionBySlug(slug);
  if (!solution) return null;
  return <WorkspaceProjectionCta solution={solution} />;
}
