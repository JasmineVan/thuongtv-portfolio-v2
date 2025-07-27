import { motion } from "framer-motion";
import AboutMeImage from "../../assets/Home/aboutme.jpg";
import BnW1 from "../../assets/BnW/BnW1.jpg";

const About = () => {
  const handleDownload = (): void => {
    const pdfUrl: string = "/ThuongTrinhVan_BA_Resume.pdf";
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ThuongTrinhVan_BA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-full flex justify-center items-center py-20 px-4 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${BnW1})`,
      }}
    >
      <div className="max-w-7xl w-full glassmorphism flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 p-6 md:p-12 rounded-2xl shadow-lg border border-white/20 backdrop-blur-md bg-white/10">
        {/* Left group */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <img
            src={AboutMeImage}
            alt="AboutMeImage"
            className="w-48 md:w-2/3 h-auto object-cover rounded-full border-4 border-white/30 shadow-xl"
          />
        </motion.div>

        {/* Right group */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-white/90 font-secondary">
            ABOUT ME
          </h1>
          <h1 className="text-3xl md:text-4xl font-semibold text-white font-tertiary">
            Trinh Van Thuong (Jasmine)
          </h1>
          <p className="text-base md:text-lg font-primary text-white/80 text-justify">
            I am a highly skilled software engineer, a graduate of Ton Duc Thang
            University, currently contributing my expertise at Hoang Thanh
            Capital & Partners Co.LTD. Experience in analyzing business needs,
            identifying solutions, and delivering data-driven insights that
            improve operational efficiency. I excel at bridging technical teams
            and business stakeholders for project alignment and successful
            outcomes.
          </p>
          <p className="text-base md:text-lg font-primary text-white/80 text-justify">
            As business analyst role, I specialize in crafting innovative
            applications that cater to diverse industries. My experience with
            Hoang Thanh Capital & Partners Co.LTD has honed my abilities to
            deliver tailored solutions for projects.
          </p>
          <div className="mt-4">
            <button
              onClick={handleDownload}
              className="group bg-white/20 text-white font-semibold font-primary px-6 py-3 rounded-xl border border-white/30 hover:bg-white hover:text-secondary hover:border-secondary transition-all duration-300 backdrop-blur"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
