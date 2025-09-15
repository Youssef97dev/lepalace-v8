/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        secondary: "var(--secondary)",
        secondary_50: "var(--secondary-50)",
      },
      fontFamily: {
        basker: ["Baskervville", "sans-serif"],
      },
      height: {
        screen: ["100dvh"], // overrides h-screen
      },
    },
  },
  plugins: [],
};
