"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Restaurant = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    { src: "/images/palace-1.jpg", text: t("restau.terrace") },
    { src: "/images/palace-11.jpg", text: t("restau.inter") },
    { src: "/images/palace-8.jpg", text: t("restau.basement") },
  ];

  return (
    isClient && (
      <div className="h-full w-full flex flex-col overflow-hidden gap-[1px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative flex-1 transition-all duration-500 ease-in-out cursor-pointer ${
              active === i
                ? "flex-[3]"
                : active === null
                ? "flex-[0.5]"
                : "flex-[0.5]"
            }`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <Image
              src={img.src}
              alt={`Restaurant ${i + 1}`}
              fill
              className="object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-background text-[18px] uppercase drop-shadow-lg">
                {img.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Restaurant;
