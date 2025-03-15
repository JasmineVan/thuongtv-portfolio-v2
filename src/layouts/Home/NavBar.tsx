import SiteImage from "../../assets/Home/jasmine-trans.png";
import { motion } from "framer-motion";
import useScrollVisibility from "../../hooks/useScrollVisibility";

const NavBar = () => {
  const navItems = ["Home", "About", "Project", "Blog", "Career", "Contact"];

  const isVisible = useScrollVisibility(50, "top");

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
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
            className="w-1/4 h-1/4 object-fit hover:cursor-pointer"
          />
        </div>
        {/* Navigate items */}
        <div className="w-7/12 flex flex-row gap-8 justify-end items-center">
          {navItems.map((item, index) => (
            <h1
              key={index}
              className="text-base text-primary font-semibold hover:cursor-pointer hover:text-secondary font-primary"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
