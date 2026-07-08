"use client";

import { useState, useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import KeyboardNav from "@/components/KeyboardNav";
import SplashScreen from "@/components/SplashScreen";
import { useTextScramble } from "@/hooks/useTextScramble";

function SectionHeading({ children, className = "" }: { children: string; className?: string }) {
  const { displayed, scramble } = useTextScramble(children, true);
  return (
    <h2
      className={`section-heading ${className}`}
      onMouseEnter={scramble}
    >
      {displayed}
    </h2>
  );
}

export default function Home() {
  const [, setInverted] = useState(false);
  const nameScramble = useTextScramble("ANDI SYAICHUL MUBARAQ", true);
  const aliasScramble = useTextScramble("[@KIFU]", true);

  const toggleInvert = () => {
    setInverted((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("inverted", next);
      return next;
    });
  };

  // Suppress hydration mismatch for classList
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <SplashScreen />
      <main className="pb-16">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16"
        >

          <div className="relative z-10">
            <h1
              className="font-bold leading-[0.85] tracking-tighter uppercase flex flex-col"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
              onMouseEnter={() => {
                nameScramble.scramble();
                aliasScramble.scramble();
              }}
            >
              <span>{nameScramble.displayed}</span>
              <span className="text-[0.5em] opacity-80 mt-2 md:mt-4 text-gray-400">{aliasScramble.displayed}</span>
            </h1>

            <div className="mt-8 md:mt-12 flex flex-col gap-2 text-base md:text-xl opacity-70 max-w-2xl">
              <span>/ Software Engineer</span>
              <span>/ Institut Teknologi Bandung</span>
              <span>/ Bandung, Indonesia</span>
              <span className="mt-4 opacity-50">/ Use your keyboard to navigate ↓</span>

              <div className="mt-6">
                <a
                  href="/CV_Andi_Syaichul_Mubaraq.pdf"
                  download
                  className="inline-block border border-current px-5 py-3 text-base md:text-lg font-bold hover:opacity-60 transition-opacity"
                >
                  [ ↓ DOWNLOAD CV ]
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BIOGRAPHY SECTION */}
        <section
          id="biography"
          className="px-4 md:px-8 lg:px-16 pt-24 md:pt-40 pb-16"
        >
          <SectionHeading>BIOGRAPHY</SectionHeading>

          <div className="mt-12 md:mt-20 max-w-4xl">
            <p className="text-lg md:text-2xl leading-relaxed opacity-80">
              A highly motivated Information Systems and Technology
              undergraduate at Institut Teknologi Bandung with a strong
              passion for software engineering, cybersecurity, and data
              management. Experienced in building cross-platform
              applications, architecting secure zero-knowledge systems, and
              implementing data processing algorithms.
            </p>

            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-base">
              <div>
                <div className="text-sm opacity-50 mb-2">[/&gt; EDUCATION]</div>
                <div className="font-bold text-lg md:text-xl">Institut Teknologi Bandung</div>
                <div className="text-base opacity-60 mt-1">
                  B. Eng. Information Systems &amp; Technology
                </div>
                <div className="text-base opacity-60">Aug 2023 — Present</div>
              </div>
              <div>
                <div className="text-sm opacity-50 mb-2">[/&gt; EXPERIENCE]</div>
                <div className="font-bold text-lg md:text-xl">HMIF ITB</div>
                <div className="text-base opacity-60 mt-1">
                  Staff of Household Division
                </div>
                <div className="text-base opacity-60">Aug 2025 — Mar 2026</div>
              </div>
              <div>
                <div className="text-sm opacity-50 mb-2">[/&gt; LOCATION]</div>
                <div className="font-bold text-lg md:text-xl">Bandung</div>
                <div className="text-base opacity-60 mt-1">Indonesia</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <ProjectsSection />

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="px-4 md:px-8 lg:px-16 pt-24 md:pt-40 pb-16"
        >
          <SectionHeading>SKILLS</SectionHeading>

          <div className="mt-12 md:mt-20">
            <div className="text-sm opacity-50 mb-6">[/&gt; :]</div>
            <div className="flex flex-col gap-6 text-lg md:text-2xl">
              <div>
                <span className="opacity-50">_ </span>
                <span className="font-bold">
                  PYTHON, JAVA, JAVASCRIPT, TYPESCRIPT, C, C++, SQL
                </span>
                <span className="opacity-30"> ⮐</span>
              </div>
              <div className="pl-4 md:pl-8">
                <span className="opacity-50">_ </span>
                <span className="font-bold">
                  REACT NATIVE, REACT.JS, NODE.JS, EXPRESS, FIREBASE
                </span>
                <span className="opacity-30"> ⮐</span>
              </div>
              <div className="pl-8 md:pl-16">
                <span className="opacity-50">_ </span>
                <span className="font-bold">
                  CRYPTOGRAPHY, E2E ENCRYPTION, OOP, MVC ARCHITECTURE
                </span>
                <span className="opacity-30"> ⮐</span>
              </div>
              <div className="pl-12 md:pl-24">
                <span className="opacity-50">_ </span>
                <span className="font-bold">
                  DOCKER, GIT, OPENCV, NUMPY, PANDAS, SCIKIT-LEARN
                </span>
                <span className="opacity-30"> ⮐</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="px-4 md:px-8 lg:px-16 pt-24 md:pt-40 pb-32"
        >
          <SectionHeading>CONTACT</SectionHeading>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-start gap-12 md:gap-24">
            <div>
              <div className="font-bold text-xl md:text-2xl">ANDI SYAICHUL MUBARAQ</div>
              <div className="text-base opacity-60 mt-2">© 2026</div>
            </div>

            <div>
              <a
                href="mailto:syaichulmubaraq04@gmail.com"
                className="text-base md:text-lg font-bold hover:opacity-60"
              >
                syaichulmubaraq04@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/kifu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-bold hover:opacity-60"
              >
                <span className="opacity-50 font-normal">GITHUB:</span> @KIFU
              </a>
              <a
                href="http://www.linkedin.com/in/saikul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-bold hover:opacity-60"
              >
                <span className="opacity-50 font-normal">LINKEDIN:</span> @SAIKUL
              </a>
            </div>
          </div>
        </section>
      </main>

      <KeyboardNav onInvert={toggleInvert} />
    </>
  );
}
