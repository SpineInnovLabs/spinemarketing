import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Blog | IntegrateWise",
  description: "Insights on connected workspaces, AI governance, and operational intelligence.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[1100px] px-6 pt-[140px] pb-24 md:px-16">
          <h1 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[44px]">Blog</h1>
          <p className="mt-4 max-w-xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            Insights on connected workspaces, AI that waits for your approval, and how teams are fixing their morning routines.
          </p>
          <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-12 text-center">
            <p className="text-[17px] font-semibold tracking-[-0.03em]">Coming soon</p>
            <p className="mt-2 text-[15px] font-medium text-muted-foreground">We&apos;re writing our first posts. Check back shortly.</p>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
