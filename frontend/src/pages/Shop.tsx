import ProductCategoriesComponent from "../Components/Home/ProductSection/HomeProducts/CategoryProducts/ProductCategoriesComponent";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";
import Breadcrumb from "../Components/CustomComponent/Breadcrumb";

const Shop = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Shop"
        firstLink="/"
        firstTitle="Home"
        secondLink="shop"
        secondTitle="Shop"
      />
      <ProductCategoriesComponent />
      <Footer />
    </main>
  );
};

export default Shop;
