"use client";

import { useState } from "react";
import CinematicPreloader from "@/components/CinematicPreloader";
import CinematicAtmosphere from "@/components/CinematicAtmosphere";
import SceneNavigator from "@/components/SceneNavigator";
import Header from "@/components/Header";
import HeroScene from "@/components/HeroScene";
import UniverseScene from "@/components/UniverseScene";
import TimeMachineScene from "@/components/TimeMachineScene";
import ProjectsScene from "@/components/ProjectsScene";
import FinaleScene from "@/components/FinaleScene";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [isBooted, setIsBooted] = useState(false);

  return (
    <main className="main-viewport">
      {/* Cinematic Opening Preloader */}
      <CinematicPreloader onComplete={() => setIsBooted(true)} />

      {/* Atmospheric Canvas (Adaptive Dark/Light Particles & Mouse Spotlight) */}
      <CinematicAtmosphere />

      {/* Floating Scene Rail Navigator */}
      <SceneNavigator />

      {/* Primary Sticky Header with Theme Switch */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Scene 01: Hero Section */}
      <HeroScene onOpenResume={() => setResumeOpen(true)} isBooted={isBooted} />

      {/* Scene 02: Technical Universe Matrix */}
      <UniverseScene />

      {/* Scene 03: Experience & Vertical Career Spine */}
      <TimeMachineScene />

      {/* Scene 04: Featured Production Projects */}
      <ProjectsScene />

      {/* Scene 05: Finale, Direct Contact & Footer */}
      <FinaleScene onOpenResume={() => setResumeOpen(true)} />

      {/* Full Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <style jsx>{`
        .main-viewport {
          position: relative;
          min-height: 100vh;
          background: var(--bg-canvas);
          color: var(--text-primary);
          transition: background-color 0.25s var(--ease-smooth), color 0.25s var(--ease-smooth);
        }
      `}</style>
    </main>
  );
}
