import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Documentation | IntegrateWise",
  description: "Set up connectors, configure your workspace, and use AI features.",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[1100px] px-6 pt-[140px] pb-24 md:px-16">
          <h1 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[44px]">Documentation</h1>
          <p className="mt-4 max-w-xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            Everything you need to get started and get the most from IntegrateWise.
          </p>
          <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-12 text-center">
            <p className="text-[17px] font-semibold tracking-[-0.03em]">Coming soon</p>
            <p className="mt-2 text-[15px] font-medium text-muted-foreground">Documentation is being written. In the meantime, <a href="mailto:connect@integratewise.ai" className="text-primary hover:underline">reach out</a> and we&apos;ll help you directly.</p>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
