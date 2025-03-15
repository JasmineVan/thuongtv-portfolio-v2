/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Montserrat"', 'sans-serif'],
        secondary: ['"Lora"', 'serif'],
        tertiary: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        primary: '#38745a',
        secondary: '#f9627d',
        accent: '#5cc797',
        background: '#000103',
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
    },
  },
  plugins: [],
}
