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
      { threshold: 0.1 }
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
      formData.subject || "Software Engineering Role / Inquiry"
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
      <div className="section-wrap">
        {/* Closing Architecture Quote */}
        <div className="finale-quote-block">
          <p className="mono-eyebrow">05 // ARCHITECTURAL CREED</p>
          <blockquote className="finale-quote">
            &ldquo;Clean architecture. Measurable scale.&rdquo;
          </blockquote>
          <p className="finale-sub body-prose">
            Engineering robust .NET platforms, resilient REST APIs, and database efficiency for production impact.
          </p>
        </div>

        {/* Contact and Transmission Hub */}
        <div className="contact-hub-grid">
          {/* Direct Details Card with Privacy Cleanup */}
          <div className="obsidian-card contact-card">
            <div>
              <span className="mono-eyebrow">DIRECT CONTACT</span>
              <h3 className="card-headline">Get In Touch</h3>
              <p className="card-intro body-prose">
                Interested in full-stack .NET engineering, backend microservices, or database optimization? Let&rsquo;s connect to discuss how I can contribute to your engineering goals.
              </p>
            </div>

            <div className="contact-list">
              {/* Email with copy button */}
              <div className="contact-item">
                <div className="item-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === "email" ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Location (Privacy Sanitized to Palghar / Mumbai, India) */}
              <div className="contact-item">
                <div className="item-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="item-info">
                  <span className="item-label">Location</span>
                  <span className="item-val">{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <div className="item-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66Z"/>
                  </svg>
                </div>
                <div className="item-info">
                  <span className="item-label">LinkedIn</span>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-val item-link"
                  >
                    linkedin.com/in/sagar-wavare
                  </a>
                </div>
              </div>
            </div>

            <div className="card-actions-row">
              <button type="button" className="btn-cyan" onClick={onOpenResume}>
                <span>View Full Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Dispatch Form */}
          <div className="obsidian-card contact-card">
            <div>
              <span className="mono-eyebrow">MESSAGE DISPATCH</span>
              <h3 className="card-headline">Send a Direct Message</h3>
              <p className="card-intro body-prose">
                Send a quick note regarding career opportunities, technical roles, or architectural collaborations.
              </p>
            </div>

            {formSent ? (
              <div className="form-success-banner">
                <span className="success-icon" aria-hidden="true">✓</span>
                <h4 className="success-title">Message Prepared</h4>
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
                      placeholder="e.g. Alex Morgan / Engineering Manager"
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
                      placeholder="e.g. alex@company.com"
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
                    placeholder="e.g. Full-Stack .NET Opportunity / Project Inquiry"
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
                    placeholder="Describe your role, team, or project requirements..."
                    className="field-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-cyan btn-submit">
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Clean Footer Bottom Bar */}
        <div className="finale-bottom-bar">
          <div className="brand-bottom">
            <span className="brand-title">Sagar Wavare</span>
            <span className="brand-copy">&copy; 2026 Sagar Wavare &mdash; All rights reserved</span>
          </div>

          <div className="footer-links">
            <a href="#hero">Top</a>
            <a href="#projects">Work</a>
            <a href="#timeline">Experience</a>
            <a href="#universe">Stack</a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .finale-section {
          position: relative;
          background: #090A0F;
          border-top: 1px solid var(--border-hairline);
          padding-top: 5rem;
        }

        .finale-quote-block {
          text-align: center;
          margin-bottom: 4.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .finale-quote {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.15;
        }

        .finale-sub {
          font-size: 1.05rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .contact-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .contact-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 10px;
        }

        .card-headline {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.35rem;
          margin-bottom: 0.65rem;
        }

        .card-intro {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
        }

        .item-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.2);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .item-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .item-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .item-val {
          font-size: 0.92rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
        }

        .item-link {
          color: var(--accent-cyan);
        }

        .copy-btn {
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-hairline);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(34, 211, 238, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .field-input, .field-textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-hairline);
          border-radius: 6px;
          padding: 0.7rem 0.9rem;
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          transition: all 0.2s var(--ease-smooth);
        }

        .field-input:focus, .field-textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px var(--accent-cyan-subtle);
          background: rgba(255, 255, 255, 0.06);
        }

        .field-textarea {
          resize: vertical;
        }

        .btn-submit {
          width: 100%;
          padding: 0.85rem;
        }

        .form-success-banner {
          text-align: center;
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .success-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(52, 211, 153, 0.15);
          border: 1px solid var(--accent-emerald);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }

        .success-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
        }

        .success-desc {
          color: var(--text-secondary);
          font-size: 0.92rem;
          max-width: 380px;
        }

        .finale-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2.25rem 0;
          border-top: 1px solid var(--border-hairline);
        }

        .brand-bottom {
          display: flex;
          align-items: baseline;
          gap: 0.85rem;
        }

        .brand-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .brand-copy {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .contact-hub-grid {
            grid-template-columns: 1fr;
          }
          .finale-bottom-bar {
            flex-direction: column;
            gap: 1.25rem;
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
