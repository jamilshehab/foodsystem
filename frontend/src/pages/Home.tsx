import FoodBanner from "../components/Home/Slider/FoodBanner";
import AdvertisingContent from "../components/Home/AdvertiseContent/AdvertiseContent";
import ProductContent from "../components/Home/ProductSection/HomeProducts/ProductContent";
import SectionBanner from "../components/Home/SectionBanner/SectionBanner";
import Header from "../components/Header/subcomponents/Header";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Home = ({ userDisplay, userLogout }: any) => {
  return (
    <main>
      <Header userDisplay={userDisplay} userLogout={userLogout} />
      <FoodBanner />
      <AdvertisingContent />
      <SectionBanner />
      <ProductContent />
      <ToastContainer />
      <Footer />
    </main>
  );
};

export default Home;
