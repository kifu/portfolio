"use client";

import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = Math.floor(Math.random() * 12) + 1;
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const waitTimeout = setTimeout(() => {
        setIsFadingOut(true);
        document.body.style.overflow = "auto";
      }, 300);

      const removeTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 800);

      return () => {
        clearTimeout(waitTimeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [progress]);

  if (!isVisible) return null;

  const totalBlocks = 20;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  const bar = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center justify-center transition-opacity duration-500 ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div className="flex flex-col items-start max-w-[90vw] overflow-hidden">
        <div className="font-bold text-sm md:text-lg mb-2 opacity-70">
          INITIALIZING...
        </div>
        <div className="text-base md:text-2xl font-bold tracking-widest whitespace-pre">
          [{bar}] {progress.toString().padStart(3, " ")}%
        </div>
        <div className="mt-6 text-xs md:text-sm font-bold opacity-50 animate-pulse">
          {progress === 100 ? "> PORTFOLIO READY" : "> PLEASE WAIT"}
        </div>
      </div>
    </div>
  );
}
