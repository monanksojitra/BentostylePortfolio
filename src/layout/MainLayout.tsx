import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type component = {
  children: ReactNode;
};
const MainLayout = ({ children }: component) => {
  return (
    <div className="container min-w-[340px] max-w-[1440px] mx-auto px-6 xl:px-28 xl:my-16">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
