import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import ProductAndDesign from "./ProductAndDesign";
import Prototype from "./Prototype";
import Work from "./Work";

function Home() {
  return (
    <div className="mx-6 my-3">
      <Hero />
      <Work />
      <ProductAndDesign />
      <Prototype />
    </div>
  );
}

export default Home;
