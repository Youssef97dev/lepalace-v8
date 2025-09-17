"use client";
import React, { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePalace } from "@/context/PalaceContext";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { openDance, toggleDance } = usePalace();
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <div className="relative w-full h-full flex-1 flex flex-col justify-center items-center lg:hidden">
          <AnimatePresence mode="popLayout">
            <motion.video
              key="palace-music" // important for triggering fade on change
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
              <source
                src="https://res.cloudinary.com/dz7wroord/video/upload/v1758123552/palace/palacemusic_tgsmxp.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </motion.video>
          </AnimatePresence>
          <div className="absolute top-1 w-full flex justify-center items-center text-white  uppercase text-[9px]">
            {t("hero.music")}
          </div>
          <div
            className={`absolute bottom-1 w-full z-50 text-[14px]  gap-2  text-black`}
          >
            <button
              onClick={() => toggleDance()}
              className={` p-2 bg-background w-full uppercase flex justify-between items-center`}
            >
              <span>{""}</span>
              {"Info"}
              <HiOutlinePlus size={15} />
            </button>
          </div>
          {/* Popup */}
          <AnimatePresence>
            {openDance && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.95 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-14  bg-background text-black mx-2 px-6 pt-5 pb-16 shadow-lg z-40 "
              >
                <p className="text-[13px] ">{t("music.text_1")}</p>
                <br />
                <p className="text-[13px]">{t("music.text_2")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative w-full h-full lg:flex flex-col justify-center items-center hidden">
          <video className="object-cover h-full w-full" autoPlay loop muted>
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
            Your browser does not support the video tags.
          </video>
          <div className="absolute top-1 w-full flex justify-center items-center text-white  uppercase text-[9px]">{`Welcome to le palace`}</div>
          <div
            className={`absolute top-6 w-full flex flex-col justify-center items-end pr-4 z-50  gap-2  text-black`}
          >
            <button
              onClick={() => toggleAbout()}
              className={` rounded-full p-2 ${
                openDance ? "bg-transparent" : "bg-background"
              }`}
            >
              <HiOutlinePlus size={20} />
            </button>
            {!openDance && (
              <span className="uppercase text-white text-[12px] text-center">{`About`}</span>
            )}
          </div>
          {/* Popup */}
          <AnimatePresence>
            {openDance && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.95 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-6  bg-background text-black mx-4 px-6 pt-5 pb-16 shadow-lg z-40 "
              >
                <p className="text-[13px] ">
                  {`At Le Palace Marrakech, the night comes alive with the timeless energy of the ’80s and ’90s disco era. Our resident DJs craft an unforgettable soundtrack that blends golden oldies with irresistible dance beats, transporting you to the vibrant world of retro nightlife. Velvet chairs, warm lighting, and a chic Art Deco setting provide the perfect stage for nights filled with rhythm, elegance, and celebration.`}
                </p>
                <br />
                <p className="text-[13px]">
                  {`Whether you’re savoring a fine dinner or joining the crowd on the dance floor, the music at Le Palace isn’t just entertainment—it’s the heartbeat of the evening, setting the tone for memories that last long after the night ends.`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    )
  );
};

export default Hero;
