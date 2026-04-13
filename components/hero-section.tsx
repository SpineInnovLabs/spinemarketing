"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

/* ─── Tool data — uses local SVGs from /public/logos/ ─── */
const TOOLS = [
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "ChatGPT", logo: "/logos/chatgpt.svg" },
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "Zendesk", logo: "/logos/zendesk.svg" },
  { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Intercom", logo: "/logos/intercom.svg" },
  { name: "Airtable", logo: "/logos/airtable.svg" },
  { name: "Asana", logo: "/logos/asana.svg" },
  { name: "Google Drive", logo: "/logos/googledrive.svg" },
  { name: "Dropbox", logo: "/logos/dropbox.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
  { name: "Grok", logo: "/logos/grok.svg" },
  { name: "Twilio", logo: "/logos/twilio.svg" },
  { name: "Postgres", logo: "/logos/postgres.svg" },
];

/* Alert badges — renewal & payment alerts included per user request */
const ALERTS = [
  "47 unread",
  "3 failed",
  "overdue!",
  "escalated",
  "12 pending",
  "@you ×14",
  "renewal due",
  "at risk",
  "stale 3d",
  "₹42k due",
  "payment overdue",
  "invoice pending",
  "renewal at risk",
  "overlap!",
];

/* AI hallucination text — barely visible, scrolling in background */
const HALLUCINATION_LINES = [
  "According to your CRM, John Smith has 3 active accounts... or was it 2?",
  "The API key expired 3 days ago. Using cached data from last Tuesday.",
  "Revenue for Q3 is approximately $4.2M (confidence: 43%)",
  "Customer sentiment: Positive (based on 1 of 47 interactions analyzed)",
  "Ticket #8912 was auto-closed. The customer replied 4 hours later.",
  "I merged the duplicate records. Turns out they were different people.",
  "The invoice was sent to john@company.com — wait, that email bounced last week",
  "The approval was auto-granted because the approver was on PTO",
];

/* ─── Position generators ─── */
function chaosCenterPositions(count: number) {
  const positions: { x: number; y: number; rot: number; scale: number }[] = [];
  const cols = Math.ceil(Math.sqrt(count * 1.6));
  const rows = Math.ceil(count / cols);
  let idx = 0;
  for (let r = 0; r < rows && idx < count; r++) {
    for (let c = 0; c < cols && idx < count; c++) {
      const cellW = 92 / cols;
      const cellH = 80 / rows;
      positions.push({
        x: 4 + c * cellW + (Math.random() - 0.5) * cellW * 0.7,
        y: 10 + r * cellH + (Math.random() - 0.5) * cellH * 0.6,
        rot: -20 + Math.random() * 40,
        scale: 0.8 + Math.random() * 0.4,
      });
      idx++;
    }
  }
  return positions;
}

function scatterEdgePositions(count: number) {
  const positions: { x: number; y: number; rot: number; scale: number }[] = [];
  const edges = [
    ...Array.from({ length: 7 }, (_, i) => ({
      x: 1 + i * 15,
      y: 2 + Math.random() * 5,
    })),
    ...Array.from({ length: 7 }, (_, i) => ({
      x: 1 + i * 15,
      y: 85 + Math.random() * 8,
    })),
    ...Array.from({ length: 5 }, (_, i) => ({
      x: 0 + Math.random() * 3,
      y: 12 + i * 16,
    })),
    ...Array.from({ length: 5 }, (_, i) => ({
      x: 93 + Math.random() * 5,
      y: 12 + i * 16,
    })),
  ];
  for (let i = 0; i < count; i++) {
    const e = edges[i % edges.length];
    positions.push({ x: e.x, y: e.y, rot: 0, scale: 0.75 });
  }
  return positions;
}

/* ─── Hallucination text row ─── */
function HallucinationRow({
  lines,
  speed,
  top,
  dimmed,
}: {
  lines: string[];
  speed: number;
  top: string;
  dimmed: boolean;
}) {
  const text = lines.join("   •   ") + "   •   " + lines.join("   •   ");
  return (
    <div
      className="absolute left-0 w-[200%] whitespace-nowrap pointer-events-none overflow-hidden transition-opacity duration-1000"
      style={{ top, opacity: dimmed ? 0 : 1 }}
    >
      <motion.div
        className="inline-block text-[10px] md:text-[11px] tracking-wide"
        style={{ color: "rgba(255,255,255,0.04)" }}
        animate={{ x: [0, -2000] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {text}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"chaos" | "reveal">("chaos");
  const [logosReady, setLogosReady] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [alertMap, setAlertMap] = useState<Record<number, string>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const maxLogos = isMobile ? 10 : TOOLS.length;
  const [chaosPos, setChaosPos] = useState<{ x: number; y: number; rot: number; scale: number }[]>([]);
  const [scatterPos, setScatterPos] = useState<{ x: number; y: number; rot: number; scale: number }[]>([]);

  useEffect(() => {
    setChaosPos(chaosCenterPositions(maxLogos));
    setScatterPos(scatterEdgePositions(maxLogos));
  }, [maxLogos]);

  useEffect(() => {
    if (!prefersReducedMotion) return;
    setPhase("reveal");
    setLogosReady(true);
    setVisibleCount(maxLogos);
  }, [prefersReducedMotion, maxLogos]);

  /* Stagger logo entrance — 60ms per logo */
  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= maxLogos) {
        clearInterval(id);
        setTimeout(() => setLogosReady(true), 300);
      }
    }, 60);
    return () => clearInterval(id);
  }, [prefersReducedMotion, maxLogos]);

  /* Auto-transition: chaos → reveal after 2.5s once logos are ready */
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (logosReady && phase === "chaos") {
      const timer = setTimeout(() => setPhase("reveal"), 2500);
      return () => clearTimeout(timer);
    }
  }, [logosReady, phase, prefersReducedMotion]);

  /* Notify header (and any listener) when hero reveals */
  useEffect(() => {
    if (phase === "reveal") {
      window.dispatchEvent(
        new CustomEvent("heroPhaseChange", { detail: "reveal" }),
      );
    }
  }, [phase]);

  /* Flash random alert badges on logos during chaos */
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (phase !== "chaos") return;
    const id = setInterval(() => {
      const toolIdx = Math.floor(Math.random() * maxLogos);
      const alertText = ALERTS[Math.floor(Math.random() * ALERTS.length)];
      setAlertMap((prev) => ({ ...prev, [toolIdx]: alertText }));
      setTimeout(() => {
        setAlertMap((prev) => {
          const copy = { ...prev };
          delete copy[toolIdx];
          return copy;
        });
      }, 1800);
    }, 400);
    return () => clearInterval(id);
  }, [phase, prefersReducedMotion]);

  /* Click to skip chaos phase */
  const handleSkip = useCallback(() => {
    if (phase === "chaos") setPhase("reveal");
  }, [phase]);

  const currentPositions = phase === "chaos" ? chaosPos : scatterPos;
  const isChaos = phase === "chaos";

  /* Split hallucination lines into rows */
  const hallucinationRows = useMemo(() => {
    const rows: string[][] = [[], [], [], [], [], []];
    HALLUCINATION_LINES.forEach((line, i) => {
      rows[i % rows.length].push(line);
    });
    return rows;
  }, []);

  if (!mounted) {
    return (
      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      />
    );
  }

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden ${isChaos ? "cursor-pointer" : ""}`}
      style={{ backgroundColor: "rgb(8, 7, 14)" }}
      onClick={handleSkip}
    >
      {/* ── Background ambient glows ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[25%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[250px]"
          animate={{
            backgroundColor: isChaos
              ? "rgba(239,68,68,0.06)"
              : "rgba(27,167,132,0.04)",
          }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[20%] w-[50vw] h-[50vw] rounded-full blur-[250px]"
          animate={{
            backgroundColor: isChaos
              ? "rgba(251,146,60,0.06)"
              : "rgba(27,167,132,0.03)",
          }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-[200px]"
          animate={{
            backgroundColor: isChaos
              ? "rgba(27,167,132,0.04)"
              : "rgba(27,167,132,0.06)",
          }}
          transition={{ duration: 2 }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      {/* ── AI Hallucination text scrolling in background ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {hallucinationRows.map((lines, i) => (
          <HallucinationRow
            key={i}
            lines={lines}
            speed={60 + i * 15}
            top={`${8 + i * 15}%`}
            dimmed={!isChaos}
          />
        ))}
      </div>

      {/* ── Floating Tool Logos ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {TOOLS.slice(0, maxLogos).map((tool, idx) => {
          if (idx >= visibleCount) return null;
          const pos = currentPositions[idx];
          if (!pos || !chaosPos[idx]) return null;
          return (
            <motion.div
              key={tool.name}
              className="absolute flex flex-col items-center"
              style={{ willChange: "transform, opacity" }}
              initial={{
                opacity: 0,
                scale: 0,
                left: `${chaosPos[idx].x}%`,
                top: `${chaosPos[idx].y}%`,
              }}
              animate={{
                opacity: isChaos ? [0.7, 1, 0.8] : 0.5,
                scale: pos.scale,
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                rotate: pos.rot,
                x: isChaos
                  ? [0, -5 + Math.random() * 10, 0, 3 - Math.random() * 6, 0]
                  : [0, -2 + Math.random() * 4, 0],
                y: isChaos
                  ? [0, -6 + Math.random() * 12, 0, 4 - Math.random() * 8, 0]
                  : [0, -3 + Math.random() * 6, 0],
              }}
              transition={{
                opacity: {
                  duration: isChaos ? 2.5 : 1.5,
                  repeat: isChaos ? Infinity : 0,
                  ease: "easeInOut",
                },
                scale: { duration: 1.2, type: "spring" },
                left: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                top: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 1.5, ease: "easeOut" },
                x: {
                  duration: isChaos
                    ? 3 + Math.random() * 2
                    : 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: isChaos
                    ? 2.5 + Math.random() * 2
                    : 9 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="relative">
                {/* Card container */}
                <motion.div
                  className="relative rounded-xl backdrop-blur-md border flex items-center justify-center overflow-hidden"
                  animate={{
                    borderColor: isChaos
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(255,255,255,0.06)",
                    width: isChaos ? 64 : 52,
                    height: isChaos ? 64 : 52,
                    backgroundColor: isChaos
                      ? "rgba(0,0,0,0.7)"
                      : "rgba(0,0,0,0.5)",
                  }}
                  transition={{ duration: 1.2 }}
                  style={{
                    boxShadow: isChaos
                      ? "0 0 40px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.5)"
                      : "0 0 16px rgba(255,255,255,0.02), 0 4px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.logo}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className="select-none"
                    style={{
                      width: isChaos ? 30 : 24,
                      height: isChaos ? 30 : 24,
                    }}
                  />
                </motion.div>

                {/* Alert badge — only during chaos phase */}
                {isChaos && alertMap[idx] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-3 -right-3 px-1.5 py-0.5 rounded-md whitespace-nowrap border shadow-lg"
                    style={{
                      backgroundColor: "#ef4444",
                      borderColor: "#ef4444",
                      color: "#fff",
                      boxShadow: "0 0 12px rgba(239,68,68,0.5)",
                      fontSize: "8px",
                      fontWeight: 700,
                    }}
                  >
                    {alertMap[idx]}
                  </motion.div>
                )}
              </div>

              {/* Tool name label */}
              <motion.span
                className="mt-1.5 uppercase tracking-widest"
                style={{
                  fontSize: "7px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                }}
                animate={{ opacity: isChaos ? 0.5 : 0.35 }}
              >
                {tool.name}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* ── Phase 1: Chaos prompt — centered overlay ── */}
      <motion.div
        className="absolute inset-0 z-[15] flex flex-col items-center justify-center pointer-events-none"
        animate={{ opacity: isChaos && logosReady ? 1 : 0 }}
        transition={{
          duration: isChaos ? 1 : 0.5,
          delay: isChaos && logosReady ? 0.4 : 0,
        }}
      >
        {/* Dark vignette behind the text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_50%_50%,rgba(8,7,14,0.85)_0%,transparent_100%)]" />

        <motion.div
          className="relative z-10 flex flex-col items-center gap-4 text-center px-4"
          animate={{ y: isChaos ? [0, -6, 0] : 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-gray-300 text-sm md:text-base tracking-wide max-w-lg font-semibold">
            Your apps don&apos;t share the full picture. Your AI doesn&apos;t
            see it either.
          </p>
          <p className="text-xs md:text-sm max-w-sm text-white/90 font-normal">
            You are the bridge. The Human API.
          </p>

          <motion.div
            className="mt-6 flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
            animate={{
              borderColor: [
                "rgba(255,255,255,0.1)",
                "rgba(27,167,132,0.4)",
                "rgba(255,255,255,0.1)",
              ],
              boxShadow: [
                "0 0 0px rgba(27,167,132,0)",
                "0 0 20px rgba(27,167,132,0.15)",
                "0 0 0px rgba(27,167,132,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <MousePointerClick className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs uppercase tracking-widest font-medium">
              Click to clear the chaos
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Phase 2: Solution reveal — headline, badge, CTAs ── */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto"
        animate={{
          opacity: phase === "reveal" ? 1 : 0,
          y: phase === "reveal" ? 0 : 30,
        }}
        transition={{
          duration: 0.8,
          delay: phase === "reveal" ? 0.3 : 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ pointerEvents: phase === "reveal" ? "auto" : "none" }}
      >
        <div className="mx-auto max-w-3xl text-center px-6 py-20">
          {/* Arvio-style badge/pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={
              phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            transition={{
              type: "spring",
              damping: 16,
              mass: 1,
              stiffness: 52,
              delay: phase === "reveal" ? 0.5 : 0,
            }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
            style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--gradient-primary-icon)" }}
            />
            <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">
              The Knowledge Workspace over the Spine
            </span>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1 className="text-[40px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]">
            {["Stop", "being", "the", "human", "API"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={
                  phase === "reveal"
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 18, filter: "blur(4px)" }
                }
                transition={{
                  type: "spring",
                  damping: 18,
                  mass: 1,
                  stiffness: 60,
                  delay: phase === "reveal" ? 0.6 + i * 0.08 : 0,
                }}
                className="mr-[0.27em] inline-block"
              >
                {word}
              </motion.span>
            ))}{" "}
            {["between", "your", "apps."].map((word, i) => (
              <motion.span
                key={`g-${i}`}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={
                  phase === "reveal"
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 18, filter: "blur(4px)" }
                }
                transition={{
                  type: "spring",
                  damping: 18,
                  mass: 1,
                  stiffness: 60,
                  delay: phase === "reveal" ? 0.6 + (5 + i) * 0.08 : 0,
                }}
                className="mr-[0.27em] inline-block text-primary"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={
              phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            transition={{
              type: "spring",
              damping: 16,
              mass: 1,
              stiffness: 52,
              delay: phase === "reveal" ? 1 : 0,
            }}
            className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          >
            IntegrateWise gives you a Knowledge Workspace over the Spine, where
            Salesforce, HubSpot, Stripe, Jira, Notion, Slack, Zendesk, Gmail,
            Shopify, QuickBooks, Intercom, GitHub, Airtable, Asana, and Google
            Drive all come together into one clear view. AI watches what&apos;s
            happening, surfaces what matters, and prepares actions — and you
            approve what actually happens.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={
              phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            transition={{
              type: "spring",
              damping: 16,
              mass: 1,
              stiffness: 52,
              delay: phase === "reveal" ? 1.2 : 0,
            }}
            className="mt-12 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
              style={{
                background: "var(--gradient-primary)",
                border: "2px solid rgba(248,248,250,0.12)",
                boxShadow: "var(--shadow-button)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-4 text-[15px] font-semibold tracking-[-0.3px] text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="#how-it-works" className="flex items-center gap-2">
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
