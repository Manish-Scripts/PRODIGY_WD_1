import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4"
    >
      <div
        className={`container flex justify-between items-center ${
          isMenuOpen ? "flex-col " : ""
        }`}
      >
        <div className={` ${isMenuOpen ? "w-full" : ""}`}>
          <Link to="/">
            <div
              className={`flex items-center gap-4 text-white font-bold text-2xl ${
                isMenuOpen ? "ml-auto" : ""
              } `}
            >
              <img src={Logo} alt="" className="w-10" />
              <span className="first-letter:text-3xl">XSPACE</span>
            </div>
          </Link>
        </div>

        <div className="text-white md:hidden absolute top-0 right-0 mt-4 mr-4">
          {isMenuOpen ? (
            <FaTimes
              onClick={handleMenuToggle}
              className="text-4xl cursor-pointer"
            />
            
          ) : (
            <FaBars
              onClick={handleMenuToggle}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>

        {
          isMenuOpen && <hr className="w-full mt-5 mb-2 border-t border-white" />
        }
        
        <div
          className={`text-white ${
            isMenuOpen ? "block -mt-1" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 text-xl py-4 sm:py-0">
            <li>
              <Link
                to="/about"
                onClick={handleNavLinkClick}
                className="transition duration-300 hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                onClick={handleNavLinkClick}
                className="transition duration-300 hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                {" "}
                Technology{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/galaxy"
                onClick={handleNavLinkClick}
                className="transition duration-300 hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                {" "}
                Galaxy{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/satellite"
                onClick={handleNavLinkClick}
                className="transition duration-300 hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                {" "}
                Satellite{" "}
              </Link>
            </li>
          </ul>

          {isMenuOpen && (
            <div className="text-white md:hidden ml-[34px] mt-3">
              <button className="text-white border-2 border-white px-3 py-1 rounded-md hover:bg-white hover:text-black">
                Login
              </button>
            </div>
          )}
        </div>

        <div className="hidden md:block">
          <button className="text-white border-2 border-white px-3 py-1 rounded-md hover:bg-white hover:text-black ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
