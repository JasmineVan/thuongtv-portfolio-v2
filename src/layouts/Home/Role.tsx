import StorageIcon from "@mui/icons-material/Storage";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ReactNode } from "react";
import BnW1 from "../../assets/BnW/BnW13.jpg";

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

const RoleComponent = ({
  icon,
  position,
  description,
}: (typeof roles)[0] & { icon: ReactNode }) => (
  <div className="group flex h-96 w-1/3 flex-col gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/50">
    <div className="m-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition-all duration-300">
      {icon}
    </div>
    <h1 className="px-4 font-primary text-2xl font-bold text-primary group-hover:text-secondary">
      {position}
    </h1>
    <p className="px-4 text-justify font-primary text-primary">{description}</p>
  </div>
);

const Role = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${BnW1})`,
      }}
    >
      {/* Layout 12 cols, 10 working cols */}
      <div className="flex h-auto w-10/12 flex-col items-center justify-between gap-4">
        <h1 className="font-secondary text-3xl font-bold text-secondary">
          MULTI-FACETED TECH PROFESSIONAL
        </h1>
        <h1 className="font-tertiary text-4xl font-semibold text-primary">
          Role & Position
        </h1>
        {/* Role cards */}
        <div className="flex w-full flex-row justify-between gap-6">
          {roles.map((role, index) => (
            <RoleComponent key={index} {...role} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Role;
