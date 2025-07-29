/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("tailwindcss-textshadow")],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Playfair Display"', "serif", "sans-serif"],
        secondary: ['"Lora"', "serif"],
        tertiary: ['"Dancing Script"', "cursive"],
      },
      colors: {
        primary: "#38745a",
        secondary: "#f9627d",
        accent: "#5cc797",
        background: "#000103",
      },
      animation: {
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.25)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.4)",
        lg: "3px 3px 6px rgba(0,0,0,0.5)",
      },
      // perspective: {
      //   1200: "1200px",
      // },
    },
  },
  plugins: [],
};
