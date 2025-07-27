import { motion } from "framer-motion";
import AboutMeImage from "../../assets/Home/aboutme.jpg";
import BnW7 from "../../assets/BnW/BnW16.jpg";

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
      className="flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${BnW7})`,
      }}
    >
      <div className="glassmorphism flex w-full max-w-7xl flex-col items-center justify-center gap-10 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md md:flex-row md:items-start md:justify-between md:p-12">
        {/* Left group */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-center md:w-1/2 md:justify-start"
        >
          <img
            src={AboutMeImage}
            alt="AboutMeImage"
            className="h-auto w-48 rounded-full border-4 border-white/30 object-cover shadow-xl md:w-2/3"
          />
        </motion.div>

        {/* Right group */}
        <div className="flex w-full flex-col items-center gap-4 text-center text-white md:w-1/2 md:items-start md:text-left">
          <h1 className="font-secondary text-2xl font-bold text-white/90 md:text-3xl">
            ABOUT ME
          </h1>
          <h1 className="font-tertiary text-3xl font-semibold text-white md:text-4xl">
            Trinh Van Thuong (Jasmine)
          </h1>
          <p className="text-justify font-primary text-base text-white/80 md:text-lg">
            I am a highly skilled software engineer, a graduate of Ton Duc Thang
            University, currently contributing my expertise at Hoang Thanh
            Capital & Partners Co.LTD. Experience in analyzing business needs,
            identifying solutions, and delivering data-driven insights that
            improve operational efficiency. I excel at bridging technical teams
            and business stakeholders for project alignment and successful
            outcomes.
          </p>
          <p className="text-justify font-primary text-base text-white/80 md:text-lg">
            As business analyst role, I specialize in crafting innovative
            applications that cater to diverse industries. My experience with
            Hoang Thanh Capital & Partners Co.LTD has honed my abilities to
            deliver tailored solutions for projects.
          </p>
          <div className="mt-4">
            <button
              onClick={handleDownload}
              className="group rounded-xl border border-white/30 bg-white/20 px-6 py-3 font-primary font-semibold text-white backdrop-blur transition-all duration-300 hover:border-secondary hover:bg-white hover:text-secondary"
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
