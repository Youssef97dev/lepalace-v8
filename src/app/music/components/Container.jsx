"use client";
import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import { Transition } from "@headlessui/react";
import { usePalace } from "@/context/PalaceContext";
import Booking from "@/components/Booking";
import Link from "next/link";
import i18next from "../../../../i18n";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const { openSideBar, toggleSideBar, openBook, toggleBook } = usePalace();

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="h-screen">
        <Hero />

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
                className="pb-3 border-b border-[#93918f]"
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
          <div className="fixed top-0 left-0 z-50 w-full lg:w-[25%] h-full bg-background flex justify-start">
            <Booking />
          </div>
        </Transition>
      </div>
    )
  );
};

export default Container;
