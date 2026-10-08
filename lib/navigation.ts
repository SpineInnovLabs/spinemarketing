import type { LucideIcon } from "lucide-react";
import { BookOpen, Building2, Code2, Compass, FileText, History, Layers3, Mail, Network, Newspaper, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { getSolutionNavItems } from "@/lib/solution-nav";
import { SPINE_WORKSPACE_APEX } from "@/lib/site-urls";
import type { ConnectorNavMark, KindNavMark } from "@/lib/integration-nav";

export type NavItemChild = { name: string; href: string; icon: LucideIcon; desc?: string; external?: boolean };
export type NavGroup = { label: string; items: NavItemChild[] };
export type NavLink = { name: string; href: string; external?: boolean };
export type NavItem = {
  label: string; href: string; items?: NavItemChild[]; groups?: NavGroup[];
  featured?: NavItemChild; supporting?: NavGroup; menuFooter?: NavLink[];
  connectorMarks?: ConnectorNavMark[]; kindMarks?: KindNavMark[]; external?: boolean;
};

export const DOCS_URL = "https://docs.spineworkspace.com/";

export const headerNavigation: NavItem[] = [
  {
    label: "Company", href: "/company",
    items: [
      { name: "About Spine InnovLabs", href: "/company", icon: Building2, desc: "Our vision, story and principles" },
      { name: "Why we build", href: "/about", icon: Compass, desc: "The enterprise integration problem behind our work" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Connect with our team" },
    ],
  },
  {
    label: "Technology", href: "/platform",
    featured: {
      name: "Spine Workspace", href: SPINE_WORKSPACE_APEX, icon: Layers3,
      desc: "Our flagship business-context workspace for humans and AI", external: true,
    },
    items: [
      { name: "Spine Fabric", href: "/platform/spine-fabric", icon: Network, desc: "Governed business context and relationships" },
      { name: "Spine Twin", href: "/twin", icon: Sparkles, desc: "Context-aware AI counterpart" },
      { name: "Governed Runtime", href: "/governance", icon: ShieldCheck, desc: "Authorization, execution, and reconciliation" },
      { name: "Connected Capabilities", href: "/integrations", icon: Workflow, desc: "Connectors, MCP, tools, and plugins" },
    ],
    menuFooter: [
      { name: "Explore the architecture", href: "/platform" },
      { name: "Visit Spine Workspace", href: SPINE_WORKSPACE_APEX, external: true },
    ],
  },
  {
    label: "Solutions", href: "/solutions",
    items: getSolutionNavItems(),
    menuFooter: [{ name: "Explore all solutions", href: "/solutions" }, { name: "Use cases", href: "/use-cases" }],
  },
  {
    label: "Insights", href: "/blog",
    items: [
      { name: "Blog", href: "/blog", icon: BookOpen, desc: "Ideas on business context and AI" },
      { name: "Research & resources", href: "/resources", icon: FileText, desc: "Architecture, thinking, and explainers" },
      { name: "Updates", href: "/updates", icon: Newspaper, desc: "Company and product updates" },
      { name: "Changelog", href: "/changelog", icon: History, desc: "Dated technical changes" },
    ],
  },
  { label: "Developers", href: "/developers" },
];

export type FooterColumn = { heading: string; links: { name: string; href: string; external?: boolean }[] };

export const footerColumns: FooterColumn[] = [
  { heading: "Company", links: [
    { name: "About", href: "/company" }, { name: "Our story", href: "/about" },
    { name: "Contact", href: "/contact" }, { name: "Portfolio", href: "/portfolio" },
  ] },
  { heading: "Our technology", links: [
    { name: "Spine Workspace", href: SPINE_WORKSPACE_APEX, external: true },
    { name: "Spine Fabric", href: "/platform/spine-fabric" },
    { name: "Spine Twin", href: "/twin" },
    { name: "Governance & Runtime", href: "/governance" },
    { name: "Integrations", href: "/integrations" },
  ] },
  { heading: "Explore", links: [
    { name: "Solutions", href: "/solutions" }, { name: "Use cases", href: "/use-cases" },
    { name: "Blog", href: "/blog" }, { name: "Resources", href: "/resources" },
    { name: "Developers", href: "/developers" },
  ] },
  { heading: "Trust & legal", links: [
    { name: "Security", href: "/security" }, { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" }, { name: "Documentation", href: DOCS_URL, external: true },
  ] },
];

export const COMPANY_TAGLINE = "Building the intelligence behind connected business. Connected systems. Shared context. Governed intelligence.";
export const PRODUCT_ONELINER = "Spine Workspace is the business-context workspace where humans and AI work together.";
