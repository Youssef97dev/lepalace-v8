"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { usePalace } from "@/context/PalaceContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const palaceText = [
  {
    text: "Menu",
    link: "/menu",
    link_span: "#",
    linkText: "Discover",
    logo: "",
    video:
      "https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4",
  },
  {
    text: "Contact",
    link: "/contact-us",
    link_span: "#",
    linkText: "Contact",
    logo: "",
    video:
      "https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4",
  },
  {
    text: "Gallery",
    link: "/gallery",
    link_span: "#",
    linkText: "Discover",
    logo: "",
    video:
      "https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4",
  },
  {
    text: "Music & Dance",
    link: "#",
    link_span: "#",
    linkText: "Discover",
    logo: "",
    video:
      "https://res.cloudinary.com/dz7wroord/video/upload/v1758025269/palace/palace-music_a4s2ar.mp4",
  },
  {
    text: "Restaurant",
    link: "/restaurant",
    link_span: "/restaurant",
    linkText: "Discover",
    logo: "",
    video:
      "https://res.cloudinary.com/dz7wroord/video/upload/v1758119001/palace/slides_c8p9qq.mp4",
  },
];

const HeroSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { video, changeVideo } = usePalace();
  const changeIndex = (index) => {
    setActiveIndex(index);
    changeVideo(palaceText[index].video);
  };
  return (
    <div className="absolute w-full h-full  flex flex-col justify-center items-center py-20  z-50">
      <div className="w-full h-full  flex justify-center items-center ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper1"
          onSlideChange={(swiper) => changeIndex(swiper.realIndex)}
        >
          {palaceText.map((palace, i) => (
            <SwiperSlide key={i} className="">
              <div className="text-white h-full text-[16.5px] tracking-widest  uppercase w-full flex flex-col justify-center items-center">
                <Image
                  src="/logo/horse.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className={`object-cover w-10 ${
                    palace.text === "Restaurant" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <Link href={palace.link_span}>{palace.text}</Link>
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
        href={palaceText[activeIndex].link}
        className="text-[13px] bg-white text-black px-12 py-[6px] tracking-widest uppercase"
      >
        {palaceText[activeIndex].linkText}
      </Link>
    </div>
  );
};

export default HeroSwiper;
