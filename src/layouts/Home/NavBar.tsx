import SiteImage from "../../assets/Home/jasmine-trans.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const NavigateItemCSS =
    "text-base text-primary font-semibold hover:cursor-pointer hover:text-secondary";

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up, hide if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex justify-center py-4"
    >
      {/* Layout 12 cols, 10 working cols */}
      <div className="w-full h-16 flex flex-row items-center justify-between px-8">
        {/* Site name */}
        <div className="w-3/12 flex justify-start">
          <img
            src={SiteImage}
            alt="SiteImage"
            className="w-1/4 h-1/4 object-fit"
          />
        </div>
        {/* Navigate items */}
        <div className="w-7/12 flex flex-row gap-8 justify-end items-center">
          <h1 className={`${NavigateItemCSS}`}>Home</h1>
          <h1 className={`${NavigateItemCSS}`}>About</h1>
          <h1 className={`${NavigateItemCSS}`}>Project</h1>
          <h1 className={`${NavigateItemCSS}`}>Blog</h1>
          <h1 className={`${NavigateItemCSS}`}>Career</h1>
          <h1 className={`${NavigateItemCSS}`}>Contact</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
