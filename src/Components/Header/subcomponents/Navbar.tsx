import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router";
import { navbarData } from "../../../data/data";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setScroll] = useState<any>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    // console.log(!isOpen);
  };

  const handleScroll = () => {
    if (isScroll > 150) {
      console.log(setScroll(true));
    } else {
      setScroll(false);
    }
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className={`${
        isOpen ? "fixed top-0 " : " py-4 border-gray-200 shadow-2xl"
      }`}
      style={{
        boxShadow: "0rem 0rem 0rem 0.05rem #666666",
      }}
      onChange={handleScroll}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  py-4 ">
        <Link
          to="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo/1.webp" className="w-40" alt="Flowbite Logo" />
        </Link>
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {isOpen ? (
            <TfiClose className="w-5 h-5" />
          ) : (
            <CiMenuBurger className="w-5 h-5" />
          )}
        </button>
        <div
          className={`  w-full md:block md:w-auto ${
            isOpen ? "w-full block" : "hidden"
          }`}
          id="navbarOpen"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            {navbarData.map((item: any) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="block py-2 px-3 text-slate-500  rounded-sm md:bg-transparent  md:p-0 "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
