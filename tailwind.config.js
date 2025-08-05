export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  darkMode: false, // ✅ disables automatic dark mode detection
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["nord", "business"], // ✅ light first, dark second
  },
};
