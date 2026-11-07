"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsScene() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
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

  const projects = portfolioData.projects;

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className={`projects-section ${isVisible ? "is-live" : ""}`}
    >
      <div className="projects-glow-accent" aria-hidden="true"></div>

      <div className="section-wrap">
        {/* Editorial Section Header from Original */}
        <div className="section-header">
          <p className="scene-number">Scene 04 // Production Deployments</p>
          <h2 className="scene-title">Featured Projects</h2>
          <p className="scene-subtitle">Enterprise Web Systems · Mobile Backends · High Throughput</p>
        </div>

        {/* 3D Projects Grid with Dynamic Sibling Easing */}
        <div className={`projects-grid ${hoveredIdx !== null ? "is-hot" : ""}`}>
          {projects.map((proj, idx) => (
            <article 
              key={proj.id} 
              className={`project-card glass-panel bracket-box ${hoveredIdx === idx ? "is-hovered" : ""}`}
              style={{ "--i": idx }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image Preview with scanline and zoom */}
              <div className="project-image-box">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={640}
                  height={360}
                  className="project-img"
                />
                <div className="image-scanline" aria-hidden="true"></div>
                <div className="laser-sweep" aria-hidden="true"></div>
                <div className="image-category-tag">{proj.category}</div>
              </div>

              {/* Content Body */}
              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-tagline">{proj.tagline}</p>
                  </div>
                  <span className="project-num">0{idx + 1}</span>
                </div>

                <p className="project-desc">{proj.description}</p>
                <p className="project-details">{proj.details}</p>

                {/* Tech tags */}
                <div className="project-tech-row">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Footer action link */}
                <div className="project-footer">
                  <div className="project-metric">
                    <span className="metric-lbl">{proj.stats.label}</span>
                    <span className="metric-val">{proj.stats.metric}</span>
                  </div>

                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ember btn-sm"
                  >
                    <span>Visit Live Platform</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          position: relative;
          background: #050508;
          border-top: 1px solid var(--border-dim);
          border-bottom: 1px solid var(--border-dim);
          overflow: hidden;
          perspective: 1200px;
        }

        .projects-glow-accent {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 750px;
          height: 650px;
          background: radial-gradient(circle, rgba(230, 57, 70, 0.1) 0%, transparent 70%);
          filter: blur(85px);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s var(--ease-cinematic), transform 0.8s var(--ease-cinematic);
        }

        .projects-section.is-live .section-header {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          transform-style: preserve-3d;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          background: rgba(14, 14, 20, 0.82);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          transform-style: preserve-3d;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s var(--ease-cinematic) calc(var(--i) * 0.12s),
                      transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease,
                      filter 0.35s ease;
        }

        .projects-section.is-live .project-card {
          opacity: 1;
          transform: translateY(0);
        }

        /* 3D Hover Lift from original scene 4 */
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(230, 57, 70, 0.6);
          box-shadow: 0 20px 45px -10px rgba(230, 57, 70, 0.35);
          z-index: 10;
        }

        /* Sibling cards ease back when one is active */
        .projects-grid.is-hot .project-card:not(:hover) {
          transform: scale(0.985);
          filter: brightness(0.85);
          opacity: 0.85;
        }

        .project-image-box {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #000;
        }

        :global(.project-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.65s ease;
        }

        .project-card:hover :global(.project-img) {
          transform: scale(1.06);
          filter: brightness(1.05);
        }

        .image-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 70%, rgba(4, 4, 6, 0.95) 100%);
          pointer-events: none;
        }

        .laser-sweep {
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(230, 57, 70, 0.25),
            transparent
          );
          transform: skewX(-20deg);
          pointer-events: none;
        }

        .project-card:hover .laser-sweep {
          animation: laserPass 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes laserPass {
          0% { left: -120%; }
          100% { left: 220%; }
        }

        .image-category-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.75rem;
          background: rgba(6, 6, 10, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(230, 57, 70, 0.45);
          color: var(--red-ember);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 2px;
          font-weight: 600;
        }

        .project-body {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .project-title {
          font-family: var(--font-oswald);
          font-size: 1.65rem;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .project-tagline {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--red-ember);
          letter-spacing: 0.04em;
        }

        .project-num {
          font-family: var(--font-anton);
          font-size: 2.1rem;
          color: rgba(255, 255, 255, 0.22);
          line-height: 1;
        }

        .project-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 0.85rem;
        }

        .project-details {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-badge {
          padding: 0.25rem 0.65rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-dim);
          border-radius: 3px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .project-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-dim);
        }

        .project-metric {
          display: flex;
          flex-direction: column;
        }

        .metric-lbl {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .metric-val {
          font-family: var(--font-oswald);
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 500;
        }

        .btn-sm {
          padding: 0.55rem 1.15rem;
          font-size: 0.82rem;
        }

        @media (max-width: 950px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
