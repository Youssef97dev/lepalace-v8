import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PalaceProvider } from "@/context/PalaceContext";

export const metadata = {
  title: "Le Palace - Marrakech",
  description: "Restaurant Luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className="w-full h-[100dvh] lg:h-screen flex flex-col overflow-hidden">
        <PalaceProvider>
          <Navbar />
          {children}
          <Footer />
        </PalaceProvider>
      </body>
    </html>
  );
}
