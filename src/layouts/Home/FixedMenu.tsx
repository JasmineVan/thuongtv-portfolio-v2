import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const SocialMenu = () => {
  return (
    <div className="fixed right-0 top-1/2 z-50 flex w-[40px] flex-col items-center gap-4 bg-secondary p-4">
      {/* Social Media Icons */}
      <a
        href="https://www.facebook.com/TrinhThuong2001/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="text-2xl text-white hover:text-primary" />
      </a>
      <a
        href="https://www.linkedin.com/in/thuong-trinh-van/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-2xl text-white hover:text-primary" />
      </a>
      <a
        href="https://github.com/JasmineVan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl text-white hover:text-primary" />
      </a>
      <a
        href="https://www.youtube.com/@thuongtrinhvan2001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-2xl text-white hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialMenu;
