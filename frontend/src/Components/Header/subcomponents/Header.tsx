import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = ({ user, logout }: any) => {
  return (
    <div className="">
      <Topbar />
      <Navbar user={user} logout={logout} />
    </div>
  );
};

export default Header;
