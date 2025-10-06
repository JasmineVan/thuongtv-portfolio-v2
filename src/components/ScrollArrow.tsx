// src/components/ScrollArrow.tsx
import { motion } from "framer-motion";

type Props = {
  /** Hide arrow (e.g., last section) */
  hidden?: boolean;
  /** Override click behavior (e.g., call cubeScroll.next()) */
  onNext?: () => void;
  /** Direction for icon & position if you ever need 'right' */
  direction?: "down" | "right";
  /** Optional label under the arrow */
  label?: string;
};

const ScrollArrow: React.FC<Props> = ({
  hidden,
  onNext,
  direction = "down",
  label = "Scroll",
}) => {
  if (hidden) return null;

  const handleClick = () => {
    if (onNext) return onNext();
    // Default: smooth scroll one viewport (works nicely with cube scroll pages too)
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  const isDown = direction === "down";

  return (
    <div
      className={`fixed ${
        isDown
          ? "bottom-6 left-1/2 -translate-x-1/2"
          : "right-6 top-1/2 -translate-y-1/2"
      } z-50 select-none`}
    >
      <motion.button
        onClick={handleClick}
        aria-label="Go to next section"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-xl transition-transform active:scale-95"
        animate={{ y: isDown ? [0, 6, 0] : 0, x: !isDown ? [0, 6, 0] : 0 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* glow ring on hover */}
        <span className="absolute inset-0 rounded-full bg-white/0 transition-colors group-hover:bg-white/10" />

        {/* icon (pure SVG, no deps) */}
        {isDown ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className="text-white/90"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className="text-white/90"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        )}
      </motion.button>

      {/* label (optional) */}
      <div className="mt-2 text-center text-xs font-medium text-white/70 drop-shadow">
        {label}
      </div>
    </div>
  );
};

export default ScrollArrow;
