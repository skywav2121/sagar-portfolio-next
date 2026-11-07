"use client";

import { useEffect, useState, useCallback } from "react";

export default function CinematicPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ARCHITECTURE...");
  const [isDone, setIsDone] = useState(false);
  const [readyToEnter, setReadyToEnter] = useState(false);

  const handleEnter = useCallback(() => {
    setIsDone((prev) => {
      if (prev) return prev;
      setTimeout(() => {
        onComplete?.();
      }, 650);
      return true;
    });
  }, [onComplete]);

  useEffect(() => {
    // Quick, high-tech initialization sequence
    const statuses = [
      { at: 15, text: "CALIBRATING .NET RUNTIME..." },
      { at: 40, text: "CONNECTING REST API ENDPOINTS..." },
      { at: 70, text: "OPTIMIZING SQL ENGINE & STORED PROCEDURES..." },
      { at: 92, text: "ENGAGING NEXT.JS INTERFACES..." },
      { at: 100, text: "SYS.ONLINE // MMXXVI ARCHITECTURE READY" },
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setStatusText("SYS.ONLINE // MMXXVI ARCHITECTURE READY");
        setReadyToEnter(true);

        // Auto transition after brief dramatic hold
        const autoTimer = setTimeout(() => {
          handleEnter();
        }, 600);

        return () => clearTimeout(autoTimer);
      } else {
        const found = statuses.find((s) => s.at <= current);
        if (found) setStatusText(found.text);
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [handleEnter]);

  return (
    <div className={`boot-curtain ${isDone ? "is-exiting" : ""}`} aria-live="polite">
      <div className="boot-container">
        {/* Typographic Monogram */}
        <div className="boot-mark">
          <span className="boot-logo">SW</span>
          <span className="boot-year">MMXXVI</span>
        </div>

        {/* Minimal Progress Bar from Original */}
        <div className="boot-bar-wrap">
          <div className="boot-bar">
            <div className="boot-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="boot-num">{progress}%</span>
        </div>

        {/* Diagnostics Line */}
        <p className="boot-status">{statusText}</p>

        {/* Fast Action Enter Button if user wants to click immediately */}
        {readyToEnter && (
          <button type="button" className="boot-enter-btn" onClick={handleEnter}>
            <span>ENTER EXPERIENCE &rarr;</span>
          </button>
        )}
      </div>

      {/* Background Micro Scanline */}
      <div className="boot-scanline" />

      <style jsx>{`
        .boot-curtain {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.75s;
        }

        .boot-curtain.is-exiting {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: scale(1.04);
        }

        .boot-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          padding: 2rem;
          max-width: 480px;
          width: 90%;
        }

        .boot-mark {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .boot-logo {
          font-family: var(--font-anton);
          font-size: 3.2rem;
          letter-spacing: 0.08em;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 0 25px rgba(230, 57, 70, 0.7);
        }

        .boot-year {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--red-ember);
          letter-spacing: 0.2em;
        }

        .boot-bar-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 260px;
        }

        .boot-bar {
          flex: 1;
          height: 2px;
          background: rgba(255, 255, 255, 0.12);
          overflow: hidden;
          position: relative;
        }

        .boot-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--red-ember), #ffffff);
          box-shadow: 0 0 12px var(--red-ember);
          transition: width 0.1s linear;
        }

        .boot-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #ffffff;
          width: 42px;
          text-align: right;
          letter-spacing: 0.05em;
        }

        .boot-status {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          margin: 0;
          min-height: 1.4rem;
        }

        .boot-enter-btn {
          margin-top: 0.5rem;
          padding: 0.6rem 1.4rem;
          background: transparent;
          border: 1px solid rgba(230, 57, 70, 0.6);
          color: #ffffff;
          font-family: var(--font-oswald);
          font-size: 0.85rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.25s ease;
          animation: enterGlow 1.5s infinite alternate;
        }

        .boot-enter-btn:hover {
          background: var(--red-ember);
          border-color: var(--red-ember);
          box-shadow: 0 0 25px rgba(230, 57, 70, 0.8);
          transform: translateY(-2px);
        }

        @keyframes enterGlow {
          from { box-shadow: 0 0 8px rgba(230, 57, 70, 0.2); }
          to { box-shadow: 0 0 20px rgba(230, 57, 70, 0.7); }
        }

        .boot-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.4)
          );
          background-size: 100% 4px;
          pointer-events: none;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
