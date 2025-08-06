import { THEMES } from "./src/config/themeConfig.js";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [THEMES.light, THEMES.dark],
  },
};
