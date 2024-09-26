import React from "react";
import {
  Hero,
  CategoryList,
  MostSearchedCar,
  Contact,
  Testimonials,
} from "../components/Index";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryList />
      <MostSearchedCar />
      <Contact />
      <Testimonials />
    </>
  );
};

export default Home;
