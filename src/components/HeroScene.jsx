"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function HeroScene({ onOpenResume, isBooted = true }) {
  const [arrived, setArrived] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0, rx: 0, ry: 0 });
  const animFrameRef = useRef(null);
  const targetPointerRef = useRef({ x: 0, y: 0 });
  const currentPointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setArrived(true), 100);

    let lastTime = performance.now();
    const handleMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetPointerRef.current = {
        x: (e.clientX - halfW) / halfW,
        y: (e.clientY - halfH) / halfH,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updatePhysics = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const lambda = 4.2;
      const cur = currentPointerRef.current;
      const target = targetPointerRef.current;

      cur.x += (target.x - cur.x) * (1 - Math.exp(-lambda * dt));
      cur.y += (target.y - cur.y) * (1 - Math.exp(-lambda * dt));

      setPointer({
        x: cur.x * 20,
        y: cur.y * 14,
        rx: cur.y * -6,
        ry: cur.x * 8,
      });

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className={`hero-section ${arrived ? "is-arrived" : ""}`}>
      {/* Subtle Architectural Corner Labels */}
      <div className="hero-decor" aria-hidden="true">
        <div className="decor-item decor-tl">
          <span className="decor-label">CORE.NET // ENTERPRISE ARCHITECTURE</span>
        </div>
        <div className="decor-item decor-tr">
          <span className="decor-label">MUMBAI / PALGHAR, INDIA</span>
        </div>
      </div>

      <div className="hero-container">
        {/* Single Status Pill Above Name */}
        <div className="hero-status-wrap">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span className="status-text">{portfolioData.personal.status}</span>
          </div>
        </div>

        {/* Display Name Heading */}
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span className="title-first">Sagar</span>{" "}
            <span className="title-last">Wavare</span>
          </h1>
          <p className="hero-role">
            Full-Stack .NET Developer &amp; API Engineer
            <span className="role-sep">•</span>
            <span className="role-exp">4+ Years Production Experience</span>
          </p>
        </div>

        {/* Main Hero Grid */}
        <div className="hero-grid">
          {/* Engineering Bio Card */}
          <div className="obsidian-card bio-card">
            <div className="bio-lead-tag">
              <span className="mono-eyebrow">01 // PRODUCTION PROFILE</span>
            </div>

            <p className="bio-text body-prose">
              {portfolioData.personal.bio}
            </p>

            {/* 4 Key Metrics in Tabular-Nums Horizontal Stat Bar */}
            <div className="metrics-bar" role="region" aria-label="Key Career Metrics">
              <div className="metric-box">
                <span className="metric-value">4+ Years</span>
                <span className="metric-caption">Production .NET</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">25%</span>
                <span className="metric-caption">Bug Reduction at Goup</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">4</span>
                <span className="metric-caption">Live Platforms</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">7.79</span>
                <span className="metric-caption">M.Sc CS (Mumbai Univ)</span>
              </div>
            </div>

            {/* Action Buttons in Sentence Case */}
            <div className="hero-cta-row">
              <a href="#projects" className="btn-cyan">
                <span>Explore Featured Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#universe" className="btn-secondary">
                <span>Technical Stack</span>
              </a>

              <button 
                type="button" 
                className="btn-secondary" 
                onClick={onOpenResume}
              >
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Interactive Portrait Card with 3D Depth */}
          <div 
            className="obsidian-card portrait-card"
            style={{
              transform: `perspective(1000px) rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) translate3d(${pointer.x * 0.3}px, ${pointer.y * 0.25}px, 0)`,
            }}
          >
            <div className="portrait-image-wrap">
              <Image
                src="/sagar-portrait.jpg"
                alt="Sagar Wavare — Full-Stack .NET Developer"
                width={420}
                height={520}
                priority
                className="portrait-img"
              />
              <div className="portrait-overlay" aria-hidden="true"></div>
            </div>

            <div className="portrait-footer">
              <div className="portrait-meta">
                <span className="meta-name">Sagar Wavare</span>
                <span className="meta-sub">Enterprise .NET &amp; SQL Server</span>
              </div>

              <div className="portrait-links">
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Connect on LinkedIn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66Z"/>
                  </svg>
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="social-btn"
                  title="Send Direct Email"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 5rem;
          background: radial-gradient(circle at 50% 15%, rgba(34, 211, 238, 0.05) 0%, transparent 65%),
                      radial-gradient(circle at 80% 80%, rgba(17, 19, 27, 0.7) 0%, transparent 50%);
          overflow: hidden;
        }

        .hero-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          padding: 6.5rem 3rem 2rem;
          display: flex;
          justify-content: space-between;
          z-index: 2;
        }

        .decor-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.3);
        }

        .hero-container {
          max-width: 1240px;
          width: 100%;
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-status-wrap {
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s var(--ease-smooth) 0.1s;
        }

        .hero-section.is-arrived .hero-status-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title-wrap {
          margin-bottom: 2.75rem;
          text-align: left;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.7s var(--ease-smooth) 0.2s;
        }

        .hero-section.is-arrived .hero-title-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6.2vw, 5.4rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.05;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .title-last {
          color: #ffffff;
        }

        .hero-role {
          font-family: var(--font-sans);
          font-size: clamp(1.05rem, 1.8vw, 1.3rem);
          font-weight: 500;
          color: var(--accent-cyan);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
        }

        .role-sep {
          color: rgba(255, 255, 255, 0.25);
        }

        .role-exp {
          color: var(--text-secondary);
          font-weight: 400;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 2rem;
          width: 100%;
          align-items: stretch;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s var(--ease-smooth) 0.3s;
        }

        .hero-section.is-arrived .hero-grid {
          opacity: 1;
          transform: translateY(0);
        }

        .bio-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bio-lead-tag {
          margin-bottom: 1.25rem;
        }

        .bio-text {
          font-size: 1.06rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin-bottom: 2rem;
        }

        /* Metrics Bar with Tabular Nums */
        .metrics-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-hairline);
          border-bottom: 1px solid var(--border-hairline);
          margin-bottom: 2rem;
        }

        .metric-box {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .metric-value {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
          color: var(--accent-cyan);
          line-height: 1.1;
        }

        .metric-caption {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          align-items: center;
        }

        /* 3D Tilt Portrait Card */
        .portrait-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform-style: preserve-3d;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .portrait-image-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          height: 380px;
          background: #090A0F;
        }

        :global(.portrait-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          filter: contrast(1.05) brightness(0.98);
          transition: transform 0.5s var(--ease-smooth);
        }

        .portrait-card:hover :global(.portrait-img) {
          transform: scale(1.03);
        }

        .portrait-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 65%, rgba(9, 10, 15, 0.9) 100%);
          pointer-events: none;
        }

        .portrait-footer {
          margin-top: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.25rem 0.25rem 0;
        }

        .portrait-meta {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .meta-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
        }

        .meta-sub {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .portrait-links {
          display: flex;
          gap: 0.5rem;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          color: var(--text-secondary);
          transition: all 0.25s var(--ease-smooth);
          text-decoration: none;
        }

        .social-btn:hover {
          background: rgba(34, 211, 238, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-decor {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 6.5rem 1.25rem 3.5rem;
          }
          .bio-card {
            padding: 1.75rem;
          }
          .metrics-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .hero-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
}
