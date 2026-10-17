import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";

export function FinalCTA() {
  return (
    <section aria-labelledby="corporate-next-step" className="relative overflow-hidden border-t border-[#D9E4F2] bg-[#EAF1FB]">
      <DotPattern className="opacity-40 text-[#006FE8]/25" />
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[32px] border border-[#CFE0F5] bg-white/85 p-8 shadow-[0_24px_64px_rgba(12,36,72,0.06)] backdrop-blur-sm sm:p-12 lg:grid-cols-[1.3fr_.7fr]">
          <BorderBeam size={240} duration={13} colorFrom="#006FE8" colorTo="#245FC8" />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#245FC8]">SPINE INNOVTECH / WHAT'S NEXT</p>
            <h2 id="corporate-next-step" className="mt-5 max-w-[780px] text-[length:min(clamp(2.4rem,4.2vw,4.2rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#0C2448]">
              Build on shared context, not disconnected tools.
            </h2>
            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.85] text-[#506783]">
              Explore how our technology connects business context, human judgment and governed AI capability. Start with the company behind the thinking or meet SpineWorkspace, our flagship product.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-stretch">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0C2B58] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2355A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2355A0]">
              Contact Spine InnovTech <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href="/product" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#B7C9E5] bg-white px-6 py-3 text-sm font-semibold text-[#0C2B58] transition-colors hover:border-[#2355A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2355A0]">
              Explore SpineWorkspace <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
