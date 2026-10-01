"use client";

import { useEffect, useState } from "react";
import { getPublicSolutionByHost } from "@/lib/solution-taxonomy";
import { FunctionalSolutionPage } from "./functional-solution-page";
import type { PublicSolution } from "@/lib/solution-taxonomy";

/**
 * When the site is served on a host alias (e.g. sales.spineworkspace.com),
 * render that function's public landing instead of the generic homepage.
 * Path-based routes (/solutions/sales) stay unchanged.
 */
export function HostLandingGate({ children }: { children: React.ReactNode }) {
  const [solution, setSolution] = useState<PublicSolution | null | undefined>(undefined);

  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    setSolution(getPublicSolutionByHost(host) ?? null);
  }, []);

  if (solution === undefined) {
    return <div className="min-h-screen bg-white" />;
  }

  if (solution) {
    return (
      <div className="min-h-screen bg-white">
        <FunctionalSolutionPage solution={solution} />
      </div>
    );
  }

  return <>{children}</>;
}
