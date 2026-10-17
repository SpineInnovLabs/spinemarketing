"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagicCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "article" | "div";
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
  innerClassName?: string;
}

export function MagicCard({
  as: Component = "article",
  children,
  className,
  innerClassName,
  gradientSize = 240,
  gradientColor = "rgba(0, 111, 232, 0.08)",
  gradientOpacity = 1,
  gradientFrom = "#006FE8",
  gradientTo = "#38BDF8",
  ...props
}: MagicCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <Component
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "group relative flex overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white text-[#082B5E] shadow-[0_4px_18px_-4px_rgba(0,111,232,0.06)] transition-all duration-300 hover:border-[#006FE8] hover:shadow-[0_14px_34px_-10px_rgba(0,111,232,0.14)]",
        className
      )}
      {...props}
    >
      <div className={cn("relative z-10 flex w-full flex-col", innerClassName)}>
        {children}
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize * 0.8}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}22, ${gradientTo}12, transparent 100%)
          `,
        }}
      />
    </Component>
  );
}
