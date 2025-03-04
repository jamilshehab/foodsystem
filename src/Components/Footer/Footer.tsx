import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { footerData } from "../../data/data";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end">
      <div className="w-full">
        <div className="container mx-auto flex flex-col">
          <div className="my-20 flex w-full flex-col items-center">
            <div className="mb-10 shrink-0">
              <img className="h-9" src="../../img/logos/logo-nav-0.png" />
            </div>
            <div className="mb-6 flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-5 gap-y-3 lg:flex-nowrap lg:gap-12">
                {footerData.map((item: any) => (
                  <Link to={item.link} key={item.id}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-8">
                <Link to="#">
                  <FaFacebook />
                </Link>
                <Link to="#">
                  <FaInstagram />
                </Link>
                <Link to="#">
                  <FaXTwitter />
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-center text-sm font-medium leading-7 text-dark-grey-600">
                ©2025 Horizon UI Library. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
