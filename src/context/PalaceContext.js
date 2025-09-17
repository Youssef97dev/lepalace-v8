"use client";
import { createContext, useContext, useState } from "react";

const PalaceContext = createContext();

export const PalaceProvider = ({ children }) => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openDance, setOpenDance] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [video, setVideo] = useState(
    "https://res.cloudinary.com/dz7wroord/video/upload/v1757931795/palace/hero-mobile-2_tbw0qi.mp4"
  );
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

  const toggleDance = () => {
    setOpenDance((prev) => !prev);
  };

  const changeVideo = (link) => {
    setVideo(link);
  };

  const changeMobile = (type) => {
    setIsMobile(type);
  };

  return (
    <PalaceContext.Provider
      value={{
        openAbout,
        toggleAbout,
        openDance,
        toggleDance,
        openBook,
        toggleBook,
        openSideBar,
        toggleSideBar,
        openContact,
        toggleContact,
        changeMobile,
        video,
        changeVideo,
        isMobile,
      }}
    >
      {children}
    </PalaceContext.Provider>
  );
};

// custom hook for convenience
export const usePalace = () => useContext(PalaceContext);
