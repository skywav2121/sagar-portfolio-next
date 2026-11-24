"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function TimeMachineScene() {
  const [selectedYear, setSelectedYear] = useState("all");
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

  const years = portfolioData.timelineYears;
  const filteredMilestones =
    selectedYear === "all"
      ? years
      : years.filter((m) => m.year === selectedYear);

  return (
    <section 
      id="timeline" 
      ref={sectionRef} 
      className={`timeline-section ${isVisible ? "is-live" : ""}`}
    >
      <div className="section-wrap">
        {/* Section Header */}
        <div className="section-header">
          <p className="mono-eyebrow">03 // CAREER ARC &amp; JOURNEY</p>
          <h2 className="section-title">Experience &amp; Milestones</h2>
          <p className="section-subtitle body-prose">
            A scannable engineering trajectory from computer science academia to production enterprise systems.
          </p>
        </div>

        {/* Optional Filter Pills (defaults to All so all milestones are scannable immediately) */}
        <div className="year-filter-bar" role="tablist" aria-label="Filter timeline by year">
          <button
            type="button"
            className={`filter-pill ${selectedYear === "all" ? "is-active" : ""}`}
            onClick={() => setSelectedYear("all")}
          >
            All Milestones
          </button>
          {years.map((y) => (
            <button
              key={y.year}
              type="button"
              className={`filter-pill ${selectedYear === y.year ? "is-active" : ""}`}
              onClick={() => setSelectedYear(y.year)}
            >
              {y.year}
            </button>
          ))}
        </div>

        {/* Clean Vertical Timeline Spine */}
        <div className="timeline-spine-wrap">
          <div className="timeline-spine-line" aria-hidden="true" />

          <div className="timeline-list">
            {filteredMilestones.map((item) => (
              <div key={item.year} className="timeline-item">
                {/* Center Node on Spine */}
                <div className="timeline-node" aria-hidden="true">
                  <div className="node-dot" />
                </div>

                {/* Milestone Content Card */}
                <div className="obsidian-card milestone-card">
                  <div className="milestone-top">
                    <div className="milestone-year-badge">
                      <span className="badge-year">{item.year}</span>
                      <span className="badge-sep">/</span>
                      <span className="badge-role">{item.role}</span>
                    </div>
                    <span className="milestone-sub">{item.subtitle}</span>
                  </div>

                  <h3 className="milestone-title">{item.label}</h3>

                  <p className="milestone-desc body-prose">
                    {item.description}
                  </p>

                  {/* Contextual Highlights */}
                  {item.year === "2021" && (
                    <div className="milestone-tag-row">
                      <span className="highlight-pill highlight-cyan">25% defect reduction</span>
                      <span className="highlight-pill">ASP.NET MVC</span>
                      <span className="highlight-pill">7.79 CGPA</span>
                    </div>
                  )}

                  {item.year === "2022" && (
                    <div className="milestone-tag-row">
                      <span className="highlight-pill highlight-cyan">Junior Web Developer</span>
                      <span className="highlight-pill">.NET Core</span>
                      <span className="highlight-pill">Techiefleet Technologies</span>
                    </div>
                  )}

                  {item.year === "2023" && (
                    <div className="milestone-tag-row">
                      <span className="highlight-pill highlight-cyan">Cross-platform REST APIs</span>
                      <span className="highlight-pill">Flutter &amp; Android integration</span>
                      <span className="highlight-pill">JWT security</span>
                    </div>
                  )}

                  {item.year === "2024" && (
                    <div className="milestone-tag-row">
                      <span className="highlight-pill highlight-cyan">4 live platforms</span>
                      <span className="highlight-pill">99.9% uptime</span>
                      <span className="highlight-pill">SQL Server tuning</span>
                    </div>
                  )}

                  {item.year === "2026" && (
                    <div className="milestone-tag-row">
                      <span className="highlight-pill highlight-cyan">Full-Stack .NET &amp; Next.js</span>
                      <span className="highlight-pill">Microservices</span>
                      <span className="highlight-pill highlight-emerald">Open to senior roles</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          position: relative;
          background: #090A0F;
          border-top: 1px solid var(--border-hairline);
          border-bottom: 1px solid var(--border-hairline);
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.75rem;
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

        .year-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3.5rem;
        }

        .filter-pill {
          padding: 0.45rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-hairline);
          border-radius: 999px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s var(--ease-smooth);
        }

        .filter-pill:hover {
          background: rgba(255, 255, 255, 0.07);
          color: #ffffff;
        }

        .filter-pill.is-active {
          background: rgba(34, 211, 238, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        /* Vertical Timeline Spine */
        .timeline-spine-wrap {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline-spine-line {
          position: absolute;
          top: 1.5rem;
          bottom: 1.5rem;
          left: 11px;
          width: 2px;
          background: linear-gradient(
            180deg,
            var(--accent-cyan) 0%,
            rgba(34, 211, 238, 0.4) 50%,
            rgba(255, 255, 255, 0.08) 100%
          );
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
        }

        .timeline-node {
          position: absolute;
          left: -2rem;
          top: 1.5rem;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .node-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #090A0F;
          border: 2px solid var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan-glow);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .timeline-item:hover .node-dot {
          background: var(--accent-cyan);
          transform: scale(1.3);
        }

        .milestone-card {
          width: 100%;
          padding: 2rem;
          border-radius: 8px;
        }

        .milestone-top {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .milestone-year-badge {
          display: inline-flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .badge-year {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-variant-numeric: tabular-nums;
        }

        .badge-sep {
          color: var(--border-hairline);
          font-size: 0.85rem;
        }

        .badge-role {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: #ffffff;
        }

        .milestone-sub {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .milestone-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .milestone-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.62;
          margin-bottom: 1.25rem;
        }

        .milestone-tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
        }

        .highlight-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.25rem 0.65rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-hairline);
          border-radius: 4px;
          color: var(--text-muted);
        }

        .highlight-cyan {
          background: rgba(34, 211, 238, 0.08);
          border-color: rgba(34, 211, 238, 0.25);
          color: var(--accent-cyan);
        }

        .highlight-emerald {
          background: rgba(52, 211, 153, 0.08);
          border-color: rgba(52, 211, 153, 0.25);
          color: var(--accent-emerald);
        }

        @media (max-width: 640px) {
          .timeline-spine-wrap {
            padding-left: 1.5rem;
          }
          .timeline-spine-line {
            left: 7px;
          }
          .timeline-node {
            left: -1.5rem;
          }
          .milestone-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
