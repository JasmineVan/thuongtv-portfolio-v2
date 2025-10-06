import { motion, useReducedMotion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const randomImage = getRandomESG();

const experiences = [
  { period: "From the past", title: "", description: "" },
  {
    period: "2018 - 2022",
    title: "Ton Duc Thang University",
    description:
      "Ton Duc Thang University is a Vietnamese public university. The school belongs to the Vietnam General Confederation of Labor. The school operates under a comprehensive autonomy mechanism.",
  },
  {
    period: "2018 - 2022",
    title: "Mai House Saigon Hotel",
    description:
      "Mai House Saigon is a little like an elegantly furnished boutique gallery. Interior spaces start your journey through local culture with collections of artwork, literature, and artifacts.",
  },
  {
    period: "2022 - Current",
    title: "Hoang Thanh Capital & Partners Co.LTD",
    description:
      "Hoang Thanh Group is an investment holding company with M&A and principal investments as our core businesses. Through our portfolio companies, our activities extend to digital solutions consultancy, real estate, and logistics.",
  },
  { period: "To the future", title: "", description: "" },
];

// Animation helpers
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

const headerV = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemV = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -50 : 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
});

const TimelineEntry = ({
  period,
  title,
  description,
  index,
}: (typeof experiences)[0] & { index: number }) => {
  const from = index % 2 === 0 ? "left" : "right";
  return (
    <TimelineItem>
      <TimelineSeparator>
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
            delay: index * 0.08,
          }}
        >
          <TimelineDot className="bg-secondary" />
        </motion.div>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <motion.div
          variants={itemV(from as "left" | "right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.08 }}
        >
          <h3 className="font-primary text-base italic text-secondary sm:text-lg">
            {period}
          </h3>

          {title && (
            <h4
              className="font-primary text-xl font-bold text-white drop-shadow sm:text-2xl"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
            >
              {title}
            </h4>
          )}

          {description && (
            <p
              className="text-justify font-primary text-sm text-white/90 sm:text-base"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.45)" }}
            >
              {description}
            </p>
          )}
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-8 pt-16"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {/* Readability overlay on top of random image */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.28),rgba(0,0,0,0.55))]"
        initial={{ opacity: prefersReducedMotion ? 0.45 : 0 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.1,
          ease: "easeOut",
        }}
      />

      <motion.div
        variants={containerV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="relative z-10 mt-12 flex w-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:w-10/12 md:p-10 lg:w-8/12"
      >
        <motion.div
          variants={headerV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-secondary text-2xl font-bold text-secondary sm:text-3xl">
            MY JOURNEY OF HAPPINESS
          </h1>
          <h2
            className="font-tertiary text-3xl font-semibold text-white drop-shadow-md sm:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Experiences
          </h2>
        </motion.div>

        <Timeline className="mt-6 w-full sm:mt-8" position="alternate">
          {experiences.map((exp, index) => (
            <TimelineEntry key={index} {...exp} index={index} />
          ))}
        </Timeline>
      </motion.div>
    </div>
  );
};

export default Experience;
