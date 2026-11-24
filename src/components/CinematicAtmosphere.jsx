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

    // Cyan and slate engineering particles
    const PARTICLE_COUNT = 45;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.45 - 0.15,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.45 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.4 ? "34, 211, 238" : "148, 163, 184",
      });
    }

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const lambda = 4.0;
      mouse.x += (mouse.targetX - mouse.x) * (1 - Math.exp(-lambda * dt));
      mouse.y += (mouse.targetY - mouse.y) * (1 - Math.exp(-lambda * dt));

      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cursor spotlight
      const spotlight = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width * 0.4, 400)
      );
      spotlight.addColorStop(0, "rgba(34, 211, 238, 0.035)");
      spotlight.addColorStop(0.5, "rgba(17, 19, 27, 0.015)");
      spotlight.addColorStop(1, "transparent");
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Update and draw subtle particles
      for (const p of particles) {
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.25;
        p.y += p.vy;
        p.alpha -= p.fadeSpeed;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (1 - dist / 100) * 0.4;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        if (p.y < -10 || p.alpha <= 0) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.alpha = p.baseAlpha;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
        ctx.shadowBlur = p.size > 1.5 ? 8 : 4;
        ctx.shadowColor = `rgba(${p.color}, 0.6)`;
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
      <canvas ref={canvasRef} className="atmosphere-canvas" />

      {/* Very faint film grain texture */}
      <div className="dynamic-film-grain" />

      {/* Subtle edge vignette */}
      <div className="cinematic-vignette" />

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
          opacity: 0.025;
          mix-blend-mode: overlay;
        }

        .cinematic-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            transparent 65%,
            rgba(9, 10, 15, 0.8) 100%
          );
        }
      `}</style>
    </div>
  );
}
