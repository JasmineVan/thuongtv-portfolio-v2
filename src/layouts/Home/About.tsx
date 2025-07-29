import { motion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";
import AboutMeImage from "../../assets/Home/aboutme.jpg";

const randomImage = getRandomESG();

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
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glassmorphism mt-16 flex w-full max-w-7xl flex-col items-center justify-center gap-10 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-12"
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex h-full w-full items-center justify-center md:w-1/2 md:justify-start"
        >
          <img
            src={AboutMeImage}
            alt="AboutMeImage"
            className="h-auto w-48 rounded-full border-4 border-white/30 object-cover shadow-xl md:w-2/3"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col items-center gap-4 text-center text-white md:w-1/2 md:items-start md:text-left"
        >
          <h1 className="text-shadow font-secondary text-2xl font-bold text-secondary md:text-3xl">
            ABOUT ME
          </h1>
          <h1
            className="font-tertiary text-3xl font-semibold text-white md:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Trinh Van Thuong (Jasmine)
          </h1>
          <p
            className="text-justify font-primary text-base text-white/80 md:text-lg"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            I am a highly skilled software engineer, a graduate of Ton Duc Thang
            University, currently contributing my expertise at Hoang Thanh
            Capital & Partners Co.LTD. Experience in analyzing business needs,
            identifying solutions, and delivering data-driven insights that
            improve operational efficiency. I excel at bridging technical teams
            and business stakeholders for project alignment and successful
            outcomes.
          </p>
          <p
            className="text-justify font-primary text-base text-white/80 md:text-lg"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            As business analyst role, I specialize in crafting innovative
            applications that cater to diverse industries. My experience with
            Hoang Thanh Capital & Partners Co.LTD has honed my abilities to
            deliver tailored solutions for projects.
          </p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4"
          >
            <button
              onClick={handleDownload}
              className="group rounded-xl border border-white/30 bg-white/20 px-6 py-3 font-primary font-semibold text-white backdrop-blur transition-all duration-300 hover:border-secondary hover:bg-white hover:text-secondary"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
            >
              Resume
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
