import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";
const ContactGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className="flex flex-wrap justify-center items-center py-10"
    >
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
        <div className="icon flex items-center justify-center ">
          <FaPhone className="text-4xl text-amber-300 my-3" />
        </div>
        <div className="text-center">
          <Link to="#"> + 00 321 124</Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
        <div className="icon flex items-center justify-center ">
          <FaMapLocation className="text-4xl text-amber-300 my-3" />
        </div>
        <div className="text-center">
          <p>Beirut Lebanon</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
        <div className="icon flex items-center justify-center ">
          <MdEmail className="text-4xl text-amber-300 my-3" />
        </div>
        <div className="text-center">
          <Link to="#">someone@gmail.com</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactGrid;
