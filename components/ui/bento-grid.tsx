import { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "./magic-card";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  eyebrow?: string;
  description: string;
  href?: string;
  cta?: string;
  children?: ReactNode;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(14rem,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  eyebrow,
  description,
  href,
  cta,
  children,
  ...props
}: BentoCardProps) {
  return (
    <MagicCard
      key={name}
      className={cn("group relative col-span-1 flex flex-col justify-between overflow-hidden", className)}
      innerClassName="justify-between p-6 sm:p-7"
      {...props}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-75 transition-opacity duration-300 group-hover:opacity-100">
          {background}
        </div>
      )}
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-between gap-3">
          {Icon && (
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#CCE3F5] bg-[#F0F8FF] text-[#006FE8] shadow-2xs transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
          {eyebrow && (
            <span className="rounded-full border border-[#D5E5F5] bg-[#F7FAFD] px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-[#006FE8] uppercase">
              {eyebrow}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-[length:var(--marketing-card-size)] font-semibold leading-snug tracking-[-0.02em] text-[#082B5E]">
          {name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#4E607A]">
          {description}
        </p>
        {children && <div className="mt-4">{children}</div>}
      </div>

      {href && cta && (
        <div className="relative z-10 mt-5 border-t border-[#EBF2F9] pt-3.5">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006FE8] transition-colors hover:text-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
          >
            <span>{cta}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </MagicCard>
  );
}
