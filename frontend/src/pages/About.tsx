import AboutGrid from "../components/About/AboutGrid";
import SectionBanner from "../components/Home/SectionBanner/SectionBanner";
import ProductContent from "../components/Home/ProductSection/HomeProducts/ProductContent";
import Breadcrumb from "../components/CustomComponent/Breadcrumb";
import Header from "../components/Header/subcomponents/Header";
import Footer from "../components/Footer/Footer";

const About = ({ userDisplay, userLogout }: any) => {
  return (
    <main>
      <Header userDisplay={userDisplay} userLogout={userLogout} />
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
