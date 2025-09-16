"use client";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="absolute w-full h-full  flex flex-col justify-center items-center py-20  z-50">
      <div className="w-full h-full  flex justify-center items-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper1"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {palaceText.map((palace, i) => (
            <SwiperSlide key={i} className="">
              <div className="text-white h-full text-[18.5px] tracking-widest uppercase w-full flex flex-col justify-between items-center">
                <span>{""}</span>
                <span>{palace.text}</span>
                {/*<Link
                href={palace.link}
                className="text-[12px] bg-white text-black px-12 py-[6px] tracking-widest"
              >
                {palace.linkText}
              </Link>*/}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        href={"#"}
        className="text-[13px] bg-white text-black px-12 py-[6px] tracking-widest uppercase"
      >
        {palaceText[activeIndex].linkText}
      </Link>
    </div>
  );
};

export default HeroSwiper;
