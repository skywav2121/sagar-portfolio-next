"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function TimeMachineScene() {
  const [selectedIdx, setSelectedIdx] = useState(2); // default to 2022 (Techiefleet)
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

  const years = portfolioData.timelineYears;
  const activeYear = years[selectedIdx];

  // Calculate clock hand rotation (-55deg for 2019 up to +55deg for 2026)
  const angle = -55 + (selectedIdx / (years.length - 1)) * 110;

  return (
    <section 
      id="timeline" 
      ref={sectionRef} 
      className={`chrono-section ${isVisible ? "is-live" : ""}`}
    >
      <div className="chrono-ambient-glow" aria-hidden="true"></div>

      <div className="section-wrap">
        {/* Section Editorial Header from Original */}
        <div className="section-header">
          <p className="scene-number">Scene 03 // Career Arc</p>
          <h2 className="scene-title">The Time Machine</h2>
          <p className="scene-subtitle">A Journey Through Time // 2019 — 2026</p>
        </div>

        {/* Editorial Side Hints from Original */}
        <div className="chrono-editorial-cues" aria-hidden="true">
          <p className="chrono-hint chrono-hint--left">
            <span>Move</span>
            <span>To Travel</span>
            <span>Through Time</span>
            <i></i>
          </p>

          <p className="chrono-hint chrono-hint--right">
            <span>Engineering</span>
            <span>A Brighter</span>
            <span>Tomorrow</span>
            <i></i>
          </p>
        </div>

        {/* Clock Projector Mechanism from Original WebGL Scene */}
        <div className="clock-mechanism" aria-hidden="true">
          <div className="clock-hub">
            <div className="clock-hub-inner"></div>
            {/* The Light Projector Hand */}
            <div 
              className="clock-beam-hand"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div className="beam-cone"></div>
              <div className="beam-needle"></div>
              <div className="beam-target-glint"></div>
            </div>
          </div>
          <div className="clock-arc-rail"></div>
        </div>

        {/* Year Selector Rail Buttons with Scrubbing */}
        <div className="timeline-rail" role="tablist" aria-label="Career Timeline Years">
          {years.map((y, idx) => (
            <button
              key={y.year}
              type="button"
              role="tab"
              aria-selected={selectedIdx === idx}
              className={`rail-node ${selectedIdx === idx ? "is-active" : ""}`}
              onClick={() => setSelectedIdx(idx)}
              onMouseEnter={() => setSelectedIdx(idx)}
            >
              <span className="node-glow-ring"></span>
              <span className="node-year">{y.year}</span>
              <span className="node-pip"></span>
            </button>
          ))}
        </div>

        {/* Active Journey Card with Blur-to-Focus Settle */}
        <div className="milestone-stage">
          <div key={activeYear.year} className="milestone-card glass-panel bracket-box">
            <div className="card-top-row">
              <div className="card-year-tag">
                <span className="tag-year">{activeYear.year}</span>
                <span className="tag-sep">{"//"}</span>
                <span className="tag-label">{activeYear.label}</span>
              </div>
              <span className="card-sub">{activeYear.subtitle}</span>
            </div>

            <p className="card-desc">{activeYear.description}</p>

            {/* Experience or Education Specific Context */}
            {activeYear.year === "2019" && (
              <div className="card-extra-block">
                <div className="extra-item">
                  <span className="extra-title">Institution</span>
                  <span className="extra-val">University Of Mumbai</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Degree</span>
                  <span className="extra-val">Masters Of Computer Science (M.Sc)</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Focus Areas</span>
                  <span className="extra-val">Advanced Databases, Object-Oriented Design &amp; Web Systems</span>
                </div>
              </div>
            )}

            {activeYear.year === "2021" && (
              <div className="card-extra-block">
                <div className="extra-item">
                  <span className="extra-title">Company</span>
                  <span className="extra-val">Goup Technologies</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Role</span>
                  <span className="extra-val">Web Developer Trainee</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Measurable Impact</span>
                  <span className="extra-val text-red">Reduced production bugs by 25% with rigorous testing &amp; C# MVC fixes</span>
                </div>
              </div>
            )}

            {(activeYear.year === "2022" || activeYear.year === "2023" || activeYear.year === "2024") && (
              <div className="card-extra-block">
                <div className="extra-item">
                  <span className="extra-title">Company</span>
                  <span className="extra-val">Techiefleet Technologies</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Role</span>
                  <span className="extra-val">Junior Web Developer (Full-Time)</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Core Contributions</span>
                  <span className="extra-val">Architected .NET Core REST APIs, integrated Flutter/Android backends, tuned SQL queries</span>
                </div>
              </div>
            )}

            {activeYear.year === "2026" && (
              <div className="card-extra-block">
                <div className="extra-item">
                  <span className="extra-title">Current Focus</span>
                  <span className="extra-val">Next.js + Enterprise .NET Core Architecture</span>
                </div>
                <div className="extra-item">
                  <span className="extra-title">Availability</span>
                  <span className="extra-val text-red">Ready for Senior / Full-Stack Web Development Roles</span>
                </div>
              </div>
            )}

            <div className="card-nav-controls">
              <button
                type="button"
                className="btn-secondary"
                disabled={selectedIdx === 0}
                onClick={() => setSelectedIdx(Math.max(0, selectedIdx - 1))}
              >
                &larr; Previous Year
              </button>

              <span className="step-indicator">
                {selectedIdx + 1} of {years.length} Milestones
              </span>

              <button
                type="button"
                className="btn-secondary"
                disabled={selectedIdx === years.length - 1}
                onClick={() => setSelectedIdx(Math.min(years.length - 1, selectedIdx + 1))}
              >
                Next Year &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chrono-section {
          position: relative;
          background: #040407;
          border-top: 1px solid var(--border-dim);
          border-bottom: 1px solid var(--border-dim);
          overflow: hidden;
        }

        .chrono-ambient-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 950px;
          height: 650px;
          background: radial-gradient(circle, rgba(230, 57, 70, 0.12) 0%, transparent 70%);
          filter: blur(85px);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s var(--ease-cinematic), transform 0.8s var(--ease-cinematic);
        }

        .chrono-section.is-live .section-header {
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

        .chrono-editorial-cues {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }

        .chrono-hint {
          position: absolute;
          top: 180px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          opacity: 0;
          transition: opacity 0.8s ease 0.3s;
        }

        .chrono-hint i {
          width: 24px;
          height: 1px;
          background: var(--red-ember);
          margin-top: 0.4rem;
          opacity: 0.7;
        }

        .chrono-hint--left {
          left: 3rem;
        }

        .chrono-hint--right {
          right: 3rem;
          align-items: flex-end;
          text-align: right;
        }

        .chrono-section.is-live .chrono-hint {
          opacity: 1;
        }

        /* Clock Divider Mechanism */
        .clock-mechanism {
          position: relative;
          width: 100%;
          max-width: 640px;
          height: 150px;
          margin: 0 auto 1.5rem;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .clock-hub {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: radial-gradient(circle, #333 0%, #111 100%);
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 25px rgba(230, 57, 70, 0.5);
          z-index: 5;
        }

        .clock-hub-inner {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          background: var(--red-ember);
          box-shadow: 0 0 12px var(--red-ember);
        }

        .clock-beam-hand {
          position: absolute;
          bottom: 24px;
          left: 22px;
          width: 4px;
          height: 170px;
          transform-origin: bottom center;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .beam-needle {
          width: 2px;
          height: 100%;
          background: linear-gradient(to top, rgba(255, 255, 255, 0.9), var(--red-ember));
          box-shadow: 0 0 14px var(--red-ember);
          margin: 0 auto;
        }

        .beam-cone {
          position: absolute;
          top: -24px;
          left: -44px;
          width: 92px;
          height: 190px;
          background: linear-gradient(
            to top,
            transparent 0%,
            rgba(230, 57, 70, 0.28) 75%,
            rgba(255, 107, 53, 0.7) 100%
          );
          clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
          pointer-events: none;
          filter: blur(5px);
        }

        .clock-arc-rail {
          position: absolute;
          bottom: 0;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(230, 57, 70, 0.6), transparent);
        }

        /* Timeline year buttons */
        .timeline-rail {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 900px;
          margin: 0 auto 3rem;
          padding: 0 1rem;
          position: relative;
        }

        .timeline-rail::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 3rem;
          right: 3rem;
          height: 2px;
          background: rgba(255, 255, 255, 0.12);
          z-index: 1;
        }

        .rail-node {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }

        .rail-node:hover {
          transform: translateY(-4px);
        }

        .node-year {
          font-family: var(--font-oswald);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .node-pip {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #1a1a24;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .rail-node.is-active .node-year {
          color: #ffffff;
          text-shadow: 0 0 18px rgba(230, 57, 70, 0.9);
        }

        .rail-node.is-active .node-pip {
          background: var(--red-ember);
          border-color: #ffffff;
          box-shadow: 0 0 20px var(--red-ember);
          transform: scale(1.35);
        }

        /* Milestone Stage with Blur-to-Focus Settle */
        .milestone-stage {
          max-width: 900px;
          margin: 0 auto;
        }

        .milestone-card {
          padding: 3rem;
          background: rgba(14, 14, 20, 0.82);
          border: 1px solid rgba(230, 57, 70, 0.4);
          box-shadow: 0 25px 55px rgba(0, 0, 0, 0.75);
          animation: cardMaterialize 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardMaterialize {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .card-top-row {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-dim);
        }

        .card-year-tag {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .tag-year {
          font-family: var(--font-anton);
          font-size: 3rem;
          color: var(--red-ember);
          line-height: 1;
          text-shadow: 0 0 20px rgba(230, 57, 70, 0.5);
        }

        .tag-sep {
          color: rgba(255, 255, 255, 0.2);
          font-family: var(--font-mono);
        }

        .tag-label {
          font-family: var(--font-oswald);
          font-size: 1.4rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-sub {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .card-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .card-extra-block {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          background: rgba(8, 8, 14, 0.7);
          padding: 1.6rem;
          border-radius: 6px;
          border: 1px solid var(--border-dim);
          margin-bottom: 2.5rem;
        }

        .extra-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .extra-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .extra-val {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .text-red {
          color: #ff5566 !important;
          font-weight: 600;
        }

        .card-nav-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-dim);
        }

        .step-indicator {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .chrono-editorial-cues {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .milestone-card {
            padding: 1.75rem;
          }
          .tag-year {
            font-size: 2.3rem;
          }
          .tag-label {
            font-size: 1.15rem;
          }
          .timeline-rail {
            overflow-x: auto;
            justify-content: flex-start;
            gap: 1.5rem;
            padding-bottom: 1rem;
          }
          .timeline-rail::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
