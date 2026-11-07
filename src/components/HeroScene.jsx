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
    // Trigger cinematic arrival sequence
    const timer = setTimeout(() => {
      setArrived(true);
    }, 150);

    // Frame-rate independent damped mouse tracking
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

      const lambda = 4.2; // Damping speed
      const cur = currentPointerRef.current;
      const target = targetPointerRef.current;

      cur.x += (target.x - cur.x) * (1 - Math.exp(-lambda * dt));
      cur.y += (target.y - cur.y) * (1 - Math.exp(-lambda * dt));

      setPointer({
        x: cur.x * 24, // Translation pixels
        y: cur.y * 18,
        rx: cur.y * -9, // 3D rotation degrees for card
        ry: cur.x * 11,
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
      {/* HUD Architectural Furniture Overlay */}
      <div className="hero-furniture" aria-hidden="true">
        <div className="hud-line hud-line--top-left">
          <span className="hud-label">SYS.CORE // MMXXVI.04</span>
          <div className="hud-ticks">
            <i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div className="hud-line hud-line--bottom-right">
          <span className="hud-coords">LAT 19.69° N // LON 72.76° E</span>
          <span className="hud-loc">PALGHAR, MAHARASHTRA</span>
        </div>
      </div>

      <div className="hero-content">
        {/* Welcome Tagline with Overshoot Drop-In */}
        <div className="hero-welcome">
          <span className="welcome-dots">•••</span>
          <span className="welcome-text">WELCOME TO MY WORLD</span>
          <span className="welcome-dots">•••</span>
        </div>

        {/* Distressed Typographic Wordmark with Parallax & Grunge Texture */}
        <div 
          className="hero-wordmark-wrap"
          style={{
            transform: `translate3d(${pointer.x * -0.6}px, ${pointer.y * -0.5}px, 0)`,
          }}
        >
          <h1 className="hero-wordmark">
            <span className="word-name word-distressed">SAGAR</span>
            <span className="word-surname word-outline">WAVARE</span>
          </h1>
          <div className="hero-wordmark-backing" aria-hidden="true"></div>
        </div>

        {/* Inverted Cinematic Chips Staggered from Sides */}
        <div className="hero-chips">
          <span className="cinematic-chip chip-left">
            <span>Junior Web Developer</span>
          </span>
          <span className="cinematic-chip chip-center">
            <span>Techiefleet Technologies</span>
          </span>
          <span className="cinematic-chip chip-right">
            <span>.NET MVC &amp; Core Architect</span>
          </span>
        </div>

        {/* Core Profile Card + Bio Grid with Parallax Depth */}
        <div className="hero-grid">
          {/* Engineering Bio Console */}
          <div className="hero-bio-card glass-panel bracket-box">
            <div className="bio-lead-tag">
              <span className="tag-pulse"></span>
              <span>FULL-STACK .NET DEVELOPER // 4 YEARS PRODUCTION EXPERIENCE</span>
            </div>
            
            <p className="hero-bio-text">
              {portfolioData.personal.bio}
            </p>

            <div className="hero-highlights">
              <div className="hl-item">
                <span className="hl-num">4+</span>
                <span className="hl-label">Years Hands-On .NET</span>
              </div>
              <div className="hl-item">
                <span className="hl-num">7.79</span>
                <span className="hl-label">M.Sc CS (Mumbai Univ)</span>
              </div>
              <div className="hl-item">
                <span className="hl-num">25%</span>
                <span className="hl-label">Bug Reduction at Goup</span>
              </div>
              <div className="hl-item">
                <span className="hl-num">4</span>
                <span className="hl-label">Production Platforms</span>
              </div>
            </div>

            <div className="hero-cta-row">
              <a href="#projects" className="btn-ember">
                <span>Explore Featured Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#universe" className="btn-secondary">
                <span>Tech Universe</span>
              </a>

              <button 
                type="button" 
                className="btn-secondary" 
                onClick={onOpenResume}
              >
                <span>Read Full Resume</span>
              </button>
            </div>
          </div>

          {/* Cinematic Portrait Card with 3D Mouse Tilt & Rim Light */}
          <div 
            className="hero-portrait-card glass-panel"
            style={{
              transform: `perspective(1000px) rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) translate3d(${pointer.x * 0.45}px, ${pointer.y * 0.4}px, 20px)`,
            }}
          >
            <div className="portrait-image-wrap">
              <Image
                src="/sagar-portrait.jpg"
                alt="Sagar Wavare - Full Stack .NET Developer"
                width={400}
                height={533}
                priority
                className="portrait-img"
              />
              <div className="portrait-rim-light" aria-hidden="true"></div>
              <div className="portrait-vignette" aria-hidden="true"></div>
              <div className="portrait-scanline" aria-hidden="true"></div>
            </div>

            <div className="portrait-footer">
              <div className="portrait-badge">
                <span className="badge-name">SAGAR WAVARE</span>
                <span className="badge-role">.NET &amp; API ARCHITECT</span>
              </div>
              <div className="portrait-links">
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-icon-btn"
                  title="Connect on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66Z"/>
                  </svg>
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="link-icon-btn"
                  title="Send Direct Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          padding: 8.5rem 2rem 5.5rem;
          overflow: hidden;
          background: radial-gradient(circle at 50% 28%, rgba(22, 18, 26, 0.85) 0%, var(--bg-black) 72%);
        }

        .hero-furniture {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          padding: 7rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hud-line {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.16em;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.8s var(--ease-cinematic) 0.5s,
                      transform 0.8s var(--ease-cinematic) 0.5s;
        }

        .hero-section.is-arrived .hud-line {
          opacity: 1;
          transform: translateY(0);
        }

        .hud-line--bottom-right {
          align-self: flex-end;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .hud-loc {
          color: var(--red-ember);
          font-weight: 600;
        }

        .hud-ticks {
          display: flex;
          gap: 3px;
        }

        .hud-ticks i {
          width: 4px;
          height: 4px;
          background: var(--red-ember);
          display: block;
          opacity: 0.7;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1320px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Welcome Tagline with Overshoot Drop */
        .hero-welcome {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.85rem;
          opacity: 0;
          transform: translateY(-24px);
          filter: blur(8px);
          transition: transform 0.85s cubic-bezier(0.14, 0.86, 0.22, 1.06) 0.2s,
                      opacity 0.4s ease-out 0.2s,
                      filter 0.5s ease-out 0.2s;
        }

        .hero-section.is-arrived .hero-welcome {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .welcome-dots {
          color: var(--red-ember);
          letter-spacing: 0.2em;
          font-size: 0.95rem;
        }

        .welcome-text {
          font-family: var(--font-oswald);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.26em;
          color: #ffffff;
          text-transform: uppercase;
          text-shadow: 0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(230, 57, 70, 0.3);
        }

        /* Wordmark with Grunge Texture */
        .hero-wordmark-wrap {
          position: relative;
          margin-bottom: 1.5rem;
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-wordmark {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.2rem;
          font-family: var(--font-anton);
          font-size: clamp(3.8rem, 11.5vw, 9.2rem);
          line-height: 0.9;
          letter-spacing: 0.04em;
          margin: 0;
          text-transform: uppercase;
        }

        /* Distressed grunge styling from original */
        .word-distressed {
          color: #ffffff;
          background-color: var(--red-ember);
          background-image: url("/tex/grunge.png");
          background-size: 280px;
          background-blend-mode: multiply;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: saturate(1.4) contrast(1.2) brightness(1.2);
          text-shadow: 0 0 50px rgba(230, 57, 70, 0.65);
          opacity: 0;
          transform: scale(0.96) translateY(16px);
          filter: blur(10px);
          transition: opacity 0.9s var(--ease-cinematic) 0.3s,
                      transform 1s var(--ease-cinematic) 0.3s,
                      filter 0.9s ease 0.3s;
        }

        .hero-section.is-arrived .word-distressed {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0);
        }

        .word-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.7);
          opacity: 0;
          transform: scale(0.96) translateY(16px);
          transition: opacity 0.9s var(--ease-cinematic) 0.4s,
                      transform 1s var(--ease-cinematic) 0.4s;
        }

        .hero-section.is-arrived .word-outline {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .hero-wordmark-backing {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 65%;
          background: radial-gradient(circle, rgba(230, 57, 70, 0.28) 0%, transparent 72%);
          filter: blur(55px);
          pointer-events: none;
          z-index: -1;
          animation: pulseBacking 6s infinite ease-in-out alternate;
        }

        @keyframes pulseBacking {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.95); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        /* Chips with Staggered Entrance */
        .hero-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .chip-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.6s ease 0.5s, transform 0.7s var(--ease-cinematic) 0.5s;
        }

        .chip-center {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.6s, transform 0.7s var(--ease-cinematic) 0.6s;
        }

        .chip-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.6s ease 0.7s, transform 0.7s var(--ease-cinematic) 0.7s;
        }

        .hero-section.is-arrived .chip-left,
        .hero-section.is-arrived .chip-center,
        .hero-section.is-arrived .chip-right {
          opacity: 1;
          transform: translate(0, 0);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2.5rem;
          align-items: stretch;
          width: 100%;
          text-align: left;
        }

        .hero-bio-card {
          padding: 2.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(14, 14, 20, 0.78);
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.8s var(--ease-cinematic) 0.65s,
                      transform 0.9s var(--ease-cinematic) 0.65s;
        }

        .hero-section.is-arrived .hero-bio-card {
          opacity: 1;
          transform: translateY(0);
        }

        .bio-lead-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--red-ember);
          margin-bottom: 1.25rem;
          font-weight: 600;
        }

        .tag-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--red-ember);
          box-shadow: 0 0 10px var(--red-ember);
          animation: pulseEmber 2s infinite ease-in-out;
        }

        .hero-bio-text {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-dim);
          border-bottom: 1px solid var(--border-dim);
          margin-bottom: 2rem;
        }

        .hl-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .hl-num {
          font-family: var(--font-anton);
          font-size: 1.85rem;
          color: #ffffff;
          line-height: 1;
        }

        .hl-label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        /* 3D Tilt Portrait Card */
        .hero-portrait-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(230, 57, 70, 0.35);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(230, 57, 70, 0.15);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          opacity: 0;
          transition: opacity 0.8s var(--ease-cinematic) 0.75s;
        }

        .hero-section.is-arrived .hero-portrait-card {
          opacity: 1;
        }

        .hero-portrait-card:hover {
          border-color: rgba(230, 57, 70, 0.7);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(230, 57, 70, 0.3);
        }

        .portrait-image-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          height: 380px;
          background: #000;
        }

        :global(.portrait-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          filter: contrast(1.08) brightness(0.96);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-portrait-card:hover :global(.portrait-img) {
          transform: scale(1.04);
        }

        .portrait-rim-light {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 40px rgba(230, 57, 70, 0.45);
          pointer-events: none;
        }

        .portrait-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(4, 4, 6, 0.95) 100%);
          pointer-events: none;
        }

        .portrait-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.25) 51%
          );
          background-size: 100% 4px;
          pointer-events: none;
          opacity: 0.5;
        }

        .portrait-footer {
          margin-top: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.25rem 0;
        }

        .portrait-badge {
          display: flex;
          flex-direction: column;
        }

        .badge-name {
          font-family: var(--font-oswald);
          font-size: 1.05rem;
          letter-spacing: 0.1em;
          color: #ffffff;
          font-weight: 600;
        }

        .badge-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: var(--red-ember);
        }

        .portrait-links {
          display: flex;
          gap: 0.6rem;
        }

        .link-icon-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-dim);
          border-radius: 50%;
          color: var(--text-primary);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .link-icon-btn:hover {
          background: var(--red-ember);
          color: #ffffff;
          border-color: var(--red-ember);
          box-shadow: 0 0 18px rgba(230, 57, 70, 0.6);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-furniture {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 6.5rem 1.25rem 3.5rem;
          }
          .hero-bio-card {
            padding: 1.75rem;
          }
          .hero-highlights {
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
