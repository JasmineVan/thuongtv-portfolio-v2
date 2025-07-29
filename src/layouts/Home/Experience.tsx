import { motion } from "framer-motion";
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

const TimelineEntry = ({
  period,
  title,
  description,
  index,
}: (typeof experiences)[0] & { index: number }) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot className="bg-secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <h1 className="font-primary text-xl italic text-secondary">{period}</h1>
        {title && (
          <h1
            className="font-primary text-2xl font-bold text-white drop-shadow"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            {title}
          </h1>
        )}
        {description && (
          <p
            className="text-justify font-primary text-white/90"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            {description}
          </p>
        )}
      </motion.div>
    </TimelineContent>
  </TimelineItem>
);

const Experience = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 flex w-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 md:w-10/12 lg:w-8/12"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="font-secondary text-3xl font-bold text-secondary">
            MY JOURNEY OF HAPPINESS
          </h1>
          <h1
            className="font-tertiary text-4xl font-semibold text-white drop-shadow-md"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Experiences
          </h1>
        </motion.div>

        <Timeline className="mt-8 w-full" position="alternate">
          {experiences.map((exp, index) => (
            <TimelineEntry key={index} {...exp} index={index} />
          ))}
        </Timeline>
      </motion.div>
    </div>
  );
};

export default Experience;
