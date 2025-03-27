import ShopBanner from "../Components/Shop/ShopBanner";
import ProductCategoriesComponent from "../Components/Home/ProductSection/HomeProducts/CategoryProducts/ProductCategoriesComponent";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <main>
      <Header />
      <ShopBanner />
      <ProductCategoriesComponent />
      <Footer />
    </main>
  );
};

export default Shop;
