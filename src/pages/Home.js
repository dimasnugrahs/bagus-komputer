import React from "react";
import HeroSection from "../components/landing/HeroSection";
import CompanyBrand from "../components/landing/CompanyBrand";
import Services from "../components/landing/Services";
import WhyUs from "../components/landing/WhyUs";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import Projects from "../components/landing/Projects";
import Contact from "../components/landing/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Pricing />
      <Services />
      <CompanyBrand />
      <WhyUs />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
