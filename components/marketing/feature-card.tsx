"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

export function FeatureCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href?: string;
  index?: number;
}) {
  const inner = (
    <BlurFade delay={index * 0.05} inView className="h-full">
      <MagicCard className="h-full" innerClassName="justify-between p-6">
        <div>
          <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#032D60] group-hover:text-[#006FE8] transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-[14px] leading-[1.65] text-[#33465B]">{description}</p>
        </div>
        {href && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#006FE8]">
            Learn more{" "}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        )}
      </MagicCard>
    </BlurFade>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
