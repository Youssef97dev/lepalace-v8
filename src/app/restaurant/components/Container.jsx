"use client";
import React from "react";
import Restaurant from "./Restaurant";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { usePalace } from "@/context/PalaceContext";
import Booking from "@/components/Booking";

const Container = () => {
  const { openSideBar, toggleSideBar, openBook, toggleBook } = usePalace();
  return (
    <div className="h-screen">
      <Restaurant />

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
              className="pb-3 border-b border-[#93918f]"
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
            <li className="w-full flex flex-col justify-center items-center gap-2 pb-3 capitalize">
              <span>{"Le Palace Marrakech Restaurant & Fine dining."}</span>
              <span>{"Av. Echouhada Rue Ahmed Chawqui Hivernage1"}</span>
              <span>{"Opening hours: 07.00 PM – 02.00 AM"}</span>
              <Link href="#" className="lowercase">
                {"reservation@le-palacemarrakech.com"}
              </Link>
              <Link href="#">{"Whatsapp 00212 675-480101"}</Link>
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
  );
};

export default Container;
