"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!iframeRef.current) return;

    if (isPlaying) {
      // Pause music
      iframeRef.current.contentWindow?.postMessage(
        { command: "pause" },
        "https://open.spotify.com"
      );
      setIsPlaying(false);
    } else {
      // Play music
      iframeRef.current.contentWindow?.postMessage(
        { command: "play" },
        "https://open.spotify.com"
      );
      setIsPlaying(true);
    }
  };
  return (
    <div className="w-full flex justify-between items-center py-[5px] z-[60] bg-background border-t border-[#93918f]">
      {/* Spotify iframe */}
      <iframe
        ref={iframeRef}
        style={{ borderRadius: "12px" }}
        className="hidden"
        src="https://open.spotify.com/embed/playlist/6O3cBdOLfzkf2yW4RDszoN?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div
        onClick={togglePlay}
        className="text-[14px] text-[#000000] border-r border-black px-3 py-[2px]"
      >
        {isPlaying ? "⏸" : "▶"}
      </div>
      <div className="font-basker text-[18px]">{``}</div>
      <Link
        href="/menu"
        className="text-[14px] text-[#000000] border-l border-black px-3 py-[2px]"
      >
        {"MENU"}
      </Link>
    </div>
  );
};

export default Footer;
