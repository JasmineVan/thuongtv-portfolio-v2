import { motion, useReducedMotion } from "framer-motion";
import PetsIcon from "@mui/icons-material/Pets";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessIcon from "@mui/icons-material/Business";
import PoolIcon from "@mui/icons-material/Pool";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";
import { getRandomESG } from "../../utils/getRandomESGImage";

const randomImage = getRandomESG();

const projects = [
  {
    icon: <PetsIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Dogs Park",
    role: "Back-end Developer",
    tech: [
      { name: "React", bg: "#20232A", text: "#61DAFB" },
      { name: "VN Pay", bg: "#0064D2", text: "#FFFFFF" },
      { name: "Flutter", bg: "#02569B", text: "#47C5FB" },
      { name: "1C:ERP", bg: "#DA251C", text: "#FFD700" },
    ],
    description:
      "The Dogs Park project is a community-oriented space designed for dogs and their owners to socialize and play...",
  },
  {
    icon: <LocalCafeIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Coffee Roastery",
    role: "Back-end Developer",
    tech: [
      { name: "React", bg: "#20232A", text: "#61DAFB" },
      { name: "Flutter", bg: "#02569B", text: "#47C5FB" },
      { name: "1C:ERP", bg: "#DA251C", text: "#FFD700" },
    ],
    description:
      "An e-commerce platform dedicated to artisanal coffee roasting. This project showcases a range of coffee beans...",
  },
  {
    icon: <NotificationsIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "CleverTap Implementation",
    role: "Business Analyst",
    tech: [
      { name: "React", bg: "#20232A", text: "#61DAFB" },
      { name: "CleverTap", bg: "#de2023", text: "#141b2a" },
      { name: "Flutter", bg: "#02569B", text: "#47C5FB" },
      { name: "1C:ERP", bg: "#DA251C", text: "#FFD700" },
    ],
    description:
      "An integration project with CleverTap, a leading customer engagement and analytics platform...",
  },
  {
    icon: <BusinessIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Real Estate Platform",
    role: "Back-end Developer, Project Manager",
    tech: [
      { name: "React", bg: "#20232A", text: "#61DAFB" },
      { name: "Flutter", bg: "#02569B", text: "#47C5FB" },
      { name: "1C:ERP", bg: "#DA251C", text: "#FFD700" },
      { name: "Python", bg: "#3e74a3", text: "#ffdb53" },
    ],
    description:
      "Our Vietnam real estate platform offers a comprehensive and user-friendly experience for property seekers...",
  },
  {
    icon: <PoolIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Aquatics HUB",
    role: "Back-end Developer",
    tech: [
      { name: "React", bg: "#20232A", text: "#61DAFB" },
      { name: "Flutter", bg: "#02569B", text: "#47C5FB" },
      { name: "1C:ERP", bg: "#DA251C", text: "#FFD700" },
      { name: "Python", bg: "#3e74a3", text: "#ffdb53" },
      { name: "VN Pay", bg: "#0064D2", text: "#FFFFFF" },
    ],
    description:
      "The Aquatic Hub is a modern facility focused on providing a variety of aquatic activities for all ages...",
  },
  {
    icon: <TwoWheelerIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Two-wheel Retail Store",
    role: "Back-end Developer, Project Manager",
    tech: [
      { name: "React", bg: "#20232A", text: "#61DAFB" },
      { name: "Python", bg: "#3e74a3", text: "#ffdb53" },
      { name: "VN Pay", bg: "#0064D2", text: "#FFFFFF" },
      { name: "SQLite", bg: "#0a435e", text: "#FFFFFF" },
    ],
    description:
      "An online retail store specializing in motorcycle parts and accessories...",
  },
];

/* Motion variants */
const shellV = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const headerV = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const cardV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard = ({
  icon,
  name,
  role,
  tech,
  description,
  index,
}: (typeof projects)[0] & { icon: ReactNode; index: number }) => (
  <motion.div
    variants={cardV}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.05 }}
    className="group flex h-full flex-col gap-2 rounded-xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-secondary/50"
  >
    <div className="m-2 flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-md">
      {icon}
    </div>
    <h3
      className="px-2 font-primary text-xl font-bold text-white group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
    >
      {name}
    </h3>
    <p className="px-2 text-sm font-light text-secondary">{role}</p>

    <Stack direction="row" spacing={1} className="flex-wrap px-1">
      {tech.map(({ name, bg, text }, i) => (
        <Chip
          key={i}
          label={name}
          style={{ backgroundColor: bg, color: text, fontWeight: "bold" }}
          className="font-primary"
          size="small"
        />
      ))}
    </Stack>

    <p
      className="px-2 text-justify font-primary text-sm text-white/90"
      style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.45)" }}
    >
      {description}
    </p>

    <button
      className="mt-auto w-fit px-2 text-left font-semibold text-white transition-colors group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.45)" }}
      aria-label={`See more about ${name}`}
    >
      See more ➝
    </button>
  </motion.div>
);

const Project = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-10 pt-16"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {/* Readability overlay for random images */}
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
        viewport={{ once: true, amount: 0.22 }}
        className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-6"
      >
        {/* Header */}
        <motion.div
          variants={headerV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-secondary text-2xl font-bold text-secondary sm:text-3xl">
            MY SHOWCASE
          </h1>
          <h2
            className="font-tertiary text-3xl font-semibold text-white sm:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
          >
            Spotlight Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
