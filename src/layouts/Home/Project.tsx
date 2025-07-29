import { motion } from "framer-motion";
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

const ProjectComponent = ({
  icon,
  name,
  role,
  tech,
  description,
  index,
}: (typeof projects)[0] & { icon: ReactNode; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group flex flex-col gap-2 rounded-xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-secondary/50"
  >
    <div className="m-2 flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-md">
      {icon}
    </div>
    <h1
      className="px-2 text-xl font-bold text-white group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      {name}
    </h1>
    <h2 className="px-2 text-base font-light text-secondary">{role}</h2>
    <Stack direction="row" spacing={1} className="flex-wrap px-1">
      {tech.map(({ name, bg, text }, index) => (
        <Chip
          key={index}
          label={name}
          style={{ backgroundColor: bg, color: text, fontWeight: "bold" }}
          className="font-primary"
        />
      ))}
    </Stack>
    <p
      className="px-2 text-justify font-primary text-sm text-white/90"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      {description}
    </p>
    <h1
      className="mt-auto cursor-pointer px-2 font-semibold text-white group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      See more ➝
    </h1>
  </motion.div>
);

const Project = () => {
  return (
    <div
      className="flex justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 flex w-full max-w-7xl flex-col items-center gap-6"
      >
        <div className="text-center">
          <h1 className="font-secondary text-3xl font-bold text-secondary">
            MY SHOWCASE
          </h1>
          <h1
            className="font-tertiary text-4xl font-semibold text-white"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Spotlight Projects
          </h1>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectComponent key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
