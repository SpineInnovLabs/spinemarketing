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

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex] ?? items[0];
  const ActiveIcon = activeItem?.icon;

  if (!activeItem) return null;

  return (
    <section ref={containerRef} className="relative bg-[#F3F6F9]" style={{ height: `${(items.length + 1) * 100}vh`, position: "relative" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative mx-auto flex h-full max-w-[1200px] items-center px-6">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]"
              >
                {tag}
              </motion.p>

              <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[40px]">
                {heading}
              </h2>

              {subheading && (
                <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-[#444]">
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
                      className={`group flex items-center gap-3 rounded-md px-4 py-3 text-left transition-all ${
                        isActive
                          ? "border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                          : "border border-transparent hover:bg-white/60"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-all ${
                          isActive ? "scale-110 bg-[#F3F6F9]" : "opacity-60 bg-[#E5E5E5]/50"
                        }`}
                      >
                        {item.icon && <item.icon className="h-4 w-4" style={{ color: isActive ? "#0176D3" : "#706E6B" }} />}
                      </div>
                      <div>
                        <span className={`text-[13px] font-semibold tracking-[-0.02em] transition-colors ${isActive ? "text-[#032D60]" : "text-[#706E6B]"}`}>
                          {item.tag}
                        </span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="sticky-scroll-indicator"
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-[#0176D3]"
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
                  <div className="relative overflow-hidden rounded-md border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <div className="border-b border-[#E5E5E5] bg-[#F3F6F9] px-6 py-3">
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
                        {activeItem.tag}
                      </p>
                    </div>
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                          {ActiveIcon && <ActiveIcon className="h-6 w-6 text-[#0176D3]" />}
                        </div>
                        <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#032D60]">
                          {activeItem.title}
                        </h3>
                      </div>

                      <p className="text-[14px] leading-[1.65] text-[#444] mb-6">
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
                              className="flex items-center gap-3 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-4 py-2.5"
                            >
                              <div className="h-1.5 w-1.5 rounded-full shrink-0 bg-[#0176D3]" />
                              <span className="text-[13px] font-medium text-[#444]">{feat}</span>
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
                background: i === activeIndex ? "#0176D3" : "#C9C9C9",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
