import React from "react";
import ContactSection from "../Components/Contact/ContactSection";
import ContactGrid from "../Components/Contact/ContactGrid";
import ContactForm from "../Components/Contact/ContactForm";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <main className="">
      <Header />
      <ContactSection />
      <ContactGrid />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
