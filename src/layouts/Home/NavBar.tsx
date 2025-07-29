import SiteImage from "../../assets/Home/jasmine-trans.png";
import { motion } from "framer-motion";
import useScrollVisibility from "../../hooks/useScrollVisibility";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const navItems = ["Home", "About", "Project", "Blog", "Career", "Contact"];
  const isVisible = useScrollVisibility(50, "top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/30 shadow-lg backdrop-blur-md"
    >
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={SiteImage}
            alt="SiteImage"
            className="h-12 w-12 object-contain hover:cursor-pointer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <h1
              key={index}
              className="font-primary text-base font-semibold text-white transition duration-200 hover:cursor-pointer hover:text-secondary"
            >
              {item}
            </h1>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-start border-t border-white/20 bg-white/30 px-4 py-2 shadow-md backdrop-blur-md md:hidden">
          {navItems.map((item, index) => (
            <h1
              key={index}
              className="w-full py-2 font-primary text-base font-semibold text-white hover:cursor-pointer hover:text-secondary"
            >
              {item}
            </h1>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
