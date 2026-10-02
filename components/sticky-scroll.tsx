"use client";

import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
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

function HeadingBlock({
  tag,
  heading,
  subheading,
}: {
  tag: string;
  heading: ReactNode;
  subheading?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <>
      <motion.p
        initial={reduce ? false : { y: 10 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]"
      >
        {tag}
      </motion.p>
      <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[40px]">
        {heading}
      </h2>
      {subheading && <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-[#444]">{subheading}</p>}
    </>
  );
}

function StepBody({ item }: { item: StickyScrollItem }) {
  const Icon = item.icon;
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-md border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="border-b border-[#E5E5E5] bg-[#F3F6F9] px-6 py-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{item.tag}</p>
      </div>
      <div className="p-8 sm:p-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
            {Icon && <Icon className="h-6 w-6 text-[#0176D3]" />}
          </div>
          <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#032D60]">{item.title}</h3>
        </div>
        <p className="mb-6 text-[14px] leading-[1.65] text-[#444]">{item.description}</p>
        {item.features && item.features.length > 0 && (
          <div className="space-y-2.5">
            {item.features.map((feat, fi) => (
              <motion.div
                key={feat}
                initial={reduce ? false : { y: 8 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: reduce ? 0 : fi * 0.04 }}
                className="flex items-center gap-3 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-4 py-2.5"
              >
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0176D3]" />
                <span className="text-[13px] font-medium text-[#444]">{feat}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
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
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * items.length), items.length - 1);
    setActiveIndex(Math.max(0, idx));
  });

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex] ?? items[0];
  if (!activeItem) return null;

  if (reduce) {
    return (
      <section className="bg-[#F3F6F9] py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <HeadingBlock tag={tag} heading={heading} subheading={subheading} />
          <div className="mt-8 grid gap-4">
            {items.map((item) => (
              <div key={item.tag}>{item.visual ?? <StepBody item={item} />}</div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F3F6F9]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:hidden">
        <HeadingBlock tag={tag} heading={heading} subheading={subheading} />
        <div className="mt-8 grid gap-4">
          {items.map((item) => (
            <div key={item.tag}>{item.visual ?? <StepBody item={item} />}</div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative hidden lg:block" style={{ height: `${items.length * 72}vh` }}>
        <div className="sticky top-20 py-10">
          <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div className="flex flex-col justify-center">
              <HeadingBlock tag={tag} heading={heading} subheading={subheading} />
              <div className="mt-10 flex flex-col gap-1.5">
                {items.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={item.tag}
                      onClick={() => {
                        if (!containerRef.current) return;
                        const top = containerRef.current.offsetTop;
                        const totalH = containerRef.current.offsetHeight;
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
                          isActive ? "scale-110 bg-[#F3F6F9]" : "bg-[#E5E5E5]/50 opacity-60"
                        }`}
                      >
                        {item.icon && <item.icon className="h-4 w-4" style={{ color: isActive ? "#0176D3" : "#706E6B" }} />}
                      </div>
                      <span className={`text-[13px] font-semibold tracking-[-0.02em] transition-colors ${isActive ? "text-[#032D60]" : "text-[#706E6B]"}`}>
                        {item.tag}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="sticky-scroll-indicator"
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-[#0176D3]"
                          transition={{ duration: 0.35, ease: "easeOut" }}
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
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                {activeItem.visual ?? <StepBody item={activeItem} />}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
