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
    video,
  } = usePalace();
  return (
    <>
      <div className="relative w-full h-full flex-1 flex flex-col justify-center items-center lg:hidden">
        <AnimatePresence mode="popLayout">
          <motion.video
            key={video} // important for triggering fade on change
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </AnimatePresence>
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
                {`Situated in the heart of the exclusive ‘Hivernage’ district of Marrakech, Le Palace is a chic destination restaurant and bar, where 1920s Art Deco design style and subtle Colonial touches combine to create a sophisticated experience that attracts a like minded following. Charming service and an outstanding menu complement the ‘sense of place’ and effortless elegance achieved by restaurant impresario Nouradine Fakir.`}
              </p>
              <br />
              <p className="text-[13px]">
                {`Cafe society cool upstairs and decadent dining below with velvet chairs and dimmed lighting that evoke the idea of a ‘boudoir speakeasy’. A night at Le Palace is an essential evening activity during a visit to Marrakech.`}
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
            <li className="w-full flex flex-col justify-center items-center gap-1 capitalize">
              <span>{"Le Palace Marrakech Restaurant & Fine dining."}</span>
              <span>{"Av. Echouhada Rue Ahmed Chawqui Hivernage1"}</span>
              <span>{"Opening hours: 07.00 PM – 02.00 AM"}</span>
              <Link href="#" className="lowercase">
                {"reservation@le-palacemarrakech.com"}
              </Link>
              <Link
                href="https://www.instagram.com/lepalacemarrakech/"
                className="tracking-widest"
              >
                {"INSTAGRAM ￫"}
              </Link>
              <Link
                href="http://wa.me/212675480101"
                className="tracking-widest"
              >
                {"WHATSAPP ￫"}
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
