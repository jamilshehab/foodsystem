import FoodBanner from "../Components/Home/Slider/FoodBanner";
import ProductCategoryContent from "../Components/Home/ProductSection/HomeProducts/CategoryProducts/ProductCategoryContent";
import AdvertisingContent from "../Components/Home/AdvertiseContent/AdvertiseContent";
import ProductContent from "../Components/Home/ProductSection/HomeProducts/ProductContent";
import SectionBanner from "../Components/Home/SectionBanner/SectionBanner";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <FoodBanner />
      <ProductCategoryContent />
      <AdvertisingContent />
      <SectionBanner />
      <ProductContent />
      <Footer />
    </main>
  );
};

export default Home;
