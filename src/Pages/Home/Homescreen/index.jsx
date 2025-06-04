import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <Contact />	  
      <Footer />

        </>
  );
}
