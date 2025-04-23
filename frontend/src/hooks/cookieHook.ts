// hooks/cookieHook.ts
import axios from "axios";
import { toast } from "react-toastify";

const useAuth = ({
  navigate,

  removeCookie,
}: any) => {
  const Logout = () => {
    removeCookie("token", { path: "/" });
    navigate("/login");
  };

  return { Logout };
};

export default useAuth;
