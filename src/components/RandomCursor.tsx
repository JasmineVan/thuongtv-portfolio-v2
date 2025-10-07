// src/cursor/RandomCursor.tsx
import React, { useMemo } from "react";
import GlassCursor from "./Cursors/GlassCursor";
import BubbleCursor from "./Cursors/BubbleCursor";
import SparkleCursor from "./Cursors/SparkleCursor";

type Mode = "glass" | "bubbles" | "sparkles" | "system";

const RandomCursor: React.FC<{ allowSystem?: boolean; persist?: boolean }> = ({
  allowSystem = false,
  persist = false, // set true if you want the same choice for the whole session
}) => {
  const mode: Mode = useMemo(() => {
    if (persist) {
      const stored = sessionStorage.getItem("cursor-random") as Mode | null;
      if (stored) return stored;
    }
    const pool: Mode[] = allowSystem
      ? ["glass", "bubbles", "sparkles", "system"]
      : ["glass", "bubbles", "sparkles"];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (persist) sessionStorage.setItem("cursor-random", pick);
    return pick;
  }, [allowSystem, persist]);

  // Hide native cursor only when a custom cursor is active (desktop only)
  const hideNative = mode !== "system";

  return (
    <>
      <style>{`
        @media (hover:hover) { ${hideNative ? "html,body{cursor:none;}" : ""} }
        @media (hover:none) {
          /* Auto-disable on touch devices */
          .cursor-layer { display: none; }
        }
      `}</style>

      {mode === "glass" && <GlassCursor />}
      {mode === "bubbles" && <BubbleCursor />}
      {mode === "sparkles" && <SparkleCursor />}
      {/* mode === "system" renders nothing */}
    </>
  );
};

export default RandomCursor;
