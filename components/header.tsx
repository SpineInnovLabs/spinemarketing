"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";

const links = [
  { label: "Product", href: "/product" },
  { label: "How it works", href: "/product#how-it-works" },
  { label: "Security", href: "/security" },
];

export function Header({
  initiallyHidden: _initiallyHidden = false,
}: {
  initiallyHidden?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="innovtech-header">
      <div className="innovtech-nav">
        <Link
          href="/"
          className="innovtech-brand"
          aria-label="Spine InnovTech home"
          onClick={() => setOpen(false)}
        >
          <SpineLogo className="h-9 w-9" />
          <span>
            Spine<span>InnovTech</span>
          </span>
        </Link>
        <nav className="innovtech-desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="innovtech-button" href="/contact?intent=demo">
            Book a demo
          </Link>
        </nav>
        <button
          className="innovtech-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="innovtech-mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/company" onClick={() => setOpen(false)}>
            Company
          </Link>
          <Link
            className="innovtech-button"
            href="/contact?intent=demo"
            onClick={() => setOpen(false)}
          >
            Book a demo
          </Link>
        </nav>
      )}
    </header>
  );
}
