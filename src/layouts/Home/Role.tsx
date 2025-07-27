import StorageIcon from "@mui/icons-material/Storage";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ReactNode } from "react";
import Geo3 from "../../assets/Geometry/Geo3.svg";

const roles = [
    {
        position: "Back-end Developer",
        description: "Skilled in designing and implementing scalable server-side architectures, RESTful APIs, and database management using technologies like Node.js, TypeScript, and Prisma. Experienced in integrating third-party services and ensuring high-performance backend systems.",
        icon: <StorageIcon fontSize="large" style={{ color: "#ffffff" }} />
    },
    {
        position: "Business Analyst",
        description: "Proficient in gathering requirements, analyzing business needs, and creating detailed documentation to bridge the gap between stakeholders and development teams. Experienced in optimizing workflows and proposing data-driven solutions.",
        icon: <BarChartIcon fontSize="large" style={{ color: "#ffffff" }} />
    },
    {
        position: "Project Manager",
        description: "Capable of leading cross-functional teams, managing project timelines, and ensuring successful product delivery. Skilled in Agile methodologies, risk assessment, and coordinating with stakeholders to achieve business objectives.",
        icon: <AssignmentIcon fontSize="large" style={{ color: "#ffffff" }} />
    }
]

const RoleComponent = ({ icon, position, description }: typeof roles[0] & {icon: ReactNode}) => (
    <div className="group flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2">
        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300">
            {icon}
        </div>
        <h1 className="text-2xl font-bold text-primary px-4 font-primary group-hover:text-secondary">
            {position}
        </h1>
        <p className="text-justify text-primary px-4 font-primary">
            {description}
        </p>
    </div>
)

const Role = () => {
    return (
            <div
              className="flex justify-center py-32 bg-no-repeat bg-cover bg-center"
              style={{
                // backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${Geo3})`,
              }}
            >
            {/* Layout 12 cols, 10 working cols */}
            <div className="w-10/12 h-auto flex flex-col items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-secondary font-secondary">
                    MULTI-FACETED TECH PROFESSIONAL
                </h1>
                <h1 className="text-4xl font-semibold text-primary font-tertiary">Role & Position</h1>
                {/* Role cards */}
                <div className="flex flex-row gap-6 w-full justify-between">
                    {roles.map((role, index) => (
                        <RoleComponent key={index}{...role}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Role;