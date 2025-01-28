import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const SocialMenu = () => {
  return (
    <div className="fixed top-1/2 right-0 flex flex-col items-center p-4 z-50 gap-4 bg-secondary w-[40px]">
      {/* Social Media Icons */}
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-2xl text-white hover:text-primary" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-2xl text-white hover:text-primary" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-white hover:text-primary" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-2xl text-white hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialMenu;
