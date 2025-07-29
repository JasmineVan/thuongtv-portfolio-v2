import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const SocialMenu = () => {
  return (
    <div className="fixed right-0 top-1/2 z-50 flex w-[52px] -translate-y-1/2 flex-col items-center gap-4 rounded-l-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
      {/* Social Media Icons */}
      <a
        href="https://www.facebook.com/TrinhThuong2001/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-secondary" />
      </a>
      <a
        href="https://www.linkedin.com/in/thuong-trinh-van/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-secondary" />
      </a>
      <a
        href="https://github.com/JasmineVan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-secondary" />
      </a>
      <a
        href="https://www.youtube.com/@thuongtrinhvan2001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-2xl text-white transition-all duration-300 hover:scale-125 hover:text-secondary" />
      </a>
    </div>
  );
};

export default SocialMenu;
