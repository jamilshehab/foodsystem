import React from "react";
import ContactSection from "../Components/Contact/ContactSection";
import ContactGrid from "../Components/Contact/ContactGrid";
import ContactForm from "../Components/Contact/ContactForm";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";
import Breadcrumb from "../Components/CustomComponent/Breadcrumb";

const Contact = () => {
  return (
    <main className="">
      <Header />
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
