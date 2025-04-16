import ContactGrid from "../components/Contact/ContactGrid";
import ContactForm from "../components/Contact/ContactForm";
import Header from "../components/Header/subcomponents/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/CustomComponent/Breadcrumb";

const Contact = ({ userDisplay, userLogout }: any) => {
  return (
    <main className="">
      <Header userDisplay={userDisplay} userLogout={userLogout} />
      <Breadcrumb
        title="Contact Us"
        firstLink="/"
        firstTitle="Home"
        secondLink="contact"
        secondTitle="Contact"
      />
      <ContactGrid />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
