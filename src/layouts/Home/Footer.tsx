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
      className="bg-fill flex h-auto w-full flex-col items-center justify-center bg-center bg-no-repeat"
      style={
        {
          // backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${Geo6})`,
        }
      }
    >
      <div className="flex w-10/12 flex-row justify-between py-16">
        {/* Left group */}
        <div className="flex flex-row items-center gap-12">
          <h1 className="font-primary text-xl font-semibold text-primary">
            Trinh Van Thuong
          </h1>
          <Divider
            orientation="vertical"
            variant="middle"
            style={{ background: "#38745a", height: "80%" }}
          />
          <h1 className="font-primary text-sm font-semibold text-primary">
            Personal website
          </h1>
        </div>
        {/* Right group */}
        <div className="flex flex-row justify-between gap-12">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="cursor-pointer text-sm font-semibold text-primary hover:text-secondary"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>

      {/* Start divider */}
      <div className="flex w-10/12 flex-row justify-center gap-12">
        <Divider
          variant="middle"
          flexItem
          style={{ background: "#38745a", width: "100%" }}
        />
      </div>
      {/* End divider */}
      <div className="flex w-10/12 flex-row justify-between pb-16 pt-4">
        {/* Left group */}
        <div className="flex flex-row items-center gap-8">
          <h1 className="font-primary text-sm font-light text-primary">
            Copyright © 2025 Trinh Van Thuong. All rights reserved.
          </h1>
          <h1 className="font-primary text-sm font-light text-primary hover:cursor-pointer hover:text-secondary">
            Email: thuongtrinh.work@gmail.com
          </h1>
          <h1 className="font-primary text-sm font-light text-primary hover:cursor-pointer hover:text-secondary">
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
