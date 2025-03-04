import FoodBanner from "../Components/Home/Slider/FoodBanner";
import ProductCategoryContent from "../Components/Home/ProductSection/HomeProducts/CategoryProducts/ProductCategoryContent";
import AdvertisingContent from "../Components/Home/AdvertiseContent/AdvertiseContent";
import ProductContent from "../Components/Home/ProductSection/HomeProducts/ProductContent";
import SectionBanner from "../Components/Home/SectionBanner/SectionBanner";

const Home = () => {
  return (
    <main>
      <FoodBanner />
      <ProductCategoryContent />
      <AdvertisingContent />
      <SectionBanner />
      <ProductContent />
    </main>
  );
};

export default Home;
