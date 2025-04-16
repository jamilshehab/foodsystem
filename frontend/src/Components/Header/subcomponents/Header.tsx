import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = ({ userDisplay, userLogout }: any) => {
  return (
    <div className="">
      <Topbar />
      <Navbar userDisplay={userDisplay} userLogout={userLogout} />
    </div>
  );
};

export default Header;
