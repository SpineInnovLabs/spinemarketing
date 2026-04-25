"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  BarChart3,
  Sparkles,
  Plug,
  Brain,
  ShieldCheck,
  Building2,
  Mail,
  Cloud,
  Wrench,
  Package,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  UserCheck,
  Telescope,
  Settings2,
  Truck,
  DollarSign,
  User,
  BookOpen,
  GitMerge,
  HelpCircle,
  Database,
  Cpu,
  GitBranch,
  Eye,
  Globe,
  Server,
  Layers,
  RefreshCw,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

type NavItemChild = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
};

type NavGroup = {
  label: string;
  items: NavItemChild[];
};

type NavItem = {
  label: string;
  href: string;
  items?: NavItemChild[];
  groups?: NavGroup[];
};

const navigation: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      { name: "The Spine", href: "/platform#the-spine", icon: Layers, desc: "Where data becomes Memory" },
      { name: "How it Works", href: "/platform#how-it-works", icon: GitBranch, desc: "From tools to Digital Memory" },
      { name: "Memory", href: "/platform#memory", icon: Brain, desc: "Your growing knowledge base" },
      { name: "Connectors", href: "/platform#connectors", icon: Plug, desc: "100+ native integrations" },
      { name: "Security", href: "/platform#security", icon: ShieldCheck, desc: "Private by architecture" },
    ],
  },
  {
    label: "Product",
    href: "/product",
    items: [
      { name: "Workbench", href: "/product#workbench", icon: Cpu, desc: "Where you see and act on Memory" },
      { name: "The Twin", href: "/product#twin", icon: Brain, desc: "Connects, explains, prepares" },
      { name: "Approval", href: "/product#approval", icon: UserCheck, desc: "Nothing acts without you" },
      { name: "Reference Layer", href: "/product#reference-layer", icon: Layers, desc: "Separate memories, coherent life" },
      { name: "How it Works", href: "/product#how-it-works", icon: GitBranch, desc: "The full product loop" },
    ],
  },
  {
    label: "Your Twin",
    href: "/ai",
    items: [
      { name: "Not Usual AI", href: "/ai#not-usual-ai", icon: Brain, desc: "Governed intelligence, not a chatbot" },
      { name: "Truth You Own", href: "/ai#truth-you-own", icon: Database, desc: "Memory stays yours, AI is rented" },
      { name: "Swappable Intelligence", href: "/ai#swappable", icon: RefreshCw, desc: "Models change, Memory stays" },
      { name: "What Twin Watches", href: "/ai#what-twin-watches", icon: Eye, desc: "Connects, explains, prepares" },
      { name: "Boundaries", href: "/ai#boundaries", icon: ShieldCheck, desc: "What Twin cannot do" },
      { name: "Approval Flow", href: "/ai#approval-flow", icon: UserCheck, desc: "Nothing acts without you" },
      { name: "Audit Trail", href: "/ai#audit-trail", icon: GitBranch, desc: "Full history of every decision" },
    ],
  },
  {
    label: "Solutions",
    href: "/#solutions-section",
    groups: [
      {
        label: "By Function",
        items: [
          { name: "Account Success", href: "/account-success", icon: Users, desc: "Never miss a renewal signal" },
          { name: "Business Ops", href: "/business-ops", icon: BarChart3, desc: "The live operating picture" },
          { name: "Personal Ops", href: "/personal-ops", icon: Sparkles, desc: "Your workspace, your context" },
        ],
      },
      {
        label: "By Industry",
        items: [
          { name: "SaaS", href: "/solutions/saas", icon: Cloud, desc: "Renewals, expansion, adoption" },
          { name: "Services & Agencies", href: "/solutions/services", icon: Wrench, desc: "Projects, utilisation, billing" },
          { name: "Manufacturing & Trade", href: "/solutions/manufacturing", icon: Package, desc: "Orders, shipments, exceptions" },
          { name: "Retail & Ecommerce", href: "/solutions/retail", icon: ShoppingCart, desc: "Stock, orders, returns, support" },
          { name: "Professional Services", href: "/solutions/professional-services", icon: Briefcase, desc: "Engagements, billing, relationships" },
          { name: "Finance", href: "/solutions/finance", icon: TrendingUp, desc: "Revenue, risk, collections, cash" },
        ],
      },
      {
        label: "By Role",
        items: [
          { name: "Customer Success & TAMs", href: "/solutions/customer-success", icon: UserCheck, desc: "Save accounts, accelerate renewals" },
          { name: "Founders & CXOs", href: "/solutions/founders", icon: Telescope, desc: "Monday brief, board pack, full view" },
          { name: "Rev / Business Ops", href: "/solutions/revops", icon: Settings2, desc: "Pipeline, headcount, risk — connected" },
          { name: "Operations & Delivery", href: "/solutions/operations", icon: Truck, desc: "Projects, utilisation, exceptions" },
          { name: "Finance Leaders", href: "/solutions/finance-leaders", icon: DollarSign, desc: "Cash, collections, runway" },
          { name: "Individual Professionals", href: "/solutions/individual", icon: User, desc: "Morning brief, session memory" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/#pricing-section" },

  {
    label: "Company",
    href: "/about",
    items: [
      { name: "Why IntegrateWise", href: "/#why-born-section", icon: HelpCircle, desc: "The problem we exist to solve" },
      { name: "About", href: "/about", icon: Building2, desc: "Our story and what we stand for" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
    ],
  },
];

const ENTER_DELAY = 150;
const LEAVE_DELAY = 300;

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 22, stiffness: 300, mass: 0.8 },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

function DropdownItem({ item }: { item: NavItemChild }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-[#FFE1CC]/10 hover:bg-[#FFE1CC]/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE1CC]/40"
    >
      <div
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#1d1d1d] transition-all group-hover:border-[#FFE1CC]/20 group-hover:bg-[#FFE1CC]/10 group-hover:scale-105"
      >
        <Icon className="h-[15px] w-[15px] text-white/45 group-hover:text-[#FFE1CC]" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/75 leading-tight group-hover:text-white">
          {item.name}
        </span>
        {item.desc && (
          <span className="text-[12px] font-medium text-white/30 mt-0.5">
            {item.desc}
          </span>
        )}
      </div>
    </Link>
  );
}

function MegaDropdown({
  nav,
  menuId,
  onMouseEnter,
  onMouseLeave,
}: {
  nav: NavItem;
  menuId: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!nav.items && !nav.groups) return null;
  const isGrouped = !!nav.groups;

  return (
    <motion.div
      id={menuId}
      role="region"
      aria-label={`${nav.label} menu`}
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-full z-50 mt-2 ${isGrouped ? "left-1/2 -translate-x-1/2" : "left-0"}`}
      style={{
        minWidth: isGrouped ? "720px" : nav.items && nav.items.length >= 4 ? "460px" : "340px",
      }}
    >
      <div
        className="overflow-hidden rounded-[22px] border border-white/[0.10] p-3 backdrop-blur-2xl"
        style={{
          background: "linear-gradient(180deg, rgba(29,29,29,0.96), rgba(17,17,17,0.96))",
          boxShadow:
            "0 24px 80px -28px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px rgba(255,225,204,0.05)",
        }}
      >
        {isGrouped && nav.groups && (
          <div className="grid grid-cols-3 gap-x-2 gap-y-1">
            {nav.groups.map((group) => (
              <div key={group.label}>
                <div className="mb-1 px-3 pt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFE1CC]/65">
                  {group.label}
                </div>
                <div className="flex flex-col gap-0.5">
                  {group.items.map((item) => (
                    <DropdownItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {!isGrouped && nav.items && (
          <div
            className={
              nav.items.length >= 4 ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"
            }
          >
            {nav.items.map((item) => (
              <DropdownItem key={item.name} item={item} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function NavTrigger({
  nav,
  activeMenu,
  onEnter,
  onLeave,
}: {
  nav: NavItem;
  activeMenu: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
}) {
  const isOpen = activeMenu === nav.label;
  const menuId = `mega-${nav.label.replace(/\s+/g, "-").toLowerCase()}`;
  const hasDropdown = !!(nav.items || nav.groups);

  if (!hasDropdown) {
    return (
      <Link
        href={nav.href}
        className="rounded-full px-3.5 py-2 text-[14px] font-semibold tracking-[-0.02em] text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FFE1CC]/35"
        onMouseEnter={onLeave}
      >
        {nav.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onEnter(nav.label)}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={isOpen ? menuId : undefined}
        id={`${menuId}-trigger`}
        className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-semibold tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FFE1CC]/35 ${
          isOpen ? "bg-[#FFE1CC]/10 text-white" : "text-white/50 hover:bg-white/[0.04] hover:text-white"
        }`}
      >
        {nav.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen && (
        <MegaDropdown
          nav={nav}
          menuId={menuId}
          onMouseEnter={() => onEnter(nav.label)}
          onMouseLeave={onLeave}
        />
      )}
    </div>
  );
}

export function Header({
  initiallyHidden = false,
}: {
  initiallyHidden?: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(!initiallyHidden);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!initiallyHidden) return;
    const handler = () => setHeroRevealed(true);
    window.addEventListener("heroPhaseChange", handler);
    return () => window.removeEventListener("heroPhaseChange", handler);
  }, [initiallyHidden]);

  const clearTimers = useCallback(() => {
    if (enterTimer.current) { clearTimeout(enterTimer.current); enterTimer.current = null; }
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null; }
  }, []);

  const handleEnter = useCallback(
    (label: string) => {
      clearTimers();
      if (activeMenu && activeMenu !== label) { setActiveMenu(label); return; }
      enterTimer.current = setTimeout(() => setActiveMenu(label), ENTER_DELAY);
    },
    [activeMenu, clearTimers],
  );

  const handleLeave = useCallback(() => {
    clearTimers();
    leaveTimer.current = setTimeout(() => setActiveMenu(null), LEAVE_DELAY);
  }, [clearTimers]);

  useEffect(() => { return () => clearTimers(); }, [clearTimers]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setActiveMenu(null);
      setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const id = requestAnimationFrame(() => {
      const first = mobilePanelRef.current?.querySelector<HTMLElement>("a[href], button");
      first?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const panel = mobilePanelRef.current;
    if (!panel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = [
        ...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ].filter((el) => !el.closest("[aria-hidden='true']"));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        menuButtonRef.current?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        menuButtonRef.current?.focus();
      }
    };
    panel.addEventListener("keydown", handler);
    return () => panel.removeEventListener("keydown", handler);
  }, [mobileMenuOpen]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {activeMenu && heroRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]"
          onMouseEnter={handleLeave}
        />
      )}

      <motion.header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-50"
        initial={initiallyHidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
        animate={heroRevealed ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 200, mass: 0.8 }}
        style={{
          background: "rgba(17, 17, 17, 0.78)",
          backdropFilter: "blur(22px) saturate(1.25)",
          WebkitBackdropFilter: "blur(22px) saturate(1.25)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.28)",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ scaleX, background: "linear-gradient(90deg, transparent, #FFE1CC, transparent)" }}
          suppressHydrationWarning
        />

        <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FFE1CC]/35"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 transition-colors group-hover:border-[#FFE1CC]/25">
              <SpineLogo className="h-7 w-7 shrink-0" variant="on-dark" />
            </div>
            <span className="text-[17px] font-semibold tracking-[-0.04em] text-white">
              Integrate<span className="text-[#FFE1CC]">Wise</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((nav) => (
              <NavTrigger
                key={nav.label}
                nav={nav}
                activeMenu={activeMenu}
                onEnter={handleEnter}
                onLeave={handleLeave}
              />
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className="rounded-full px-3.5 py-2 text-[14px] font-semibold tracking-[-0.02em] text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              Contact
            </Link>
            <Button
              className="h-[40px] rounded-full px-5 text-[14px] font-semibold tracking-[-0.02em] text-[#111111] hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #FFE1CC 0%, #FFFFFF 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 14px 34px -20px rgba(255,225,204,0.75)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-xl border border-white/10 bg-[#1d1d1d] p-2 lg:hidden text-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FFE1CC]/35"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="max-h-[82vh] overflow-y-auto border-t border-white/[0.08] lg:hidden"
            style={{ background: "rgba(17, 17, 17, 0.97)", backdropFilter: "blur(22px)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col px-6 py-3">
              {navigation.map((nav) => {
                const hasDropdown = !!(nav.items || nav.groups);
                const isExpanded = mobileExpanded === nav.label;
                return (
                  <div
                    key={nav.label}
                  className="border-b border-white/[0.07] last:border-0"
                  >
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={nav.href}
                         className="text-[15px] font-semibold tracking-[-0.03em] text-white/80"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {nav.label}
                      </Link>
                      {hasDropdown && (
                        <button
                          type="button"
                           className="rounded-md p-1.5 text-white/35 hover:text-[#FFE1CC]"
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : nav.label)
                          }
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {hasDropdown && isExpanded && nav.items && (
                      <div className="mb-3 flex flex-col gap-0.5 pl-2">
                        {nav.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                             className="flex items-center gap-3 rounded-lg py-2 px-2 text-[14px] font-medium text-white/45 hover:bg-[#FFE1CC]/[0.06] hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                             <item.icon className="h-4 w-4 shrink-0 text-[#FFE1CC]/65" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {hasDropdown && isExpanded && nav.groups && (
                      <div className="mb-3 flex flex-col gap-4 pl-2">
                        {nav.groups.map((group) => (
                          <div key={group.label}>
                             <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFE1CC]/60">
                              {group.label}
                            </div>
                            <div className="flex flex-col gap-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                   className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-white/45 hover:bg-[#FFE1CC]/[0.06] hover:text-white"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                   <item.icon className="h-4 w-4 shrink-0 text-[#FFE1CC]/65" />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 flex flex-col gap-2 pb-4">
                <Button
                  className="w-full rounded-full font-semibold text-[#111111] hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #FFE1CC 0%, #FFFFFF 100%)",
                    boxShadow: "0 14px 34px -20px rgba(255,225,204,0.75)",
                  }}
                  asChild
                >
                  <Link
                    href="/contact?intent=demo"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
