import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Geo6 from "../../assets/Geometry/Geo6.svg";

const Footer = () => {
  const menuItems = ["Home", "About", "Project", "Blog", "Career", "Contact"];

  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center bg-no-repeat bg-fill bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${Geo6})`,
      }}
    >
      <div className="w-10/12 flex flex-row justify-between py-16">
        {/* Left group */}
        <div className="flex flex-row gap-12 items-center">
          <h1 className="font-semibold text-xl text-primary font-primary">
            Trinh Van Thuong
          </h1>
          <Divider
            orientation="vertical"
            variant="middle"
            style={{ background: "#38745a", height: "80%" }}
          />
          <h1 className="font-semibold text-sm text-primary font-primary">
            Personal website
          </h1>
        </div>
        {/* Right group */}
        <div className="flex flex-row justify-between gap-12">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="text-sm text-primary font-semibold cursor-pointer hover:text-secondary"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>

      {/* Start divider */}
      <div className="w-10/12 flex flex-row gap-12 justify-center">
        <Divider
          variant="middle"
          flexItem
          style={{ background: "#38745a", width: "100%" }}
        />
      </div>
      {/* End divider */}
      <div className="w-10/12 flex flex-row justify-between pt-4 pb-16">
        {/* Left group */}
        <div className="flex flex-row gap-8 items-center">
          <h1 className="font-light text-sm text-primary font-primary">
            Copyright © 2025 Trinh Van Thuong. All rights reserved.
          </h1>
          <h1 className="font-light text-sm text-primary hover:cursor-pointer  hover:text-secondary font-primary">
            Email: thuongtrinh.work@gmail.com
          </h1>
          <h1 className="font-light text-sm text-primary hover:cursor-pointer hover:text-secondary font-primary">
            Phone: (+84) 345 282 532
          </h1>
        </div>
        {/* Right group */}
        <div className="flex flex-row justify-between gap-8">
          <FacebookIcon
            style={{ fill: "#38745a" }}
            className="hover:cursor-pointer"
          />
          <LinkedInIcon
            style={{ fill: "#38745a" }}
            className="hover:cursor-pointer"
          />
          <GitHubIcon
            style={{ fill: "#38745a" }}
            className="hover:cursor-pointer"
          />
          <YouTubeIcon
            style={{ fill: "#38745a" }}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
