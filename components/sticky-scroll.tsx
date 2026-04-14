"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export interface StickyScrollItem {
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features?: string[];
  visual?: ReactNode;
}

export function StickyScroll({
  tag = "Features",
  heading,
  subheading,
  items,
}: {
  tag?: string;
  heading: ReactNode;
  subheading?: string;
  items: StickyScrollItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * items.length), items.length - 1);
    setActiveIndex(idx);
  });

  const activeItem = items[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section ref={containerRef} className="relative bg-dark-section" style={{ height: `${(items.length + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full blur-[200px]"
            animate={{ background: `radial-gradient(circle, ${activeItem.color}15, transparent 70%)` }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute right-[15%] bottom-[20%] h-[300px] w-[300px] rounded-full blur-[160px]" style={{ background: "rgba(139,92,246,0.04)" }} />
        </div>

        <div className="relative mx-auto flex h-full max-w-[1200px] items-center px-6">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary"
              >
                {tag}
              </motion.p>

              <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-[44px]">
                {heading}
              </h2>

              {subheading && (
                <p className="mt-4 max-w-md text-[15px] font-medium leading-[1.6] text-white/45">
                  {subheading}
                </p>
              )}

              <div className="mt-10 flex flex-col gap-1.5">
                {items.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={item.tag}
                      onClick={() => {
                        if (!containerRef.current) return;
                        const rect = containerRef.current.getBoundingClientRect();
                        const top = containerRef.current.offsetTop;
                        const totalH = rect.height;
                        const targetScroll = top + (i / items.length) * totalH;
                        window.scrollTo({ top: targetScroll, behavior: "smooth" });
                      }}
                      className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                        isActive
                          ? "border border-white/[0.1] bg-white/[0.06]"
                          : "border border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
                          isActive ? "scale-110" : "opacity-50"
                        }`}
                        style={{ background: isActive ? `${item.color}20` : "rgba(255,255,255,0.06)" }}
                      >
                        <item.icon className="h-4 w-4" style={{ color: isActive ? item.color : "rgba(255,255,255,0.4)" }} />
                      </div>
                      <div>
                        <span className={`text-[13px] font-semibold tracking-[-0.02em] transition-colors ${isActive ? "text-white" : "text-white/40"}`}>
                          {item.tag}
                        </span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="sticky-scroll-indicator"
                          className="ml-auto h-1.5 w-1.5 rounded-full"
                          style={{ background: item.color }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", damping: 22, stiffness: 80 }}
                className="w-full"
              >
                {activeItem.visual ? (
                  activeItem.visual
                ) : (
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01]">
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, transparent, ${activeItem.color}60, transparent)` }}
                    />
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{ background: `${activeItem.color}18`, boxShadow: `0 0 40px ${activeItem.color}15` }}
                        >
                          <ActiveIcon className="h-6 w-6" style={{ color: activeItem.color }} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: `${activeItem.color}90` }}>
                            {activeItem.tag}
                          </p>
                          <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-white">
                            {activeItem.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-[14px] font-medium leading-[1.65] text-white/50 mb-6">
                        {activeItem.description}
                      </p>

                      {activeItem.features && activeItem.features.length > 0 && (
                        <div className="space-y-2.5">
                          {activeItem.features.map((feat, fi) => (
                            <motion.div
                              key={fi}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fi * 0.08 }}
                              className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5"
                            >
                              <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: activeItem.color }} />
                              <span className="text-[13px] font-medium text-white/55">{feat}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
          {items.map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 24 : 8,
                background: i === activeIndex ? activeItem.color : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
