import { motion } from "framer-motion";
import AboutMeImage from "../../assets/Home/aboutme.jpg";
import Geo1 from "../../assets/Geometry/Geo1.svg";

const About = () => {
  const handleDownload = (): void => {
    const pdfUrl: string = "/public/ThuongTrinhVan_BA_Resume.pdf"; // File in public/files/
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ThuongTrinhVan_BA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="flex justify-center items-center py-32 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${Geo1})`,
      }}
    >
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
            src={AboutMeImage}
            alt="AboutMeImage"
            className="w-2/3 h-auto object-fill rounded-full"
          />
          {/* <h1 className="text-3xl font-semibold text-primary">TRINH VAN THUONG</h1> */}
        </motion.div>
        {/* Right group */}
        <div className="w-1/2 h-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-secondary font-secondary">
            ABOUT ME
          </h1>
          <h1 className="text-4xl font-semibold text-primary font-tertiary">
            Trinh Van Thuong (Jasmine)
          </h1>
          <p className="text-lg text-justify text-slate-900 font-primary">
            I am a highly skilled software engineer, a graduate of Ton Duc Thang
            University, currently contributing my expertise at Hoang Thanh
            Capital & Partners Co.LTD. Experience in analyzing business needs,
            identifying solutions, and delivering data-driven insights that
            improve operational efficiency. I excel at bridging technical teams
            and business stakeholders for project alignment and successful
            outcomes.
          </p>
          <p className="text-lg text-justify text-slate-900 font-primary">
            As business analyst role, I specialize in crafting innovative
            applications that cater to diverse industries. My experience with
            Hoang Thanh Capital & Partners Co.LTD has honed my abilities to
            deliver tailored solutions for projects.
          </p>
          <div className="group flex flex-row justify-center items-center bg-secondary w-1/4 p-4 rounded-xl border-2 border-transparent hover:bg-white hover:border-secondary">
            <h1
              onClick={handleDownload}
              className="font-semibold cursor-pointer text-white font-primary group-hover:text-secondary"
            >
              Resume
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
