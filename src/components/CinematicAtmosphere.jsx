"use client";

import { useEffect, useRef } from "react";

export default function CinematicAtmosphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse state with smooth damping
    let mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Particles system: embers and floating cinematic sparks
    const PARTICLE_COUNT = 65;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.65 - 0.25, // upward floating embers
        size: Math.random() * 2.2 + 0.7,
        alpha: Math.random() * 0.7 + 0.25,
        baseAlpha: Math.random() * 0.6 + 0.3,
        fadeSpeed: Math.random() * 0.007 + 0.003,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        // Crimson, ember red, and golden warm sparks
        color:
          Math.random() > 0.4
            ? "230, 57, 70"
            : Math.random() > 0.5
            ? "255, 107, 53"
            : "252, 163, 17",
      });
    }

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Frame-rate independent exponential damping for pointer
      const lambda = 4.5;
      mouse.x += (mouse.targetX - mouse.x) * (1 - Math.exp(-lambda * dt));
      mouse.y += (mouse.targetY - mouse.y) * (1 - Math.exp(-lambda * dt));

      ctx.clearRect(0, 0, width, height);

      // 1. Ambient mouse spotlight (cinematic flashlight illuminating darkness)
      const spotlight = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width * 0.45, 450)
      );
      spotlight.addColorStop(0, "rgba(230, 57, 70, 0.07)");
      spotlight.addColorStop(0.35, "rgba(255, 107, 53, 0.025)");
      spotlight.addColorStop(0.7, "rgba(10, 10, 18, 0.01)");
      spotlight.addColorStop(1, "transparent");
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // 2. Fixed atmospheric core glow in upper-center (furnace effect)
      const furnace = ctx.createRadialGradient(
        width * 0.5,
        height * 0.25,
        40,
        width * 0.5,
        height * 0.25,
        width * 0.55
      );
      furnace.addColorStop(0, "rgba(230, 57, 70, 0.05)");
      furnace.addColorStop(0.5, "rgba(255, 107, 53, 0.015)");
      furnace.addColorStop(1, "transparent");
      ctx.fillStyle = furnace;
      ctx.fillRect(0, 0, width, height);

      // 3. Render and update particles
      for (const p of particles) {
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.3;
        p.y += p.vy;
        p.alpha -= p.fadeSpeed;

        // Slight mouse repulsion for interactive feel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (1 - dist / 120) * 0.6;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        if (p.y < -10 || p.alpha <= 0) {
          p.x = Math.random() * width;
          p.y = height + 15;
          p.alpha = p.baseAlpha;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
        ctx.shadowBlur = p.size > 1.8 ? 12 : 6;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cinematic-atmosphere" aria-hidden="true">
      {/* Living Atmospheric Canvas */}
      <canvas ref={canvasRef} className="atmosphere-canvas" />

      {/* Dynamic 35mm Film Grain Overlay */}
      <div className="dynamic-film-grain" />

      {/* Vignette Rim Shadow */}
      <div className="cinematic-vignette" />

      {/* Decorative HUD Elements From Original */}
      <div className="hud-edge-decor">
        <div className="hud-arrows hud-arrows--l">
          <i style={{ "--i": 0 }}></i>
          <i style={{ "--i": 1 }}></i>
          <i style={{ "--i": 2 }}></i>
          <i style={{ "--i": 3 }}></i>
        </div>

        <div className="hud-arrows hud-arrows--r">
          <i style={{ "--i": 0 }}></i>
          <i style={{ "--i": 1 }}></i>
          <i style={{ "--i": 2 }}></i>
          <i style={{ "--i": 3 }}></i>
        </div>

        <div className="hud-dot-grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} style={{ "--i": i }}></span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cinematic-atmosphere {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .atmosphere-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .dynamic-film-grain {
          position: absolute;
          inset: 0;
          background-image: url("/tex/grain.png");
          background-repeat: repeat;
          background-size: 320px;
          opacity: 0.042;
          mix-blend-mode: overlay;
          animation: grainJitter 1.2s steps(8) infinite;
        }

        @keyframes grainJitter {
          0%, 100% { transform: translate(0, 0); }
          12.5% { transform: translate(-2%, -3%); }
          25% { transform: translate(3%, 1%); }
          37.5% { transform: translate(-1%, 4%); }
          50% { transform: translate(2%, -2%); }
          62.5% { transform: translate(-3%, 2%); }
          75% { transform: translate(1%, -4%); }
          87.5% { transform: translate(-2%, 1%); }
        }

        .cinematic-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            transparent 60%,
            rgba(2, 2, 4, 0.75) 100%
          );
        }

        .hud-edge-decor {
          position: absolute;
          inset: 0;
        }

        .hud-arrows {
          position: absolute;
          top: 40%;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          opacity: 0.45;
          transition: opacity 0.5s ease;
        }

        .hud-arrows--l {
          left: 1.8rem;
        }

        .hud-arrows--r {
          right: 1.8rem;
          transform: rotate(180deg);
        }

        .hud-arrows i {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 0 6px 9px;
          border-color: transparent transparent transparent var(--red-ember);
          display: block;
          filter: drop-shadow(0 0 6px var(--red-ember));
          animation: arrowBlink 3s infinite ease-in-out;
          animation-delay: calc(var(--i) * 0.25s);
        }

        @keyframes arrowBlink {
          0%, 100% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 0.95; transform: translateX(3px); }
        }

        .hud-dot-grid {
          position: absolute;
          right: 2.2rem;
          bottom: 2rem;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 6px;
          opacity: 0.4;
        }

        .hud-dot-grid span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transition: background 0.3s;
        }

        .hud-dot-grid span:nth-child(3n) {
          background: var(--red-ember);
          box-shadow: 0 0 6px var(--red-ember);
        }

        @media (max-width: 820px) {
          .hud-arrows,
          .hud-dot-grid {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

