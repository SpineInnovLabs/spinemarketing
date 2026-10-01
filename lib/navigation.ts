import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Building2,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getSolutionNavItems } from "@/lib/solution-nav";

export type NavItemChild = {
  name: string;
  href: string;
  icon: LucideIcon;
  desc?: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavItemChild[];
};

export type NavItem = {
  label: string;
  href: string;
  items?: NavItemChild[];
  groups?: NavGroup[];
  external?: boolean;
};

export const DOCS_URL = "https://docs.spineworkspace.com/";

export const headerNavigation: NavItem[] = [
  {
    label: "Product",
    href: "/spineworkspace",
    items: [
      { name: "SpineWorkspace", href: "/spineworkspace", icon: Cpu, desc: "The adaptive business-context workspace" },
      { name: "Twin", href: "/twin", icon: Brain, desc: "A coworker that starts with context" },
      { name: "Business Context", href: "/business-context", icon: Layers, desc: "Shared understanding of goals, work, and evidence" },
      { name: "Adaptive Workspace", href: "/adaptive-workspace", icon: Sparkles, desc: "A workspace that adapts to the work" },
      { name: "Host Connected Environment", href: "/host-connected-environment", icon: Globe, desc: "Independent hosts, shared context" },
      { name: "Governance", href: "/governance", icon: ShieldCheck, desc: "Humans stay in control" },
      { name: "Continuity", href: "/continuity", icon: GitBranch, desc: "Work continues without rebuilding the story" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: getSolutionNavItems(),
  },
  { label: "Proof", href: "/proof" },
  { label: "Docs", href: DOCS_URL, external: true },
  {
    label: "Company",
    href: "/about",
    items: [
      { name: "About", href: "/about", icon: Building2, desc: "Why we exist" },
      { name: "Company", href: "/company", icon: Building2, desc: "Spine InnovLabs" },
      { name: "Blog", href: "/blog", icon: Sparkles, desc: "Product thinking and updates" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Talk to us" },
    ],
  },
];

export type FooterColumn = {
  heading: string;
  links: { name: string; href: string; external?: boolean }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { name: "SpineWorkspace", href: "/spineworkspace" },
      { name: "Twin", href: "/twin" },
      { name: "Business Context", href: "/business-context" },
      { name: "Governance", href: "/governance" },
      { name: "Continuity", href: "/continuity" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { name: "All Solutions", href: "/solutions" },
      { name: "Account Success", href: "/solutions/customer-success" },
      { name: "Sales", href: "/solutions/sales" },
      { name: "Finance & Business Ops", href: "/solutions/finance" },
      { name: "Founders & CXOs", href: "/solutions/founders" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { name: "Developers", href: "/developers" },
      { name: "Platform", href: "/platform" },
      { name: "Security", href: "/security" },
      { name: "Docs", href: DOCS_URL, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Company", href: "/company" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export const COMPANY_TAGLINE =
  "Spine InnovLabs builds SpineWorkspace — the adaptive business-context workspace where humans and AI work together.";

export const PRODUCT_ONELINER =
  "SpineWorkspace helps humans and AI work toward the same business goals using shared business context, adaptive capability resolution, and persistent continuity.";
