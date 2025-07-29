import { getRandomESG } from "../../utils/getRandomESGImage";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const randomImage = getRandomESG();

const Footer = () => {
  const menuItems = ["Home", "About", "Project", "Blog", "Career", "Contact"];

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="glassmorphism flex w-full max-w-7xl flex-col items-center justify-center gap-12 rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl md:p-16">
        {/* Signature Name */}
        <h1
          className="text-center font-secondary text-4xl font-bold text-white drop-shadow-lg md:text-5xl"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
        >
          Trinh Van Thuong
        </h1>
        <p
          className="text-center font-primary text-base text-white/80 md:text-lg"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
        >
          Empowering Ideas | Engineering Solutions | Exploring Possibilities
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="cursor-pointer font-primary text-sm font-medium text-white/70 transition-all hover:text-secondary"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
            >
              {item}
            </h1>
          ))}
        </div>

        {/* Divider */}
        <Divider style={{ background: "#ffffff30", width: "100%" }} />

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p
            className="font-primary text-sm text-white/70"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Email:{" "}
            <span className="hover:text-secondary">
              thuongtrinh.work@gmail.com
            </span>
          </p>
          <p
            className="font-primary text-sm text-white/70"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Phone:{" "}
            <span className="hover:text-secondary">(+84) 345 282 532</span>
          </p>
          <p
            className="font-primary text-xs text-white/50"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            © 2025 Trinh Van Thuong. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex gap-6">
          <a
            href="https://www.facebook.com/TrinhThuong2001/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="text-white transition-all hover:text-secondary" />
          </a>
          <a
            href="https://www.linkedin.com/in/thuong-trinh-van/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="text-white transition-all hover:text-secondary" />
          </a>
          <a
            href="https://github.com/JasmineVan"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="text-white transition-all hover:text-secondary" />
          </a>
          <a
            href="https://www.youtube.com/@thuongtrinhvan2001"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon className="text-white transition-all hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
