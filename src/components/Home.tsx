import Hero from "./Hero";
import ProductAndDesign from "./ProductAndDesign";
import Prototype from "./Prototype";
import Work from "./Work";
import PrototypeMain from "./PrototypeMain";

function Home() {
  return (
    <div className=" my-3 xl:my-0 xl:grid grid-cols-2">
      <Hero />
      <Work />
      <ProductAndDesign />
      <PrototypeMain />
      <Prototype />
    </div>
  );
}

export default Home;
