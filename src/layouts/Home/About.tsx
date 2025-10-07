import { motion, useReducedMotion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";
import AboutMeImage from "../../assets/Home/aboutme.jpg";

const randomImage = getRandomESG();

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  // Variants for parent/children orchestration
  const containerV = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const leftV = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightV = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const btnV = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleDownload = (): void => {
    const pdfUrl: string = "/ThuongTrinhVan_BA_Resume.pdf";
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ThuongTrinhVan_BA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-24"
      style={{ backgroundImage: `url(${randomImage})` }}
      aria-label="About section background"
    >
      {/* Animated overlay for readability (glass vibe) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.6))]"
        initial={{ opacity: prefersReducedMotion ? 0.45 : 0 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.2,
          ease: "easeOut",
        }}
      />

      <motion.div
        variants={containerV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mt-16 flex w-full max-w-7xl flex-col items-center justify-center gap-8 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md md:flex-row md:items-center md:justify-between md:gap-10 md:p-12"
      >
        {/* Left: Image */}
        <motion.div
          variants={leftV}
          className="flex h-full w-full items-center justify-center md:w-1/2 md:justify-start"
        >
          <motion.img
            src={AboutMeImage}
            alt="Portrait of Trinh Van Thuong (Jasmine)"
            loading="lazy"
            className="h-auto w-40 rounded-full border-4 border-white/30 object-cover shadow-xl sm:w-48 md:w-2/3"
            whileHover={{
              rotateZ: prefersReducedMotion ? 0 : -1,
              scale: prefersReducedMotion ? 1 : 1.02,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          variants={rightV}
          className="flex w-full flex-col items-center gap-2 text-center text-white md:w-1/2 md:items-start md:text-left"
        >
          <h1 className="text-shadow font-secondary text-xl font-bold text-secondary sm:text-2xl md:text-3xl">
            ABOUT ME
          </h1>

          <h2
            className="mb-4 font-tertiary text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Trinh Van Thuong (Jasmine)
          </h2>

          <p
            className="max-w-prose text-balance text-justify font-primary text-sm text-white/85 sm:text-base md:text-lg"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.45)" }}
          >
            I am a highly skilled software engineer, a graduate of Ton Duc Thang
            University, currently contributing my expertise at Hoang Thanh
            Capital &amp; Partners Co.LTD. Experience in analyzing business
            needs, identifying solutions, and delivering data-driven insights
            that improve operational efficiency. I excel at bridging technical
            teams and business stakeholders for project alignment and successful
            outcomes.
          </p>

          <p
            className="max-w-prose text-balance text-justify font-primary text-sm text-white/85 sm:text-base md:text-lg"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.45)" }}
          >
            As business analyst role, I specialize in crafting innovative
            applications that cater to diverse industries. My experience with
            Hoang Thanh Capital &amp; Partners Co.LTD has honed my abilities to
            deliver tailored solutions for projects.
          </p>

          {/* Button */}
          {/* <motion.div variants={btnV} className="mt-2">
            <button
              onClick={handleDownload}
              className="group rounded-xl border border-white/30 bg-white/20 px-6 py-3 font-primary text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-secondary hover:bg-white hover:text-secondary sm:text-base"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)" }}
            >
              Resume
            </button>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
