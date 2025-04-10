import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Simplify from "../components/Simplify";
import ChooseUs from "../components/ChooseUs";
import HeroLabel from "../components/HeroLabel";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SliderText from "../components/SliderText";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <div className="md:px-0 px-4">
  <ChooseUs />
</div>

      <Projects />
      <div className="md:w-4/5 px-4 md:mx-auto">
      <Testimonials />
</div>
    
      <SliderText />
   
      <ContactUs />
      <FAQ/>
    </>
  );
};

export default Home;