"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Header({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <span className="brand-dot">•</span>
          <span className="brand-role">Full-Stack .NET</span>
        </Link>

        {/* 4 Primary Navigation Links in Sentence Case */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <a href="#projects" className="nav-link">Work</a>
          <a href="#timeline" className="nav-link">Experience</a>
          <a href="#universe" className="nav-link">Stack</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right Actions: Availability Badge + High-Contrast Resume CTA */}
        <div className="header-actions">
          <div className="status-pill" title="Available for roles">
            <span className="status-dot"></span>
            <span className="status-text">Available for roles</span>
          </div>

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
          padding: 1.15rem 2rem;
          background: rgba(9, 10, 15, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s var(--ease-smooth);
        }

        .header.is-scrolled {
          padding: 0.85rem 2rem;
          background: rgba(9, 10, 15, 0.9);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .header-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .brand-dot {
          color: var(--accent-cyan);
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
          color: #ffffff;
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
          gap: 1.25rem;
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
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          cursor: pointer;
          padding: 8px;
        }

        .burger-line {
          width: 100%;
          height: 2px;
          background: #ffffff;
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
          top: 65px;
          left: 0;
          right: 0;
          background: rgba(9, 10, 15, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-hairline);
          padding: 2rem 1.5rem;
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
          gap: 1.25rem;
        }

        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }

        .mobile-resume-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 0.85rem;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .brand-role {
            display: none;
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

        @media (max-width: 600px) {
          .status-pill {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
