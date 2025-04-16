import axios from "axios";
import { toast } from "react-toastify";
const useAuth = ({
  navigate,
  cookies,
  removeCookie,
  userName,
  setUserName,
}: any) => {
  const verifyCookie = async () => {
    if (!cookies.token) {
      navigate("/login");
    }
    const { data } = await axios.post(
      "http://localhost:3000",

      { withCredentials: true }
    );
    const { status, user } = data;
    setUserName(user);
    return status
      ? toast(`Hello ${user}`, {
          position: "top-right",
        })
      : removeCookie("token", { path: "/register" });
  };

  const Logout = () => {
    removeCookie("token", { path: "/register" });
  };

  return { verifyCookie, Logout };
};
export default useAuth;
