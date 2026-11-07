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
            <span className="doc-type">RESUME // DIGITAL DOCUMENT</span>
            <span className="doc-name">{portfolioData.personal.name}</span>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="action-btn"
              onClick={() => window.print()}
              title="Print Resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              aria-label="Close modal"
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
            <p className="resume-location">{portfolioData.personal.location}</p>
            <div className="resume-contact-row">
              <span 
                className="clickable-contact"
                onClick={() => copyToClipboard(portfolioData.personal.phone, "phone")}
                title="Click to copy phone"
              >
                {portfolioData.personal.phone} {copied === "phone" && <b className="copied-tag">✓ Copied</b>}
              </span>
              <span className="pipe">|</span>
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
                LinkedIn Profile
              </a>
            </div>
          </header>

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

          {/* Projects */}
          <section className="resume-section">
            <h2 className="section-heading">PROJECTS</h2>
            {portfolioData.projects.map((proj) => (
              <div key={proj.id} className="proj-block">
                <h3 className="company-title">• {proj.title}</h3>
                <p className="proj-desc">{proj.description}</p>
                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="proj-url"
                >
                  {proj.url}
                </a>
              </div>
            ))}
          </section>

          <hr className="resume-rule" />

          {/* Skills */}
          <section className="resume-section">
            <h2 className="section-heading">SKILLS</h2>
            <div className="skills-line">
              <p><strong>• Front-end :</strong> HTML5, CSS3, Bootstrap &amp; JavaScript, React, Next.js.</p>
              <p><strong>• Back-end :</strong> Dotnet Mvc &amp; Core, C#, RESTful API Design, Web APIs.</p>
              <p><strong>• Tools :</strong> Visual Studio, Git, Azure &amp; SQL Server.</p>
            </div>
          </section>

          <hr className="resume-rule" />

          {/* Certifications */}
          <section className="resume-section">
            <h2 className="section-heading">CERTIFICATIONS</h2>
            {portfolioData.certifications.map((cert) => (
              <p key={cert.title} className="cert-item">
                • {cert.title} From {cert.issuer}
              </p>
            ))}
          </section>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          overflow-y: auto;
        }

        .modal-container {
          background: #ffffff;
          color: #1a1a24;
          width: 100%;
          max-width: 860px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-top-bar {
          background: #111118;
          color: #ffffff;
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .doc-type {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--red-ember);
          letter-spacing: 0.1em;
        }

        .doc-name {
          font-family: var(--font-oswald);
          font-size: 1.1rem;
          letter-spacing: 0.05em;
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
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
        }

        .close-btn {
          font-size: 1.4rem;
          line-height: 1;
          padding: 0.2rem 0.6rem;
        }

        .resume-sheet {
          padding: 3rem;
          overflow-y: auto;
          font-family: var(--font-sans);
          line-height: 1.5;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .resume-name {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 0.25rem;
          letter-spacing: -0.02em;
        }

        .resume-location {
          font-size: 0.95rem;
          color: #4b5563;
          margin-bottom: 0.35rem;
        }

        .resume-contact-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: #1f2937;
        }

        .clickable-contact {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .clickable-contact:hover {
          color: #1e3a8a;
          text-decoration: underline;
        }

        .copied-tag {
          font-size: 0.75rem;
          color: #059669;
          margin-left: 0.25rem;
        }

        .pipe {
          color: #9ca3af;
        }

        .resume-link {
          color: #1e3a8a;
          text-decoration: underline;
        }

        .resume-rule {
          border: none;
          border-top: 1.5px solid #2563eb;
          margin: 1.25rem 0;
        }

        .resume-section {
          margin-bottom: 1.25rem;
        }

        .section-heading {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #1e3a8a;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }

        .exp-block, .edu-block, .proj-block {
          margin-bottom: 1.25rem;
        }

        .block-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.35rem;
        }

        .company-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #111827;
        }

        .role-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
        }

        .period-badge {
          font-size: 0.9rem;
          color: #4b5563;
          font-weight: 500;
        }

        .achievements-list {
          padding-left: 1.25rem;
          font-size: 0.92rem;
          color: #374151;
        }

        .achievements-list li {
          margin-bottom: 0.35rem;
        }

        .edu-degree {
          font-size: 0.95rem;
          color: #1f2937;
        }

        .cgpa-strong {
          color: #1e3a8a;
        }

        .edu-details {
          font-size: 0.85rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .proj-desc {
          font-size: 0.92rem;
          color: #374151;
          margin: 0.2rem 0;
        }

        .proj-url {
          font-size: 0.88rem;
          color: #2563eb;
          text-decoration: underline;
        }

        .skills-line p {
          font-size: 0.92rem;
          color: #374151;
          margin-bottom: 0.35rem;
        }

        .cert-item {
          font-size: 0.92rem;
          color: #374151;
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
