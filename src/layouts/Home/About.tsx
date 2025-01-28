import { motion } from "framer-motion";
import SiteImage from "../../assets/Home/jasmine-trans.png";

const About = () => {
  return (
    <div className="flex justify-center py-32">
      {/* Layout 12 cols, 10 working cols */}
      <div className="w-10/12 h-auto flex flex-row items-center justify-between">
        {/* Left group */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 h-full flex flex-col justify-start"
        >
          <img
            src={SiteImage}
            alt="SiteImage"
            className="w-2/3 h-auto object-fill"
          />
          {/* <h1 className="text-3xl font-semibold text-primary">TRINH VAN THUONG</h1> */}
        </motion.div>
        {/* Right group */}
        <div className="w-1/2 h-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-secondary">ABOUT</h1>
          <h1 className="text-2xl font-semibold text-primary">
            Business Analyst
          </h1>
          <p className="text-lg text-justify text-primary">
            I am a highly skilled software engineer, a graduate of Ton Duc Thang
            University, currently contributing my expertise at Hoang Thanh
            Capital & Partners Co.LTD. Experience in analyzing business needs,
            identifying solutions, and delivering data-driven insights that
            improve operational efficiency. I excel at bridging technical teams
            and business stakeholders for project alignment and successful
            outcomes.
          </p>
          <p className="text-lg text-justify text-primary">
            As business analyst role, I specialize in crafting innovative
            applications that cater to diverse industries. My experience with
            Hoang Thanh Capital & Partners Co.LTD has honed my abilities to
            deliver tailored solutions for projects.
          </p>
          <div className="flex flex-row justify-center items-center bg-secondary w-1/4 p-4 rounded-xl">
            <h1 className="font-semibold cursor-pointer text-white">
              See more ➝
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
