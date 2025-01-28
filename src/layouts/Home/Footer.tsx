import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="bg-white w-full h-auto flex flex-col justify-center items-center">
      <div className="w-10/12 flex flex-row justify-between py-16">
        {/* Left group */}
        <div className="flex flex-row gap-12 items-center">
          <h1 className="font-semibold text-xl text-primary">
            Trinh Van Thuong
          </h1>
          <Divider
            orientation="vertical"
            variant="middle"
            style={{ background: "#38745a", height: "80%" }}
          />
          <h1 className="font-semibold text-sm text-primary">
            Personal website
          </h1>
        </div>
        {/* Right group */}
        <div className="flex flex-row justify-between gap-12">
          <h1 className="text-sm text-primary hover:cursor-pointer font-semibold">
            Home
          </h1>
          <h1 className="text-sm text-primary hover:cursor-pointer font-semibold">
            About
          </h1>
          <h1 className="text-sm text-primary hover:cursor-pointer font-semibold">
            Project
          </h1>
          <h1 className="text-sm text-primary hover:cursor-pointer font-semibold">
            Blog
          </h1>
          <h1 className="text-sm text-primary hover:cursor-pointer font-semibold">
            Career
          </h1>
          <h1 className="text-sm text-primary hover:cursor-pointer font-semibold">
            Contact
          </h1>
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
          <h1 className="font-semibold text-sm text-primary">
            Copyright © 2025 Trinh Van Thuong. All rights reserved.
          </h1>
          <h1 className="font-semibold text-sm text-primary hover:cursor-pointer">
            Privacy Policy
          </h1>
          <h1 className="font-semibold text-sm text-primary hover:cursor-pointer">
            Terms of Use
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
