"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { integrationLogoSrc } from "@/lib/integration-logos";
import { cn } from "@/lib/utils";

type AppLogoProps = {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  bare?: boolean;
  className?: string;
  animate?: boolean;
};

const sizeMap = {
  sm: { box: "h-8 w-8", img: 18, label: "text-[12px]" },
  md: { box: "h-10 w-10", img: 22, label: "text-[13px]" },
  lg: { box: "h-12 w-12", img: 28, label: "text-[14px]" },
};

function LogoImage({ src, size, isExternal }: { src: string; size: number; isExternal: boolean }) {
  if (isExternal) {
    return <img src={src} alt="" width={size} height={size} className="h-auto w-auto max-h-[70%] max-w-[70%] object-contain" loading="lazy" />;
  }
  return <Image src={src} alt="" width={size} height={size} className="h-auto w-auto max-h-[70%] max-w-[70%] object-contain" />;
}

export function AppLogo({ name, src, size = "md", showLabel = false, bare = false, className, animate = false }: AppLogoProps) {
  const resolvedSrc = src ?? integrationLogoSrc(name);
  const isExternal = resolvedSrc.startsWith("http");
  const sizes = sizeMap[size];

  const content = (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2.5",
        animate && "transition-transform duration-200 hover:scale-[1.03]",
        className
      )}
    >
      {bare ? (
        <LogoImage src={resolvedSrc} size={sizes.img} isExternal={isExternal} />
      ) : (
        <div
          className={cn(
            sizes.box,
            "flex items-center justify-center rounded-md border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          )}
        >
          <LogoImage src={resolvedSrc} size={sizes.img} isExternal={isExternal} />
        </div>
      )}
      {showLabel && <span className={cn("font-semibold text-[#032D60]", sizes.label)}>{name}</span>}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      {content}
    </motion.div>
  );
}
