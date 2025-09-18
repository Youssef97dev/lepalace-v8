"use client";
import React, { useEffect, useState } from "react";
import HeroSwiper from "./HeroSwiper";
import { HiOutlinePlus } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Booking from "./Booking";
import { usePalace } from "@/context/PalaceContext";
import Contact from "./Contact";
import i18next from "../../i18n";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const imagesLarge = [
  "/images/palace-large-1.jpg",
  "/images/palace-large-2.jpg",
  "/images/palace-large-3.jpg",
  "/images/palace-large-4.jpg",
  "/images/palace-large-5.jpg",
];

const Hero = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLarge.length);
    }, 5000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
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
          <div className="absolute top-1 w-full flex justify-center items-center text-white  uppercase text-[9px]">
            {t("hero.text_top")}
          </div>
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
              <span className="uppercase text-white text-[12px] text-center">
                {t("hero.about")}
              </span>
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
                <p className="text-[13px] ">{t("hero.text_1")}</p>
                <br />
                <p className="text-[13px]">{t("hero.text_2")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative w-full h-full  lg:flex flex-col justify-center items-center hidden">
          {imagesLarge.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className=" w-full h-full object-cover"
              />
            </div>
          ))}
          <HeroSwiper />
          <div className="absolute top-1 w-full flex justify-center items-center text-white  uppercase text-[14px]">
            {t("hero.text_top")}
          </div>
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
                <Link href="/">{t("navbar.home")}</Link>
              </li>
              <li className="pb-3 border-b border-[#93918f]">
                <Link href="/menu.html">{"Menu"}</Link>
              </li>

              <li
                onClick={() => toggleBook()}
                className="pb-3 border-b border-[#93918f] cursor-pointer"
              >
                <span>{t("navbar.reservation")}</span>
              </li>
              <li className="pb-3 border-b border-[#93918f]">
                <Link href="/gallery.html">{t("navbar.gallery")}</Link>
              </li>
              <li className="pb-3 border-b border-[#93918f]">
                <Link href="/contact-us.html">{"Contact"}</Link>
              </li>
              <li className="w-full flex justify-center items-center gap-2 pb-3 border-b border-[#93918f]">
                <span onClick={() => changeLanguage("en")}>{"EN"}</span>
                <span>{"/"}</span>
                <span onClick={() => changeLanguage("fr")}>{"FR"}</span>
              </li>
              <li className="w-full flex flex-col justify-center items-center gap-1 capitalize">
                <span>{"Le Palace Marrakech Restaurant & Fine dining."}</span>
                <span>{"Av. Echouhada Rue Ahmed Chawqui Hivernage1"}</span>
                <span>{"Opening hours: 07.00 PM – 02.00 AM"}</span>
                <Link
                  href="mailto:reservations@le-palacemarrakech.com"
                  className="lowercase"
                >
                  {"reservations@le-palacemarrakech.com"}
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
          <div className="fixed right-0  z-50 w-full lg:w-[40%] h-full bg-background flex justify-start">
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
    )
  );
};

export default Hero;
