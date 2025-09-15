"use client";
import React, { useState } from "react";
import HeroSwiper from "./HeroSwiper";
import { HiOutlinePlus } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center lg:hidden">
        <video className="object-cover h-full w-full z-40" autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <HeroSwiper />
        <div className="absolute top-1 w-full flex justify-center items-center text-white z-50 uppercase text-[9px]">{`Welcome to le palace`}</div>
        <div
          className={`absolute top-6 w-full flex flex-col justify-center items-end pr-4 z-50 gap-2  text-black`}
        >
          <button
            onClick={() => setOpen(!open)}
            className={` rounded-full p-2 ${
              open ? "bg-transparent" : "bg-white"
            }`}
          >
            <HiOutlinePlus size={20} />
          </button>
          {!open && (
            <span className="uppercase text-white text-[12px] text-center">{`About`}</span>
          )}
        </div>
        {/* Popup */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-6  bg-white text-black mx-4 px-6 pt-5 pb-16 shadow-lg z-40 "
            >
              <p className="text-[13px] ">
                {`At Le Palace, where everything from the French-inspired food (and the prices) are over the top, the opulent decor is matched only by the clientele.`}
              </p>
              <br />
              <p className="text-[13px]">
                {`The lighting throughout the space is rich and warm, and the owner, Nordine Fakir, credits it for much of the restaurant’s success. Most diners begin the evening sitting inside, but then make their way to the boudoir-esque basement, festooned in photos of Yves Saint Laurent, and where dancing on the furniture goes late into the night.`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative w-full h-full lg:flex flex-col justify-center items-center hidden">
        <video className="object-cover h-full w-full" autoPlay loop muted>
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tags.
        </video>
      </div>
    </>
  );
};

export default Hero;
