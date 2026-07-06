"use client";

import { useEffect, useCallback } from "react";

interface KeyboardNavProps {
  onInvert: () => void;
}

const shortcuts = [
  { key: "h", label: "HOME", section: "hero" },
  { key: "b", label: "BIO", section: "biography" },
  { key: "p", label: "PROJECTS", section: "projects" },
  { key: "s", label: "SKILLS", section: "skills" },
  { key: "c", label: "CONTACT", section: "contact" },
];

const handleScroll = (direction: "up" | "down") => {
  const amount = window.innerHeight * 0.3;
  window.scrollBy({
    top: direction === "up" ? -amount : amount,
    behavior: "smooth",
  });
};

export default function KeyboardNav({ onInvert }: KeyboardNavProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === "i" || e.key === "I") {
        e.preventDefault();
        onInvert();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        handleScroll("up");
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        handleScroll("down");
        return;
      }

      const shortcut = shortcuts.find((s) => s.key === e.key);
      if (shortcut) {
        e.preventDefault();
        const el = document.getElementById(shortcut.section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [onInvert]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const renderItem = (keyStr: string) => {
    const s = shortcuts.find((s) => s.key === keyStr);
    if (!s) return null;
    return (
      <span
        key={s.key}
        onClick={() => handleNavClick(s.section)}
        role="button"
        tabIndex={0}
      >
        <span className="kbd-shortcut">[{s.key.toUpperCase()}]</span> {s.label}
      </span>
    );
  };

  return (
    <nav className="kbd-bar" aria-label="Keyboard navigation">
      {renderItem("h")}
      {renderItem("b")}

      {renderItem("p")}
      {renderItem("s")}

      <span onClick={() => handleScroll("up")} role="button" tabIndex={0}>
        <span className="kbd-shortcut">[↑]</span> PAGE UP
      </span>
      <span onClick={() => handleScroll("down")} role="button" tabIndex={0}>
        <span className="kbd-shortcut">[↓]</span> PAGE DOWN
      </span>

      {renderItem("c")}
      <span onClick={onInvert} role="button" tabIndex={0}>
        <span className="kbd-shortcut">[I]</span> INVERT
      </span>
    </nav>
  );
}
