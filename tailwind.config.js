const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      lime: colors.lime,
      cyan: colors.cyan,
      white: colors.white,
      green: colors.emerald,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
