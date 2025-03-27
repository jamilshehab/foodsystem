import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { BreadCrumbProps } from "../../types";

const Breadcrumb: React.FC<BreadCrumbProps> = ({
  title,
  firstTitle,
  secondTitle,
  thirdTitle,
  firstLink,
  secondLink,
  thirdLink,
}) => {
  return (
    <section
      className="bg-cover h-[70vh] w-full bg-fixed relative"
      style={{ backgroundImage: "url('/Banner/1.jpg')" }}
    >
      <div className="bg-[#0006] absolute h-full w-full"></div>
      <div className="flex flex-col justify-center items-center h-full space-y-4">
        {/* About Us */}
        <div className="z-10">
          <h1 className="text-5xl text-white text-center font-bold ">
            {title}
          </h1>
        </div>

        {/* Breadcrumb Links */}
        <div>
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to={`/${firstLink}`}
                className="text-2xl z-10 font-medium text-white hover:text-amber-600"
              >
                {firstTitle}
              </Link>
            </li>
            <li className="flex items-center">
              <span>
                <MdKeyboardArrowRight className="text-2xl my-auto text-white z-10" />
              </span>
              <Link
                to={`/${secondLink}`}
                className="my-auto text-white items-center text-2xl z-10 font-medium"
              >
                {secondTitle}
              </Link>
            </li>
            {thirdLink && (
              <li className="flex items-center">
                <span>
                  <MdKeyboardArrowRight className="text-2xl my-auto text-white z-10" />
                </span>
                <Link
                  to={`/${thirdLink}`}
                  className="my-auto text-white items-center text-2xl z-10 font-medium"
                >
                  {thirdTitle}
                </Link>
              </li>
            )}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
