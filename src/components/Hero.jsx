"use client";
import React from "react";
import HeroSwiper from "./HeroSwiper";
import { HiOutlinePlus } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Booking from "./Booking";
import { usePalace } from "@/context/PalaceContext";
import Contact from "./Contact";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Hero = () => {
  const {
    openAbout,
    toggleAbout,
    openSideBar,
    toggleSideBar,
    openBook,
    toggleBook,
    openContact,
    toggleContact,
  } = usePalace();
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center lg:hidden">
        <video className="object-cover h-full w-full" autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <HeroSwiper />
        <div className="absolute top-1 w-full flex justify-center items-center text-white  uppercase text-[9px]">{`Welcome to le palace`}</div>
        <div
          className={`absolute top-6 w-full flex flex-col justify-center items-end pr-4 z-50  gap-2  text-black`}
        >
          <button
            onClick={() => toggleAbout()}
            className={` rounded-full p-2 ${
              openAbout ? "bg-transparent" : "bg-background"
            }`}
          >
            <HiOutlinePlus size={20} />
          </button>
          {!openAbout && (
            <span className="uppercase text-white text-[12px] text-center">{`About`}</span>
          )}
        </div>
        {/* Popup */}
        <AnimatePresence>
          {openAbout && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-6  bg-background text-black mx-4 px-6 pt-5 pb-16 shadow-lg z-40 "
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
        <HeroSwiper />
        <div className="absolute top-1 w-full flex justify-center items-center text-white  uppercase text-[9px]">{`Welcome to le palace`}</div>
        <div
          className={`absolute top-6 w-full flex flex-col justify-center items-end pr-4 z-50  gap-2  text-black`}
        >
          <button
            onClick={() => toggleAbout()}
            className={` rounded-full p-2 ${
              openAbout ? "bg-transparent" : "bg-background"
            }`}
          >
            <HiOutlinePlus size={20} />
          </button>
          {!openAbout && (
            <span className="uppercase text-white text-[12px] text-center">{`About`}</span>
          )}
        </div>
        {/* Popup */}
        <AnimatePresence>
          {openAbout && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-6  bg-background text-black mx-4 px-6 pt-5 pb-16 shadow-lg z-40 "
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

      {/* Sidebar */}
      <Transition
        show={openSideBar}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-x-full opacity-0"
        enterTo="transform -translate-x-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform -translate-x-0 opacity-100"
        leaveTo="transform -translate-x-full opacity-0"
      >
        <div className="fixed top-0 left-0 z-50 w-full lg:w-[25%] h-full bg-background flex flex-col justify-start gap-16  py-16 uppercase text-center">
          <ul
            onClick={() => toggleSideBar()}
            className="space-y-8 text-black leading-[25px] text-[12px]"
          >
            <li className="pb-3 border-b border-[#93918f]">
              <Link href="/">{"Home"}</Link>
            </li>
            <li className="pb-3 border-b border-[#93918f]">
              <Link href="/menu">{"Menu"}</Link>
            </li>

            <li
              onClick={() => toggleBook()}
              className="pb-3 border-b border-[#93918f] cursor-pointer"
            >
              <span>{"Reservation"}</span>
            </li>
            <li className="pb-3 border-b border-[#93918f]">
              <Link href="/gallery">{"Gallery"}</Link>
            </li>
            <li className="pb-3 border-b border-[#93918f]">
              <Link href="/contact-us">{"Contact"}</Link>
            </li>
            <li className="w-full flex justify-center items-center gap-2 pb-3 border-b border-[#93918f]">
              <Link href="/contact-us">{"EN"}</Link>
              <span>{"/"}</span>
              <Link href="/contact-us">{"FR"}</Link>
            </li>
            <li className="w-full flex flex-col justify-center items-center gap-2 capitalize">
              <span>{"Le Palace Marrakech Restaurant & Fine dining."}</span>
              <span>{"Av. Echouhada Rue Ahmed Chawqui Hivernage1"}</span>
              <span>{"Opening hours: 07.00 PM – 02.00 AM"}</span>
              <Link href="#" className="lowercase">
                {"reservation@le-palacemarrakech.com"}
              </Link>
              <Link href="#">{"Whatsapp 00212 675-480101"}</Link>
            </li>
            <li className="w-full  flex justify-center items-center gap-3">
              <Link href="http://wa.me/212675480101" target="_blank">
                <FaWhatsappSquare size={25} />
              </Link>
              <Link
                href="https://www.instagram.com/lepalacemarrakech"
                target="_blank"
              >
                <FaInstagramSquare size={25} />
              </Link>
              <Link
                href="mailto:reservation@le-palacemarrakech.com"
                target="_blank"
              >
                <FaMailBulk size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </Transition>

      {/* Booking Form */}
      <Transition
        show={openBook}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
        <div className="fixed  z-50 w-full lg:w-[25%] h-full bg-background flex justify-start">
          <Booking />
        </div>
      </Transition>

      {/* Contact */}
      <Transition
        show={openContact}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
        <div className="fixed  z-50 w-full lg:w-[25%] h-full bg-background flex justify-start">
          <Contact />
        </div>
      </Transition>
    </>
  );
};

export default Hero;
