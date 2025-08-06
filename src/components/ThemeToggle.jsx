import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const LIGHT_THEME = "nord"; // match tailwind.config.js
  const DARK_THEME = "business"; // match tailwind.config.js

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || LIGHT_THEME
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-ghost">
      {theme === DARK_THEME ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}

// import { useEffect, useState } from "react";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "nord");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <button
//       onClick={() => setTheme(theme === "business" ? "emerald" : "business")}
//       className="btn btn-sm btn-ghost"
//     >
//       {theme === "business" ? (
//         <MoonIcon className="h-5 w-5" />
//       ) : (
//         <SunIcon className="h-5 w-5" />
//       )}
//     </button>
//   );
// }
