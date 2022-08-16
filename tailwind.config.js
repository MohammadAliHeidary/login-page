/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        body: "url('../images/bg.jpg')",
      },
      fontSize: {
        xm: ".85rem",
      },
    }
  },
  plugins: [],
}