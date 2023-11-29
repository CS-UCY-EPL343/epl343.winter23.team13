/** @type {import('tailwindcss').Config} */
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
        sans: ["Roboto", "Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
