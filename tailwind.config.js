/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#226b9f",
        secondary: "#0C1F58",
      },
      screens: {
        sm: "576px",
        md: "767px",
        lg: "1025px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
