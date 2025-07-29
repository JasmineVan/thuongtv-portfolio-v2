import React, { useEffect, useRef, useState } from "react";

interface CubeScrollWrapperProps {
  sections: React.ReactNode[];
}

const CubeScrollWrapper: React.FC<CubeScrollWrapperProps> = ({ sections }) => {
  const [index, setIndex] = useState(0);
  const scrollLocked = useRef(false);

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();

    if (scrollLocked.current) return;
    scrollLocked.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;

    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0 || next >= sections.length) return prev;
      return next;
    });

    // Set cooldown (e.g., 800ms = duration of animation)
    setTimeout(() => {
      scrollLocked.current = false;
    }, 800); // Match the duration in your CSS (transition duration)
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="perspective-[1200px] relative h-screen w-full overflow-hidden bg-black">
      {sections.map((section, i) => (
        <div
          key={i}
          className="absolute left-0 top-0 h-full w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `rotateX(${(i - index) * 90}deg) translateZ(500px)`,
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 1 : 0,
            transformStyle: "preserve-3d",
          }}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default CubeScrollWrapper;
