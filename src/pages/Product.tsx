import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/subcomponents/Header";
import ProductBanner from "../Components/ProductListing/ProductBanner";
import ProductListingComponent from "../Components/ProductListing/ProductListing";

const Product = () => {
  return (
    <main>
      <Header />
      <ProductBanner />
      <ProductListingComponent />
      <Footer />
    </main>
  );
};

export default Product;
