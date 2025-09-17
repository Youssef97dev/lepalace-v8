"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { usePalace } from "@/context/PalaceContext";
import Booking from "@/components/Booking";

const galleryItems = [
  {
    src: "/images/palace-3.jpg",
  },
  {
    src: "/images/palace-4.jpg",
  },
  {
    src: "/images/palace-5.jpg",
  },
  {
    src: "/images/palace-6.jpg",
  },
  {
    src: "/images/palace-7.jpg",
  },
  {
    src: "/images/palace-8.jpg",
  },
  {
    src: "/images/palace-10.jpg",
  },
  {
    src: "/images/palace-20.jpg",
  },
  {
    src: "/images/palace-19.jpg",
  },
  {
    src: "/images/palace-9.jpg",
  },
  {
    src: "/images/palace-11.jpg",
  },
  {
    src: "/images/palace-12.jpg",
  },
  {
    src: "/images/palace-13.jpg",
  },
  {
    src: "/images/palace-21.jpg",
  },
  {
    src: "/images/palace-14.jpg",
  },
  {
    src: "/images/palace-15.jpg",
  },
  {
    src: "/images/palace-16.jpg",
  },
  {
    src: "/images/palace-17.jpg",
  },
  {
    src: "/images/palace-2.jpg",
  },
  {
    src: "/images/palace-1.jpg",
  },
  {
    src: "/images/palace-18.jpg",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  const { openSideBar, toggleSideBar, openBook, toggleBook } = usePalace();
  return (
    <div
      id="gallery"
      className="mx-auto pb-5 pt-5 lg:pt-40 px-0 lg:px-4 flex flex-col justify-center items-center"
    >
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems?.map((image, index) => (
          <Link href={image.src} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage
                src={image.src}
                alt={`Le Palace Marrakech ${index}`}
              />
            </div>
          </Link>
        ))}
      </LightGallery>
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
        <div className="fixed top-0 left-0 z-50 w-full lg:w-[25%] h-full bg-background flex justify-start">
          <Booking />
        </div>
      </Transition>
    </div>
  );
};

export default Gallery;
