import Divider from "@mui/material/Divider";
import React from "react";
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

const Home: React.FC = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <NavBar />
      {/* Carousel */}
      <Carousel />
      {/* About */}
      <About />
      {/* Start divider */}
      <div className="flex justify-center">
        <Divider
          variant="middle"
          flexItem
          style={{ background: "#38745a", width: "60%" }}
        />
      </div>
      {/* End divider */}
      {/* Experience */}
      <Experience />
      {/* Start divider */}
      <div className="flex justify-center">
        <Divider
          variant="middle"
          flexItem
          style={{ background: "#38745a", width: "60%" }}
        />
      </div>
      {/* End divider */}
      <Role/>
      {/* Project */}
      <Project/>
      {/* Blog */}
      <Blog/>
      {/* Interest */}
      <Interest />
      {/* Footer */}
      <Footer />
      {/* Fixed menu */}
      <FixedMenu />
    </div>
  );
};

export default Home;
