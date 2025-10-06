import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const GlassCursor = () => {
  const [active, setActive] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smooth follow
  const x = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.4 });
  const y = useSpring(my, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const down = () => setActive(true);
    const up = () => setActive(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ left: x, top: y }}
        animate={active ? { scale: 1.05 } : { scale: 1.5 }}
      />
      <motion.div className="cursor-dot" style={{ left: x, top: y }} />
    </>
  );
};

export default GlassCursor;
