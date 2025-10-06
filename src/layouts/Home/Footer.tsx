import { motion, useReducedMotion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const randomImage = getRandomESG();

const shellV = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const blockV = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const headerV = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-10 pt-16"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {/* Readability overlay */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.28),rgba(0,0,0,0.55))]"
        initial={{ opacity: prefersReducedMotion ? 0.45 : 0 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.0,
          ease: "easeOut",
        }}
      />

      <motion.div
        variants={shellV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="glassmorphism relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-10 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:gap-12 md:p-16"
      >
        <motion.div
          variants={headerV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-secondary text-2xl font-bold text-secondary sm:text-3xl">
            SAY HELLO 👋
          </h1>
          <h2
            className="font-tertiary text-3xl font-semibold text-white/95 sm:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.5)" }}
          >
            Every great project begins with a single message.
          </h2>
        </motion.div>
        {/* Name + Tagline */}
        <motion.div variants={blockV} className="text-center">
          <h1
            className="font-secondary text-3xl font-bold text-white drop-shadow md:text-5xl"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.5)" }}
          >
            Trinh Van Thuong
          </h1>
          <p
            className="mt-2 font-primary text-sm text-white/80 md:text-lg"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.45)" }}
          >
            Good Deeds | Diligent | Ethical | Wisdom | Willpower | Beneficent |
            Grateful | Harmony
          </p>
        </motion.div>

        {/* (Optional) Menu – remove entirely if you don’t need it */}
        {/* <motion.div variants={blockV} className="flex flex-wrap justify-center gap-6">
          {["Home","About","Project","Blog","Career","Contact"].map((item) => (
            <span
              key={item}
              className="cursor-pointer font-primary text-sm font-medium text-white/70 transition-colors hover:text-secondary"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,.45)" }}
            >
              {item}
            </span>
          ))}
        </motion.div> */}

        <motion.div variants={blockV} className="w-full">
          <Divider style={{ background: "#ffffff30", width: "100%" }} />
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={blockV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <a
            href="mailto:thuongtrinh.work@gmail.com"
            className="rounded px-1 font-primary text-sm text-white/80 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.45)" }}
          >
            Email: thuongtrinh.work@gmail.com
          </a>
          <a
            href="tel:+84345282532"
            className="rounded px-1 font-primary text-sm text-white/80 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.45)" }}
          >
            Phone: (+84) 345 282 532
          </a>
          <p
            className="mt-2 font-primary text-xs text-white/55"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.4)" }}
          >
            © 2025 Trinh Van Thuong. All rights reserved.
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div variants={blockV} className="mt-2 flex gap-6">
          <a
            href="https://www.facebook.com/TrinhThuong2001/"
            target="_blank"
            rel="noreferrer"
            className="rounded p-1 text-white transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/thuong-trinh-van/"
            target="_blank"
            rel="noreferrer"
            className="rounded p-1 text-white transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/JasmineVan"
            target="_blank"
            rel="noreferrer"
            className="rounded p-1 text-white transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.youtube.com/@thuongtrinhvan2001"
            target="_blank"
            rel="noreferrer"
            className="rounded p-1 text-white transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
