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
      {/* Cinematic Opening Preloader & Grand Reveal */}
      <CinematicPreloader onComplete={() => setIsBooted(true)} />

      {/* Living Atmospheric Canvas (Grain, Sparks, Mouse Spotlight, Edge Cues) */}
      <CinematicAtmosphere />

      {/* Floating Scene Navigator */}
      <SceneNavigator />

      {/* Primary Navigation Header */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Scene 01: Typographic Wordmark & Hero Console */}
      <HeroScene onOpenResume={() => setResumeOpen(true)} isBooted={isBooted} />

      {/* Scene 02: The Technical Universe Matrix */}
      <UniverseScene />

      {/* Scene 03: The Time Machine 2019-2026 */}
      <TimeMachineScene />

      {/* Scene 04: Production Deployments & Featured Projects */}
      <ProjectsScene />

      {/* Scene 05: The Finale & Direct Transmission Connect */}
      <FinaleScene onOpenResume={() => setResumeOpen(true)} />

      {/* Digital Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <style jsx>{`
        .main-viewport {
          position: relative;
          min-height: 100vh;
          background: #030305;
          color: #f8fafc;
        }
      `}</style>
    </main>
  );
}
