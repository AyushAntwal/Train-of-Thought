/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Montserrat, system-ui, sans-serif",
            h1: { fontFamily: "Playfair Display, serif" },
            h2: { fontFamily: "Playfair Display, serif" },
            h3: { fontFamily: "Playfair Display, serif" },
            h4: { fontFamily: "Playfair Display, serif" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
