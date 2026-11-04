/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        primary: "#096a6f",
        secondary: "#0c8990",
        zamok: "#cbefed",
        dostavka: "#f0eecc",
        Dostavka: "#8b8f0b",
        sposob: "#def0cc",
        Sposob: "#3e8f0b",
        predl: "#f0ccd5",
        Predl: "#8f300b",

        },

        container: {
          center: true,
          padding: {
            default: "1rem",
            sm: "3rem",
          },
        },
      },
    },
  plugins: [],
}

