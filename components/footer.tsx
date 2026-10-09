import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";
import { footerColumns } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="innovtech-footer">
      <div className="innovtech-footer-content">
        <div className="innovtech-footer-top">
          <div>
            <Link
              className="innovtech-brand"
              href="/"
              aria-label="Spine InnovTech home"
            >
              <SpineLogo className="h-9 w-9" />
              <span>
                Spine<span>InnovTech</span>
              </span>
            </Link>
            <h2>
              Building the intelligence
              <br />
              behind connected business.
            </h2>
            <p>
              Shared context. Connected work. Human judgment.
              <br />
              The company behind Spine Workspace.
            </p>
            <Link href="/contact" className="innovtech-text-link">
              Talk to Spine InnovTech <ArrowRight size={17} />
            </Link>
          </div>
          <nav
            className="innovtech-footer-navigation"
            aria-label="Footer navigation"
          >
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3>{column.heading}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="innovtech-footer-bottom">
          <p>
            © {new Date().getFullYear()} Spine InnovTech Private Limited. Built
            in India.
          </p>
          <a href="mailto:connect@spineworkspace.com">
            <Mail size={14} />
            connect@spineworkspace.com
          </a>
        </div>
      </div>
    </footer>
  );
}
