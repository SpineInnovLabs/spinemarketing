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
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
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
  return PUBLIC_SOLUTIONS.map((solution) => ({
    name: solution.navLabel,
    href: marketingPathForSolution(solution.slug),
    icon: SOLUTION_ICONS[solution.id] ?? Briefcase,
    desc: solution.buyerSummary.slice(0, 72) + (solution.buyerSummary.length > 72 ? "…" : ""),
  }));
}
