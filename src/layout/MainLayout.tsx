import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type component = {
  children: ReactNode;
};
const MainLayout = ({ children }: component) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
