import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Le Palace - Marrakech",
  description: "Restaurant Luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
