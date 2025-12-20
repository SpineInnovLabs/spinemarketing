"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      id="header"
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <nav aria-label="Primary" className="container mx-auto flex h-24 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-primary" />
          <span className="text-2xl font-bold tracking-tight">IntegrateWise</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 md:flex">
          <Link
            href="#features"
            className="text-base font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#templates"
            className="text-base font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Templates
          </Link>
          <Link
            href="#pricing"
            className="text-base font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <div className="flex items-center gap-4">
            <Button size="default" variant="ghost" className="font-semibold" asChild>
              <Link href="/login" data-cta="login">
                Log in
              </Link>
            </Button>
            <Button size="default" className="font-semibold" asChild>
              <Link href="/demo" data-cta="request-demo">
                Get started
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#templates"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button className="w-full bg-transparent" variant="outline" asChild>
              <Link href="#templates" data-cta="view-templates">
                View Templates
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/demo" data-cta="request-demo">
                Get started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
