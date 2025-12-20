import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section id="cta" className="bg-primary py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
            Normalize once. Render anywhere.
          </h2>
          <p className="mt-6 text-pretty text-lg text-white/90 md:text-xl">
            Cut churn 15–25% with a schema-first, AI-assisted automation layer.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/start" data-cta="start-free">
                Start Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/sales" data-cta="request-demo">
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
