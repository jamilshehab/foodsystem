import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router";
import { navbarData } from "../../../data/data";
import { motion } from "framer-motion";

const Navbar = ({ user, logout }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  // Toggle mobile menu
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className={`fixed top-12 left-0 w-full z-50 bg-white shadow-md  duration-300 ${
        isScroll ? "  !top-0 !duration-500 ease-in " : "translate-y-0"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="#" className="flex items-center">
          <img src="/logo/1.webp" className="w-40" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 font-medium">
            {navbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-slate-500 hover:text-black transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Login / Register */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-slate-500 hover:text-black">
            {user}
          </Link>
          <button onClick={logout} className="text-slate-500 hover:text-black">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleClick}
          className="md:hidden text-gray-500 p-2 rounded-lg"
        >
          {isOpen ? (
            <TfiClose className="w-6 h-6" />
          ) : (
            <CiMenuBurger className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {navbarData.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="block text-slate-500 py-2">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login" className="block text-slate-500 py-2">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/login" className="block text-slate-500 py-2">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
