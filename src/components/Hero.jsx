import React from "react";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center lg:hidden">
        <video className="object-cover h-full w-full z-40" autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <HeroSwiper />
      </div>
      <div className="relative w-full h-full lg:flex flex-col justify-center items-center hidden">
        <video className="object-cover h-full w-full" autoPlay loop muted>
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tags.
        </video>
      </div>
    </>
  );
};

export default Hero;
