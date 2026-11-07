"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Header({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderReady, setIsHeaderReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHeaderReady(true), 250);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${isHeaderReady ? "is-header" : ""}`}>
      {/* Top SVG Connecting Rule line with animated stroke-dashoffset from Original */}
      <div className="header-rule-wrap" aria-hidden="true">
        <svg className="header-rule-svg" preserveAspectRatio="none" viewBox="0 0 1000 2">
          <line 
            x1="0" 
            y1="1" 
            x2="1000" 
            y2="1" 
            stroke="currentColor" 
            strokeWidth="1.25" 
            className="header-rule-line"
          />
        </svg>
      </div>

      <div className="header-container">
        {/* Brand mark with Grunge Distressed Fill */}
        <Link href="#hero" className="brand-logo" onClick={() => setMenuOpen(false)}>
          <span className="brand-title brand-distressed">SAGAR</span>
          <span className="brand-sub">• .NET ARCHITECT •</span>
        </Link>

        {/* Roles label */}
        <div className="header-roles" aria-hidden="true">
          <span>.NET Core</span>
          <span className="role-sep">/</span>
          <span>Web APIs</span>
          <span className="role-sep">/</span>
          <span>SQL Server</span>
        </div>

        {/* Desktop Navigation with Staggered Delays */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <a href="#hero" className="nav-link" style={{ "--i": 0 }}>Home</a>
          <a href="#universe" className="nav-link" style={{ "--i": 1 }}>Universe</a>
          <a href="#timeline" className="nav-link" style={{ "--i": 2 }}>Journey</a>
          <a href="#projects" className="nav-link" style={{ "--i": 3 }}>Projects</a>
          <a href="#contact" className="nav-link" style={{ "--i": 4 }}>Contact</a>
        </nav>

        {/* Status and Action Buttons */}
        <div className="header-actions">
          <div className="status-badge" title="Open to full-time and high-impact engineering opportunities">
            <span className="status-dot"></span>
            <span className="status-text">Available</span>
          </div>

          <button 
            type="button"
            className="btn-resume-trigger"
            onClick={onOpenResume}
            aria-label="View Sagar's Resume"
          >
            <span>Resume</span>
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
          <a href="#hero" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>01 // Home</a>
          <a href="#universe" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>02 // Tech Universe</a>
          <a href="#timeline" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>03 // Time Machine</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>04 // Featured Projects</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>05 // Direct Contact</a>
          
          <button
            type="button"
            className="mobile-resume-btn"
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
          padding: 1.25rem 2.5rem;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header.is-scrolled {
          padding: 0.85rem 2.5rem;
          background: rgba(6, 6, 10, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        /* SVG Line with Drawing Animation */
        .header-rule-wrap {
          position: absolute;
          bottom: 0;
          left: 2rem;
          right: 2rem;
          height: 1px;
          pointer-events: none;
        }

        .header-rule-svg {
          width: 100%;
          height: 100%;
          color: rgba(255, 255, 255, 0.15);
        }

        :global(.header-rule-line) {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }

        .header.is-header :global(.header-rule-line) {
          stroke-dashoffset: 0;
        }

        .header-container {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .brand-logo {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          text-decoration: none;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.6s var(--ease-cinematic) 0.18s,
                      transform 0.6s var(--ease-cinematic) 0.18s;
        }

        .header.is-header .brand-logo {
          opacity: 1;
          transform: translateY(0);
        }

        .brand-title {
          font-family: var(--font-anton);
          font-size: 1.85rem;
          letter-spacing: 0.05em;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 0 20px rgba(230, 57, 70, 0.5);
        }

        .brand-distressed {
          background-color: var(--red-ember);
          background-image: url("/tex/grunge.png");
          background-size: 240px;
          background-blend-mode: multiply;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: saturate(1.4) contrast(1.15);
        }

        .brand-sub {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          color: var(--red-ember);
          font-weight: 600;
        }

        .header-roles {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.6s var(--ease-cinematic) 0.28s,
                      transform 0.6s var(--ease-cinematic) 0.28s;
        }

        .header.is-header .header-roles {
          opacity: 1;
          transform: translateY(0);
        }

        .role-sep {
          color: rgba(255, 255, 255, 0.2);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }

        .nav-link {
          font-family: var(--font-oswald);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          transition: color 0.25s ease;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.6s var(--ease-cinematic) calc(0.32s + var(--i) * 0.05s),
                      transform 0.6s var(--ease-cinematic) calc(0.32s + var(--i) * 0.05s),
                      color 0.25s ease;
        }

        .header.is-header .nav-link {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) scale(0);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--red-ember);
          box-shadow: 0 0 6px var(--red-ember);
          transition: transform 0.25s ease;
        }

        .nav-link:hover::after {
          transform: translateX(-50%) scale(1);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.6s var(--ease-cinematic) 0.55s,
                      transform 0.6s var(--ease-cinematic) 0.55s;
        }

        .header.is-header .header-actions {
          opacity: 1;
          transform: translateY(0);
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 999px;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGreen 2s infinite ease-in-out;
        }

        .status-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          color: #34d399;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .btn-resume-trigger {
          padding: 0.45rem 1.15rem;
          background: rgba(230, 57, 70, 0.15);
          border: 1px solid rgba(230, 57, 70, 0.5);
          border-radius: 4px;
          color: #fff;
          font-family: var(--font-oswald);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-resume-trigger:hover {
          background: var(--red-ember);
          box-shadow: 0 0 18px rgba(230, 57, 70, 0.6);
          transform: translateY(-1px);
        }

        .burger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 36px;
          height: 36px;
          background: transparent;
          border: 1px solid var(--border-dim);
          border-radius: 4px;
          cursor: pointer;
          padding: 6px;
        }

        .burger-line {
          width: 100%;
          height: 2px;
          background: #ffffff;
          transition: all 0.25s ease;
        }

        .burger-btn.is-active .burger-line:nth-child(1) {
          transform: translateY(4px) rotate(45deg);
        }

        .burger-btn.is-active .burger-line:nth-child(2) {
          transform: translateY(-4px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(6, 6, 10, 0.98);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          z-index: 99;
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.is-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          font-family: var(--font-anton);
          font-size: 1.8rem;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-dim);
          padding-bottom: 0.75rem;
        }

        .mobile-resume-btn {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--red-ember);
          color: white;
          border: none;
          border-radius: 4px;
          font-family: var(--font-oswald);
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
        }

        @keyframes pulseGreen {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @media (max-width: 1024px) {
          .header-roles {
            display: none;
          }
        }

        @media (max-width: 820px) {
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
