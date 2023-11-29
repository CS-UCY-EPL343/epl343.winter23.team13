/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./views/**/*.{html,js,css,ejs}",
    "./public/**/*.{html,js,css}",
    "./src/**/*.{html,js,css}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./views/landingpage.ejs",
  ],
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', '"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto"],
      },
      colors: {
        primary: "#7752FE",
        secondary: "#8E8FFA",
        colour2: "#C2D9FF",
        colour3: "#190482",
        contrast: "#D9FE52",
        dark_purple: "#081A51",
        light_white: "rgba(255,255,255,0.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
