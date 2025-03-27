import CheckoutBanner from "../Components/Checkout/CheckoutBanner";
import CheckoutComponent from "../Components/Checkout/CheckoutComponent";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/subcomponents/Header";

const Checkout = () => {
  return (
    <main>
      <Header />
      <CheckoutBanner />
      <CheckoutComponent />
      <Footer />
    </main>
  );
};

export default Checkout;
