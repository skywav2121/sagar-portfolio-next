"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Header */}
        <div className="modal-top-bar">
          <div className="modal-title-group">
            <span className="doc-type">CURRICULUM VITAE // DIGITAL RECORD</span>
            <span className="doc-name">{portfolioData.personal.name}</span>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="action-btn"
              onClick={() => window.print()}
              title="Print Resume"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print</span>
            </button>

            <button
              type="button"
              className="action-btn close-btn"
              onClick={onClose}
              aria-label="Close resume modal"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">{portfolioData.personal.name}</h1>
            <p className="resume-role">{portfolioData.personal.title}</p>
            <p className="resume-location">{portfolioData.personal.location}</p>
            <div className="resume-contact-row">
              <span 
                className="clickable-contact"
                onClick={() => copyToClipboard(portfolioData.personal.email, "email")}
                title="Click to copy email"
              >
                {portfolioData.personal.email} {copied === "email" && <b className="copied-tag">✓ Copied</b>}
              </span>
              <span className="pipe">|</span>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-link"
              >
                linkedin.com/in/sagar-wavare
              </a>
            </div>
          </header>

          <hr className="resume-rule" />

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="section-heading">PROFESSIONAL SUMMARY</h2>
            <p className="summary-text">{portfolioData.personal.bio}</p>
          </section>

          <hr className="resume-rule" />

          {/* Work Experience */}
          <section className="resume-section">
            <h2 className="section-heading">WORK EXPERIENCE</h2>
            
            {portfolioData.experience.map((exp) => (
              <div key={exp.company} className="exp-block">
                <div className="block-header">
                  <div>
                    <h3 className="company-title">• {exp.company}</h3>
                    <p className="role-title">{exp.role}</p>
                  </div>
                  <span className="period-badge">{exp.period}</span>
                </div>

                <ul className="achievements-list">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <hr className="resume-rule" />

          {/* Featured Production Projects */}
          <section className="resume-section">
            <h2 className="section-heading">PRODUCTION PROJECTS</h2>
            {portfolioData.projects.map((proj) => (
              <div key={proj.id} className="proj-block">
                <div className="block-header">
                  <h3 className="company-title">• {proj.title} ({proj.impactBadge})</h3>
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="proj-url"
                  >
                    {proj.url.replace("https://", "")} ↗
                  </a>
                </div>
                <p className="proj-desc"><strong>Problem:</strong> {proj.problem}</p>
                <p className="proj-desc"><strong>Architecture:</strong> {proj.architecture}</p>
                <p className="proj-desc"><strong>Impact:</strong> {proj.impact}</p>
              </div>
            ))}
          </section>

          <hr className="resume-rule" />

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="section-heading">TECHNICAL SKILLS</h2>
            <div className="skills-line">
              <p><strong>• Backend &amp; .NET:</strong> C#, .NET Core, ASP.NET MVC, RESTful Web APIs, Microservices architecture.</p>
              <p><strong>• Database &amp; Cloud:</strong> Microsoft SQL Server, Stored Procedures, Index Tuning, Azure Services.</p>
              <p><strong>• Frontend:</strong> JavaScript (ES6+), React, Next.js, HTML5, CSS3, Bootstrap (Certified), jQuery.</p>
              <p><strong>• Tooling &amp; Practices:</strong> Git/GitHub, Visual Studio, VS Code, Postman, Agile/Scrum.</p>
            </div>
          </section>

          <hr className="resume-rule" />

          {/* Education */}
          <section className="resume-section">
            <h2 className="section-heading">EDUCATION</h2>
            {portfolioData.education.map((edu) => (
              <div key={edu.institution} className="edu-block">
                <div className="block-header">
                  <h3 className="company-title">• {edu.institution}</h3>
                  <span className="period-badge">{edu.period}</span>
                </div>
                <p className="edu-degree">{edu.degree} &mdash; <strong className="cgpa-strong">{edu.cgpa}</strong></p>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </section>

          <hr className="resume-rule" />

          {/* Certifications */}
          <section className="resume-section">
            <h2 className="section-heading">CERTIFICATIONS</h2>
            {portfolioData.certifications.map((cert) => (
              <p key={cert.title} className="cert-item">
                • {cert.title} &mdash; {cert.issuer} ({cert.skills})
              </p>
            ))}
          </section>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(9, 10, 15, 0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          overflow-y: auto;
        }

        .modal-container {
          background: #ffffff;
          color: #111827;
          width: 100%;
          max-width: 860px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-top-bar {
          background: #11131B;
          color: #ffffff;
          padding: 0.85rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .doc-type {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-cyan);
          letter-spacing: 0.1em;
        }

        .doc-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.8rem;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          background: rgba(34, 211, 238, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .close-btn {
          font-size: 1.3rem;
          line-height: 1;
          padding: 0.2rem 0.6rem;
        }

        .resume-sheet {
          padding: 2.75rem 3rem;
          overflow-y: auto;
          font-family: var(--font-sans);
          line-height: 1.5;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .resume-name {
          font-family: var(--font-display);
          font-size: 2.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.15rem;
          letter-spacing: -0.02em;
        }

        .resume-role {
          font-size: 1rem;
          font-weight: 600;
          color: #0284c7;
          margin-bottom: 0.25rem;
        }

        .resume-location {
          font-size: 0.92rem;
          color: #475569;
          margin-bottom: 0.35rem;
        }

        .resume-contact-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #1e293b;
        }

        .clickable-contact {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .clickable-contact:hover {
          color: #0284c7;
          text-decoration: underline;
        }

        .copied-tag {
          font-size: 0.75rem;
          color: #059669;
          margin-left: 0.25rem;
        }

        .pipe {
          color: #cbd5e1;
        }

        .resume-link {
          color: #0284c7;
          text-decoration: underline;
        }

        .resume-rule {
          border: none;
          border-top: 1.5px solid #0284c7;
          margin: 1.15rem 0;
        }

        .resume-section {
          margin-bottom: 1.15rem;
        }

        .section-heading {
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #0f172a;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .summary-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.6;
        }

        .exp-block, .edu-block, .proj-block {
          margin-bottom: 1.15rem;
        }

        .block-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.3rem;
        }

        .company-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .role-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: #334155;
        }

        .period-badge {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: #64748b;
        }

        .achievements-list {
          padding-left: 1.25rem;
          font-size: 0.9rem;
          color: #334155;
        }

        .achievements-list li {
          margin-bottom: 0.3rem;
        }

        .edu-degree {
          font-size: 0.92rem;
          color: #1e293b;
        }

        .cgpa-strong {
          color: #0284c7;
        }

        .edu-details {
          font-size: 0.84rem;
          color: #64748b;
          margin-top: 0.2rem;
        }

        .proj-desc {
          font-size: 0.88rem;
          color: #334155;
          margin: 0.15rem 0;
          line-height: 1.5;
        }

        .proj-url {
          font-size: 0.84rem;
          color: #0284c7;
          text-decoration: underline;
        }

        .skills-line p {
          font-size: 0.9rem;
          color: #334155;
          margin-bottom: 0.35rem;
          line-height: 1.55;
        }

        .cert-item {
          font-size: 0.9rem;
          color: #334155;
        }

        @media (max-width: 640px) {
          .resume-sheet {
            padding: 1.5rem;
          }
          .resume-name {
            font-size: 1.6rem;
          }
          .block-header {
            flex-direction: column;
          }
        }

        @media print {
          .modal-top-bar {
            display: none;
          }
          .modal-backdrop {
            position: static;
            padding: 0;
            background: none;
          }
          .modal-container {
            max-width: 100%;
            box-shadow: none;
            max-height: none;
          }
        }
      `}</style>
    </div>
  );
}
