import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto px-4 py-40 md:py-56 lg:py-64">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-balance text-6xl font-bold leading-[1.05] tracking-tighter md:text-8xl lg:text-9xl">
          Reliable Integration. <br className="hidden md:block" />
          <span className="text-primary">Accelerated Automation.</span>
        </h1>
        <p className="mx-auto mt-10 max-w-3xl text-pretty text-2xl leading-relaxed text-muted-foreground md:text-3xl">
          Normalize once. Render anywhere.
        </p>
        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Button size="lg" className="h-16 px-12 text-lg font-semibold" asChild>
            <Link href="/demo" data-cta="request-demo">
              Start for free
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-16 bg-transparent px-12 text-lg font-semibold" asChild>
            <Link href="#pricing" data-cta="view-pricing">
              Talk to sales
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
