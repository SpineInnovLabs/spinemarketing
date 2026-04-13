"use client";

import { Button } from "@/components/ui/button";
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
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.25), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Social proof</p>
          <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
            Proven in <span className="text-primary">real operations</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 60, delay: 0.15 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-10">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-4">
              <path
                d="M18 28H10V20C10 14.48 14.48 10 20 10V14C16.69 14 14 16.69 14 20H18V28ZM34 28H26V20C26 14.48 30.48 10 36 10V14C32.69 14 30 16.69 30 20H34V28Z"
                fill="rgba(45,212,191,0.2)"
              />
            </svg>

            <blockquote className="text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/70">
              &ldquo;We went from &lsquo;I think this account is healthy&rsquo;
              to &lsquo;Here&apos;s the score, here&apos;s why, and here&apos;s
              what to do next&rsquo; — with evidence from every system, not
              guesswork.&rdquo;
            </blockquote>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-[34px] font-bold tracking-[-0.04em] text-primary">
                  <AnimatedCounter value={12} suffix="+" />
                </div>
                <div className="mt-1 text-[13px] font-medium text-white/40">
                  Systems unified
                </div>
              </div>
              <div className="text-center">
                <div className="text-[34px] font-bold tracking-[-0.04em] text-primary">
                  <AnimatedCounter value={70} suffix="+" />
                </div>
                <div className="mt-1 text-[13px] font-medium text-white/40">
                  Integrations available
                </div>
              </div>
              <div className="text-center">
                <div className="text-[34px] font-bold tracking-[-0.04em] text-primary">
                  <AnimatedCounter value={3} /> <span className="text-[20px]">flows</span>
                </div>
                <div className="mt-1 text-[13px] font-medium text-white/40">
                  Truth &middot; Context &middot; Session Summaries
                </div>
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
          <Link
            href="/contact?intent=demo"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            See it in action
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-[15px] font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            Talk to us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
