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
      { threshold: 0.1 }
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
      <div className="section-wrap">
        {/* Section Header */}
        <div className="section-header">
          <p className="mono-eyebrow">02 // TECHNICAL MATRIX</p>
          <h2 className="section-title">Technical Universe</h2>
          <p className="section-subtitle body-prose">
            Production-tested backend systems, APIs, and database architecture built for reliability and scale.
          </p>
        </div>

        {/* Clean Categorization Filter Tabs */}
        <div className="category-bar" role="tablist" aria-label="Skill categories">
          {portfolioData.skills.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`cat-btn ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Uniform Skill Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`obsidian-card skill-card ${hoveredCard === index ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-years">{skill.years}</span>
              </div>

              <p className="skill-desc">{skill.desc}</p>

              <div className="skill-footer">
                <span className="footer-category">
                  {skill.category === "backend" ? ".NET / Backend" :
                   skill.category === "database" ? "Database & Cloud" :
                   skill.category === "frontend" ? "Frontend & UI" : "Tooling & DevOps"}
                </span>
                <span className="footer-indicator" aria-hidden="true"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Standards Banner */}
        <div className="obsidian-card architecture-banner">
          <div className="arch-col">
            <span className="arch-num">01</span>
            <h3 className="arch-heading">High-performance .NET</h3>
            <p className="arch-text">
              Expertise in .NET MVC and .NET Core, dependency injection, middleware pipelines, and enterprise-grade modular design.
            </p>
          </div>
          <div className="arch-col">
            <span className="arch-num">02</span>
            <h3 className="arch-heading">Cross-platform REST APIs</h3>
            <p className="arch-text">
              Secure RESTful API backends serving high-concurrency web platforms alongside Flutter and Android mobile apps.
            </p>
          </div>
          <div className="arch-col">
            <span className="arch-num">03</span>
            <h3 className="arch-heading">SQL Server optimization</h3>
            <p className="arch-text">
              Deep familiarity with stored procedures, index tuning, execution plans, and relational integrity under production workloads.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .universe-section {
          position: relative;
          background: var(--bg-canvas);
          border-top: 1px solid var(--border-hairline);
          border-bottom: 1px solid var(--border-hairline);
          transition: background-color 0.25s var(--ease-smooth);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
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
          color: var(--text-heading);
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .category-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 2.75rem;
        }

        .cat-btn {
          padding: 0.55rem 1.2rem;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.86rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s var(--ease-smooth);
        }

        .cat-btn:hover {
          background: var(--bg-surface-subtle-hover);
          color: var(--text-heading);
          border-color: var(--border-strong);
        }

        .cat-btn.is-active {
          background: var(--accent-cyan-subtle);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan-fg);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .skill-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 8px;
        }

        .skill-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .skill-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-heading);
        }

        .skill-years {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent-cyan-fg);
          background: var(--accent-cyan-subtle);
          border: 1px solid var(--accent-cyan-border);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
        }

        .skill-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .skill-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-hairline);
        }

        .footer-category {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }

        .footer-indicator {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--border-hairline);
          transition: background 0.2s ease;
        }

        .skill-card:hover .footer-indicator {
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        .architecture-banner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2.25rem;
        }

        .arch-col {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .arch-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-cyan-fg);
          letter-spacing: 0.1em;
        }

        .arch-heading {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-heading);
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
