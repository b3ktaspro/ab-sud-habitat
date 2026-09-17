import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Faq from "./Home/Faq";
import WhyUs from "./Home/WhyUs";
import TrustedPartners from "./Home/TrustedPartners";
import PortfolioCategories from "./Home/PortfolioCategories";
import HiddenProblems from "./Home/HiddenProblems";
import PlacoTypes from "./Home/PlacoTypes";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <PortfolioCategories />
      <Services />
      <HiddenProblems />
      <Faq />
      <PlacoTypes />
      <WhyUs />
    </>
  );
}
