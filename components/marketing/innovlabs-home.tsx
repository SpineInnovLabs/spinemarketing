"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Database,
  FileText,
  Flag,
  Headphones,
  MessageCircle,
  MoreHorizontal,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const sources = [
  {
    title: "Account updates",
    detail: "Latest activity and key changes",
    icon: FileText,
    evidence:
      "The account team has gathered current customer context and the latest relationship updates for this example review.",
  },
  {
    title: "Support history",
    detail: "Open and resolved requests",
    icon: Headphones,
    evidence:
      "Review recent support conversations alongside open questions before deciding the next customer action.",
  },
  {
    title: "Meeting notes",
    detail: "Recent discussions and action items",
    icon: CalendarDays,
    evidence:
      "Customer commitments and agreed follow-ups stay beside the account evidence so the team can review them together.",
  },
];

function DemoButtons({ arrow = false }: { arrow?: boolean }) {
  return (
    <div className="innovtech-actions">
      <Link href="/contact?intent=demo" className="innovtech-button">
        Book a demo
      </Link>
      <Link
        href="#how-it-works"
        className="innovtech-button innovtech-button-secondary"
      >
        See how it works {arrow && <ArrowRight size={19} />}
      </Link>
    </div>
  );
}

function WorkspaceSummary({ onReview }: { onReview: () => void }) {
  return (
    <div className="innovtech-summary">
      <div className="innovtech-summary-header">
        <span className="innovtech-icon-circle">
          <Target size={27} />
        </span>
        <div>
          <p className="innovtech-small-label">Example workspace</p>
          <h2>Customer onboarding</h2>
        </div>
        <button className="innovtech-status" onClick={onReview}>
          <CheckCircle2 size={18} />
          Ready for your review
        </button>
      </div>
      <div className="innovtech-summary-body">
        <div className="innovtech-summary-goal">
          <Flag size={21} />
          <div>
            <p className="innovtech-small-label">Goal</p>
            <strong>Prepare the next step</strong>
          </div>
        </div>
        <div className="innovtech-summary-evidence">
          <p className="innovtech-small-label">Evidence</p>
          <div className="innovtech-evidence-items">
            {[
              {
                icon: FileText,
                title: "Customer context",
                detail: "3 sources",
              },
              {
                icon: MessageCircle,
                title: "Recent decisions",
                detail: "2 mentions",
              },
              {
                icon: CheckCircle2,
                title: "Next action",
                detail: "1 suggestion",
              },
            ].map(({ icon: Icon, title, detail }) => (
              <button key={title} onClick={onReview}>
                <span className="innovtech-icon-circle">
                  <Icon size={20} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="innovtech-collaborators">
          <span>
            <MousePointer2 size={30} fill="currentColor" />
            <b>You</b>
          </span>
          <span>
            <MousePointer2 size={30} fill="currentColor" />
            <b>Twin</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export function RenewalReview() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [reviewing, setReviewing] = useState(false);
  return (
    <div
      className="innovtech-renewal"
      aria-label="Interactive example renewal review"
    >
      <div className="innovtech-renewal-title">
        <div>
          <h3>Renewal review</h3>
          <p>Example workspace</p>
        </div>
        <MoreHorizontal size={25} aria-hidden="true" />
      </div>
      <div className="innovtech-renewal-content">
        <div className="innovtech-work-goal">
          <span className="innovtech-icon-circle">
            <Target size={35} />
          </span>
          <div>
            <p>Work goal</p>
            <strong>Prepare the customer review</strong>
          </div>
        </div>
        <div className="innovtech-review-people">
          <div>
            <Image
              src="/images/maya-account-lead.png"
              alt="Maya, example account lead"
              width={40}
              height={40}
            />
            <span>
              <b>Maya</b> · Account lead
            </span>
          </div>
          <div>
            <span className="innovtech-icon-circle">
              <Sparkles size={23} />
            </span>
            <span>
              <b>Twin</b> · Context ready
            </span>
          </div>
        </div>
        <div className="innovtech-account">
          <div className="innovtech-account-heading">
            <span className="innovtech-icon-circle">
              <Building2 size={27} />
            </span>
            <div>
              <h4>Northstar Labs</h4>
              <p>Customer · Renewal in 45 days</p>
            </div>
          </div>
          <div className="innovtech-source-list">
            {sources.map(({ title, detail, icon: Icon, evidence }) => (
              <div key={title}>
                <button
                  className="innovtech-source"
                  onClick={() => setExpanded(expanded === title ? null : title)}
                  aria-expanded={expanded === title}
                >
                  <span className="innovtech-icon-circle">
                    <Icon size={23} />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                  <ChevronDown
                    size={17}
                    className={expanded === title ? "rotate-180" : ""}
                  />
                </button>
                {expanded === title && (
                  <p className="innovtech-source-detail">{evidence}</p>
                )}
              </div>
            ))}
          </div>
          <div className="innovtech-twin-note">
            <span className="innovtech-icon-circle">
              <Sparkles size={25} />
            </span>
            <div>
              <strong>
                I brought the latest updates together for your review.
              </strong>
              <p>
                Sources: account activity, support history, and recent meetings.
              </p>
            </div>
          </div>
        </div>
        <button
          className="innovtech-review-action"
          onClick={() => setReviewing(!reviewing)}
          aria-expanded={reviewing}
        >
          <span className="innovtech-icon-circle innovtech-icon-navy">
            <Check size={23} />
          </span>
          <span>
            <strong>Review next step</strong>
            <small>
              Identify risks, confirm plan, and share with customer.
            </small>
          </span>
          <span className="innovtech-status">
            {reviewing ? "Review in progress" : "Awaiting your decision"}
          </span>
        </button>
        {reviewing && (
          <div className="innovtech-review-detail" role="status">
            <strong>Your judgment comes first.</strong>
            <p>
              Review the source evidence above, resolve open questions, and
              confirm the next step with your team. This example does not send
              messages or take action on customer records.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function InnovLabsHome() {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!summaryOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const controls =
      dialogRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
    controls?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSummaryOpen(false);
      if (event.key !== "Tab" || !controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [summaryOpen]);
  return (
    <div className="innovtech-page">
      <section className="innovtech-hero" aria-labelledby="hero-title">
        <div className="innovtech-hero-main">
          <div className="innovtech-hero-copy">
            <p className="innovtech-eyebrow">THE BUSINESS-CONTEXT WORKSPACE</p>
            <h1 id="hero-title">
              Move business
              <br />
              goals forward.
              <br />
              Together.
            </h1>
            <p className="innovtech-hero-description">
              People and their Twin work from the same business context—across
              the tools your team already uses.
            </p>
            <DemoButtons />
            <p className="innovtech-governance">
              Humans govern the business. AI helps the business work.
            </p>
          </div>
          <div className="innovtech-hero-art">
            <Image
              src="/images/connected-business-context.png"
              alt="Customers, goals, work, decisions, evidence and outcomes connected through a shared business context"
              width={1000}
              height={800}
              priority
            />
          </div>
        </div>
        <WorkspaceSummary onReview={() => setSummaryOpen(true)} />
      </section>

      <section
        className="innovtech-product"
        id="product"
        aria-labelledby="product-heading"
      >
        <div className="innovtech-product-copy">
          <p className="innovtech-eyebrow">
            SPINE WORKSPACE BY SPINE INNOVTECH
          </p>
          <h2 id="product-heading">
            Bring people, AI, and business context into the same workspace.
          </h2>
          <p className="innovtech-hero-description">
            Connect the tools you already use, so humans and AI can understand
            what matters, coordinate work, and move business goals forward.
          </p>
          <DemoButtons arrow />
          <Link
            href="/product"
            className="innovtech-text-link innovtech-product-details-link"
          >
            Explore product details and features <ArrowRight size={18} />
          </Link>
          <p className="innovtech-governance">
            Humans govern the business. AI helps the business work.
          </p>
        </div>
        <RenewalReview />
      </section>

      <section id="how-it-works" className="innovtech-section">
        <p className="innovtech-eyebrow">SHARED CONTEXT. COORDINATED WORK.</p>
        <h2>
          A more connected business.
          <br />
          One thoughtful next step at a time.
        </h2>
        <p className="innovtech-section-intro">
          Your systems hold the information. Spine brings the relevant context
          together so people and AI can work from the same understanding.
        </p>
        <div className="innovtech-feature-grid">
          {[
            {
              icon: Database,
              title: "Connect the context",
              body: "Bring customer records, work, conversations, and goals into view alongside their source evidence.",
            },
            {
              icon: Users,
              title: "Work together",
              body: "People and their Twin gather understanding, prepare useful next steps, and keep decisions connected to the work.",
            },
            {
              icon: ShieldCheck,
              title: "Keep people in control",
              body: "Review the evidence, make the decision, and authorize consequential actions. Access is always distinct from permission.",
            },
          ].map(({ icon: Icon, title, body }, i) => (
            <article key={title}>
              <span className="innovtech-icon-circle">
                <Icon size={26} />
              </span>
              <p className="innovtech-step-number">0{i + 1}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="innovtech-company-section">
        <div>
          <p className="innovtech-eyebrow">
            THE COMPANY BEHIND SPINE WORKSPACE
          </p>
          <h2>Spine InnovTech.</h2>
          <p>
            We build intelligent, context-aware technology for connected
            business. Grounded in enterprise integration and AI engineering, our
            work helps people see the full picture and carry informed decisions
            forward.
          </p>
          <Link href="/company" className="innovtech-text-link">
            Meet Spine InnovTech <ArrowRight size={18} />
          </Link>
        </div>
        <div className="innovtech-company-links">
          <Link href="/platform">
            Explore the technology <ArrowRight size={20} />
          </Link>
          <Link href="/solutions">
            Find your use case <ArrowRight size={20} />
          </Link>
          <Link href="/security">
            Understand our approach to security <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      <section className="innovtech-final-section">
        <p className="innovtech-eyebrow">LET’S MOVE WORK FORWARD</p>
        <h2>
          A shared picture.
          <br />A better next step.
        </h2>
        <p>See what a business-context workspace could mean for your team.</p>
        <Link className="innovtech-button" href="/contact?intent=demo">
          Book a demo <ArrowRight size={18} />
        </Link>
      </section>

      {summaryOpen && (
        <div
          className="innovtech-dialog-backdrop"
          onClick={() => setSummaryOpen(false)}
        >
          <section
            ref={dialogRef}
            className="innovtech-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-dialog-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="innovtech-dialog-close"
              aria-label="Close review"
              onClick={() => setSummaryOpen(false)}
            >
              <X size={24} />
            </button>
            <span className="innovtech-icon-circle">
              <Target size={30} />
            </span>
            <p className="innovtech-eyebrow">EXAMPLE WORKSPACE</p>
            <h2 id="review-dialog-title">Customer onboarding</h2>
            <p>
              Review the customer context, recent decisions, and proposed next
              action together before preparing the next step.
            </p>
            <ul>
              <li>
                <CheckCircle2 size={18} />
                Customer context · 3 sources
              </li>
              <li>
                <MessageCircle size={18} />
                Recent decisions · 2 mentions
              </li>
              <li>
                <FileText size={18} />
                Next action · 1 suggestion
              </li>
            </ul>
            <Link
              href="#product"
              className="innovtech-button"
              onClick={() => setSummaryOpen(false)}
            >
              Explore the review workspace <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      )}
    </div>
  );
}
