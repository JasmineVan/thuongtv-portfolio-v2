import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const SocialMenu = () => {
  return (
    <div className="fixed top-1/2 right-0 flex flex-col items-center p-4 z-50 gap-4 bg-secondary w-[40px]">
      {/* Social Media Icons */}
      <a href="https://www.facebook.com/TrinhThuong2001/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-2xl text-white hover:text-primary" />
      </a>
      <a href="https://www.linkedin.com/in/thuong-trinh-van/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-2xl text-white hover:text-primary" />
      </a>
      <a href="https://github.com/JasmineVan" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-white hover:text-primary" />
      </a>
      <a href="https://www.youtube.com/@thuongtrinhvan2001" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-2xl text-white hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialMenu;
