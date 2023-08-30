import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Promo } from "../../components/Promo/Promo";
import { Products } from "../../components/Products/Products";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Testimonial } from "../../components/Testimonial/Testimonial";
import { Offers } from "../../components/Offers/Offers";
import { Footer } from "../../components/Footer/Footer";
import { Story } from "../../components/Story/Story";



function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <AboutUs />
      <Products />
      <Testimonial/>
      <Offers/>
      <Story/>
      <Footer/>
    </>
  );
}

export default Home;
