/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "monteserrat"],
      },
      colors: {
        primary: '#38745a',
        secondary: '#f9627d',
        accent: '#5cc797',
        background: '#000103',
      },
    },
  },
  plugins: [],
}
