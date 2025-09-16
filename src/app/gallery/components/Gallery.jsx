"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

const galleryItems_1 = [
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
];

const galleryItems_2 = [
  {
    src: "/images/palace-10.jpg",
  },
  {
    src: "/images/palace-20.jpg",
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
    <div
      id="gallery"
      className="mx-auto pb-5 pt-5 lg:pt-40 px-0 lg:px-4 flex flex-col justify-center items-center"
    >
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems_1?.map((image, index) => (
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
      <div className="shadow-lg overflow-hidden pb-2">
        <MemoizedImage
          src="/images/palace-19.jpg"
          alt={`Le Palace Marrakech`}
        />
      </div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems_2?.map((image, index) => (
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
      <div className="shadow-lg overflow-hidden pt-2">
        <MemoizedImage
          src="/images/palace-21.jpg"
          alt={`Le Palace Marrakech`}
        />
      </div>
    </div>
  );
};

export default Gallery;
