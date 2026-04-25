"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { ArrowRight } from "lucide-react";

const TOOLS = [
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Zendesk", logo: "/logos/zendesk.svg" },
  { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Intercom", logo: "/logos/intercom.svg" },
];

const RING_CONFIG = [
  { radius: 160, count: 4, speed: 35, opacity: 0.6 },
  { radius: 260, count: 5, speed: 50, opacity: 0.45 },
  { radius: 360, count: 3, speed: 65, opacity: 0.3 },
];

function SpineCore() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute w-[120px] h-[120px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,178,44,0.25) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(255,178,44,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,178,44,0.2), rgba(255,178,44,0.1))",
            border: "1px solid rgba(255,178,44,0.3)",
            boxShadow: "0 0 40px rgba(255,178,44,0.2), inset 0 0 20px rgba(255,178,44,0.1)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 3L14 25" stroke="rgba(255,178,44,0.8)" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 8L14 3L21 8" stroke="rgba(255,178,44,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14" cy="14" r="3" fill="rgba(255,178,44,0.9)" />
            <path d="M5 14H9" stroke="rgba(255,178,44,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19 14H23" stroke="rgba(255,178,44,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

function DataPulse({ fromAngle, radius, delay }: { fromAngle: number; radius: number; delay: number }) {
  const startX = Math.cos((fromAngle * Math.PI) / 180) * radius;
  const startY = Math.sin((fromAngle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full"
      style={{
        background: "rgb(255,178,44)",
        boxShadow: "0 0 8px rgba(52,211,153,0.6)",
      }}
      initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
      animate={{
        x: [startX, 0],
        y: [startY, 0],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"chaos" | "reveal">("chaos");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("reveal");
      return;
    }
    const timer = setTimeout(() => setPhase("reveal"), 1800);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (phase === "reveal") {
      window.dispatchEvent(new CustomEvent("heroPhaseChange", { detail: "reveal" }));
    }
  }, [phase]);

  const handleSkip = useCallback(() => {
    if (phase === "chaos") setPhase("reveal");
  }, [phase]);

  const toolsPerRing = useMemo(() => {
    let idx = 0;
    return RING_CONFIG.map((ring) => {
      const tools = TOOLS.slice(idx, idx + ring.count);
      idx += ring.count;
      return tools;
    });
  }, []);

  if (!mounted) {
    return <section className="relative w-full min-h-screen overflow-hidden" style={{ background: "#05070A" }} />;
  }

  const isReveal = phase === "reveal";

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden ${phase === "chaos" ? "cursor-pointer" : ""}`}
      style={{ background: "#05070A" }}
      onClick={handleSkip}
    >
      <div className="absolute inset-0 bg-grain" />

      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,178,44,0.06) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
        <div className="relative" style={{ width: "800px", height: "800px" }}>
          {RING_CONFIG.map((ring, ringIdx) => (
            <motion.div
              key={ringIdx}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
                border: `1px solid rgba(27,167,132,${isReveal ? 0.08 : 0.03})`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: ring.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {toolsPerRing[ringIdx].map((tool, toolIdx) => {
                const angle = (360 / RING_CONFIG[ringIdx].count) * toolIdx;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * ring.radius;
                const y = Math.sin(rad) * ring.radius;

                return (
                  <motion.div
                    key={tool.name}
                    className="absolute flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ring.speed,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="rounded-xl flex items-center justify-center"
                      style={{
                        width: 48,
                        height: 48,
                        background: "rgba(5,7,10,0.8)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(8px)",
                      }}
                      animate={{
                        opacity: isReveal ? ring.opacity : ring.opacity * 0.5,
                        borderColor: isReveal
                          ? "rgba(255,178,44,0.15)"
                          : "rgba(255,255,255,0.06)",
                      }}
                      transition={{ duration: 1.5 }}
                    >
                      <img
                        src={tool.logo}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="select-none"
                        style={{ width: 22, height: 22 }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}

          <SpineCore />

          {!prefersReducedMotion && isReveal &&
            Array.from({ length: 8 }).map((_, i) => (
              <DataPulse
                key={i}
                fromAngle={i * 45}
                radius={160 + (i % 3) * 100}
                delay={i * 0.6}
              />
            ))}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        animate={{ opacity: isReveal ? 1 : 0, y: isReveal ? 0 : 20 }}
        transition={{ duration: 1, delay: isReveal ? 0.3 : 0, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: isReveal ? "auto" : "none" }}
      >
        <div className="mx-auto max-w-4xl text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: isReveal ? 0.4 : 0 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#ffb22c] animate-pulse" />
            <span className="text-[13px] font-medium tracking-wide text-white/60">
              Are you the hidden cost in your own workflow?
            </span>
          </motion.div>

          <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
            {["Still", "juggling"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={isReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 60,
                  delay: isReveal ? 0.5 + i * 0.08 : 0,
                }}
                className="mr-[0.22em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            {["tools"].map((word, i) => (
              <motion.span
                key={`h-${i}`}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={isReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 60,
                  delay: isReveal ? 0.74 + i * 0.08 : 0,
                }}
                className="mr-[0.22em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            {["and", "tabs?"].map((word, i) => (
              <motion.span
                key={`g-${i}`}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={isReveal ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 60,
                  delay: isReveal ? 0.9 + i * 0.08 : 0,
                }}
                className="mr-[0.22em] inline-block text-transparent bg-clip-text" style={{ background: "linear-gradient(90deg, #ffb22c, #FFE1CC)" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: isReveal ? 1.2 : 0 }}
            className="mx-auto mt-8 max-w-xl text-[17px] sm:text-[19px] font-medium leading-[1.6] tracking-[-0.01em] text-white/40"
          >
            <span className="block text-white/60 font-semibold mb-2">Tired of resetting context every 30 minutes?</span>
            Your context is buried in Slack, lost in CRM notes, scattered across tabs — and you&apos;re the one manually connecting the dots.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: isReveal ? 1.4 : 0 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-[52px] rounded-full px-8 text-[15px] font-semibold tracking-[-0.02em] shadow-[0_0_40px_rgba(255,178,44,0.2)] transition-shadow hover:shadow-[0_0_60px_rgba(52,211,153,0.35)]"
              style={{
                background: "var(--gradient-primary)",
                border: "2px solid rgba(255,178,44,0.2)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo before your context resets again</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[52px] rounded-full border-white/10 bg-transparent px-8 text-[15px] font-semibold text-white/60 hover:border-white/25 hover:bg-white/[0.04] hover:text-white group"
              asChild
            >
              <Link href="#spine-section">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070A] to-transparent z-30 pointer-events-none" />
    </section>
  );
}
