"use client";

import React from "react";

interface ResponsiveWorkbenchScreenshotProps {
  src: string;
  alt: string;
  isMobile?: boolean;
  priority?: boolean;
  className?: string;
  maxHeight?: string;
  onClick?: () => void;
}

export function ResponsiveWorkbenchScreenshot({
  src,
  alt,
  isMobile = false,
  priority = false,
  className = "",
  maxHeight = "min(520px, 65vh)",
  onClick,
}: ResponsiveWorkbenchScreenshotProps) {
  const basePath = src.replace(/\.webp$/, "");

  if (isMobile) {
    return (
      <div
        className={`relative mx-auto max-w-[390px] overflow-hidden rounded-[2.5rem] border-[8px] border-[#1A2E46] shadow-2xl ${
          onClick ? "cursor-pointer transition-transform hover:scale-[1.01]" : ""
        } ${className}`}
        onClick={onClick}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`
              ${basePath}-390w.webp 390w,
              ${basePath}-780w.webp 780w,
              ${src} 390w
            `}
            sizes="(max-width: 480px) 100vw, 390px"
          />
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-auto w-full object-cover"
            style={{ aspectRatio: "390 / 844" }}
          />
        </picture>
      </div>
    );
  }

  return (
    <div
      className={`relative mx-auto flex w-full max-w-full items-center justify-center overflow-hidden rounded-xl border border-[#D5E5F5] bg-white shadow-sm ${
        onClick ? "cursor-pointer transition-transform hover:scale-[1.005]" : ""
      } ${className}`}
      onClick={onClick}
    >
      {/* Scrollable containment on narrow viewports <= 480px */}
      <div className="flex w-full justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-[#CCE3F5]">
        <div className="flex min-w-[440px] items-center justify-center sm:min-w-0">
          <picture className="flex w-full items-center justify-center">
            <source
              type="image/webp"
              srcSet={`
                ${basePath}-640w.webp 640w,
                ${basePath}-960w.webp 960w,
                ${basePath}-1280w.webp 1280w,
                ${basePath}-1440w.webp 1440w,
                ${basePath}-2880w.webp 2880w,
                ${src} 1440w
              `}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
            />
            <img
              src={src}
              alt={alt}
              width={1440}
              height={900}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="h-auto w-auto max-w-full object-contain aspect-[16/10]"
              style={{
                aspectRatio: "16 / 10",
                maxHeight: maxHeight,
              }}
            />
          </picture>
        </div>
      </div>
      <div className="flex sm:hidden items-center justify-between px-3 py-1 bg-[#F7FAFD] border-t border-[#E2EEF8] text-[10px] text-[#5A7391]">
        <span>← Shell Navigation</span>
        <span className="font-medium text-[#006FE8]">Scroll to explore view</span>
        <span>Twin Panel →</span>
      </div>
    </div>
  );
}
