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
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
