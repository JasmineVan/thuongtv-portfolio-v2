import React, { useState } from "react";
import NavBar from "../layouts/Home/NavBar";
import Carousel from "../layouts/Home/Carousel";
import Footer from "../layouts/Home/Footer";
import FixedMenu from "../layouts/Home/FixedMenu";
import About from "../layouts/Home/About";
import Experience from "../layouts/Home/Experience";
import Interest from "../layouts/Home/Interest";
import Role from "../layouts/Home/Role";
import Project from "../layouts/Home/Project";
import Blog from "../layouts/Home/Blog";
import CubeScrollWrapper from "../components/CubeScrollWrapper";

const Home: React.FC = () => {
  const [isCubeMode, setIsCubeMode] = useState(true); // toggle between modes

  const sections = [
    <Carousel key="carousel" />,
    <About key="about" />,
    <Experience key="experience" />,
    <Role key="role" />,
    <Project key="project" />,
    <Blog key="blog" />,
    <Interest key="interest" />,
    <Footer key="footer" />,
  ];

  return (
    <div>
      <NavBar />

      {/* Toggle Switch */}
      <div className="fixed top-5 right-5 z-50 bg-white rounded-md p-2 shadow-lg">
        <label className="flex items-center space-x-2 text-sm">
          <span>Cube Scroll</span>
          <input
            type="checkbox"
            checked={isCubeMode}
            onChange={() => setIsCubeMode(!isCubeMode)}
          />
        </label>
      </div>

      {/* Conditional Layout */}
      {isCubeMode ? (
        <CubeScrollWrapper sections={sections} />
      ) : (
        <div className="">
          {sections.map((section, idx) => (
            <div key={idx}>{section}</div>
          ))}
        </div>
      )}

      <FixedMenu />
    </div>
  );
};

export default Home;
