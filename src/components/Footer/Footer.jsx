import { HiLocationMarker } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-8 px-4 sm:px-8 text-center bg-gray-800 text-white relative z-50">
      <h1 className="text-xl font-bold mb-3">Contact Me</h1>
      <div className="flex items-center justify-center gap-3">
        <HiLocationMarker className="text-xl" alt="Location Icon" />
        <p>Thane, Maharashtra</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3 mb-5">
        <MdMessage className="text-xl" alt="Email Icon" />
        <a href="mailto:manishsahani7045@gmail.com" className="text-white">
          manishsahani7045@gmail.com
        </a>
      </div>

      <div className="sm:block">
        <div className="flex flex-col sm:flex-row justify-center items-center py-6 border-t-2 border-gray-300/40">
          <span className="text-sm text-gray-400 mr-5 pb-5">
            &copy; 2024 Manish | Prodigy Task 1
          </span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="#" rel="noopener noreferrer">
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="https://github.com/Manish-Scripts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl" />
            </a>
          </div>

          <span className="text-sm text-gray-400 ml-3 pb-5">
            <ul className="flex gap-3">
              <li className="hover:text-white">Privacy Policy</li>
              <li className="hover:text-white">Terms & Conditions</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
