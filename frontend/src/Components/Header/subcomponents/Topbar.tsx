import { FaPhone } from "react-icons/fa";
import { Link } from "react-router";
const Topbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto max-w-7xl relative">
        <div className="flex sm:justify-center sm:w-full md:justify-between items-center">
          <div className="col">
            <ul className="flex items-center  m-3">
              <li>
                <p className="text-slate-300">Call Us for Ordering</p>
              </li>
              <li className="flex items-center">
                <span className="">
                  <FaPhone className="text-amber-300  my-auto ms-3" />
                </span>
                <Link to="/" className="text-white ms-2">
                  + 000 405 603 132
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="flex items-center">
              <li className="">
                <Link to="" className="text-slate-300">
                  Call Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
