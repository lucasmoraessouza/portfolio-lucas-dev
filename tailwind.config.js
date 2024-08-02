/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-main": "#100F0F",
        "font-main": "#CECDC3",
        "subtitle-main": "#8F8F8F",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "line-pattern": "url('/src/assets/images/patternLines.png')",
      },
    },
  },
  plugins: [],
};
