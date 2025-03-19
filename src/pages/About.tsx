import AboutSection from "../Components/About/AboutSection";
import AboutGrid from "../Components/About/AboutGrid";
import SectionBanner from "../Components/Home/SectionBanner/SectionBanner";
import ProductContent from "../Components/Home/ProductSection/HomeProducts/ProductContent";

const About = () => {
  return (
    <main>
      <AboutSection />
      <AboutGrid />
      <SectionBanner />
      <ProductContent />
    </main>
  );
};

export default About;
