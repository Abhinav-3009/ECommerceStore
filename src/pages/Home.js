import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";

//this is the home page of ecommerce application
const Home = () => {
  const data = {
    name: "E-Commerce store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
