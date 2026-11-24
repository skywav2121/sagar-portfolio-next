"use client";

import { useEffect, useState, useCallback } from "react";

export default function CinematicPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing system architecture...");
  const [isDone, setIsDone] = useState(false);
  const [readyToEnter, setReadyToEnter] = useState(false);

  const handleEnter = useCallback(() => {
    setIsDone((prev) => {
      if (prev) return prev;
      setTimeout(() => {
        onComplete?.();
      }, 500);
      return true;
    });
  }, [onComplete]);

  useEffect(() => {
    const statuses = [
      { at: 15, text: "Calibrating .NET Core runtime..." },
      { at: 40, text: "Connecting REST API pipelines..." },
      { at: 70, text: "Optimizing SQL Server stored procedures..." },
      { at: 90, text: "Hydrating Next.js interfaces..." },
      { at: 100, text: "System online · Engineering portfolio ready" },
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 9) + 6;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setStatusText("System online · Architecture ready");
        setReadyToEnter(true);

        const autoTimer = setTimeout(() => {
          handleEnter();
        }, 450);

        return () => clearTimeout(autoTimer);
      } else {
        const found = statuses.find((s) => s.at <= current);
        if (found) setStatusText(found.text);
        setProgress(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [handleEnter]);

  return (
    <div className={`boot-curtain ${isDone ? "is-exiting" : ""}`} aria-live="polite">
      <div className="boot-container">
        {/* Monogram */}
        <div className="boot-mark">
          <span className="boot-logo">SW</span>
          <span className="boot-year">MMXXVI</span>
        </div>

        {/* Cyan Progress Bar */}
        <div className="boot-bar-wrap">
          <div className="boot-bar">
            <div className="boot-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="boot-num">{progress}%</span>
        </div>

        {/* Diagnostics Line */}
        <p className="boot-status">{statusText}</p>

        {readyToEnter && (
          <button type="button" className="boot-enter-btn" onClick={handleEnter}>
            <span>Enter Portfolio &rarr;</span>
          </button>
        )}
      </div>

      <style jsx>{`
        .boot-curtain {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: var(--bg-canvas);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.6s var(--ease-smooth),
                      transform 0.6s var(--ease-smooth),
                      visibility 0.6s;
        }

        .boot-curtain.is-exiting {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: scale(1.02);
        }

        .boot-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          padding: 2rem;
          max-width: 440px;
          width: 90%;
        }

        .boot-mark {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .boot-logo {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-heading);
          line-height: 1;
        }

        .boot-year {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan-fg);
          letter-spacing: 0.18em;
        }

        .boot-bar-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 240px;
        }

        .boot-bar {
          flex: 1;
          height: 2px;
          background: var(--border-hairline);
          overflow: hidden;
          position: relative;
        }

        .boot-fill {
          height: 100%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan-glow);
          transition: width 0.1s linear;
        }

        .boot-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          width: 38px;
          text-align: right;
        }

        .boot-status {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          margin: 0;
          min-height: 1.2rem;
        }

        .boot-enter-btn {
          margin-top: 0.5rem;
          padding: 0.55rem 1.25rem;
          background: transparent;
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan-fg);
          font-family: var(--font-sans);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .boot-enter-btn:hover {
          background: var(--accent-cyan);
          color: var(--accent-cyan-text);
          box-shadow: 0 0 20px var(--accent-cyan-glow);
        }
      `}</style>
    </div>
  );
}
