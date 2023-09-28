import Features from "../components/Features";
import Guideline from "../components/Guideline";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-spaceGrotesk">
      {/* Navbar is in hero section due to design */}
      <Hero />
      <Guideline />
      <Features />
      <Pricing />
      <Faq />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
