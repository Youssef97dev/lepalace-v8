"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Loader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBook, setIsOpenBook] = useState(false);
  return (
    <div className="w-full h-[100dvh] lg:h-screen flex flex-col overflow-hidden">
      <Navbar setIsOpen={setIsOpen} setIsOpenBook={setIsOpenBook} />
      <Hero
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isOpenBook={isOpenBook}
        setIsOpenBook={setIsOpenBook}
      />
      <Footer />
    </div>
  );
};

export default Loader;
