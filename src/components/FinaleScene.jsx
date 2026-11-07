"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function FinaleScene({ onOpenResume }) {
  const [copiedField, setCopiedField] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `Hi Sagar,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <footer 
      id="contact" 
      ref={sectionRef} 
      className={`finale-section ${isVisible ? "is-live" : ""}`}
    >
      <div className="finale-smoke-bg" aria-hidden="true"></div>

      {/* Editorial Captions Inspired by Original Finale */}
      <div className="finale-editorial-cues" aria-hidden="true">
        <p className="f-cap f-cap--tl">
          Ideas<br />Designs<br />Architecture<br />Real Impact
        </p>
        <p className="f-cap f-cap--tr">
          Same<br />Passion<br />A Brighter<br />Tomorrow
        </p>
      </div>

      <div className="section-wrap">
        {/* Cinematic Closing Quote with Distressed Typography */}
        <div className="finale-quote-block">
          <p className="finale-tag">Scene 05 // The Finale</p>
          <blockquote className="finale-quote">
            &ldquo;Good Code Smokes Louder.<br />
            <span className="quote-distressed">Real Architecture. Real Impact.</span>&rdquo;
          </blockquote>
          <p className="finale-sub">A Software Architect&rsquo;s World &mdash; MMXXVI</p>
        </div>

        {/* Contact and Connect Hub */}
        <div className="contact-hub-grid">
          {/* Direct Details Card */}
          <div className="contact-card glass-panel bracket-box">
            <h3 className="card-headline">Direct Connect</h3>
            <p className="card-intro">
              Whether you are architecting a new .NET Core platform, scaling high-throughput REST APIs, or looking for a dedicated full-stack developer in your engineering team &mdash; let&rsquo;s connect.
            </p>

            <div className="contact-list">
              {/* Phone */}
              <div className="contact-item">
                <div className="item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="item-info">
                  <span className="item-label">Direct Line / WhatsApp</span>
                  <a href={`tel:${portfolioData.personal.phone}`} className="item-val">
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => copyToClipboard(portfolioData.personal.phone, "phone")}
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="item-info">
                  <span className="item-label">Primary Email</span>
                  <a href={`mailto:${portfolioData.personal.email}`} className="item-val">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => copyToClipboard(portfolioData.personal.email, "email")}
                  title="Copy Email"
                >
                  {copiedField === "email" ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="item-info">
                  <span className="item-label">Base Location</span>
                  <span className="item-val">{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <div className="item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66Z"/>
                  </svg>
                </div>
                <div className="item-info">
                  <span className="item-label">Professional Profile</span>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-val text-red"
                  >
                    LinkedIn / Sagar Wavare
                  </a>
                </div>
              </div>
            </div>

            <div className="card-actions-row">
              <button type="button" className="btn-ember" onClick={onOpenResume}>
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Interactive Fast Dispatch Form */}
          <div className="contact-card glass-panel bracket-box">
            <h3 className="card-headline">Dispatch Direct Transmission</h3>
            <p className="card-intro">
              Send an instant message directly to Sagar&rsquo;s inbox. All inquiries receive a response within 24 hours.
            </p>

            {formSent ? (
              <div className="form-success-banner">
                <span className="success-icon">✓</span>
                <h4 className="success-title">Transmission Prepared</h4>
                <p className="success-desc">
                  Your mail client has been opened with your inquiry pre-loaded. Thank you for reaching out!
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setFormSent(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="c-name" className="field-label">Your Name</label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className="field-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="c-email" className="field-label">Your Email</label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="field-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="c-subject" className="field-label">Subject</label>
                  <input
                    id="c-subject"
                    type="text"
                    required
                    placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                    className="field-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="c-message" className="field-label">Message</label>
                  <textarea
                    id="c-message"
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or engineering role..."
                    className="field-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-ember btn-submit">
                  <span>Send Transmission</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Cinematic Bottom Bar */}
        <div className="finale-bottom-bar">
          <div className="brand-bottom">
            <span className="brand-title">SAGAR</span>
            <span className="brand-copy">&copy; 2026 Sagar Wavare &mdash; All rights reserved</span>
          </div>

          <div className="footer-links">
            <a href="#hero">Top</a>
            <a href="#universe">Universe</a>
            <a href="#timeline">Journey</a>
            <a href="#projects">Work</a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .finale-section {
          position: relative;
          background: #020204;
          border-top: 1px solid var(--border-dim);
          padding-top: 5.5rem;
          overflow: hidden;
        }

        .finale-smoke-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 12%, rgba(230, 57, 70, 0.14) 0%, transparent 65%);
          pointer-events: none;
        }

        .finale-editorial-cues {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }

        .f-cap {
          position: absolute;
          font-family: var(--font-mono);
          font-size: clamp(8px, 0.72vw, 11px);
          font-weight: 400;
          line-height: 2;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(212, 208, 205, 0.35);
          opacity: 0;
          transition: opacity 0.8s ease 0.4s;
        }

        .finale-section.is-live .f-cap {
          opacity: 1;
        }

        .f-cap--tl {
          top: 3.5rem;
          left: 3rem;
        }

        .f-cap--tr {
          top: 3.5rem;
          right: 3rem;
          text-align: right;
        }

        .finale-quote-block {
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s var(--ease-cinematic), transform 0.8s var(--ease-cinematic);
        }

        .finale-section.is-live .finale-quote-block {
          opacity: 1;
          transform: translateY(0);
        }

        .finale-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.22em;
          color: var(--red-ember);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .finale-quote {
          font-family: var(--font-anton);
          font-size: clamp(2.3rem, 5.8vw, 4.6rem);
          line-height: 1.1;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .quote-distressed {
          color: var(--red-ember);
          background-image: url("/tex/grunge.png");
          background-size: 260px;
          background-blend-mode: multiply;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: saturate(1.4) contrast(1.2);
          text-shadow: 0 0 35px rgba(230, 57, 70, 0.65);
        }

        .finale-sub {
          font-family: var(--font-oswald);
          font-size: 1rem;
          letter-spacing: 0.22em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .contact-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s var(--ease-cinematic) 0.2s, transform 0.8s var(--ease-cinematic) 0.2s;
        }

        .finale-section.is-live .contact-hub-grid {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-card {
          padding: 2.5rem;
          background: rgba(12, 12, 18, 0.82);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-headline {
          font-family: var(--font-oswald);
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .card-intro {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-dim);
          border-radius: 6px;
        }

        .item-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(230, 57, 70, 0.15);
          color: var(--red-ember);
          flex-shrink: 0;
        }

        .item-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .item-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .item-val {
          font-size: 0.92rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
        }

        .copy-btn {
          padding: 0.3rem 0.65rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-dim);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: var(--red-ember);
          color: #ffffff;
        }

        .text-red {
          color: #ff4d4d;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .field-input, .field-textarea {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-dim);
          border-radius: 4px;
          padding: 0.75rem 1rem;
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .field-input:focus, .field-textarea:focus {
          outline: none;
          border-color: var(--red-ember);
          box-shadow: 0 0 12px rgba(230, 57, 70, 0.35);
          background: rgba(255, 255, 255, 0.08);
        }

        .field-textarea {
          resize: vertical;
        }

        .btn-submit {
          width: 100%;
          padding: 0.9rem;
        }

        .form-success-banner {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .success-title {
          font-family: var(--font-oswald);
          font-size: 1.4rem;
          color: #ffffff;
        }

        .success-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 400px;
        }

        .finale-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2.5rem 0;
          border-top: 1px solid var(--border-dim);
        }

        .brand-bottom {
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }

        .brand-title {
          font-family: var(--font-anton);
          font-size: 1.6rem;
          color: #ffffff;
        }

        .brand-copy {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          font-family: var(--font-oswald);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .finale-editorial-cues {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .contact-hub-grid {
            grid-template-columns: 1fr;
          }
          .finale-bottom-bar {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
