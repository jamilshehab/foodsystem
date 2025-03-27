import CheckoutComponent from "../Components/Checkout/CheckoutComponent";
import Breadcrumb from "../Components/CustomComponent/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/subcomponents/Header";

const Checkout = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Checkout"
        firstTitle="Home"
        firstLink="home"
        secondTitle="Checkout"
        secondLink="checkout"
      />
      <CheckoutComponent />
      <Footer />
    </main>
  );
};

export default Checkout;
