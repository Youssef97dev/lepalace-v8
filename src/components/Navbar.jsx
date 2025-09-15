import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b border-black py-[5px]">
      <div className="text-[12px] text-[#000000] border-r border-black px-3 py-[2px]">
        {"MENU"}
      </div>
      <div className="font-basker text-[18px]">{`LE PALACE`}</div>
      <div className="text-[12px] text-[#000000] border-l border-black px-3 py-[2px]">
        {"BOOK"}
      </div>
    </div>
  );
};

export default Navbar;
