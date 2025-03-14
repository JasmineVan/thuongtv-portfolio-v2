import { useState, useEffect } from "react";

type Direction = "top" | "bottom" | "left" | "right";

const useScrollVisibility = (threshold = 50, direction: Direction = "top") => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastScrollX, setLastScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      let shouldShow = true;
      switch (direction) {
        case "top":
          shouldShow = currentScrollY <= lastScrollY || currentScrollY < threshold;
          break;
        case "bottom":
          shouldShow = currentScrollY >= lastScrollY || currentScrollY < threshold;
          break;
        case "left":
          shouldShow = currentScrollX <= lastScrollX || currentScrollX < threshold;
          break;
        case "right":
          shouldShow = currentScrollX >= lastScrollX || currentScrollX < threshold;
          break;
      }

      setIsVisible(shouldShow);
      setLastScrollY(currentScrollY);
      setLastScrollX(currentScrollX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, lastScrollX, threshold, direction]);

  return isVisible;
};

export default useScrollVisibility;