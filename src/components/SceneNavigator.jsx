"use client";

import { useEffect, useState } from "react";

const scenes = [
  { id: "hero", num: "01", label: "Hero" },
  { id: "universe", num: "02", label: "Universe" },
  { id: "timeline", num: "03", label: "Time Machine" },
  { id: "projects", num: "04", label: "Projects" },
  { id: "contact", num: "05", label: "Finale" },
];

export default function SceneNavigator() {
  const [activeScene, setActiveScene] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after initial scroll or short delay
    const timer = setTimeout(() => setVisible(true), 1200);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const scene of scenes) {
        const el = document.getElementById(scene.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.45) {
            setActiveScene(scene.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToScene = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className={`scene-rail ${visible ? "is-visible" : ""}`} aria-label="Scene Navigator">
      <div className="rail-track">
        {scenes.map((s) => {
          const isActive = activeScene === s.id;
          return (
            <button
              key={s.id}
              type="button"
              className={`rail-pip-btn ${isActive ? "is-active" : ""}`}
              onClick={() => scrollToScene(s.id)}
              aria-label={`Jump to Scene ${s.num} ${s.label}`}
            >
              <span className="pip-label">{s.label}</span>
              <span className="pip-num">{s.num}</span>
              <span className="pip-dot" />
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .scene-rail {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%) translateX(20px);
          z-index: 90;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scene-rail.is-visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
          pointer-events: auto;
        }

        .rail-track {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          position: relative;
        }

        .rail-track::before {
          content: "";
          position: absolute;
          right: 3px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .rail-pip-btn {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.65rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          color: rgba(255, 255, 255, 0.4);
          transition: all 0.25s ease;
        }

        .pip-label {
          font-family: var(--font-oswald);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          white-space: nowrap;
          color: #ffffff;
        }

        .rail-pip-btn:hover .pip-label {
          opacity: 1;
          transform: translateX(0);
        }

        .pip-num {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.25s ease;
        }

        .pip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(0, 0, 0, 0.8);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rail-pip-btn:hover .pip-dot {
          background: #ffffff;
          transform: scale(1.3);
        }

        .rail-pip-btn.is-active .pip-num {
          color: var(--red-ember);
          font-weight: 600;
        }

        .rail-pip-btn.is-active .pip-dot {
          background: var(--red-ember);
          box-shadow: 0 0 10px var(--red-ember);
          transform: scale(1.6);
        }

        @media (max-width: 900px) {
          .scene-rail {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}

