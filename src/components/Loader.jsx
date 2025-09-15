import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] flex flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Loader;
