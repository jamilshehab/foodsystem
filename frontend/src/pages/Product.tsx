import Breadcrumb from "../Components/CustomComponent/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/subcomponents/Header";
import ProductListingComponent from "../Components/ProductListing/ProductListing";

const Product = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Products"
        firstLink="/"
        firstTitle="Home"
        secondLink="shop"
        secondTitle="Shop"
        thirdLink="products"
        thirdTitle="Products"
      />
      <ProductListingComponent />
      <Footer />
    </main>
  );
};

export default Product;
