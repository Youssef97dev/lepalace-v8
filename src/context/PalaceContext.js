"use client";
import { createContext, useContext, useState } from "react";

const PalaceContext = createContext();

export const PalaceProvider = ({ children }) => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleAbout = () => {
    setOpenAbout((prev) => !prev);
  };

  const toggleBook = () => {
    setOpenBook((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  const toggleContact = () => {
    setOpenContact((prev) => !prev);
  };

  const changeMobile = (type) => {
    setIsMobile(type);
  };

  return (
    <PalaceContext.Provider
      value={{
        openAbout,
        toggleAbout,
        openBook,
        toggleBook,
        openSideBar,
        toggleSideBar,
        openContact,
        toggleContact,
        changeMobile,
        isMobile,
      }}
    >
      {children}
    </PalaceContext.Provider>
  );
};

// custom hook for convenience
export const usePalace = () => useContext(PalaceContext);
