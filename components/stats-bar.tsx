"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedStat({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const defaultStats = [
  { value: 70, suffix: "+", label: "Connectors" },
  { value: 500, suffix: "+", label: "B2B accounts managed" },
  { value: 3, suffix: "", label: "Data flows" },
  { value: 100, suffix: "%", label: "Human approval required" },
];

export function StatsBar({
  stats = defaultStats,
}: {
  stats?: { value: number; suffix?: string; prefix?: string; label: string }[];
}) {
  return (
    <section className="relative border-y border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-4"
        >
          {stats.map(({ value, suffix, prefix, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center gap-1.5 px-4 py-12 ${
                i < stats.length - 1 ? "border-r border-[#E5E5E5]" : ""
              }`}
            >
              <span className="text-[length:min(36px,var(--marketing-heading-size))] font-bold tracking-[-0.04em] text-[#032D60]">
                <AnimatedStat value={value} suffix={suffix || ""} prefix={prefix || ""} />
              </span>
              <span className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#706E6B]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
