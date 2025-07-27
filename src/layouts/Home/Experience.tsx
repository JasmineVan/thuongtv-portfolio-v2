import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BnW1 from "../../assets/BnW/BnW8.jpg";

const experiences = [
  { period: "From the past", title: "", description: "" },
  // {
  //   period: "2015 - 2018",
  //   title: "Nguyen Huu Tho High School",
  //   description:
  //     "Nguyen Huu Tho School was officially established in 1961 and has gone through many stages of development with many generations of students. The school has a rich tradition of nearly 60 years of history.",
  // },
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
      <TimelineDot className="bg-secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <div>
        <h1 className="font-primary text-xl italic text-secondary">{period}</h1>
        {title && (
          <h1 className="font-primary text-2xl font-bold text-white drop-shadow">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-justify font-primary text-white/90">
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
      className="flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${BnW1})`,
      }}
    >
      <div className="flex flex-col w-full items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:w-10/12 lg:w-8/12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-secondary text-3xl font-bold text-secondary">
            MY JOURNEY OF HAPPINESS
          </h1>
          <h1 className="font-tertiary text-4xl font-semibold text-white drop-shadow-md">
            Experiences
          </h1>
        </div>

        <Timeline className="mt-8 w-full" position="alternate">
          {experiences.map((exp, index) => (
            <TimelineEntry key={index} {...exp} />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
