"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="topbar-wrap">
      <div className="topbar section">
        <div className="brand">Daniel Stephan</div>

        <nav className="nav nav-desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="socials socials-desktop">
          <span>Twitter</span>
          <span>GitHub</span>
        </div>

        <button
          type="button"
          className={`mobile-toggle ${isOpen ? "is-open" : ""}`}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav-panel section ${isOpen ? "is-open" : ""}`}
      >
        <nav className="mobile-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClose}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-socials">
          <span>Twitter</span>
          <span>GitHub</span>
        </div>
      </div>
    </header>
  );
}
