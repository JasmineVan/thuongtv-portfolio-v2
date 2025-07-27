import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Geo4 from "../../assets/Geometry/Geo4.svg";
import BnW1 from "../../assets/BnW/BnW1.jpg";


const experiences = [
  { period: "From the past", title: "", description: "" },
  {
    period: "2015 - 2018",
    title: "Nguyen Huu Tho High School",
    description:
      "Nguyen Huu Tho School was officially established in 1961 and has gone through many stages of development with many generations of students. The school has a rich tradition of nearly 60 years of history.",
  },
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

const TimelineEntry = ({
  period,
  title,
  description,
}: (typeof experiences)[0]) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <div>
        <h1 className="text-xl italic text-secondary font-primary">{period}</h1>
        {title && (
          <h1 className="text-2xl font-bold text-primary font-primary">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-justify text-primary font-primary">
            {description}
          </p>
        )}
      </div>
    </TimelineContent>
  </TimelineItem>
);

const Experience = () => {
  return (
    <div
      className="flex justify-center py-32 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${BnW1})`,
      }}
    >
      <div className="w-10/12 flex flex-col items-center gap-4 glassmorphism p-6 rounded-2xl shadow-lg border border-white/20 backdrop-blur-md bg-white/10">
        <h1 className="text-3xl font-bold text-secondary font-secondary">
          MY JOURNEY OF HAPPINESS
        </h1>
        <h1 className="text-4xl font-semibold text-primary font-tertiary">
          Experiences
        </h1>
        <Timeline className="w-full" position="alternate">
          {experiences.map((exp, index) => (
            <TimelineEntry key={index} {...exp} />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
