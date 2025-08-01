import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ✅ Force light theme BEFORE React renders
if (!localStorage.getItem("theme")) {
  document.documentElement.setAttribute("data-theme", "emerald"); // Always start light
} else {
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
