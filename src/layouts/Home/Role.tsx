import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";
import StorageIcon from "@mui/icons-material/Storage";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";

const randomImage = getRandomESG();

const roles = [
  {
    position: "Back-end Developer",
    description:
      "Skilled in designing and implementing scalable server-side architectures, RESTful APIs, and database management using technologies like Node.js, TypeScript, and Prisma. Experienced in integrating third-party services and ensuring high-performance backend systems.",
    icon: <StorageIcon fontSize="large" style={{ color: "#ffffff" }} />,
  },
  {
    position: "Business Analyst",
    description:
      "Proficient in gathering requirements, analyzing business needs, and creating detailed documentation to bridge the gap between stakeholders and development teams. Experienced in optimizing workflows and proposing data-driven solutions.",
    icon: <BarChartIcon fontSize="large" style={{ color: "#ffffff" }} />,
  },
  {
    position: "Project Manager",
    description:
      "Capable of leading cross-functional teams, managing project timelines, and ensuring successful product delivery. Skilled in Agile methodologies, risk assessment, and coordinating with stakeholders to achieve business objectives.",
    icon: <AssignmentIcon fontSize="large" style={{ color: "#ffffff" }} />,
  },
];

// motion variants
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
const cardV = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RoleCard = ({
  icon,
  position,
  description,
}: (typeof roles)[0] & { icon: ReactNode }) => (
  <motion.div
    variants={cardV}
    className="group flex h-full flex-col gap-3 rounded-xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/40"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-md">
      {icon}
    </div>
    <h3
      className="font-primary text-xl font-bold text-white/95 group-hover:text-secondary sm:text-2xl"
      style={{ textShadow: "2px 2px 6px rgba(0,0,0,.5)" }}
    >
      {position}
    </h3>
    <p
      className="text-justify font-primary text-sm text-white/90 sm:text-base"
      style={{ textShadow: "2px 2px 6px rgba(0,0,0,.45)" }}
    >
      {description}
    </p>
  </motion.div>
);

const Role = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-10 pt-16"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {/* readability overlay */}
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
        className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-10"
      >
        {/* header */}
        <motion.div
          variants={headerV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-secondary text-2xl font-bold text-secondary sm:text-3xl">
            MULTI-FACETED TECH PROFESSIONAL
          </h1>
          <h2
            className="font-tertiary text-3xl font-semibold text-white/95 sm:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,.5)" }}
          >
            Role &amp; Position
          </h2>
        </motion.div>

        {/* responsive grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, idx) => (
            <RoleCard key={idx} {...role} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Role;
