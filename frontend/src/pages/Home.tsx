import FoodBanner from "../Components/Home/Slider/FoodBanner";
import ProductCategoryContent from "../Components/Home/ProductSection/HomeProducts/CategoryProducts/ProductCategoryContent";
import AdvertisingContent from "../Components/Home/AdvertiseContent/AdvertiseContent";
import ProductContent from "../Components/Home/ProductSection/HomeProducts/ProductContent";
import SectionBanner from "../Components/Home/SectionBanner/SectionBanner";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3000",

        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : removeCookie("token", { path: "/api/register" });
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token", { path: "/register" });
  };
  return (
    <main>
      <Header user={username} logout={Logout} />
      <FoodBanner />
      <ProductCategoryContent />
      <AdvertisingContent />
      <SectionBanner />
      <ProductContent />
      <Footer />
      <ToastContainer />
    </main>
  );
};

export default Home;
