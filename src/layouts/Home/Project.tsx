import PetsIcon from "@mui/icons-material/Pets";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessIcon from "@mui/icons-material/Business";
import PoolIcon from "@mui/icons-material/Pool";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";
import Geo5 from "../../assets/Geometry/Geo5.svg";

const projects = [
  {
    icon: <PetsIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Dogs Park",
    role: "Back-end Developer",
    tech: [
      {
        name: "React",
        bg: "#20232A",
        text: "#61DAFB",
      },
      {
        name: "VN Pay",
        bg: "#0064D2",
        text: "#FFFFFF",
      },
      {
        name: "Flutter",
        bg: "#02569B",
        text: "#47C5FB",
      },
      {
        name: "1C:ERP",
        bg: "#DA251C",
        text: "#FFD700",
      },
    ],
    description:
      "The Dogs Park project is a community-oriented space designed for dogs and their owners to socialize and play. It features designated areas for small and large dogs, agility equipment for exercise. The park hosts regular events, including training workshops and social meetups, fostering a vibrant community of dog lovers.",
  },
  {
    icon: <LocalCafeIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Coffee Roastery",
    role: "Back-end Developer",
    tech: [
      {
        name: "React",
        bg: "#20232A",
        text: "#61DAFB",
      },
      {
        name: "Flutter",
        bg: "#02569B",
        text: "#47C5FB",
      },
      {
        name: "1C:ERP",
        bg: "#DA251C",
        text: "#FFD700",
      },
    ],
    description:
      "An e-commerce platform dedicated to artisanal coffee roasting. This project showcases a range of coffee beans sourced from around the world, complete with detailed tasting notes and brewing recommendations. Customers can subscribe for regular deliveries or purchase one-time bags, with a focus on sustainability and direct trade practices.",
  },
  {
    icon: <NotificationsIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "CleverTap Implementation",
    role: "Business Analyst",
    tech: [
      {
        name: "React",
        bg: "#20232A",
        text: "#61DAFB",
      },
      {
        name: "CleverTap",
        bg: "#de2023",
        text: "#141b2a",
      },
      {
        name: "Flutter",
        bg: "#02569B",
        text: "#47C5FB",
      },
      {
        name: "1C:ERP",
        bg: "#DA251C",
        text: "#FFD700",
      },
    ],
    description:
      "An integration project with CleverTap, a leading customer engagement and analytics platform. This project involved implementing CleverTap’s SDK into a mobile application, enabling real-time user engagement through personalized notifications, targeted campaigns, and comprehensive analytics to optimize user retention and growth.",
  },
  {
    icon: <BusinessIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Real Estate Platform",
    role: "Back-end Developer, Project Manager",
    tech: [
      {
        name: "React",
        bg: "#20232A",
        text: "#61DAFB",
      },
      {
        name: "Flutter",
        bg: "#02569B",
        text: "#47C5FB",
      },
      {
        name: "1C:ERP",
        bg: "#DA251C",
        text: "#FFD700",
      },
      {
        name: "Python",
        bg: "#3e74a3",
        text: "#ffdb53",
      },
    ],
    description:
      "Our Vietnam real estate platform offers a comprehensive and user-friendly experience for property seekers, investors, and real estate professionals. The platform is designed to streamline property discovery, provide in-depth project insights, and facilitate user engagement through various tools and resources.",
  },
  {
    icon: <PoolIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Aquatics HUB",
    role: "Back-end Developer",
    tech: [
      {
        name: "React",
        bg: "#20232A",
        text: "#61DAFB",
      },
      {
        name: "Flutter",
        bg: "#02569B",
        text: "#47C5FB",
      },
      {
        name: "1C:ERP",
        bg: "#DA251C",
        text: "#FFD700",
      },
      {
        name: "Python",
        bg: "#3e74a3",
        text: "#ffdb53",
      },
      {
        name: "VN Pay",
        bg: "#0064D2",
        text: "#FFFFFF",
      },
    ],
    description:
      "The Aquatic Hub is a modern facility focused on providing a variety of aquatic activities for all ages. It includes multiple swimming pools for lessons. The hub also emphasizes water safety education, offering programs that teach essential swimming skills and promote healthy, active lifestyles within the community.",
  },
  {
    icon: <TwoWheelerIcon fontSize="large" style={{ color: "#ffffff" }} />,
    name: "Two-wheel Retail Store",
    role: "Back-end Developer, Project Manager",
    tech: [
      {
        name: "React",
        bg: "#20232A",
        text: "#61DAFB",
      },
      {
        name: "Python",
        bg: "#3e74a3",
        text: "#ffdb53",
      },
      {
        name: "VN Pay",
        bg: "#0064D2",
        text: "#FFFFFF",
      },
      {
        name: "SQLite",
        bg: "#0a435e",
        text: "#FFFFFF",
      },
    ],
    description:
      "An online retail store specializing in motorcycle parts and accessories. This project includes a user-friendly interface for browsing products, detailed descriptions, customer reviews, and a secure checkout process. The platform also offers a blog with maintenance tips, riding safety advice, and the latest industry news.",
  },
];

const ProjectComponent = ({
  icon,
  name,
  role,
  tech,
  description,
}: (typeof projects)[0] & { icon: ReactNode }) => (
  <div className="group flex h-auto w-auto flex-col gap-2 rounded-xl border-2 border-slate-200 bg-white py-2 transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/50">
    <div className="m-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition-all duration-300">
      {icon}
    </div>
    <h1 className="px-4 text-2xl font-bold text-primary group-hover:text-secondary">
      {name}
    </h1>
    <h1 className="px-4 text-xl font-light text-secondary">{role}</h1>
    {/* Technical stacks */}
    <Stack direction="row" spacing={1} className="px-4">
      {tech.map(({ name, bg, text }, index) => (
        <Chip
          key={index}
          label={name}
          style={{ backgroundColor: bg, color: text, fontWeight: "bold" }}
          className="font-primary"
        />
      ))}
    </Stack>
    <p className="px-4 text-justify font-primary text-primary">{description}</p>
    <h1 className="cursor-pointer px-4 font-primary font-semibold text-primary group-hover:text-secondary">
      See more ➝
    </h1>
    {/* Top-Right image for demo - Will make it later */}
  </div>
);

const Project = () => {
  return (
    <div
      className="flex justify-center bg-cover bg-center bg-no-repeat py-32"
      style={
        {
          // backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${Geo5})`,
        }
      }
    >
      {/* Layout 12 cols, 10 working cols */}
      <div className="flex h-auto w-10/12 flex-col items-center justify-between gap-4">
        <h1 className="font-secondary text-3xl font-bold text-secondary">
          MY SHOWCASE
        </h1>
        <h1 className="font-tertiary text-4xl font-semibold text-primary">
          Spotlight projects
        </h1>
        {/* Project cards */}
        <div className="grid w-full grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectComponent key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
