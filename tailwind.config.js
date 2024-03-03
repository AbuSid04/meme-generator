/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Karla : ["Karla", "sans-serif"],
        Impact : ["Impact", "sans-serif"],
      }
    },
  },
  plugins: [],
}