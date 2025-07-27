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
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg"
    >
      <div className="w-full h-16 flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={SiteImage}
            alt="SiteImage"
            className="w-12 h-12 object-contain hover:cursor-pointer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <h1
              key={index}
              className="text-base text-white font-semibold hover:text-secondary hover:cursor-pointer font-primary transition duration-200"
            >
              {item}
            </h1>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 py-2 bg-white/30 backdrop-blur-md border-t border-white/20 shadow-md">
          {navItems.map((item, index) => (
            <h1
              key={index}
              className="py-2 text-base text-white font-semibold hover:text-secondary hover:cursor-pointer font-primary w-full"
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