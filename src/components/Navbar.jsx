"use client";
import React from "react";
import { RiMenuFold2Line } from "react-icons/ri";
import { usePalace } from "@/context/PalaceContext";

const Navbar = () => {
  const { toggleSideBar, toggleBook } = usePalace();
  return (
    <div className="w-full flex justify-between items-center border-b border-[#93918f] py-[5px] z-[60] bg-background">
      <div
        onClick={() => toggleSideBar()}
        className="text-[12px] text-[#000000] border-r border-black w-16 flex justify-center items-center py-[2px]"
      >
        <RiMenuFold2Line size={19} />
      </div>
      <div className="font-basker text-[18px]">{`LE PALACE`}</div>
      <div
        onClick={() => toggleBook()}
        className="text-[12px] text-[#000000] border-l border-black px-3 py-[2px]"
      >
        {"BOOK"}
      </div>
    </div>
  );
};

export default Navbar;
