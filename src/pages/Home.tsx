import React, { useMemo } from "react";
import NavBar from "../layouts/Home/NavBar";
import Footer from "../layouts/Home/Footer";
import FixedMenu from "../layouts/Home/FixedMenu";
import About from "../layouts/Home/About";
import Experience from "../layouts/Home/Experience";
import Interest from "../layouts/Home/Interest";
import Role from "../layouts/Home/Role";
import Project from "../layouts/Home/Project";
import Blog from "../layouts/Home/Blog";
import CubeScrollWrapper from "../components/CubeScrollWrapper";
import ScrollArrow from "../components/ScrollArrow";

const baseSections = [
  { id: "about", Component: About },
  { id: "experience", Component: Experience },
  { id: "role", Component: Role },
  { id: "project", Component: Project },
  { id: "blog", Component: Blog },
  { id: "interest", Component: Interest },
  { id: "footer", Component: Footer },
];

const REPEAT_TIMES = 20; // tweak: 20 loops = 7*20 = 140 pages

const Home: React.FC = () => {
  const sections = useMemo(
    () =>
      Array.from({ length: REPEAT_TIMES }, (_, i) =>
        baseSections.map(({ id, Component }) => (
          <Component key={`${id}-${i}`} />
        )),
      ).flat(),
    [],
  );
  // Only mount cursor on devices with a real mouse
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  return (
    <div
      className="hide-scrollbar hide-native-cursor relative h-screen w-full overflow-y-scroll"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* {isDesktop && <GlassCursor />} */}
      <NavBar />
      {isDesktop && <CubeScrollWrapper sections={sections} />}
      <div className="">
        {sections.map((section, idx) => (
          <div key={idx}>{section}</div>
        ))}
      </div>
      <ScrollArrow direction="down" /* onNext={onNext} */ label="Next" />
      <FixedMenu />
    </div>
  );
};

export default Home;
