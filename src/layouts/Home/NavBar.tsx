import SiteImage from "../../assets/Home/jasmine-trans.png";
import { motion } from "framer-motion";
import useScrollVisibility from "../../hooks/useScrollVisibility";

const NavBar = () => {
  const isVisible = useScrollVisibility(50, "top");

  // Edit your quote here
  const quote = "Good for environment - Good for society - Good for us.";

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/30 shadow-lg backdrop-blur-md"
    >
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-8">
        {/* Logo (left) */}
        {/* <div className="flex items-center">
          <img
            src={SiteImage}
            alt="Site logo"
            className="h-12 w-12 object-contain"
          />
        </div> */}

        {/* Quote (center) */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-label="site-quote"
          className="flex-1 px-3 text-center font-primary text-[12px] leading-tight text-white/90 drop-shadow sm:text-sm md:text-base lg:text-lg"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          title={quote}
        >
          {quote}
        </motion.p>

        {/* Spacer to keep quote centered (same width as logo area) */}
        <div className="h-12 w-12" />
      </div>
    </motion.div>
  );
};

export default NavBar;
