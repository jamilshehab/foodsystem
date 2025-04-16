import Header from "../components/Header/subcomponents/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/CustomComponent/Breadcrumb";
import ProductListing from "../components/ProductListing/ProductListing";

const Shop = ({ userDisplay, userLogout }: any) => {
  return (
    <main>
      <Header userDisplay={userDisplay} userLogout={userLogout} />
      <Breadcrumb
        title="Shop"
        firstLink="/"
        firstTitle="Home"
        secondLink="shop"
        secondTitle="Shop"
      />
      <ProductListing />
      <Footer />
    </main>
  );
};

export default Shop;
