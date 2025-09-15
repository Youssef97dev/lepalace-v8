"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const palaceText = [
  { text: "Menu", link: "#", linkText: "Discover" },
  { text: "Reservation", link: "#", linkText: "Book" },
  { text: "Gallery", link: "#", linkText: "Discover" },
];

const HeroSwiper = () => {
  return (
    <div className="absolute w-full flex justify-start items-center  z-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper1"
      >
        {palaceText.map((palace, i) => (
          <SwiperSlide key={i} className="">
            <div className="text-white h-[60vh] text-[20.5px] uppercase w-full flex flex-col justify-between items-center">
              <span>{""}</span>
              <span>{palace.text}</span>
              <Link
                href={palace.link}
                className="text-[12px] bg-white text-black px-12 py-[6px] tracking-widest"
              >
                {palace.linkText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
