import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  FileText,
  Headphones,
  Megaphone,
  Scale,
  TrendingUp,
  User,
  UserCheck,
  Users,
  Brain,
  Telescope,
  Code2,
  Wallet,
} from "lucide-react";
import {
  getPrimaryWorkspaceHost,
  PUBLIC_SOLUTIONS,
  workspaceUrl,
} from "@/lib/solution-taxonomy";
import type { NavItemChild } from "@/lib/navigation";

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  "customer-success": UserCheck,
  finance: Wallet,
  sales: TrendingUp,
  marketing: Megaphone,
  content: FileText,
  "customer-support": Headphones,
  "product-engineering": Code2,
  individual: User,
  "human-resources": Users,
  legal: Scale,
  founders: Telescope,
  memoryandknowledge: Brain,
};

export function getSolutionNavItems(): NavItemChild[] {
  return PUBLIC_SOLUTIONS.map((solution) => {
    const primary = getPrimaryWorkspaceHost(solution);
    return {
      name: solution.navLabel,
      href: workspaceUrl(primary.host),
      icon: SOLUTION_ICONS[solution.id] ?? Briefcase,
      desc: solution.buyerSummary,
      external: true,
    };
  });
}
