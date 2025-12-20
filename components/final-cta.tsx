import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to put AI agents to work?
          </h2>
          <p className="mt-6 text-pretty text-lg text-white/90 md:text-xl">
            Book a demo to see how our agents can reduce churn and scale your CS operations without adding headcount.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group bg-white text-primary hover:bg-white/90">
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
