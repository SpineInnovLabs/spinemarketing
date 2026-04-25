"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export interface GatherItem {
  icon: LucideIcon;
  label: string;
  description?: string;
  color: string;
}

export function StickyGather({
  tag = "Architecture",
  heading,
  subheading,
  centerLabel,
  centerDescription,
  items,
  glowColor = "rgba(255,178,44,0.15)",
}: {
  tag?: string;
  heading: ReactNode;
  subheading?: string;
  centerLabel: string;
  centerDescription?: string;
  items: GatherItem[];
  glowColor?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gatherProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const centerScale = useTransform(scrollYProgress, [0.2, 0.45], [0.7, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const bgGlowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.3]);

  if (!items || items.length === 0) return null;

  const angleStep = (2 * Math.PI) / items.length;
  const radius = 220;

  return (
    <section ref={containerRef} className="relative bg-dark-section overflow-hidden py-32 md:py-44" style={{ position: "relative" }}>
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ background: glowColor, opacity: bgGlowOpacity }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">{tag}</p>
          <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-[44px]">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/45">{subheading}</p>
          )}
        </motion.div>

        <div className="relative mx-auto" style={{ height: 520, maxWidth: 600 }}>
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ scale: centerScale, opacity: centerOpacity }}
          >
            <div
              className="flex flex-col items-center justify-center w-[160px] h-[160px] rounded-full border border-primary/30"
              style={{
                background: "radial-gradient(circle, rgba(255,178,44,0.12) 0%, rgba(255,178,44,0.03) 70%)",
                boxShadow: "0 0 80px rgba(255,178,44,0.15), inset 0 0 40px rgba(255,178,44,0.05)",
              }}
            >
              <span className="text-[14px] font-bold text-primary tracking-[-0.02em]">{centerLabel}</span>
              {centerDescription && (
                <span className="mt-1 text-[11px] font-medium text-white/40 text-center px-4">{centerDescription}</span>
              )}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {items.map((item, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const finalX = Math.cos(angle) * radius;
            const finalY = Math.sin(angle) * radius;

            const scatterX = Math.cos(angle) * (radius * 2.5);
            const scatterY = Math.sin(angle) * (radius * 2.5);

            return (
              <GatherNode
                key={item.label}
                item={item}
                scatterX={scatterX}
                scatterY={scatterY}
                finalX={finalX}
                finalY={finalY}
                progress={gatherProgress}
              />
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, type: "spring", damping: 18, stiffness: 70 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-white/[0.14] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${item.color}18`, boxShadow: `0 0 24px ${item.color}12` }}
                >
                  {item.icon && <item.icon className="h-5 w-5" style={{ color: item.color }} />}
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white">{item.label}</h3>
              </div>
              <p className="text-[13px] font-medium leading-[1.65] text-white/45">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GatherNode({
  item,
  scatterX,
  scatterY,
  finalX,
  finalY,
  progress,
}: {
  item: GatherItem;
  scatterX: number;
  scatterY: number;
  finalX: number;
  finalY: number;
  progress: MotionValue<number>;
}) {
  const x = useTransform(progress, [0, 1], [scatterX, finalX]);
  const y = useTransform(progress, [0, 1], [scatterY, finalY]);
  const opacity = useTransform(progress, [0, 0.3], [0.2, 1]);
  const scale = useTransform(progress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-10"
      style={{ x, y, opacity, scale, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08]"
          style={{ background: `${item.color}12`, boxShadow: `0 0 30px ${item.color}10` }}
        >
          {item.icon && <item.icon className="h-6 w-6" style={{ color: item.color }} />}
        </div>
        <span className="text-[11px] font-bold text-white/60 whitespace-nowrap">{item.label}</span>
      </div>
    </motion.div>
  );
}
