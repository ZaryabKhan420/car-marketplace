import React from "react";
import carImage from "../assets/tesla.png";
import { Search } from "./Index";
const Hero = () => {
  return (
    <div className="w-full container p-5 pt-24 flex flex-col justify-center items-center gap-12 bg-[#bfcafa]">
      <p className="text-lg text-center">
        Find cars for sale and for rent near you
      </p>
      <h1 className="text-6xl font-bold text-center">Find Your Dream Car</h1>
      <Search />
      <img src={carImage} alt="tesla" loading="lazy" />
    </div>
  );
};

export default Hero;
