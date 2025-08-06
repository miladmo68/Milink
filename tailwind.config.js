import { THEMES } from "./src/config/themeConfig.js";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display", "serif"], // Override default "sans"

        // playfair: ["Playfair Display", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [THEMES.light, THEMES.dark],
  },
};
