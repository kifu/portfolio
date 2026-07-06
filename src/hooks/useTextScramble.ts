"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`01";

export function useTextScramble(text: string, triggerOnMount = false) {
  const [displayed, setDisplayed] = useState(triggerOnMount ? "" : text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);
  const iterationRef = useRef(0);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);
    iterationRef.current = 0;

    const maxIterations = text.length * 2;

    const step = () => {
      iterationRef.current++;
      const progress = iterationRef.current / maxIterations;

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < text.length * progress) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayed(result);

      if (iterationRef.current < maxIterations) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayed(text);
        setIsScrambling(false);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [text, isScrambling]);

  useEffect(() => {
    if (triggerOnMount) {
      const timer = setTimeout(scramble, 200);
      return () => clearTimeout(timer);
    }
  }, [triggerOnMount, scramble]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { displayed, scramble, isScrambling };
}
