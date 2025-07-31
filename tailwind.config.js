export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        business: {
          ...require("daisyui/src/theming/themes")["business"],
        },
      },
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
        },
      },
    ],
    darkTheme: "emerald",
  },
};
