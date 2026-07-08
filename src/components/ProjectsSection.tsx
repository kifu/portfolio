"use client";

import { useState, useEffect, useRef } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";
import Image from "next/image";

const projects = [
  {
    name: "LINEPASS",
    year: "2026",
    desc: "Designed a highly secure CLI credential vault utilizing AES-128-GCM encryption, PBKDF2 key derivation, and Shamir's Secret Sharing combined with Naor-Shamir visual cryptography to securely distribute and recover master keys via pixel-manipulated QR codes.",
    tech: "CLI, AES-128-GCM, PBKDF2, Shamir's Secret Sharing, Naor-Shamir",
    url: "https://github.com/kifu/18223114_18223116_18223139_Tugas4_II4021",
    images: [
      "/images/linepass-1.png",
      "/images/linepass-2.png",
      "/images/linepass-3.png",
    ],
  },
  {
    name: "MEOWCHAT",
    year: "2026",
    desc: "Engineered a containerized full-stack messaging application (React, Node.js, SQLite) featuring a zero-knowledge server architecture by implementing End-to-End Encryption (E2EE) via Web Crypto API and building a custom ECDSA-based JWT authentication system entirely from scratch.",
    tech: "React, Node.js, SQLite, Web Crypto API, ECDSA JWT, Docker",
    url: "https://github.com/rasyidrizky/18223114_18223116_18223139_Tugas3_II4021",
    images: [
      "/images/meowchat-1.png",
      "/images/meowchat-2.png",
      "/images/meowchat-3.png",
    ],
  },
  {
    name: "STEGO PIXEL",
    year: "2026",
    desc: "Built a Python/PyQt5 desktop GUI application leveraging OpenCV for frame-level pixel manipulation and Matplotlib for comparative histogram analysis to securely embed and extract cryptographic messages within video files using the Least Significant Bit (LSB) method.",
    tech: "Python, PyQt5, OpenCV, Matplotlib, LSB Steganography",
    url: "https://github.com/StefanyJosefina/18223114_18223116_18223139_Tugas2_II4021",
    images: [
      "/images/stego-1.png",
      "/images/stego-2.png",
      "/images/stego-3.png",
    ],
  },
  {
    name: "SEARCHING-SORTING",
    year: "2026",
    desc: "Developed a cross-platform mobile application utilizing React Native, TypeScript, and Firebase to dynamically visualize complex algorithmic computations, featuring real-time UI state management for animation controls and automated deployment via Expo Application Services.",
    tech: "React Native, TypeScript, Firebase, Expo",
    url: "https://github.com/kifu/searching-sorting-app",
    images: [
      "/images/searching-sorting-1.png",
      "/images/searching-sorting-2.png",
      "/images/searching-sorting-3.png",
    ],
  },
  {
    name: "SPAKBOR HILLS",
    year: "2025",
    desc: "Programmed the core mechanics and state logic of a 2D CLI farming game in Java using advanced OOP Design Patterns (Singleton, Factory, Template Method), collaborating within a 5-person team using Git and Gradle for version control and continuous integration.",
    tech: "Java, OOP Design Patterns, Gradle, Git",
    url: "https://github.com/kifu/IF2010-K06-G05-SpakborHills",
    images: [
      "/images/spakbor-1.png",
      "/images/spakbor-2.png",
      "/images/spakbor-3.png",
    ],
  },
  {
    name: "RUANG PANDAI",
    year: "2025",
    desc: "Architected a modular desktop management system applying the Entity-Boundary-Controller (MVC) pattern to strictly decouple Java business logic from the JavaFX UI, utilizing Apache Maven for build automation and complex relational database management.",
    tech: "Java, JavaFX, MVC, Apache Maven, SQL",
    url: "https://github.com/kifu/IF2050-2025-K3M-RuangPandai",
    images: [
      "/images/ruang-pandai-1.png",
      "/images/ruang-pandai-2.png",
      "/images/ruang-pandai-3.png",
    ],
  },
];

function ProjectItem({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const { displayed, scramble } = useTextScramble(project.name);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="border-t border-current py-8 md:py-12"
      onMouseEnter={scramble}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Left column: Name + Year */}
        <div className="lg:w-1/4 flex-shrink-0">
          <div className="text-xs opacity-50 mb-2">[/&gt; PR. NAME</div>
          <div className="text-2xl md:text-3xl font-bold leading-tight">
            {displayed}
          </div>
          <div className="text-sm mt-2 opacity-60">{project.year}</div>
        </div>

        {/* Right column: Info */}
        <div className="lg:w-2/4 flex-1">
          <div className="text-xs opacity-50 mb-2">[/&gt; INFO</div>
          <p className="text-sm leading-relaxed mb-4 opacity-80">
            {project.desc}
          </p>
          <div className="text-xs opacity-50">
            TECH: {project.tech}
          </div>
        </div>

        {/* Action Links */}
        <div className="lg:w-1/4 flex-shrink-0 flex flex-col gap-4 mt-6 lg:mt-0 lg:items-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity uppercase text-left lg:text-right w-full cursor-pointer"
          >
            {isExpanded ? "[- HIDE PREVIEW]" : "[+ SHOW PREVIEW]"}
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity text-left lg:text-right w-full block"
          >
            VISIT REPO →
          </a>
        </div>
      </div>

      {/* Expandable Preview */}
      {isExpanded && project.images.length > 0 && (
        <div className="mt-8 mx-auto animate-fade-in flex flex-col items-center">
          <Image
            src={project.images[currentImageIndex]}
            alt={`Preview ${currentImageIndex + 1} of ${project.name}`}
            width={1920}
            height={1080}
            className="h-[200px] md:h-[300px] lg:h-[400px] w-auto max-w-full object-contain cursor-zoom-in hover:opacity-90 transition-opacity"
            onClick={() => setIsFullscreen(true)}
          />

          {/* Slider Controls */}
          {project.images.length > 1 && (
            <div className="flex justify-between items-center mt-6 text-sm font-bold opacity-70 w-full max-w-xl">
              <button
                onClick={prevImage}
                className="hover:opacity-100 transition-opacity uppercase cursor-pointer"
              >
                [ &lt; PREV ]
              </button>
              <span>
                IMAGE {currentImageIndex + 1} OF {project.images.length}
              </span>
              <button
                onClick={nextImage}
                className="hover:opacity-100 transition-opacity uppercase cursor-pointer"
              >
                [ NEXT &gt; ]
              </button>
            </div>
          )}
        </div>
      )}

      {/* Fullscreen Lightbox Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-12 animate-fade-in">
          {/* Background layer for closing */}
          <div 
            className="absolute inset-0 bg-black/95 cursor-zoom-out"
            onClick={() => setIsFullscreen(false)}
          />
          
          <button 
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white font-bold text-lg md:text-xl opacity-70 hover:opacity-100 transition-opacity z-10 cursor-pointer"
          >
            [ X ] CLOSE
          </button>

          <div className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none">
            <Image
              src={project.images[currentImageIndex]}
              alt={`Fullscreen Preview of ${project.name}`}
              width={1920}
              height={1080}
              className="max-w-full max-h-[80vh] object-contain pointer-events-auto"
            />

            {/* Fullscreen Slider Controls */}
            {project.images.length > 1 && (
              <div className="flex justify-between items-center mt-8 text-sm md:text-base font-bold text-white w-full max-w-xl pointer-events-auto">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="opacity-70 hover:opacity-100 transition-opacity uppercase cursor-pointer"
                >
                  [ &lt; PREV ]
                </button>
                <span className="opacity-70">
                  IMAGE {currentImageIndex + 1} OF {project.images.length}
                </span>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="opacity-70 hover:opacity-100 transition-opacity uppercase cursor-pointer"
                >
                  [ NEXT &gt; ]
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const { displayed, scramble } = useTextScramble("PROJECTS", true);

  return (
    <section id="projects" className="px-4 md:px-8 lg:px-16 pt-24 md:pt-40 pb-16">
      <h2 
        className="section-heading mb-16 md:mb-24"
        onMouseEnter={scramble}
      >
        {displayed}
      </h2>
      <div>
        {projects.map((proj) => (
          <ProjectItem key={proj.name} project={proj} />
        ))}
      </div>
    </section>
  );
}
