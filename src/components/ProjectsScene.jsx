"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsScene() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      <div className="section-wrap">
        {/* Section Header */}
        <div className="section-header">
          <p className="mono-eyebrow">04 // PRODUCTION DEPLOYMENTS</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle body-prose">
            Enterprise platforms, high-throughput search backends, and multi-channel API systems in production.
          </p>
        </div>

        {/* Equal-Height 2-Column Grid */}
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <article 
              key={proj.id} 
              className="obsidian-card project-card"
            >
              {/* 16:9 Architectural Visual Header */}
              <div className="project-image-box">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={640}
                  height={360}
                  className="project-img"
                />
                <div className="image-overlay" aria-hidden="true" />
                <div className="image-category-pill">{proj.category}</div>
                <div className="impact-badge">{proj.impactBadge}</div>
              </div>

              {/* Outcome-Driven Card Body with Flex Column Justify Between */}
              <div className="project-body">
                <div className="project-header">
                  <div className="title-group">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-tagline">{proj.tagline}</p>
                  </div>
                  <span className="project-index" aria-hidden="true">0{idx + 1}</span>
                </div>

                {/* Structured Outcome-Driven Copy: Problem -> Architecture -> Impact */}
                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Problem:</span>
                    <p className="detail-text">{proj.problem}</p>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Architecture:</span>
                    <p className="detail-text">{proj.architecture}</p>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Impact:</span>
                    <p className="detail-text">{proj.impact}</p>
                  </div>
                </div>

                {/* Bottom Section Pushed to Bottom to Keep Alignment */}
                <div className="project-bottom">
                  {/* Tech Badges */}
                  <div className="tech-badge-row">
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Footer Action Row */}
                  <div className="project-footer">
                    <div className="project-metric">
                      <span className="metric-lbl">{proj.stats.label}</span>
                      <span className="metric-val">{proj.stats.metric}</span>
                    </div>

                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyan btn-visit"
                      aria-label={`Visit live platform for ${proj.title}`}
                    >
                      <span>Live Platform</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          position: relative;
          background: #090A0F;
          border-top: 1px solid var(--border-hairline);
          border-bottom: 1px solid var(--border-hairline);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          text-align: center;
        }

        /* Equal-Height 2-Column Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          overflow: hidden;
          border-radius: 10px;
        }

        /* 16:9 Aspect Ratio Container */
        .project-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #090A0F;
        }

        :global(.project-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s var(--ease-smooth);
        }

        .project-card:hover :global(.project-img) {
          transform: scale(1.04);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 10, 15, 0.2) 0%, rgba(9, 10, 15, 0.75) 100%);
          pointer-events: none;
        }

        .image-category-pill {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.65rem;
          background: rgba(9, 10, 15, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-hairline);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          border-radius: 4px;
        }

        .impact-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.3rem 0.75rem;
          background: rgba(34, 211, 238, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(34, 211, 238, 0.35);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          border-radius: 4px;
        }

        .project-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .project-tagline {
          font-size: 0.86rem;
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .project-index {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.15);
        }

        /* Outcome-Driven Sections */
        .project-details {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .detail-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .detail-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .project-bottom {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .tech-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-badge {
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-hairline);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
        }

        .project-metric {
          display: flex;
          flex-direction: column;
        }

        .metric-lbl {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .metric-val {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
        }

        .btn-visit {
          padding: 0.5rem 1.05rem;
          font-size: 0.84rem;
          border-radius: 6px;
        }

        @media (max-width: 950px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .project-body {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
