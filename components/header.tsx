"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { headerNavigation, type NavItem, type NavItemChild } from "@/lib/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

const navigation = headerNavigation;

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
      className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-[#F3F6F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0176D3]/40"
    >
      <div
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#F3F6F9] group-hover:bg-[#E8F4FD]"
      >
        <Icon className="h-[15px] w-[15px] text-[#0176D3]" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[14px] font-semibold leading-tight text-[#032D60]">
          {item.name}
        </span>
        {item.desc && (
          <span className="text-[12px] text-[#706E6B] mt-0.5">
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
        className="overflow-hidden rounded-md border border-[#E5E5E5] bg-white p-3"
        style={{
          boxShadow: "0 8px 24px rgba(3, 45, 96, 0.08)",
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
    const linkClass =
      "rounded-md px-3 py-2 text-[14px] font-medium text-[#444] transition-colors hover:text-[#032D60] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#0176D3]/40";
    if (nav.external) {
      return (
        <a
          href={nav.href}
          className={linkClass}
          onMouseEnter={onLeave}
          target="_blank"
          rel="noopener noreferrer"
        >
          {nav.label}
        </a>
      );
    }
    return (
      <Link href={nav.href} className={linkClass} onMouseEnter={onLeave}>
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
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#0176D3]/40 ${
          isOpen ? "text-[#032D60]" : "text-[#444] hover:text-[#032D60]"
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
          className="fixed inset-0 z-40 bg-[#032D60]/20"
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
          background: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #E5E5E5",
          boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, background: "var(--gradient-primary)" }}
          suppressHydrationWarning
        />

        <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
          >
            <SpineLogo className="h-8 w-8 shrink-0 text-[#032D60]" variant="on-light" />
            <span className="text-[17px] font-semibold tracking-[-0.04em] text-[#032D60]">
              Spine<span className="text-[#0176D3]">Workspace</span>
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
            <Link href="/login" className="rounded-md px-3 py-2 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]">
              Sign in
            </Link>
            <Button className="h-9 rounded-md bg-[#0176D3] px-4 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]" asChild>
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-md p-1.5 text-[#032D60] lg:hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#0176D3]/40"
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
            className="max-h-[82vh] overflow-y-auto border-t border-[#E5E5E5] bg-white lg:hidden"
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
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <div className="flex items-center justify-between py-3">
                      {nav.external ? (
                        <a
                          href={nav.href}
                          className="text-[15px] font-semibold text-[#032D60]"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {nav.label}
                        </a>
                      ) : (
                        <Link
                          href={nav.href}
                          className="text-[15px] font-semibold text-[#032D60]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {nav.label}
                        </Link>
                      )}
                      {hasDropdown && (
                        <button
                          type="button"
                          className="rounded-md p-1.5 text-white/30 hover:text-white"
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
                            className="flex items-center gap-3 rounded-lg py-2 px-2 text-[14px] font-medium text-white/40 hover:text-white hover:bg-white/[0.04]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4 shrink-0 text-primary/60" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

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
                                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-white/40 hover:text-white hover:bg-white/[0.04]"
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
                <Link
                  href="/login"
                  className="flex h-10 items-center justify-center rounded-md border border-[#C9C9C9] text-[14px] font-semibold text-[#032D60]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Button
                  className="w-full rounded-xl font-semibold text-white"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "0 0 20px rgba(27,167,132,0.15)",
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
