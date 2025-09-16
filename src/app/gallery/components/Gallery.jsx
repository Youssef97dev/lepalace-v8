"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div id="gallery" className="mx-auto pb-5 pt-5 lg:pt-40 px-0 lg:px-4">
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
    </div>
  );
};

export default Gallery;
