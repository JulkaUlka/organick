import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Promo } from "../../components/Promo/Promo";
import { Products } from "../../components/Products/Products";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Testimonial } from "../../components/Testimonial/Testimonial";




function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <AboutUs />
      <Products />
      <Testimonial/>
    </>
  );
}

export default Home;
