/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue:"#007BFF",
      white:"#FFFFFF",
      black:"#000000",
      red:"#E60000",
      green:"#B0F040",
      light_green:"#D4FF89",
      light_black:"#15292B",
      light_grey:"#D9D9D9",
      overlay:"rgba(21, 41, 43, .7)",

    },
    extend: {},
  },
  plugins: [],
}

