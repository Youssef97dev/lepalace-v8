import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Container = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start gap-1 ">
      <div className="w-full h-full">
        <Contact />
      </div>
    </div>
  );
};

export default Container;
