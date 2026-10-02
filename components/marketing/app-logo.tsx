"use client";

import { useMemo, useState } from "react";
import { integrationLogoCandidates } from "@/lib/integration-logos";
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
  sm: { box: "h-11 w-11 rounded-[14px]", chip: "h-11 rounded-[14px] text-[12px]", img: "h-6 w-6", px: 24, label: "text-[12px]" },
  md: { box: "h-12 w-12 rounded-2xl", chip: "h-12 rounded-2xl text-[13px]", img: "h-7 w-7", px: 28, label: "text-[13px]" },
  lg: { box: "h-14 w-14 rounded-[18px]", chip: "h-14 rounded-[18px] text-[14px]", img: "h-8 w-8", px: 32, label: "text-[14px]" },
};

export function AppLogo({ name, src, size = "md", showLabel = false, bare = false, className }: AppLogoProps) {
  const candidates = useMemo(() => {
    const listed = src ? [src, ...integrationLogoCandidates(name)] : integrationLogoCandidates(name);
    return listed.filter((item, index) => Boolean(item) && listed.indexOf(item) === index);
  }, [name, src]);
  const sizes = sizeMap[size];
  const [index, setIndex] = useState(0);
  const currentSrc = candidates[index];
  const showMark = Boolean(currentSrc) && index < candidates.length;

  const mark = showMark ? (
    <img
      src={currentSrc}
      alt=""
      width={sizes.px}
      height={sizes.px}
      className={cn(sizes.img, "shrink-0 object-contain")}
      loading="lazy"
      onError={() => setIndex((prev) => prev + 1)}
    />
  ) : null;

  if (!showMark && !bare) {
    return (
      <span
        className={cn(
          "inline-flex items-center border border-[#E6EEF5] bg-white px-4 font-semibold text-[#032D60] shadow-[0_8px_18px_rgba(3,45,96,0.08)]",
          sizes.chip,
          className,
        )}
      >
        {name}
      </span>
    );
  }

  return (
    <span title={name} className={cn("inline-flex shrink-0 items-center gap-2 whitespace-nowrap", className)}>
      {bare ? (
        mark
      ) : (
        <span className={cn(sizes.box, "inline-flex items-center justify-center border border-[#E6EEF5] bg-white shadow-[0_8px_18px_rgba(3,45,96,0.08)]")}>
          {mark}
        </span>
      )}
      {showLabel && <span className={cn("font-semibold text-[#032D60]", sizes.label)}>{name}</span>}
      {!showLabel && <span className="sr-only">{name}</span>}
    </span>
  );
}
