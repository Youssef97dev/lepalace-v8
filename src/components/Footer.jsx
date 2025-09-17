"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdPause, MdPlayArrow } from "react-icons/md";

const Footer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="w-full flex justify-between items-center py-[5px] z-[60] bg-background border-t border-[#93918f]">
      {/* Spotify iframe */}
      <audio ref={audioRef} src="/music/music.mp3" preload="auto" loop />
      <div
        onClick={togglePlay}
        className="text-[14px] text-[#000000] border-r border-black px-3 py-[2px]"
      >
        {isPlaying ? (
          <MdPause size={16} color="#000000" />
        ) : (
          <MdPlayArrow size={16} color="#000000" />
        )}
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
