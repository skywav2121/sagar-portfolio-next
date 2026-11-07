"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function UniverseScene() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? portfolioData.skills.items
      : portfolioData.skills.items.filter((s) => s.category === activeCategory);

  return (
    <section 
      id="universe" 
      ref={sectionRef} 
      className={`universe-section ${isVisible ? "is-live" : ""}`}
    >
      <div className="universe-bg-glow" aria-hidden="true"></div>

      <div className="section-wrap">
        {/* Cinematic Chapter Header */}
        <div className="section-header">
          <p className="scene-number">Scene 02 // Engineering Matrix</p>
          <h2 className="scene-title">The Technical Universe</h2>
          <p className="scene-subtitle">Architecture · Scalability · Backend Systems · Real Impact</p>
        </div>

        {/* Category Tabs */}
        <div className="category-bar">
          {portfolioData.skills.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`cat-btn ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Skills Floating Universe Deck */}
        <div className={`skills-deck ${hoveredCard !== null ? "is-hot" : ""}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card-wrap ${hoveredCard === index ? "is-hovered" : ""}`}
              style={{ "--i": index }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="skill-card glass-panel bracket-box">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>

                <p className="skill-desc">{skill.desc}</p>

                <div className="skill-footer">
                  <div className="skill-exp">
                    <span className="exp-label">Experience:</span>
                    <span className="exp-val">{skill.years}</span>
                  </div>
                  <div className="skill-pip" aria-hidden="true">
                    <i></i><i></i><i></i>
                  </div>
                </div>

                {/* Subtle Hover Scan Beam */}
                <div className="card-scan-sweep" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Engineering Standards Banner */}
        <div className="architecture-banner glass-panel bracket-box">
          <div className="arch-col">
            <span className="arch-num">01</span>
            <h3 className="arch-heading">High-Performance .NET</h3>
            <p className="arch-text">
              Expertise in .NET MVC &amp; .NET Core, dependency injection, middleware pipelines, and scalable enterprise design.
            </p>
          </div>
          <div className="arch-col">
            <span className="arch-num">02</span>
            <h3 className="arch-heading">Cross-Platform REST APIs</h3>
            <p className="arch-text">
              Tailored API backends powering responsive web platforms as well as Android and Flutter mobile applications.
            </p>
          </div>
          <div className="arch-col">
            <span className="arch-num">03</span>
            <h3 className="arch-heading">SQL Server Optimization</h3>
            <p className="arch-text">
              Mastery over stored procedures, indexing schemes, and query tuning to safeguard throughput under heavy workloads.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .universe-section {
          position: relative;
          background: #050509;
          border-top: 1px solid var(--border-dim);
          border-bottom: 1px solid var(--border-dim);
          overflow: hidden;
          perspective: 1200px;
        }

        .universe-bg-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 850px;
          height: 520px;
          background: radial-gradient(circle, rgba(230, 57, 70, 0.12) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s var(--ease-cinematic), transform 0.8s var(--ease-cinematic);
        }

        .universe-section.is-live .section-header {
          opacity: 1;
          transform: translateY(0);
        }

        .scene-number {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          color: var(--red-ember);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .scene-title {
          font-family: var(--font-anton);
          font-size: clamp(2.6rem, 5.8vw, 4.4rem);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .scene-subtitle {
          font-family: var(--font-oswald);
          font-size: 1.05rem;
          letter-spacing: 0.18em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .category-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.8s var(--ease-cinematic) 0.15s, transform 0.8s var(--ease-cinematic) 0.15s;
        }

        .universe-section.is-live .category-bar {
          opacity: 1;
          transform: translateY(0);
        }

        .cat-btn {
          padding: 0.6rem 1.35rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-dim);
          border-radius: 4px;
          color: var(--text-secondary);
          font-family: var(--font-oswald);
          font-size: 0.88rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cat-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.25);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .cat-btn.is-active {
          background: rgba(230, 57, 70, 0.18);
          border-color: var(--red-ember);
          color: #ffffff;
          box-shadow: 0 0 20px rgba(230, 57, 70, 0.4);
        }

        /* 3D Floating Deck inspired by original projects.css */
        .skills-deck {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.6rem;
          margin-bottom: 4rem;
          transform-style: preserve-3d;
        }

        .skill-card-wrap {
          perspective: 1000px;
          opacity: 0;
          transform: translateY(24px) scale(0.96);
          transition: opacity 0.7s var(--ease-cinematic) calc(var(--i) * 0.04s),
                      transform 0.7s var(--ease-cinematic) calc(var(--i) * 0.04s);
        }

        .universe-section.is-live .skill-card-wrap {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Floating rhythm from original */
        .skill-card {
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(14, 14, 20, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transform-style: preserve-3d;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.4s ease,
                      box-shadow 0.4s ease,
                      filter 0.4s ease;
          animation: gFloat calc(5.4s + var(--i) * 0.45s) ease-in-out
                     calc(var(--i) * -1.25s) infinite alternate paused;
          position: relative;
          overflow: hidden;
        }

        .universe-section.is-live .skill-card {
          animation-play-state: running;
        }

        /* Card Hover Lift */
        .skill-card-wrap:hover .skill-card {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(230, 57, 70, 0.6);
          box-shadow: 0 16px 36px -10px rgba(230, 57, 70, 0.4);
          z-index: 10;
        }

        /* Sibling cards ease back when deck is hot */
        .skills-deck.is-hot .skill-card-wrap:not(:hover) .skill-card {
          transform: scale(0.98);
          filter: brightness(0.85);
          opacity: 0.8;
        }

        @keyframes gFloat {
          from { transform: translateY(0px); }
          to { transform: translateY(-7px); }
        }

        .card-scan-sweep {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(230, 57, 70, 0.15),
            transparent
          );
          transform: skewX(-25deg);
          pointer-events: none;
        }

        .skill-card-wrap:hover .card-scan-sweep {
          animation: scanSweep 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes scanSweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .skill-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-family: var(--font-oswald);
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #ffffff;
        }

        .skill-level-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          padding: 0.2rem 0.55rem;
          background: rgba(230, 57, 70, 0.15);
          border: 1px solid rgba(230, 57, 70, 0.4);
          color: var(--red-ember);
          border-radius: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .skill-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .skill-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-dim);
        }

        .skill-exp {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .exp-label {
          color: var(--text-muted);
        }

        .exp-val {
          color: #ffffff;
          font-weight: 600;
        }

        .skill-pip {
          display: flex;
          gap: 3px;
        }

        .skill-pip i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--red-ember);
          opacity: 0.6;
        }

        .architecture-banner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2.5rem;
          background: rgba(12, 12, 18, 0.85);
          border: 1px solid rgba(230, 57, 70, 0.35);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s var(--ease-cinematic) 0.3s, transform 0.8s var(--ease-cinematic) 0.3s;
        }

        .universe-section.is-live .architecture-banner {
          opacity: 1;
          transform: translateY(0);
        }

        .arch-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .arch-num {
          font-family: var(--font-anton);
          font-size: 1.85rem;
          color: var(--red-ember);
          line-height: 1;
        }

        .arch-heading {
          font-family: var(--font-oswald);
          font-size: 1.15rem;
          color: #ffffff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .arch-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .architecture-banner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
