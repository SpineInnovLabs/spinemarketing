"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(ease * value));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function ProofSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[600px] w-[700px] -translate-x-1/2 rounded-full opacity-15 blur-[200px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            Social proof
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Proven in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">real operations</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 60, delay: 0.15 }}
          className="mx-auto mt-16 md:mt-20 max-w-3xl"
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-primary/25 via-transparent to-primary/10">
            <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ background: "#05070A" }}>
              <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full opacity-20 blur-[60px]" style={{ background: "rgba(52,211,153,0.3)" }} />
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative mb-4">
                <path
                  d="M18 28H10V20C10 14.48 14.48 10 20 10V14C16.69 14 14 16.69 14 20H18V28ZM34 28H26V20C26 14.48 30.48 10 36 10V14C32.69 14 30 16.69 30 20H34V28Z"
                  fill="url(#quoteGrad)"
                />
                <defs>
                  <linearGradient id="quoteGrad" x1="10" y1="10" x2="36" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#059669" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
              </svg>

              <blockquote className="relative text-base font-medium leading-relaxed text-white/70">
                &ldquo;We went from &lsquo;I think this account is healthy&rsquo;
                to &lsquo;Here&apos;s the score, here&apos;s why, and here&apos;s
                what to do next&rsquo; — with evidence from every system, not
                guesswork.&rdquo;
              </blockquote>

              <Separator className="mt-8 bg-white/[0.08]" />

              <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
                {[
                  { value: 12, suffix: "+", label: "Systems unified" },
                  { value: 70, suffix: "+", label: "Integrations available" },
                  { value: 3, suffix: "", label: "Truth · Context · Session Summaries", extra: " flows" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[34px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      {stat.extra && <span className="text-xl">{stat.extra}</span>}
                    </div>
                    <div className="mt-1 text-xs font-medium text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button size="lg" className="h-12 rounded-full px-7 text-sm font-semibold shadow-[0_0_30px_rgba(52,211,153,0.2)]" asChild>
            <Link href="/contact?intent=demo">Book a demo</Link>
          </Button>
          <Button variant="outline" size="lg" className="h-12 rounded-full border-white/15 px-6 text-sm font-semibold text-white/70 hover:border-white/30 hover:text-white" asChild>
            <Link href="/platform/how-it-works">See how it works</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
