import { motion, useReducedMotion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";

const randomImage = getRandomESG();

const containerV = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};
const subtitleV = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } },
};
const ctaV = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, delay: 0.1 } },
};
const headerV = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Interest = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-10 pt-16"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {/* Subtle dark overlay for contrast on any image */}
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
        variants={containerV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="glassmorphism relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md sm:p-10 md:p-12"
      >
        {/* header */}
        <motion.div
          variants={headerV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-secondary text-2xl font-bold text-secondary sm:text-3xl">
            LET’S BUILD SOMETHING REMARKABLE TOGETHER
          </h1>
          <h2
            className="mb-4 font-tertiary text-3xl font-semibold text-white/95 sm:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.5)" }}
          >
            Collaboration turns ideas into impact.
          </h2>
        </motion.div>
        {/* <motion.h1
          variants={titleV}
          className="text-center font-primary text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,.5)" }}
        >
          Interested in working with me?
        </motion.h1> */}

        <motion.h2
          variants={subtitleV}
          className="text-center font-primary text-lg text-white/90 sm:text-xl md:text-2xl"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,.45)" }}
        >
          Interested in working with me?
        </motion.h2>

        {/* <motion.button
          variants={ctaV}
          className="group mt-4 rounded-2xl border border-white/30 bg-white/10 px-8 py-3 font-primary text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-secondary sm:px-10 sm:py-4 sm:text-lg"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,.4)" }}
          aria-label="Contact now"
          onClick={() =>
            window.location.assign("mailto:thuongtrinh.work@gmail.com")
          }
        >
          Contact now
        </motion.button> */}
      </motion.div>
    </div>
  );
};

export default Interest;
