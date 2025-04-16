import CheckoutComponent from "../components/Checkout/CheckoutComponent";
import Breadcrumb from "../components/CustomComponent/Breadcrumb";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/subcomponents/Header";

const Checkout = ({ userDisplay, userLogout }: any) => {
  return (
    <main>
      <Header userDisplay={userDisplay} userLogout={userLogout} />
      <Breadcrumb
        title="Checkout"
        firstTitle="Home"
        firstLink="/"
        secondTitle="Checkout"
        secondLink="checkout"
      />
      <CheckoutComponent />
      <Footer />
    </main>
  );
};

export default Checkout;
