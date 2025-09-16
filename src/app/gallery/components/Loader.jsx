"use client";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import Gallery from "./Gallery";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Gallery />
      {!isClient && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
          <MoonLoader color="#3f3828bb" size={20} />
        </div>
      )}
    </div>
  );
};

export default Loader;
