import AboutGrid from "../Components/About/AboutGrid";
import SectionBanner from "../Components/Home/SectionBanner/SectionBanner";
import ProductContent from "../Components/Home/ProductSection/HomeProducts/ProductContent";
import Breadcrumb from "../Components/CustomComponent/Breadcrumb";
import Header from "../Components/Header/subcomponents/Header";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="About Us"
        firstTitle="home"
        firstLink="/"
        secondTitle="about"
        secondLink="/about"
      />

      <AboutGrid />
      <SectionBanner />
      <ProductContent />
      <Footer />
    </main>
  );
};

export default About;
