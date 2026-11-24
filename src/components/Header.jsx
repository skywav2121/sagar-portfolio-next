"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function Header({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-container">
        {/* Brand Mark */}
        <Link href="#hero" className="brand-logo" onClick={() => setMenuOpen(false)}>
          <span className="brand-name">Sagar Wavare</span>
          <span className="brand-dot" aria-hidden="true">•</span>
          <span className="brand-role">Full-Stack .NET</span>
        </Link>

        {/* 4 Primary Navigation Links in Sentence Case */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <a href="#projects" className="nav-link">Work</a>
          <a href="#timeline" className="nav-link">Experience</a>
          <a href="#universe" className="nav-link">Stack</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right Actions: Availability Badge, Theme Switch, Resume CTA */}
        <div className="header-actions">
          <div className="status-pill" title="Available for roles">
            <span className="status-dot"></span>
            <span className="status-text">Available for roles</span>
          </div>

          {/* Dark / Light Theme Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={isLight}
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            title={isLight ? "Switch to dark theme" : "Switch to light theme"}
            className={`theme-switch ${isLight ? "is-light" : "is-dark"}`}
            onClick={toggleTheme}
          >
            <span className="switch-track">
              <span className="switch-icon switch-icon--moon" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </span>
              <span className="switch-icon switch-icon--sun" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </span>
              <span className="switch-thumb" aria-hidden="true" />
            </span>
          </button>

          <button
            type="button"
            className="btn-cyan btn-resume"
            onClick={onOpenResume}
            aria-label="View Sagar's Resume"
          >
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className={`burger-btn ${menuOpen ? "is-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#timeline" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#universe" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</a>

          <div className="mobile-theme-row">
            <span className="mobile-theme-label">Appearance</span>
            <button
              type="button"
              className="btn-secondary mobile-theme-btn"
              onClick={toggleTheme}
            >
              <span>{isLight ? "Light Mode" : "Dark Mode"}</span>
              <span aria-hidden="true">{isLight ? "☀" : "☾"}</span>
            </button>
          </div>

          <button
            type="button"
            className="btn-cyan mobile-resume-btn"
            onClick={() => {
              setMenuOpen(false);
              onOpenResume();
            }}
          >
            View Complete Resume
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.1rem 2rem;
          background: var(--bg-header);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-hairline);
          transition: all 0.3s var(--ease-smooth);
        }

        .header.is-scrolled {
          padding: 0.85rem 2rem;
          background: var(--bg-header-scrolled);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .header-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-heading);
          letter-spacing: -0.01em;
        }

        .brand-dot {
          color: var(--accent-cyan-fg);
          font-size: 0.85rem;
        }

        .brand-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-heading);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-cyan);
          transition: width 0.25s var(--ease-smooth);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        /* Theme Toggle Switch */
        .theme-switch {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 999px;
          outline: none;
        }

        .theme-switch:focus-visible .switch-track {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 2px;
        }

        .switch-track {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 58px;
          height: 30px;
          padding: 0 7px;
          background: var(--bg-pill);
          border: 1px solid var(--border-hairline);
          border-radius: 999px;
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }

        .theme-switch:hover .switch-track {
          border-color: var(--border-hover);
          background: var(--bg-pill-hover);
        }

        .switch-icon {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .theme-switch.is-dark .switch-icon--moon {
          color: var(--accent-cyan-fg);
        }

        .theme-switch.is-light .switch-icon--sun {
          color: var(--accent-cyan-fg);
        }

        .switch-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--accent-cyan-border);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.28s var(--ease-smooth), background-color 0.25s ease;
          z-index: 1;
        }

        .theme-switch.is-light .switch-thumb {
          transform: translateX(28px);
        }

        .btn-resume {
          padding: 0.45rem 1rem;
          font-size: 0.82rem;
          border-radius: 6px;
        }

        .burger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: var(--bg-pill);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          cursor: pointer;
          padding: 8px;
        }

        .burger-line {
          width: 100%;
          height: 2px;
          background: var(--text-heading);
          transition: all 0.25s ease;
        }

        .burger-btn.is-active .burger-line:nth-child(1) {
          transform: translateY(3.5px) rotate(45deg);
        }

        .burger-btn.is-active .burger-line:nth-child(2) {
          transform: translateY(-3.5px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 63px;
          left: 0;
          right: 0;
          background: var(--bg-mobile-menu);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-hairline);
          padding: 1.75rem 1.5rem 2rem;
          z-index: 99;
          transform: translateY(-10px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s var(--ease-smooth);
        }

        .mobile-menu.is-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          padding-bottom: 0.7rem;
          border-bottom: 1px solid var(--border-hairline);
        }

        .mobile-theme-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.25rem 0;
        }

        .mobile-theme-label {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .mobile-theme-btn {
          padding: 0.45rem 0.9rem;
          font-size: 0.84rem;
        }

        .mobile-resume-btn {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.85rem;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .brand-role {
            display: none;
          }
          .status-pill {
            display: none;
          }
        }

        @media (max-width: 820px) {
          .header {
            padding: 0.95rem 1.25rem;
          }
          .desktop-nav {
            display: none;
          }
          .burger-btn {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
