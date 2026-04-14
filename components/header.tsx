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
      { name: "Spine", href: "/platform/spine", icon: Database },
      { name: "Identities", href: "/platform/identities", icon: GitBranch },
      { name: "Connectors EcoSystem", href: "/platform/connectors-ecosystem", icon: Plug },
      { name: "Knowledge Base", href: "/platform/knowledge-base", icon: BookOpen },
      { name: "Security", href: "/platform/security", icon: ShieldCheck },
      { name: "Infrastructure", href: "/platform/infrastructure", icon: Server },
    ],
  },
  {
    label: "Product",
    href: "/product",
    items: [
      { name: "Workbench", href: "/product/workbench", icon: Cpu },
      { name: "Twin", href: "/product/twin", icon: Brain },
      { name: "Human in the Loop", href: "/product/human-in-the-loop", icon: UserCheck },
      { name: "Twin Insights", href: "/product/twin-insights", icon: TrendingUp },
      { name: "Twin Operations", href: "/product/twin-operations", icon: Settings2 },
      { name: "Security", href: "/product/security", icon: ShieldCheck },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        label: "By Function",
        items: [
          { name: "Account Success", href: "/account-success", icon: Users, desc: "Account 360 across every app" },
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
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "/about",
    items: [
      { name: "Why IntegrateWise", href: "/why", icon: HelpCircle, desc: "The problem we exist to solve" },
      { name: "About", href: "/about", icon: Building2, desc: "Our story and what we stand for" },
      { name: "Resources", href: "/resources", icon: BookOpen, desc: "Blog, guides, and playbooks" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch with our team" },
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
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all group-hover:scale-105"
        style={{ background: "var(--gradient-primary-icon)" }}
      >
        <Icon className="h-[15px] w-[15px] text-white" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[14px] font-semibold tracking-[-0.03em] text-foreground leading-tight">
          {item.name}
        </span>
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
        className="overflow-hidden rounded-2xl border border-border/40 bg-white/96 p-3 backdrop-blur-xl"
        style={{
          boxShadow:
            "0 20px 60px -15px rgba(0,0,0,0.12), 0 0px 0px 1px rgba(0,0,0,0.04)",
        }}
      >
        {isGrouped && nav.groups && (
          <div className="grid grid-cols-3 gap-x-2 gap-y-1">
            {nav.groups.map((group) => (
              <div key={group.label}>
                <div className="mb-1 px-3 pt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary/70">
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
        className="rounded-md px-3 py-2 text-[15px] font-medium tracking-[-0.02em] text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
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
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${
          isOpen ? "text-foreground" : "text-foreground/60 hover:text-foreground"
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
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
          onMouseEnter={handleLeave}
        />
      )}

      <motion.header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        initial={initiallyHidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
        animate={heroRevealed ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 200, mass: 0.8 }}
        style={{
          borderBottom: "1px solid rgb(240, 240, 243)",
          boxShadow: "var(--shadow-nav)",
        }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, background: "var(--gradient-primary)" }}
          suppressHydrationWarning
        />

        <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <SpineLogo className="h-8 w-8 shrink-0" variant="on-light" />
            <span className="text-[17px] font-semibold tracking-[-0.04em] text-foreground">
              Integrate<span className="text-primary">Wise</span>
            </span>
          </Link>

          {/* Desktop nav — centred */}
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

          {/* Desktop CTAs */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Button
              variant="ghost"
              className="h-[38px] rounded-xl px-4 text-[14px] font-semibold tracking-[-0.02em] text-foreground/60 hover:text-foreground hover:bg-muted"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              className="h-[38px] rounded-xl px-4 text-[14px] font-semibold tracking-[-0.02em]"
              style={{
                background: "var(--gradient-primary)",
                border: "2px solid rgba(248,248,250,0.12)",
                boxShadow: "var(--shadow-button)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-md p-1.5 lg:hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="max-h-[82vh] overflow-y-auto border-t border-border/40 bg-white lg:hidden"
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
                    className="border-b border-border/30 last:border-0"
                  >
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={nav.href}
                        className="text-[15px] font-semibold tracking-[-0.03em] text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {nav.label}
                      </Link>
                      {hasDropdown && (
                        <button
                          type="button"
                          className="rounded-md p-1.5 text-muted-foreground hover:text-foreground"
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

                    {/* Flat items */}
                    {hasDropdown && isExpanded && nav.items && (
                      <div className="mb-3 flex flex-col gap-0.5 pl-2">
                        {nav.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg py-2 px-2 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4 shrink-0 text-primary/60" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Grouped items */}
                    {hasDropdown && isExpanded && nav.groups && (
                      <div className="mb-3 flex flex-col gap-4 pl-2">
                        {nav.groups.map((group) => (
                          <div key={group.label}>
                            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-primary/60">
                              {group.label}
                            </div>
                            <div className="flex flex-col gap-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <item.icon className="h-4 w-4 shrink-0 text-primary/60" />
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
                  variant="outline"
                  className="w-full rounded-xl border-2 border-border/75 text-foreground"
                  asChild
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
                <Button
                  className="w-full rounded-xl font-semibold"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-button)",
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
