/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        signature: ['Rubik Burned'],
      },
      colors: {
        primary: "#fca311",
        secondary: "#ffffff",
        dark: "#000000"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}